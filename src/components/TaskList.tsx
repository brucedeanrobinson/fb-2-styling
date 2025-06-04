import Task, { type TaskData } from './Task'

type TaskListProps = {
  tasks: TaskData[],
  toggleTask: (id: number) => void
}

function TaskList({ tasks, toggleTask }: TaskListProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      {tasks.map(task => (
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