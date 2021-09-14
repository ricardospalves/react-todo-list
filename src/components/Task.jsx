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

  return <li id={props.id}>
    <input
      type="checkbox"
      checked={props.isDone}
      onChange={handleDoneChange}
    />

    <input
      type="text"
      value={props.title}
      style={{
        textDecoration: props.isDone ? 'line-through' : ''
      }}
      readOnly={props.isDone}
      onInput={handleTitleInput}
    />

    <button
      onClick={handleDeleteClick}
    >
      Deletar
    </button>
  </li>
}

export default Task
