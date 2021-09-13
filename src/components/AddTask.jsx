import { useState } from 'react'

const AddTask = props => {
  const [taskTitle, setTaskTitle] = useState('')

  const handleFormSubmit = event => {
    event.preventDefault()

    const trimedTitle = taskTitle.trim()

    if (trimedTitle) {
      const data = {
        title: taskTitle
      }

      props.onTaskAdd(data)
      setTaskTitle('')
    }
  }

  const handleTaskTitleInput = event => {
    const value = event.target.value

    setTaskTitle(value)
  }

  return <form onSubmit={handleFormSubmit}>
    <label
      htmlFor="inputTaskTitle"
    >
      Título da tarefa
    </label>

    <input
      type="text"
      id="inputTaskTitle"
      value={taskTitle}
      onInput={handleTaskTitleInput}
      required
    />

    <button>Adicionar</button>
  </form>
}

export default AddTask
