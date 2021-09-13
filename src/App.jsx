import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import AddTask from './components/AddTask'

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

  return <div id="App">
    <h1>Todo List</h1>

    <AddTask
      onTaskAdd={handleTaskAdd}
    />
  </div>
}

export default App
