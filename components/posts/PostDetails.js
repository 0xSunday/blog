import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import classes from "./markdown.module.css";
const PostDetails = (props) => {
  const { post } = props;

  const costomRenderers = {
    Code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter language="javascript" style={dark}>
          {codeString}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className="text-white sm:px-10 lg:px-20 h">
      <h1 className="font-1 font-poppins font-semibold sm:text-[45px] text-[30px]  white text-center">
        {post.title}
        <div className="absolute right-15 top-10 z-0 right-1/6 w-[20%] h-[20%] rounded-full white__gradient"></div>
        <div className="absolute right-10 top-10 z-0 right-1/6 w-[20%] h-[40%] rounded-full pink__gradient"></div>
      </h1>
      <div>
        <ReactMarkdown
          renderers={costomRenderers}
          className={classes.reactMarkDown}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostDetails;
