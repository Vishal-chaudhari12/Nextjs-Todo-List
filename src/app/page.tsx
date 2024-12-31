"use client";

import { useState } from "react";
import { TodoObject } from "@/models/Todo";

const Home: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([{ id: String(Date.now()), value: todo, done: false }, ...todos]);
      setTodo("");
    }
  };

  
  const printTodos = () => {
    const printWindow = window.open("", "Print", "width=600,height=600");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Student List</title>
          </head>
          <body>
            <h1>Student List</h1>
            <ul>
              ${todos.map((todo) => `<li>${todo.value}</li>`).join("")}
            </ul>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };


  return (
    <div className="bg-teal-200 min-h-screen">
      <header className="p-4 bg-black text-white">
        <h1>Student List</h1>
      </header>

      <main className="p-8 ">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter a new student"
            className="border-2 p-2 mr-5 rounded text-slate-900 "
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />

          <button
            className="border-2 p-2 rounded text-black bg-white"
            onClick={addTodo}
          >
            Add student
          </button>

          <button
            className="ml-4 border-2 p-2 rounded text-black bg-white"
            onClick={printTodos}
          >
            Print
          </button>
        </div>

        <ul className="mt-5 bg-white">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="text-3xl ml-5 cursor-pointer "
            >
              {todo.value}
            </li>
          ))}
        </ul>

      </main>
    </div>
  );
};

export default Home;

