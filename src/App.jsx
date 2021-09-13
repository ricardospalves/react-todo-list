import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleTaskAdd = ({ title }) => {
    const updatedTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title,
        isDone: false,
        timestamp: new Date().getTime()
      }
    ]

    setTasks(updatedTasks)
  }

  const handleTaskDone = ({ id, isDone }) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  const handleTaskDelete = ({ id }) => {
    const updatedTasks = tasks.filter(task => task.id !== id)

    setTasks(updatedTasks)
  }

  return <div id="App">
    <h1>Todo List</h1>

    <AddTask
      onTaskAdd={handleTaskAdd}
    />

    <Tasks
      tasks={tasks}
      onTaskDone={handleTaskDone}
      onTaskDelete={handleTaskDelete}
    />
  </div>
}

export default App
