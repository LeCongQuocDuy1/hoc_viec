import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
    return (
        <div className="flex flex-wrap mr-[-12px] ml-[-12px]">
            {posts.map((post) => (
                <React.Fragment key={post.id}>
                    <PostItem post={post} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default PostList;
