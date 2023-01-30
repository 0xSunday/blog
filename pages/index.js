import FeaturedPost from "@/components/homePage/FeaturedPost";
import Hero from "@/components/homePage/Hero";
import NavBar from "@/components/NavBar";

import { Fragment } from "react";

export default function Home() {
  return (
    <div className="bg-primary ">
      <NavBar con={true} />
      <Hero />
      <FeaturedPost />
    </div>
  );
}
