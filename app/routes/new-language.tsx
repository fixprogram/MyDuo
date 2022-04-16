import { Form, redirect } from "remix";
import { ProjectsInput } from "~/components/lib";
import { createNewLanguage, setActiveLanguage } from "~/models/language.server";

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

export function NewLanguage() {
  return (
    <Form method="post" style={{ position: "relative" }}>
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
  );
}
