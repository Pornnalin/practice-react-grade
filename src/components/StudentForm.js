import { useContext, useState } from "react";
import StudentList from "./StudentList";
import AverageGrade from "./AverageGrade";
import { StudentContext } from "../context/StudentProvider";

function StudentForm() {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  // const [list, setList] = useState([]);
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score) {
      // const newStudent = { id: uuidv4(), name: name, score: score };
      // setList([...list, newStudent]);
      addStudent(name, score);
      setName("");
      setScore("");
    }
  };

  // const handleOnDelete = (idToRemove) => {
  //   setList(list.filter((stu) => stu.id !== idToRemove));
  // };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>ชื่อ</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>คะแนน</label>
          <input
            type="number"
            value={score}
            onChange={(e) => {
              setScore(e.target.value);
            }}
          />
          <button type="submit">บันทึกข้อมูล</button>
          <AverageGrade />
        </form>
      </div>
      <StudentList />
    </div>
  );
}

export default StudentForm;
