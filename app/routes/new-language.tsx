import { Form, LoaderFunction, redirect, useLoaderData } from "remix";
import { ProjectsInput } from "~/components/lib";
import {
  createNewLanguage,
  getLanguages,
  setActiveLanguage,
} from "~/models/language.server";
import { getUser } from "~/session.server";

export async function action({ request }: { request: Request }) {
  const form = await request.formData();
  const id = form.get("id") as string;
  const newProject: any = form.get("newProject");
  // let project;
  // if (newProject?.length > 0) {
  //   project = await createNewLanguage(request, newProject);
  // } else {
  //   project = await setActiveLanguage(id);
  // }

  const project = newProject?.length
    ? await createNewLanguage(request, newProject)
    : await setActiveLanguage(id);

  return redirect(`/${project?.title}/lessons`);
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  const languages = await getLanguages(request);

  if (!user) {
    return redirect("/login");
  }

  if (!languages) {
    throw new Error("languages are not found");
  }

  return { user, languages };
};

export function NewLanguage() {
  const { languages } = useLoaderData();
  return (
    <section>
      <Form method="post" style={{ position: "relative" }}>
        <ul>
          {languages.map((language: any, idx: string) => (
            <li key={idx}>{language.title}</li>
          ))}
        </ul>
        <ProjectsInput
          type="text"
          placeholder="Type it's title"
          name="newProject"
        />
        <button
          type="submit"
          style={{
            position: "absolute",
            fontSize: 30,
            top: 7,
            right: 15,
            color: "#afafaf",
          }}
        >
          +
        </button>
      </Form>
    </section>
  );
}
