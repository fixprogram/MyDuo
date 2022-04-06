/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment, useState } from "react";
import { Input, Textarea, VisuallyHiddenInput } from "~/components/lib";
import { FieldsetType } from "../types";
import { VariantItemInput, VariantItemNumber } from "./lib";

export default function Variants({ number, answer, setAnswer }: FieldsetType) {
  const [answers, setAnswers] = useState(Array(3).fill(answer));

  return (
    <Fragment>
      <VisuallyHiddenInput name={`answer${number}`} value={answer} readOnly />

      <VisuallyHiddenInput name={`type${number}`} value={"Variants"} readOnly />

      <div>
        <h2>Read and Respond</h2>
      </div>

      <Textarea
        name={`definition${number}`}
        placeholder="Type definition"
        style={{ minHeight: 100 }}
        required
      />

      <Input
        type="text"
        name={`question${number}`}
        placeholder="Type question"
      />
      <ul>
        <li>
          <label css={{ position: "relative" }}>
            <VariantItemNumber> 1 </VariantItemNumber>
            <VariantItemInput
              type="text"
              name={`variant${number}`}
              placeholder="type first variant"
              value={answers[0]}
              onChange={(e) =>
                setAnswers((prevArr) => {
                  let newArr = prevArr;
                  newArr[0] = e.target.value;
                  return [...newArr];
                })
              }
            />
            <button type="button" onClick={() => setAnswer(answers[0])}>
              Make this right answer
            </button>
          </label>
        </li>
        <li>
          <label css={{ position: "relative" }}>
            <VariantItemNumber> 2 </VariantItemNumber>
            <VariantItemInput
              type="text"
              name={`variant${number}`}
              placeholder="type first variant"
              value={answers[1]}
              onChange={(e) =>
                setAnswers((prevArr) => {
                  let newArr = prevArr;
                  newArr[1] = e.target.value;
                  return [...newArr];
                })
              }
            />
            <button type="button" onClick={() => setAnswer(answers[1])}>
              Make this right answer
            </button>
          </label>
        </li>
        <li>
          <label css={{ position: "relative" }}>
            <VariantItemNumber> 3 </VariantItemNumber>
            <VariantItemInput
              type="text"
              name={`variant${number}`}
              placeholder="type first variant"
              value={answers[2]}
              onChange={(e) =>
                setAnswers((prevArr) => {
                  let newArr = prevArr;
                  newArr[2] = e.target.value;
                  return [...newArr];
                })
              }
            />
            <button type="button" onClick={() => setAnswer(answers[2])}>
              Make this right answer
            </button>
          </label>
        </li>
      </ul>
    </Fragment>
  );
}
