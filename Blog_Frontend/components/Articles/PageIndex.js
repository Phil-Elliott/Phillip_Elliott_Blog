import React from "react";
import styles from "./../../styles/Articles.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PageIndex = ({ changePage, pageCount, pageNumber }) => {
  return (
    <>
      {pageCount > 1 && (
        <div className={styles["articles-numberLine-container"]}>
          {pageNumber > 1 && (
            <FaChevronLeft
              className={styles["numberLine-arrow"]}
              onClick={() => changePage(pageNumber - 1)}
            />
          )}

          <div className={styles["articles-numberLine"]}>
            {Array.from(Array(pageCount).keys()).map((number) => {
              return (
                <div
                  style={number + 1 === pageNumber ? { color: "#d05a49" } : {}}
                  className={styles["articles-numberLine-number"]}
                  onClick={() => changePage(number + 1)}
                  key={number + 1}
                >
                  {number + 1}
                </div>
              );
            })}
          </div>

          {pageNumber < pageCount && (
            <FaChevronRight
              className={styles["numberLine-arrow"]}
              onClick={() => changePage(pageNumber + 1)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PageIndex;
