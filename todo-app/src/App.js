import React, { useState } from 'react'

function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const submitHandle = () => {
    if (!task) {
      return
    }
    else {
      setTasks(prev => [...prev, task])
      setTask('')
    }

  }
  const deleteHandle = (index) => {
    const newTasks = [...tasks]
    // tasks.splice(index,1)
    newTasks.splice(index, 1)
    // console.log(tasks.splice(index,1))
    // setTasks(tasks.splice(index,1))
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={submitHandle}>add</button>
      <ul>
        {
          tasks.map((task, index) => (
            <li key={index}>{task}<button style={{ margin: 10 }} onClick={() => deleteHandle(index)} >delete task</button></li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
