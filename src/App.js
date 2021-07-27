import { useState } from 'react'
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from './Components/AddTask';

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

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
  )
  )
}


  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : ('No tasks to show')}
    </div>
  );
}

export default App;
