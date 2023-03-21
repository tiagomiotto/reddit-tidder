import React from "react";
import { Comment } from "./Comment";

export function CommentThread({ id }) {

    const comments = [];

    return (
        <div className="comment-thread">
            {comments.map((comment) => {
                return <Comment id={comment.id} />
            })}
        </div>
    )
}