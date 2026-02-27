import "./App.css";
import { ShowTasks } from "./components/ShowTask";
function App() {
  return (
    <>
      <div className="bg-gray-50 h-screen w-screen ">
        <div>
          <ShowTasks></ShowTasks>
        </div>
      </div>
    </>
  );
}

export default App;
