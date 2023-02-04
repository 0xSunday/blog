import PostItem from "./PostItem";
import classes from "./PostGird.module.css";
import { motion, Variants } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: [0, 1],
    rotate: [-30, 0],
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function PostsGrid(props) {
  const { posts } = props;

  return (
    <motion.ul className={` ${classes.grid}`}>
      {posts.map((post) => (
        <motion.div
          key={post.slug}
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
        >
          <PostItem post={post} />
        </motion.div>
      ))}
    </motion.ul>
  );
}
export default PostsGrid;
