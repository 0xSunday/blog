import FeaturedPost from "@/components/homePage/FeaturedPost";
import Hero from "@/components/homePage/Hero";
import NavBar from "@/components/NavBar";

import { Fragment } from "react";
import { getFeaturedPosts } from "../lib/post-util";

export default function Home(props) {
  return (
    <div className="bg-primary xl:px-0 sm:px-16 px-6  ">
      <NavBar con={true} cont={false} />
      <Hero />
      <FeaturedPost posts={props.posts} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}
