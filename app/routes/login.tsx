import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { createUserSession, getUserId } from "~/session.server";
import { createUser, verifyLogin } from "~/models/user.server";
import {
  ErrorMessage,
  LoginButton,
  LoginContainer,
  LoginContinerInner,
  LoginInput,
  LoginTitle,
  LoginToggle,
} from "~/components/lib";
import { useEffect, useRef, useState } from "react";

export type ActionData = {
  errors?: {
    username?: string;
    password?: string;
  };
  fields?: {
    action: string;
    password: string;
  };
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const action = formData.get("action");
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const user = await verifyLogin(username, password);

  if (user) {
    return createUserSession({
      request,
      userId: user.id,
      redirectTo: "/",
    });
  }

  if (action === "register") {
    const newUser = await createUser(username, password);

    await createUserSession({
      request,
      userId: newUser.id,
      redirectTo: "/",
    });
  }

  return json<ActionData>(
    {
      errors: { username: "Invalid username or password" },
      fields: { action: "login", password: "" },
    },
    { status: 400 }
  );
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export default function LoginPage() {
  const actionData = useActionData<typeof action>();
  const transition = useTransition();

  const [isLogin, setIsLogin] = useState(
    actionData && actionData?.fields?.action === "login"
      ? true
      : !actionData
      ? true
      : false
  );

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.username) {
      usernameRef.current?.focus();
    }
    if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  const isLoginning = transition.submission?.formData.get("action") === "login";
  const isRegistering =
    transition.submission?.formData.get("action") === "register";
  const submitLoginText = isLoginning ? "Signing in..." : "Sign in";
  const submitRegisterText = isRegistering ? "Signing up..." : "Sign up";

  return (
    <LoginContainer>
      <LoginContinerInner>
        <Form method="post" style={{ width: "100%", maxWidth: 375 }}>
          <LoginTitle>{isLogin ? "Login" : "Register"}</LoginTitle>
          <LoginToggle htmlFor="register" style={{ zIndex: isLogin ? 1 : -1 }}>
            <input
              type="radio"
              name="action"
              id="register"
              value="register"
              onChange={() => setIsLogin(!isLogin)}
              style={{ visibility: "hidden", position: "absolute" }}
              checked={!isLogin}
            />
            {isLogin ? "Sign up" : "Sign in"}
          </LoginToggle>
          <LoginToggle htmlFor="login" style={{ zIndex: !isLogin ? 1 : -1 }}>
            <input
              type="radio"
              name="action"
              id="login"
              value="login"
              onChange={() => setIsLogin(!isLogin)}
              style={{ visibility: "hidden", position: "absolute" }}
              checked={isLogin}
            />
            {isLogin ? "Sign up" : "Sign in"}
          </LoginToggle>
          <div style={{ marginTop: 8 }}>
            <LoginInput
              type="text"
              name="username"
              placeholder="Username"
              ref={usernameRef}
              id="username"
              autoFocus={true}
              required
            />

            <LoginInput
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />

            {actionData?.errors?.username && (
              <ErrorMessage role="alert" id="username-error">
                {actionData.errors.username}
              </ErrorMessage>
            )}
          </div>
          <div style={{ height: 50, marginTop: 20 }}>
            <LoginButton type="submit">
              {isLogin ? submitLoginText : submitRegisterText}
            </LoginButton>
          </div>
        </Form>
      </LoginContinerInner>
    </LoginContainer>
  );
}
