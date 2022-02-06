import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const AllPosts = (props) => {

  const posts = useSelector((state) => state.posts.posts);
  const hasPosts = useSelector((state) => state.posts.changed);

  console.log("Value of hasChange is " + hasPosts);

  if (hasPosts) {
    return (
      <ul>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={{
              id: post.id,
              title: post.title,
              body: post.body,
              userId:post.userID,
            }}
          />
        ))}
      </ul>
    );
  }
  else{
    return (
      <p> There are no posts to display</p>
    );
  }
};

export default AllPosts;
