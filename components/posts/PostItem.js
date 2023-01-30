import Link from "next/link";
import Image from "next/image";

import classes from "./PostItem.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li
      className={`flex items-center justify-center shadow-3xl bg-black rounded-3xl border-2 border-white ${classes.post}`}
    >
      <Link href={linkPath}>
        <div className="flex justify-center items-center">
          <Image
            className="object-cover w-[100%] h-[100%] rounded-3xl "
            src={imagePath}
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div className="px-5 py-5 text-center ">
          <h3 className="font-poppins text-2xl font-bold text-yellow-300">
            {title}
          </h3>
          <time className=" text-white">{formattedDate}</time>
          <p className=" text-white font-semibold">{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
