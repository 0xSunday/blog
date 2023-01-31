import NavBar from "@/components/NavBar";
import PostDetails from "@/components/posts/PostDetails";
import React from "react";

const postDetails = () => {
  return (
    <section className="bg-primary xl:px-0 sm:px-16 px-6 ">
      <NavBar con={true} cont={false} />
      <PostDetails />
    </section>
  );
};

export default postDetails;
