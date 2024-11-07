import { useContext } from "react";
import { StudentContext } from "../context/StudentProvider";

function AverageGrade() {
  const { sumStudent, average } = useContext(StudentContext);

  // const average = () => {
  //   let total = 0;
  //   if (list.length <= 0) {
  //     return 0;
  //   }
  //   list.forEach((item) => {
  //     total += Number(item.score);
  //   });
  //   return total / list.length;
  // };

  return (
    <div>
      <p>มีนักเรียนทั้งหมด :{sumStudent()}</p>
      <p>ค่าเฉลี่ยทั้งหมดคือ :{average()}</p>
    </div>
  );
}

export default AverageGrade;
