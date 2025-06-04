import './App.css'
import { useState, useRef } from 'react'
import Task, { type TaskData } from './components/Task'
import tasksData from './data/tasks.json'

function App() {
  const [taskData, setTaskData] = useState<TaskData>(tasksData[0])
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY
    }
  }

  const toggleTask = () => {
    setTaskData({ ... taskData, checked: !taskData.checked})
  }

  return (
    <div className='font-[Inter] h-screen flex flex-col fixed inset-0'>
      <div 
       ref={scrollRef}
       onWheel={handleWheel}
       className="flex flex-row overflow-x-auto overflow-y-hidden h-screen gap-x-16 px-8"
      >
        {/* Task */}
        <div className=" h-screen mx-auto flex flex-col gap-2 justify-center">
          <h1 className="text-5xl mb-4">Task</h1>
          <Task taskData={taskData} toggleChecked={toggleTask} />
        </div>
        {/* Task List */}
        <div className="w-1/2 h-screen mx-auto flex flex-col gap-2 justify-center">
          <h1 className="text-5xl mb-4">Task List</h1>
          {/* TODO task list */}
          <Task taskData={taskData} toggleChecked={toggleTask} />
        </div>
      </div>
    </div>
  )
}

export default App
