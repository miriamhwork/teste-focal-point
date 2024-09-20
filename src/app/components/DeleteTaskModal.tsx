"use client";

import React from 'react';

interface DeleteTaskModalProps {
  taskId: number; 
  onDelete: (id: number) => void; 
  onClose: () => void;
}

const DeleteTaskModal = ({ taskId, onDelete, onClose }: DeleteTaskModalProps) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p className="modal-title">Deletar tarefa</p>
        <p className="modal-msg">Tem certeza que deseja deletar esta tarefa?</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancelar
          </button>
          <button
            className="btn-del"
            onClick={() => {
              onDelete(taskId);
              onClose();
            }}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
