import { Form } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { ActionData } from "~/routes/login";
import {
  LoginTitle,
  LoginToggle,
  LoginInput,
  LoginButton,
  ErrorMessage,
} from "./lib";

type LoginProps = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  actionData: ActionData;
};

export function Login({ isLogin, setIsLogin, actionData }: LoginProps) {
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

  return (
    <Form method="post" style={{ width: "100%", maxWidth: 375 }}>
      <LoginTitle>{isLogin ? "Login" : "Register"}</LoginTitle>
      <LoginToggle htmlFor="register" style={{ zIndex: isLogin ? 1 : -1 }}>
        <input
          type="radio"
          name="loginType"
          id="register"
          value="register"
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
      <LoginButton type="submit">{isLogin ? "Login" : "Register"}</LoginButton>
    </Form>
  );
}
