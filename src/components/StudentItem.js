import { StudentContext } from "../context/StudentProvider";
import { useContext } from "react";

function StudentItem({ student }) {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <div>
      <li>
        <p>ชื่อ : {student.name}</p>
        <p>คะแนน : {student.score}</p>
        <button onClick={() => deleteStudent(student.id)}>ลบ</button>
      </li>
    </div>
  );
}

export default StudentItem;
