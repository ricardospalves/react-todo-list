import Task from './Task'

const Tasks = props => {
  const createTasksItems = task => (
    <Task
      key={task.id}
      id={task.id}
    >
      {task.title}
    </Task>
  )
  const Items = props.tasks.map(createTasksItems)

  return <ul>
    {Items}
  </ul>
}

export default Tasks