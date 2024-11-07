import StudentForm from "./components/StudentForm";
import { StudentProvider } from "./context/StudentProvider";

function App() {
  return (
    <StudentProvider>
      <StudentForm />
    </StudentProvider>
  );
}

export default App;
