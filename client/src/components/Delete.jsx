/* eslint-disable react/prop-types */
import { deleteIcon } from "../assets/icons";
import { useTodos } from "./TodosProvider";

export default function Delete({ todo }) {
  const { deleteTodo } = useTodos();
  const handleDeleteTodo = async () => {
    await deleteTodo(todo._id);
  };
  return (
    <td role="button" onClick={handleDeleteTodo} className="px-6 py-4">
      {deleteIcon()}
    </td>
  );
}
