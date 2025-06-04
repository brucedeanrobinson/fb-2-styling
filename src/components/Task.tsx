import clsx from 'clsx'

export type TaskData = {
  id: number,
  name: string,
  description: string,
  checked: boolean
}

type TaskProps = {
  taskData: TaskData,
  toggleChecked?: () => void
}

function Task({ taskData, toggleChecked }: TaskProps) {
  const checked = taskData.checked

  // do i want to set the width and height of the task here?.. yea fuckitshipit
  const taskStyle = "w-[462px] h-[77px] rounded-lg border-[1px] flex flex-row items-center gap-3 p-2 px-4"
  const checkboxStyle = "aspect-square w-[25px] h-[25px] border-[1px] rounded-lg"
  const activeTaskStyle = "bg-green-light"
  const activeCheckboxStyle = "bg-green-dark"

  //clsx is cool

  return (
    <div className={clsx(taskStyle, checked && activeTaskStyle)}>
    <button onClick={toggleChecked} className={clsx(checkboxStyle, checked && activeCheckboxStyle)}></button>
    <div className="flex-1">
        <div className="text-lg">{taskData.name}</div>
        <div className="text-sm text-gray-light">{taskData.description}</div>
    </div>
  </div>
  )
}

export default Task