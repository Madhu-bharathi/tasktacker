import React, { useState } from 'react';
import './Taskform.css';
import Option from './Option';

const Taskform = ({ setTasks }) => {
  const [data, setData] = useState({
    task: '',
    status: 'To Do',
    tags: []
  });

  const HandleData = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => [...prev, data]); // Add the new task to the existing tasks array
    console.log("Task added:", data);
    setData({
      task: '',
      status: 'To Do',
      tags: []
    });
  };

  const SelectTag = (TagName) => {
    if (data.tags.includes(TagName)) {
      const filteredTags = data.tags.filter((item) => item !== TagName);
      setData((prev) => ({
        ...prev,
        tags: filteredTags
      }));
    } else {
      setData((prev) => ({
        ...prev,
        tags: [...prev.tags, TagName]
      }));
    }
  };

  const selected = (tag) => data.tags.includes(tag);

  return (
    <header className="header">
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="ENTER YOUR TASK"
          className="task"
          name="task"
          value={data.task}
          onChange={HandleData}
        />
        <div className="tags">
          <Option TagName="HTML" SelectTag={SelectTag} selected={selected('HTML')} />
          <Option TagName="CSS" SelectTag={SelectTag} selected={selected('CSS')} />
          <Option TagName="JS" SelectTag={SelectTag} selected={selected('JS')} />
          <Option TagName="REACT" SelectTag={SelectTag} selected={selected('REACT')} />
          <select className="select" name="status" value={data.status} onChange={HandleData}>
            <option value="To Do">To Do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit" className="add">+Add Task</button>
        </div>
      </form>
    </header>
  );
};

export default Taskform;
