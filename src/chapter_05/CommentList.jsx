import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "정선영",
        comment : "또 배가고파요 타코야키 먹고싶어효"
    },
    {
        name : "김세용",
        comment : "얼른 여름휴가 떠나고 싶어요~!"
    },
    {
        name : "탐탐직원들",
        comment : "다나가 집가게."
    }

]

function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment = {comment.comment} />
                );
            })}

        </div>
    );
}

export default CommentList;