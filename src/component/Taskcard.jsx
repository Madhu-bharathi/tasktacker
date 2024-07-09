import React from 'react';
import Option from './Option.jsx';
import Delete from '../assets/trash.webp';
import './Taskcard.css';

const Taskcard = ({ task, tags = [],HandleDelete,index}) => {
  return (
    <div className="card">
      <div className="bottom-card">
        <p className="description">{task}</p>
        <div className="tag">
          {tags.map((tag, index) => <Option key={index} TagName={tag} />)}
        </div>
      </div>
      <img className="trash-img" src={Delete} alt="trash" onClick={()=>{HandleDelete(index)}}/>
    </div>
  );
};
export default Taskcard;
