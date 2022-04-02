import { LoaderFunction, Outlet, useLoaderData } from "remix";
import { findArticleByTitle } from "~/utils/session.server";
import { Study } from "~/modules/Study";

export const loader: LoaderFunction = async ({ request, params }) => {
  const article = await findArticleByTitle(request, params.articleTitle);

  return { article };
};

export default function ArticlePage() {
  const { article } = useLoaderData();
  return (
    <Study data={article}>
      <Outlet />
    </Study>
  );
}
