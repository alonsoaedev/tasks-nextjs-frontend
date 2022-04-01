import Task from './Task';

const TaskList = ({ tasks }) => {
    return (
        <>
        {
            tasks.map(task => (
                <div className='col-10 offset-1'>
                    <Task key={task.id} task={task}/>
                </div>
            ))
        }
        </>
    )
}

export default TaskList