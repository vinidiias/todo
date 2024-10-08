import { useEffect, useState } from 'react'
import { MdOutlineAddCircle } from "react-icons/md";
import styles from './ToDo.module.css'

import TaskCard from '../components/task/TaskCard';
import TaskForm from '../components/task/TaskForm'
import Container from '../components//layout/Container'

function ToDo() {

    //const [taskForm, setTaskForm] = useState(false)
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [tasks, setTasks] = useState([])

    function toggleChange() {
        console.log('teste')
        setShowTaskForm(true)
    }

    function toggleChangeFalse() {
      setShowTaskForm(false)
    }

    useEffect(() => {
      fetch('https://jsonserv.vercel.app/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(resp => resp.json())
      .then(data => {
        let taskSort = data.sort(function(a, b){
          return a.importance.id < b.importance.id ? -1
          : a.importance.id > b.importance.id ? 1 : 0
        });
        setTasks(taskSort)
      })
      .catch(err => console.log(err))
    }, [tasks])

    function createTask(task) {
        fetch('https://jsonserv.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        })
        .then(resp => resp.json())
        .then(data => {
            setShowTaskForm(false)
        })
        .catch(err => console.log(err))
    }

    function removeTask(id) {
      fetch(`https://jsonserv.vercel.app/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(resp => resp.json())
      .then(data => {
        setTasks(tasks.filter((task) =>
        task.id !== id))
      })
      .catch(err => console.log(err))
    }

    return (
      <div className={styles.todo}>
        <Container customClass="margin_bottom">
          <div className={styles.todo_add} onClick={toggleChange}>
            <MdOutlineAddCircle />
            <p>Add New Task</p>
          </div>
          <div>
            {showTaskForm && (
              <TaskForm btnText="Add Task" handleSubmit={createTask} toggleOnChange={toggleChangeFalse} />
            )}
          </div>
        </Container>
        <Container customClass="wrap">
            {tasks.length > 0 && 
              tasks.map((task) => (
                <TaskCard 
                name={task.name}
                importance={task.importance.name}
                key={task.id}
                id={task.id}
                handleRemove={removeTask}
                />
              ))}
        </Container>
      </div>
    );
}

export default ToDo