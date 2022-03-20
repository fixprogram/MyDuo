import { Fragment } from "react";
import { Input } from "~/components/lib";

export default function Variants({ step }) {
  return (
    <Fragment>
      <Input
        type="text"
        name={`questionTitle${step}`}
        placeholder="Enter question title"
      />
      <ul>
        <li>
          <label>
            Variant 1
            <Input
              type="text"
              name={`variant${step}`}
              placeholder="type first variant"
            />
          </label>
        </li>
        <li>
          <label>
            Variant 2
            <Input
              type="text"
              name={`variant${step}`}
              placeholder="type second variant"
            />
          </label>
        </li>
        <li>
          <label>
            Variant 3
            <Input
              type="text"
              name={`variant${step}`}
              placeholder="type third variant"
            />
          </label>
        </li>
      </ul>
    </Fragment>
  );
}
