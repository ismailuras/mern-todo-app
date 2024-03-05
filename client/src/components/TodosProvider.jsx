/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const TodosContext = createContext();

export default function TodosProvider({ children }) {
  const [fetchedTodos, setFetchedTodos] = useState([]);
  const [isNewTodoAdded, setIsNewTodoAdded] = useState(false);

  const handleSendNewTodo = async (data) => {
    try {
      const res = await fetch("http://localhost:5050/todos/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsNewTodoAdded(true);

      if (!res.ok) {
        throw new Error(`HTTP error! status:${res.status}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5050/todos/delete/${id}`, {
        method: "DELETE",
      });

      const newTodos = fetchedTodos.filter((todo) => todo._id !== id);
      setFetchedTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodos = async () => {
    try {
      const res = await fetch("http://localhost:5050/todos/fetch", {
        method: "GET",
      });
      const results = await res.json();
      setFetchedTodos(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [isNewTodoAdded]);

  return (
    <TodosContext.Provider value={{ fetchedTodos, handleSendNewTodo, deleteTodo }}>{children}</TodosContext.Provider>
  );
}

export const useTodos = () => {
  return useContext(TodosContext);
};
