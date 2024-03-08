import React from "react";
import Avatar from "../CreatePosts/Avatar";
import PostContent from "./PostContent";
import PostOptionsMenu from "./PostOptionsMenu";


const PostHeader = ({ timestamp, text, imageUrl, onEdit, onDelete, theme , author, profilepic, onPicClick, onNameClick }) => {
   
    return (
        <div className={`p-4 rounded shadow mt-3 mb-2 ${theme === 'dark' ? 'text-white bg-dark' : 'bg-white'}`}>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <Avatar src={profilepic} alt="avatar" onClick={onPicClick} />
                    <div>
                        <p className="m-0 fw-bold" onClick={onNameClick}>{author}</p>
                        <span className="text-muted fs-7">{timestamp}</span>
                    </div>
                </div>
                <PostOptionsMenu onEdit={onEdit} onDelete={onDelete} />
            </div>

            <PostContent theme={theme} text={text} imageUrl={imageUrl} />
        </div>
    );
};

export default PostHeader;