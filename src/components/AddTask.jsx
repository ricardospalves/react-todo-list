import { useState } from 'react'

import styles from './AddTask.module.css'

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

  return <form onSubmit={handleFormSubmit} className={styles.AddTask}>
    <label
      htmlFor="inputTaskTitle"
      className={styles.AddTask__label}
    >
      Título da tarefa
    </label>

    <input
      type="text"
      id="inputTaskTitle"
      className={styles.AddTask__field}
      value={taskTitle}
      onInput={handleTaskTitleInput}
      required
      autoFocus
    />

    <button
      className={`${styles.AddTask__submit}`}
    >
      Adicionar
    </button>
  </form>
}

export default AddTask
