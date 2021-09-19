import { useRef, useState } from 'react'

import styles from './AddTask.module.css'

const AddTask = props => {
  const taskTitleRef = useRef(null)
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

  const handleSubmitClick = () => {
    taskTitleRef.current.focus()
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
      ref={taskTitleRef}
      className={styles.AddTask__field}
      value={taskTitle}
      onInput={handleTaskTitleInput}
      required
      autoFocus
    />

    <button
      className={`${styles.AddTask__submit}`}
      onClick={handleSubmitClick}
    >
      Adicionar
    </button>
  </form>
}

export default AddTask
