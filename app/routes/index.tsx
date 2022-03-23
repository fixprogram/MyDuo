import { redirect, useLoaderData } from "remix";

export const loader = () => {
  return redirect("/repeat");
};

export default function Index() {
  useLoaderData();
  return <div></div>;
}
