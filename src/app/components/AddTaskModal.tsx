"use client";
import React, { useState } from "react";

interface AddTaskModalProps {
  onClose: () => void; 
  onAddTask: (taskTitle: string) => void; 
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ onClose, onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-title">Nova tarefa</p>
        <div className="modal-input">
          <label htmlFor="title">Título</label> 
          <input
            className="input-text"
            type="text"
            id="title"
            title="title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Digite"
          />
        </div>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="btn-add"
            onClick={() => {
              onAddTask(taskTitle);
              onClose();
            }}
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
