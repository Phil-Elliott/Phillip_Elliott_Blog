import SyntaxHighlighter from "react-syntax-highlighter";
import { urlFor } from "../../lib/sanity";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import styles from "./../../styles/Pages/Article/Content.module.scss";

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          className={styles["post-image"]}
          alt={value.alt || " "}
          src={urlFor(value)}
        />
      );
    },
    code: ({ value }) => {
      return (
        <div className={styles["code-image-container"]}>
          <SyntaxHighlighter
            className={styles["code-image"]}
            wrapLines={true}
            wrapLongLines={true}
            language={value.language}
            style={atomOneDark}
            lineNumberStyle={{
              padding: "0 5px 0 0",
              borderRight: "1.5px solid darkgray",
              marginRight: "10px",
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};

export default PostComponents;
