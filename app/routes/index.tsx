import { redirect, useLoaderData } from "remix";

export const loader = () => {
  return redirect("/lessons");
};

export default function Index() {
  useLoaderData();
  return <div></div>;
}
