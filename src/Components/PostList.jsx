import React from 'react';
import PosItem from "./PosItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post) =>
                <PosItem remove={remove} key={post.id} post={post}/>
            )}
        </div>
    );
};

export default PostList;
