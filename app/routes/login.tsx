import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { createUser, verifyLogin } from "~/models/user.server";
import {
  LoginContainer,
  LoginContinerInner,
  LoginToggle,
  LoginInput,
  LoginButton,
} from "~/components/lib";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};
interface ActionData {
  errors?: {
    username?: string;
    password?: string;
  };
  fields?: {
    loginType: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const loginType = formData.get("loginType");
  const username: any = formData.get("username");
  const password: any = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");

  let user = await verifyLogin(username, password);

  if (!user) {
    if (loginType === "login") {
      return json<ActionData>(
        { errors: { username: "Invalid username or password" } },
        { status: 400 }
      );
    }
    user = await createUser(username, password);
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/",
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Login",
  };
};

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const actionData = useActionData() as ActionData;
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = React.useState(
    actionData && actionData?.fields?.loginType === "login"
      ? true
      : !actionData
      ? true
      : false
  );

  React.useEffect(() => {
    if (actionData?.errors?.username) {
      usernameRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <LoginContainer>
      <LoginContinerInner>
        <form method="post" style={{ maxWidth: 375 }}>
          <h1
            style={{
              fontSize: 26,
              margin: "10px 0 15px",
              fontFamily: "Montserrat",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </h1>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <LoginToggle htmlFor="register" style={{ zIndex: isLogin ? 1 : -1 }}>
            <input
              type="radio"
              name="loginType"
              id="register"
              value="register"
              // defaultChecked={actionData?.fields?.loginType === "register"}
              onChange={() => setIsLogin(!isLogin)}
              style={{ visibility: "hidden", position: "absolute" }}
              checked={!isLogin}
            />
            {isLogin ? "Register" : "Login"}
          </LoginToggle>
          <LoginToggle htmlFor="login" style={{ zIndex: !isLogin ? 1 : -1 }}>
            <input
              type="radio"
              name="loginType"
              id="login"
              value="login"
              onChange={() => setIsLogin(!isLogin)}
              style={{ visibility: "hidden", position: "absolute" }}
              checked={isLogin}
            />
            {isLogin ? "Register" : "Login"}
          </LoginToggle>
          <div style={{ marginTop: 8 }}>
            <LoginInput
              type="text"
              name="username"
              aria-describedby="username-error"
              placeholder="Username"
              ref={usernameRef}
              id="username"
              autoFocus={true}
              required
            />
            {actionData?.errors?.username && (
              <p role="alert" id="username-error">
                {actionData.errors.username}
              </p>
            )}
            <LoginInput
              name="password"
              id="password"
              type="password"
              aria-invalid={actionData?.errors?.password ? true : undefined}
              placeholder="Password"
              ref={passwordRef}
              required
            />
            {actionData?.errors?.password && (
              <p role="alert" id="password-error">
                {actionData.errors.password}
              </p>
            )}
          </div>
          <LoginButton type="submit">
            {isLogin ? "Login" : "Register"}
          </LoginButton>
        </form>
      </LoginContinerInner>
    </LoginContainer>
  );
}
