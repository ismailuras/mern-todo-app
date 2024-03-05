/* eslint-disable react/prop-types */
import { useState } from "react";
import { editIcon } from "../assets/icons";
import CustomModal from "./CustomModal";
import { useTodos } from "./TodosProvider";

export default function Edit({ todoID }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState();
  const { fetchedTodos } = useTodos();

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const t = fetchedTodos.filter((el) => el._id === todoID);
  const defaultValue = t.map((el) => el.todo);

  return (
    <>
      <td role="button" onClick={handleOpenEditModal} className="px-6 py-4">
        {editIcon()}
      </td>
      {isEditModalOpen && (
        <CustomModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} title="Edit Todo">
          <form className="w-full mt-5">
            <div className="mb-5">
              <div className="flex justify-end items-center"></div>
              <label htmlFor="todo" className="block mb-2 text-sm font-medium text-gray-900">
                New Todo
              </label>
              <input
                type="todo"
                id="todo"
                name="todo"
                defaultValue={defaultValue}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                placeholder="Enter new todo here..."
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center">
                Edit
              </button>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
}
