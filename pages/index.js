import FeaturedPost from "@/components/homePage/FeaturedPost";
import Hero from "@/components/homePage/Hero";
import NavBar from "@/components/NavBar";

import { Fragment } from "react";

export default function Home() {
  const dummy_data = [
    {
      slug: "getting-started-with-nextjs",
      title: "getting started with nextjs",
      image: "getting-started-with-nextjs.png",
      excerpt:
        "nextjs is the react framework for the production ready website ",
      date: "10-01-2023",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "getting started with nextjs",
      image: "getting-started-with-nextjs.png",
      excerpt:
        "nextjs is the react framework for the production ready website ",
      date: "10-01-2023",
    },
    {
      slug: "getting-started-with-nextjs",
      title: "getting started with nextjs",
      image: "getting-started-with-nextjs.png",
      excerpt:
        "nextjs is the react framework for the production ready website ",
      date: "10-01-2023",
    },
  ];

  return (
    <div className="bg-primary xl:px-0 sm:px-16 px-6  ">
      <NavBar con={true} />
      <Hero />
      <FeaturedPost posts={dummy_data} />
    </div>
  );
}
