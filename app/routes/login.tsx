/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import type { ActionFunction } from "remix";
import { useActionData, json, useSearchParams } from "remix";
import { createUserSession, login, register } from "~/utils/session.server";

import { db } from "~/utils/db.server";
import {
  LoginButton,
  LoginContainer,
  LoginContinerInner,
  LoginInput,
  LoginToggle,
} from "~/components/lib";
import { useEffect, useState } from "react";
// import stylesUrl from "~/styles/login.css";

// export const links: LinksFunction = () => {
//   return [{ rel: "stylesheet", href: stylesUrl }];
// };

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/repeats";
  if (
    typeof loginType !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { loginType, username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  switch (loginType) {
    case "login": {
      const user = await login({ username, password });

      if (!user) {
        return badRequest({
          fields,
          formError: `Username/Password combination is incorrect`,
        });
      }
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      const userExists = await db.user.findFirst({
        where: { username },
      });
      if (userExists) {
        return badRequest({
          fields,
          formError: `User with username ${username} already exists`,
        });
      }
      const user = await register({ username, password });
      if (!user) {
        return badRequest({
          fields,
          formError: `Something went wrong trying to create a new user.`,
        });
      }
      return createUserSession(user.id, redirectTo);

      // return badRequest({
      //   fields,
      //   formError: "Not implemented",
      // });
    }
    default: {
      return badRequest({
        fields,
        formError: `Login type invalid`,
      });
    }
  }
};

export default function Login() {
  const actionData = useActionData<ActionData>();
  const [isLogin, setIsLogin] = useState(
    actionData && actionData?.fields?.loginType === "login"
      ? true
      : !actionData
      ? true
      : false
  );
  const [searchParams] = useSearchParams();
  return (
    <LoginContainer>
      <LoginContinerInner>
        <form method="post" css={{ maxWidth: 375 }}>
          <h1
            css={{
              fontSize: 26,
              margin: "10px 0 15px",
              fontFamily: "Montserrat",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {isLogin ? "Login" : "Register"}
          </h1>
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get("redirectTo") ?? undefined}
          />
          <LoginToggle htmlFor="register" css={{ zIndex: isLogin ? 1 : -1 }}>
            <input
              type="radio"
              name="loginType"
              id="register"
              value="register"
              // defaultChecked={actionData?.fields?.loginType === "register"}
              onChange={() => setIsLogin(!isLogin)}
              css={{ visibility: "hidden", position: "absolute" }}
              checked={!isLogin}
            />
            {isLogin ? "Register" : "Login"}
          </LoginToggle>
          <LoginToggle htmlFor="login" css={{ zIndex: !isLogin ? 1 : -1 }}>
            <input
              type="radio"
              name="loginType"
              id="login"
              value="login"
              onChange={() => setIsLogin(!isLogin)}
              css={{ visibility: "hidden", position: "absolute" }}
              checked={isLogin}
            />
            {isLogin ? "Register" : "Login"}
          </LoginToggle>
          <div css={{ marginTop: 8 }}>
            <LoginInput
              type="text"
              name="username"
              defaultValue={actionData?.fields?.username}
              aria-invalid={Boolean(actionData?.fieldErrors?.username)}
              aria-errormessage={
                actionData?.fieldErrors?.username ? "username-error" : undefined
              }
              placeholder="Email or username"
            />
            {actionData?.fieldErrors?.username ? (
              <p role="alert" id="username-error">
                {actionData.fieldErrors.username}
              </p>
            ) : null}
            <LoginInput
              name="password"
              defaultValue={actionData?.fields?.password}
              type="password"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.password) || undefined
              }
              aria-errormessage={
                actionData?.fieldErrors?.password ? "password-error" : undefined
              }
              placeholder="Password"
            />
            {actionData?.fieldErrors?.password ? (
              <p role="alert" id="password-error">
                {actionData.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <div
            id="form-error-message"
            css={{ color: "#ea2b2b", margin: "20px 0 10px", textAlign: "left" }}
          >
            {actionData?.formError ? (
              <p role="alert" css={{ fontFamily: "Roboto" }}>
                {actionData.formError}
              </p>
            ) : null}
          </div>
          <LoginButton type="submit">
            {isLogin ? "Login" : "Register"}
          </LoginButton>
        </form>
      </LoginContinerInner>
    </LoginContainer>
  );
}
