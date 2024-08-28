import React from "react";

const students = [
    {
        id: 1,
        name: "Inje"
    },
    {
        id: 2,
        name: "George"
    },
    {
        id: 3,
        name: "Yerin"
    },
    {
        id: 4,
        name: "Charlie"
    },
]

function AttendanceBook() {
    //key 값을 포맷팅된 문자열로 변경
    return (
        <ul>
            {
                students.map((student) => {
                    return <li key={`student-id-${student.id}`}>{student.name}</li>;
                })
            }
        </ul>

    );
}

export default AttendanceBook;