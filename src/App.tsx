import './App.css'
import { useState } from 'react'
import Task, { type TaskData } from './components/Task'
import tasksData from './data/tasks.json'

function App() {
  const [taskData, setTaskData] = useState<TaskData>(tasksData[0])

  const toggleTask = () => {
    setTaskData({ ... taskData, checked: !taskData.checked})
  }

  return (
    <div className='font-[Inter]'>
      <div className="w-1/2 h-screen mx-auto flex flex-col gap-2 justify-center">
        <h1 className="text-5xl mb-4">Task</h1>
        <Task taskData={taskData} toggleChecked={toggleTask} />
      </div>
    </div>
  )
}

export default App
