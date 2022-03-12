import { Form, redirect } from "remix";
import type { ActionFunction } from "remix";
import { db } from "~/utils/db.server";
import { Fragment, useState } from "react";
import Menu from "~/components/Menu";
import styles from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const description = form.get("description");
  const innerTitle = form.get("innerTitle");
  // const author = form.getAll("radio1");
  const text = form.getAll("text");

  // const steps = [{ number: 0, author, text }];
  const steps = text.map((item, index) => {
    console.log(item);
    return {
      author: form.get(`radio${index + 1}`),
      text: item,
      number: index,
    };
  });

  const fields = { title, description, innerTitle, steps, exp: 0 };

  const lesson = await db.lesson.create({ data: fields });

  return redirect(`/lessons`);
};

export default function New() {
  const [steps, setSteps] = useState([1]);
  return (
    <Fragment>
      <Menu />
      <main>
        <form method="POST">
          <label htmlFor="title">
            Title
            <input type="text" id="title" name="title" />
          </label>
          <label htmlFor="innerTitle">
            Inner title
            <input type="text" id="innerTitle" name="innerTitle" />
          </label>
          <label htmlFor="description">
            Description
            <textarea id="description" name="description" />
          </label>
          <legend>Steps</legend>
          {steps.map((step) => (
            <fieldset key={step}>
              <label htmlFor={`radio${step}`}>
                Me
                <input
                  type="radio"
                  name={`radio${step}`}
                  id={`radio${step}`}
                  value="me"
                />
              </label>

              <label htmlFor="radio2">
                Node
                <input
                  type="radio"
                  name={`radio${step}`}
                  id={`radio${step + 1}`}
                  value="node"
                />
              </label>

              <input
                type="text"
                id={`text${step}`}
                name="text"
                placeholder="text"
              />
            </fieldset>
          ))}
          <button
            type="button"
            onClick={() => setSteps([...steps, steps.pop() + 1])}
          >
            Add step
          </button>
          <button type="submit">Submit</button>
        </form>
      </main>
    </Fragment>
  );
}
