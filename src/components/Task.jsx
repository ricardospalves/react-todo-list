const Task = props => {
  const handleDeleteClick = () => {
    const data = {
      id: props.id
    }

    props.onTaskDelete(data)
  }

  return <li id={props.id}>
    {props.children}

    <button
      onClick={handleDeleteClick}
    >
      Deletar
    </button>
  </li>
}

export default Task
