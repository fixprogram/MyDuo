import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useActionData, useTransition } from "@remix-run/react";
import { createUserSession, getUserId } from "~/session.server";
import { createUser, verifyLogin } from "~/models/user.server";
import { LoginContainer, LoginContinerInner } from "~/components/lib";
import { Login } from "~/components/Login";
import { useState } from "react";

export type ActionData = {
  errors?: {
    username?: string;
    password?: string;
  };
  fields?: {
    loginType: string;
    password: string;
  };
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const loginType = formData.get("loginType");
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

  if (loginType === "login") {
    return json<ActionData>(
      {
        errors: { username: "Invalid username or password" },
        fields: { loginType: "login", password: "" },
      },
      { status: 400 }
    );
  }

  const newUser = await createUser(username, password);

  return createUserSession({
    request,
    userId: newUser.id,
    redirectTo: "/",
  });
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
  const actionData = useActionData() as ActionData;
  const transition = useTransition();

  const [isLogin, setIsLogin] = useState(
    actionData && actionData?.fields?.loginType === "login"
      ? true
      : !actionData
      ? true
      : false
  );

  const buttonText = transition.state === "submitting" ? "loginning" : "login";

  return (
    <LoginContainer>
      <LoginContinerInner>
        <Login
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          actionData={actionData}
        />
      </LoginContinerInner>
    </LoginContainer>
  );
}
