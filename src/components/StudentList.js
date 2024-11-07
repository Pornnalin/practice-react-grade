import StudentItem from "./StudentItem";
import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function StudentList() {
  const { list } = useContext(StudentContext);

  return (
    <div>
      <ol>
        {list.map((student) => {
          // console.log(list);
          return <StudentItem key={student.id} student={student} />;
        })}
      </ol>
    </div>
  );
}

export default StudentList;
