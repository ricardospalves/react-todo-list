import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import GitHubCorner from './components/GitHubCorner'
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

  const handleTaskTitleEdit = ({ id, title }) => {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
          title
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  return <div id="App">
    <h1>Todo List</h1>

    <GitHubCorner />

    <AddTask
      onTaskAdd={handleTaskAdd}
    />

    <Tasks
      tasks={tasks}
      onTaskDone={handleTaskDone}
      onTaskTitleEdit={handleTaskTitleEdit}
      onTaskDelete={handleTaskDelete}
    />
  </div>
}

export default App
