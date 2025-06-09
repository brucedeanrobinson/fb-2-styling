import Task, { type TaskData } from './Task'

type TaskListProps = {
  tasks: TaskData[],
  toggleTask: (id: number) => void
}

function TaskList({ tasks, toggleTask }: TaskListProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {tasks.sort((a, b) => Number(b.checked) - Number(a.checked)).map(task => (
        <Task 
          key={task.id}
          taskData={task} 
          toggleChecked={() => toggleTask(task.id)}
        />
      ))}
    </div>
  )
}

export default TaskList