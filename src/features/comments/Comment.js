import React from "react";
import { useSelector } from "react-redux";
import { selectCommentById } from "./commentsSlice";

export function Comment({ id }) {

    const { body, author, score, parent_id, is_reply } = {
        id: 13,
        body: "Hi I like this",
        score: 1234,
        author: "Tiago",
        parent_id: "t3_123",
        is_reply: false
    }
    // useSelector((state) => selectCommentById(state, id));

    return (
        <div>
            <p>{`${author} | ${score}`}</p>
            <p>{body}</p>
        </div>
    )
}