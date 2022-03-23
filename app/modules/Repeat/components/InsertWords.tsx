import { Fragment, useState } from "react";
import { InsertWordsTextBlock } from "~/modules/Constructor/Steps/components/lib";

export default function InsertWords({ content, setValue, formDisabled }) {
  const [values, setValues] = useState([]);

  return (
    <Fragment>
      <h2>Insert words</h2>
      <InsertWordsTextBlock style={{ marginTop: 0 }}>
        {content.text.split(" ").map((item: any, idx: number) =>
          content.answer.find((it: any) => it === item) ? (
            <input
              type="text"
              id={`input${idx}`}
              style={{
                width: `${item.length * 10}px`,
                margin: "0 7px",
                border: "none",
                borderBottom: "1px solid #e5e5e5",
              }}
              onChange={(e) => {
                let newItem;
                if (values.length === 0) {
                  setValues([{ id: e.target.id, value: e.target.value }]);
                  setValue([{ id: e.target.id, value: e.target.value }]);
                } else {
                  newItem = values.find((item) => {
                    return item.id === e.target.id;
                  });

                  let newArr = values;
                  if (newItem) {
                    newArr.splice(values.indexOf(newItem), 1);
                    newItem.value = e.target.value;
                    setValues(() => [...newArr, newItem]);
                    setValue([...newArr, newItem]);
                  } else {
                    setValues(() => [
                      ...newArr,
                      { id: e.target.id, value: e.target.value },
                    ]);
                    setValue([
                      ...newArr,
                      { id: e.target.id, value: e.target.value },
                    ]);
                  }
                }
              }}
              disabled={formDisabled}
              key={idx}
            />
          ) : (
            <span key={idx} style={{ marginRight: 4 }}>
              {item}
            </span>
          )
        )}
      </InsertWordsTextBlock>
    </Fragment>
  );
}
