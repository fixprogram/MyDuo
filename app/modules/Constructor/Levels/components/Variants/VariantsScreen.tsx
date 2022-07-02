import { Variant } from "@prisma/client";
import {
  LessonQuestion,
  LessonQuestionTriangle,
  LessonQuestionTriangleContainer,
  LessonTitle,
  VariantItem,
} from "~/modules/Lesson/components/lib";
import { VariantItemNumber, VariantsItem, VariantsList } from "../lib";
import Duo from "~/styles/Duo.svg";

type VariantsScreenProps = {
  question: string;
  variants: Variant[];
  userAnswer: string;
  setUserAnswer: (answer: string) => void;
};

export default function VariantsScreen({
  question,
  variants,
  userAnswer,
  setUserAnswer,
}: VariantsScreenProps) {
  return (
    <>
      <LessonTitle>Choose right variant</LessonTitle>
      <section>
        <div
          style={{ display: "flex", alignItems: "center", margin: "30px 0" }}
        >
          <img src={Duo} alt="Duo" height={150} style={{ marginBottom: -50 }} />
          <div style={{ position: "relative" }}>
            <LessonQuestion>{question}</LessonQuestion>
            <LessonQuestionTriangleContainer>
              <LessonQuestionTriangle />
            </LessonQuestionTriangleContainer>
          </div>
        </div>

        <VariantsList>
          {variants.map(({ value }, idx: number) => (
            <VariantsItem key={idx} onClick={() => setUserAnswer(value)}>
              <VariantItemNumber isFocused={value === userAnswer}>
                {idx + 1}
              </VariantItemNumber>
              <VariantItem type="button" isFocused={value === userAnswer}>
                {value}
              </VariantItem>
            </VariantsItem>
          ))}
        </VariantsList>
      </section>
    </>
  );
}
