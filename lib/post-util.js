import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";
// const postsDirectry = path.join(process.cwd(), "posts");

// const getPostData = (filename) => {
//   const filepath = path.join(postsDirectry, filename);
//   const filContent = efs.readFileSync(filepath, " utf-8 ");
//   const { data, content } = matter(filContent);

//   const postSlug = filename.replace(/\.md$/, "");

//   const postData = {
//     slgu: postSlug,
//     ...data,
//     content,
//   };
// };

// export function getAllPost() {
//   const postFiles = fs.readdirSync(postsDirectry);

//   const allPosts = postFiles.map((post) => {
//     return getPostData(post);
//   });
//   const sortedArray = allPosts.sort((postA, postB) =>
//     postA.data > postB.data ? -1 : 1
//   );
//   return sortedArray;
// }

// function getFeaturedPost(params) {
//   const allPosts = getAllPost();
//   const FeaturedPost = allPosts.filter((post) => post.isFeatured);
//   return FeaturedPost;
// }
