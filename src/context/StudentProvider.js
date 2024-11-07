import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const addStudent = (name, score) => {
    const newStudent = { id: uuidv4(), name, score: Number(score) };
    setList([...list, newStudent]);
  };

  const deleteStudent = (id) => {
    setList(list.filter((student) => student.id !== id));
  };

  const average = () => {
    let total = 0;
    if (list.length <= 0) {
      return 0;
    }
    list.forEach((item) => {
      total += Number(item.score);
    });
    return total / list.length;
  };

  const sumStudent = () => {
    return list.length;
  };

  const valueToShare = {
    list,
    addStudent,
    deleteStudent,
    average,
    sumStudent,
  };
  return (
    <StudentContext.Provider value={valueToShare}>
      {children}
    </StudentContext.Provider>
  );
};
export { StudentProvider };
export default StudentContext;
