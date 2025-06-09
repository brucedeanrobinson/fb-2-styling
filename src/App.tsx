import './App.css'
import { useState, useRef } from 'react'

import Task, { type TaskData } from './components/Task'
import TaskList from './components/TaskList'
import tasksData from './data/tasks.json'

import MessageThread from './components/MessageThread'
import messagesData from './data/messages.json'

import Post from './components/Post'
import postsData from './data/posts.json'

function App() {
  const [singleTaskData, setSingleTaskData] = useState<TaskData>(tasksData[0])
  const [taskListData, setTaskListData] = useState<TaskData[]>(tasksData)
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY
    }
  }

  const toggleSingleTask = () => {
    setSingleTaskData({ ...singleTaskData, checked: !singleTaskData.checked })
  }
  
  const toggleListTask = (id: number) => {
    setTaskListData(taskListData.map(task => 
      task.id === id ? { ...task, checked: !task.checked } : task
    ))
  }

  return (
    <div className='font-[Inter] h-screen flex flex-col fixed inset-0'>
      <div 
       ref={scrollRef}
       onWheel={handleWheel}
       className="flex flex-row overflow-x-auto overflow-y-hidden h-screen gap-x-48 px-8"
      >
        {/* Task */}
        <div className="min-w-sm h-screen flex flex-col gap-2 justify-center">
          <h1 className="text-5xl mb-4">Task</h1>
          <Task taskData={singleTaskData} toggleChecked={() => toggleSingleTask()} />
        </div>

        {/* Task List */}
        <div className="min-w-sm h-screen flex flex-col gap-2 justify-center">
          <h1 className="text-5xl mb-4">Task List</h1>
          <TaskList tasks={taskListData} toggleTask={toggleListTask} />
        </div>

        {/* Message Thread */}
        <div className="min-w-3xl h-screen flex flex-col gap-2 justify-center">
          <h1 className="text-5xl mb-4">Message Thread</h1>
          <MessageThread messages={messagesData} />
        </div>

        {/* Post */}
        <div className="min-w-sm h-screen flex flex-col gap-2 justify-center">
          <h1 className="text-5xl mb-4">Post</h1>
          <Post postData={postsData[0]} />
        </div>
      </div>
    </div>
  )
}

export default App
