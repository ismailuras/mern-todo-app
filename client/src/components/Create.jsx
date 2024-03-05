import { useState } from "react";
import { useTodos } from "./TodosProvider";

export default function Create() {
  const { handleSendNewTodo } = useTodos();
  const [inputValue, setInputValue] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());
    await handleSendNewTodo(data);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-10">
      <div className="mb-5">
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-1.5 text-center">
            +
          </button>
        </div>
        <label htmlFor="todo" className="block mb-2 text-sm font-medium text-gray-900">
          Add Todo
        </label>
        <input
          type="todo"
          id="todo"
          name="todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          placeholder="Enter new todo here..."
          required
        />
      </div>
    </form>
  );
}
