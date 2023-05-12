import * as React from "react";
import styles from "./arrow.module.css";

const Arrow = ({ side, onChangeItem }) => {
  return (
    <div
      className={styles.ArrowContainer}
      style={{ [side]: "0px" }}
      onClick={onChangeItem}
    >
      <div>
        {side === "left" ? (
          <svg width="800px" height="800px" viewBox="0 0 64 64">
            <path d="M35.5,60.5a6,6,0,0,1-5.73-4.22l-2.64-8.5A2,2,0,1,1,31,46.6l2.64,8.49a2,2,0,1,0,3.82-1.18L30.78,32.59a2,2,0,0,1,0-1.18l6.63-21.32a2,2,0,1,0-3.82-1.18l-7,22.5a2,2,0,0,0,0,1.18l1.25,4A2,2,0,0,1,24,37.79l-1.25-4a6,6,0,0,1,0-3.56l7-22.5a6,6,0,1,1,11.46,3.56L34.78,32l6.45,20.72A6,6,0,0,1,35.5,60.5Z" />
          </svg>
        ) : (
          <svg width="800px" height="800px" viewBox="0 0 64 64">
            <path
              d="M28.5,60.5a6,6,0,0,1-5.73-7.78l2.94-9.45a2,2,0,0,1,3.82,1.19l-2.94,9.45a2,2,0,0,0,3.82,1.18l7-22.5a2,2,0,0,0,0-1.18l-7-22.5a2,2,0,0,0-3.82,1.18l6.63,21.32a2,2,0,0,1,0,1.18l-.88,2.85a2,2,0,0,1-3.82-1.19l.7-2.25L22.77,11.28A6,6,0,0,1,34.23,7.72l7,22.5a6,6,0,0,1,0,3.56l-7,22.5A6,6,0,0,1,28.5,60.5Z"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Arrow;
