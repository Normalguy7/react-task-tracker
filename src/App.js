import { useState } from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2.30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'Feb 2nd at 4.30pm',
      reminder: false,
    },
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
// returning No tasks if tasks are all deleted or 0
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} /> ) : ('No tasks to show')}
    </div>
  );
}

export default App;
