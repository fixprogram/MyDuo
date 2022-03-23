import { redirect, useLoaderData } from "remix";

export const loader = () => {
  return redirect("/repeats");
};

export default function Index() {
  useLoaderData();
  return <div></div>;
}
