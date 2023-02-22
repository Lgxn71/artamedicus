import { useState } from "react";
import TestimonialsReviewer from "./TestimonialsReviewer";
import TestimonialsText from "./TestimonialsText";
import TestimonialsDataBody from "@/dataForComponents/main/TestimonialsDataBody.json";

import styles from "./TestimonialsBody.module.css";

const TestimonialsBody = () => {
  const [activeReview, setActiveReview] = useState("ily1");

  return (
    <div className={styles["persons-container"]}>
      <ul className={styles["reviews-container"]}>
        {TestimonialsDataBody.map((reviewer) => (
          <TestimonialsReviewer
            activeReview={activeReview}
            onSetActiveReview={setActiveReview}
            id={reviewer.id}
            key={reviewer.key_reviewer}
            fullname={reviewer.fullname}
            service={reviewer.service}
            imgSRC={reviewer.imgSRC}
          />
        ))}
      </ul>
      <ul>
        {TestimonialsDataBody.map((review) => {
          if (activeReview !== review.comment.id) {
            return;
          }
          return (
            <TestimonialsText
              id={review.comment.id}
              key={review.comment.key_comment}
              title={review.comment.title}
              summary={review.comment.summary}
              tags={review.comment.tags}
              text={review.comment.text}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default TestimonialsBody;
