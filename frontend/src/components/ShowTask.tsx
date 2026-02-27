import { useEffect, useState } from "react";
import axios from "axios";
interface GetTasksResponse {
  tasks: Task[];
}
interface Task {
  _id: string;
  title: string;
  completed: boolean;
}
export function ShowTasks() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  async function fetchTasks() {
    const response = await axios.get<GetTasksResponse>(
      "http://localhost:3000/api/v1/task/getAllTheTasks",
    );
    console.log(response);
    setTasks(response.data.tasks);
  }

  useEffect(() => {
    fetchTasks();
  }, []);
  async function addTasks(e: any) {
    try {
      e.preventDefault();
      const tasks = await axios.post(
        "http://localhost:3000/api/v1/task/createNewTask",
        {
          title: title,
          completed: completed,
        },
      );
      setTasks((prev) => [...prev, tasks.data]);
      setTitle("");
      fetchTasks();
      setCompleted(completed);
    } catch (error) {
      console.log(error);
    }
  }
  function renderTasks() {
    return tasks.map((task) => (
      <div key={task._id}>
        <div className="flex">
          <div className="mr-3">
            <p>{task.title}</p>
          </div>
          <div>
            <p>{task.completed ? "Completed" : "started"}</p>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border"
      />

      <button onClick={addTasks}>Add Task</button>
      <div>
        <h2>All Tasks</h2>
        {renderTasks()}
      </div>
    </div>
  );
}
