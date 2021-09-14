import styles from './Task.module.css'

const Task = props => {
  const handleDoneChange = () => {
    const data = {
      id: props.id,
      isDone: !props.isDone
    }

    props.onTaskDone(data)
  }

  const handleDeleteClick = () => {
    const data = {
      id: props.id
    }

    props.onTaskDelete(data)
  }

  const handleTitleInput = event => {
    const value = event.target.value

    if(value.trim()) {
      const data = {
        id: props.id,
        title: value
      }

      props.onTaskTitleEdit(data)
    }

  }

  return <li id={props.id} className={styles.Task}>
    <label className={styles.Task__cellToggle}>
      <span className="u-visuallyHidden">
        {props.isDone ? 'Reabrir' : 'Concluir'} esta tarefa
      </span>

      <input
        type="checkbox"
        className={styles.Task__toggle}
        checked={props.isDone}
        onChange={handleDoneChange}
      />
    </label>

    <label className={styles.Task__cellField}>
      <span className="u-visuallyHidden">
        Título da tarefa
      </span>

      <input
        type="text"
        value={props.title}
        className={styles.Task__field}
        readOnly={props.isDone}
        onInput={handleTitleInput}
      />
    </label>

    <button
      className={styles.Task__delete}
      onClick={handleDeleteClick}
    >
      Deletar
    </button>
  </li>
}

export default Task
