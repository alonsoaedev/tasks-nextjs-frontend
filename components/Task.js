const Task = ({ task }) => {
  return (
    <div className='input-group'>
      <div class="input-group-text">
        <input class="form-check-input mt-0" type="checkbox" value={task.checked} />
      </div>
      <input type="text" class="form-control" value={task.content} />
    </div>
  )
}

export default Task