"use client";
import React, { useState } from "react";
import "../styles/global.scss";
import AddTaskModal from "./components/AddTaskModal";
import DeleteTaskModal from "./components/DeleteTaskModal";

const Logo = '/assets/logo.svg';
const TrashIcon = '/assets/trash.svg';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Lavar as mãos", completed: false },
    { id: 2, title: "Fazer um bolo", completed: false },
    { id: 3, title: "Lavar a louça", completed: false },
    { id: 4, title: "Levar o lixo para fora", completed: true },
  ]);

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const formatDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date());

  return (
    <div className="home-container">
      <nav className="navbar">
        <img src={Logo} alt="Logo FocalPoint" className="logo" />
        <p className="welcome-message">Bem-vindo de volta, Marcus</p>
        <p className="data">{formatDate}</p>
      </nav>

      <main className="task">
        <div className="task-list">
          <p className="task-list-title">Suas tarefas de hoje</p>
          {tasks.filter(task => !task.completed).map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-check">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(task.id)}
                  className="custom-checkbox"
                />
                <span className={task.completed ? "completed" : ""}>{task.title}</span>
              </div>
              <button onClick={() => setShowDeleteModal(task.id)} className="delete-icon">
                <img src={TrashIcon} alt="Excluir tarefa" />
              </button>
            </div>
          ))}
          <p className="task-list-title">Tarefas Finalizadas</p>
          {tasks.filter(task => task.completed).map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-check">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCompleteTask(task.id)}
                  className="custom-checkbox"
                />
                <span className={task.completed ? "completed" : ""}>{task.title}</span>
              </div>
              <button onClick={() => setShowDeleteModal(task.id)} className="delete-icon">
                <img src={TrashIcon} alt="Excluir tarefa" />
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => setShowAddTaskModal(true)} className="add-task-button">
          Adicionar nova tarefa
        </button>
      </main>

      {showAddTaskModal && (
        <AddTaskModal
          onClose={() => setShowAddTaskModal(false)}
          onAddTask={handleAddTask}
        />
      )}

      {showDeleteModal !== null && (
        <DeleteTaskModal
          taskId={showDeleteModal}
          onDelete={handleDeleteTask}
          onClose={() => setShowDeleteModal(null)}
        />
      )}
    </div>
  );
};

export default Home;
