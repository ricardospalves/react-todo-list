import Task from './Task'

const Tasks = props => {
  const createTasksItems = task => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      isDone={task.isDone}
      onTaskDone={props.onTaskDone}
      onTaskTitleEdit={props.onTaskTitleEdit}
      onTaskDelete={props.onTaskDelete}
    />
  )
  const Items = props.tasks.map(createTasksItems)

  return <ul>
    {Items}
  </ul>
}

export default Tasks
