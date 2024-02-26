import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
    return (
        <div className="grid grid-cols-4 max-laptop:grid-cols-3 max-tablet-sm:grid-cols-2 max-mobile-sm:grid-cols-1 gap-[24px]">
            {posts.map((post) => (
                <React.Fragment key={post.id}>
                    <PostItem post={post} />
                </React.Fragment>
            ))}
        </div>
    );
};

export default PostList;
