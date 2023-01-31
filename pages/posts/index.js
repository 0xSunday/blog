import NavBar from "@/components/NavBar";
import PostsGrid from "@/components/posts/PostGrid";
import React from "react";
import { getAllPosts } from "../../lib/post-util";
const allPost = (props) => {
  return (
    <section className="bg-primary xl:px-0 sm:px-16 px-6 ">
      <NavBar con={false} cont={true} />
      <h1 className="my-9 sm:my-16 text-yellow-300 text-5xl font-bold font-poppins text-center">
        ALL POSTS
      </h1>

      <PostsGrid posts={props.posts} />
    </section>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default allPost;
