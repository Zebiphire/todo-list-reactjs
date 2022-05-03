import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ handleClickCheck, handleClickRemove, tasks }) => {
  return (
    <div className="tasks">
      <div className="direction">
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <input
                className="checkbox"
                type="checkbox"
                checked={task.done}
                onChange={() => {
                  handleClickCheck(index);
                }}
              />
              <span className={task.done ? "done" : ""} key={index}>
                {task.title}
              </span>
              <FontAwesomeIcon
                className="remove"
                onClick={() => {
                  handleClickRemove(index);
                }}
                icon="trash"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
