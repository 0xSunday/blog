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

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li
      className={`flex flex-1 items-center justify-between shadow-3xl bg-black rounded-3xl border-2 hover:border-yellow-300 hover:zoom border-white image-box ${classes.post}`}
    >
      <Link href={linkPath} className="flex flex-col justify-center">
        <div className="flex justify-center items-center rounded-3xl   ">
          <Image
            className="object-cover rounded-t-3xl "
            src={imagePath}
            alt={title}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="px-5 py-5 text-center  rounded-b-3xl flex flex-col justify-end bg-black h-full ">
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
