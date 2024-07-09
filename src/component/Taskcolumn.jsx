import React from 'react';
import './Taskcolumn.css';
import Taskcard from './Taskcard.jsx';

const Taskcolumn = ({ name, icon, tasks, status,HandleDelete }) => { // Destructure props correctly
  console.log("Tasks for column", name, tasks);

  if (!Array.isArray(tasks)) {
    console.error("Tasks is not an array", tasks);
    tasks = []; // Fallback to an empty array if tasks is not an array
  }

  return (
    <div className="task-column">
      <section className="section">
        <img src={icon} alt={name} className="img" />
        <h3>{name}</h3>
      </section>
      <div>
        {tasks.length > 0 ? (
          tasks.map((task, index) => task.status === status && (
            <Taskcard key={index} task={task.task} tags={task.tags || []} HandleDelete={HandleDelete} index={index} />
          ))
        ) : (
          <p>No tasks</p>
        )}
      </div>
    </div>
  );
};

export default Taskcolumn;
