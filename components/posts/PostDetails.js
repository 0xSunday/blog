import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./markdown.module.css";
const PostDetails = (props) => {
  const { post } = props;
  return (
    <article className="text-white">
      <h1 className="font-1 font-poppins font-semibold sm:text-[32px] text-[25px] text-yellow-300">
        {post.title}
        <div className="absolute right-15 top-10 z-0 right-1/6 w-[20%] h-[20%] rounded-full white__gradient"></div>
        <div className="absolute right-10 top-10 z-0 right-1/6 w-[20%] h-[40%] rounded-full pink__gradient"></div>
      </h1>
      <div className="">
        <ReactMarkdown className={classes.reactMarkDown}>
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};

export default PostDetails;
