import type {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { createUser, verifyLogin } from "~/models/user.server";
import { validateUsername } from "~/utils";
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
  loginType: string;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const loginType = formData.get("loginType");
  const username = formData.get("username");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");

  if (!validateUsername(username)) {
    return json<ActionData>(
      { errors: { username: "Username is invalid" } },
      { status: 400 }
    );
  }

  if (typeof password !== "string") {
    return json<ActionData>(
      { errors: { password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 5) {
    return json<ActionData>(
      { errors: { password: "Password is too short" } },
      { status: 400 }
    );
  }

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
              aria-invalid={actionData?.errors?.email ? true : undefined}
              aria-describedby="username-error"
              placeholder="Username"
              ref={usernameRef}
              id="username"
              autoFocus={true}
              required
            />
            {actionData?.errors?.username ? (
              <p role="alert" id="username-error">
                {actionData.errors.username}
              </p>
            ) : null}
            <LoginInput
              name="password"
              id="password"
              defaultValue={actionData?.fields?.password}
              type="password"
              aria-invalid={actionData?.errors?.password ? true : undefined}
              placeholder="Password"
              ref={passwordRef}
              required
            />
            {actionData?.errors?.password ? (
              <p role="alert" id="password-error">
                {actionData.errors.password}
              </p>
            ) : null}
          </div>
          {/* <div
            id="form-error-message"
            css={{ color: "#ea2b2b", margin: "20px 0 10px", textAlign: "left" }}
          >
            {actionData?.formError ? (
              <p role="alert" css={{ fontFamily: "Roboto" }}>
                {actionData.formError}
              </p>
            ) : null}
          </div> */}
          <LoginButton type="submit">
            {isLogin ? "Login" : "Register"}
          </LoginButton>
        </form>
      </LoginContinerInner>
    </LoginContainer>
  );
}
