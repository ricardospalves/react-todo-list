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

  return <li id={props.id}>
    <input
      type="checkbox"
      checked={props.isDone}
      onChange={handleDoneChange}
    />

    <span
      style={{
        textDecoration: props.isDone ? 'line-through' : ''
      }}
    >
      {props.children}
    </span>

    <button
      onClick={handleDeleteClick}
    >
      Deletar
    </button>
  </li>
}

export default Task
