const Task = props => {
  return <li id={props.id}>
    {props.children}
  </li>
}

export default Task
