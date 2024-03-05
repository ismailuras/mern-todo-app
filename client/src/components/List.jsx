import { useTodos } from "./TodosProvider";
import Delete from "./Delete";
import Edit from "./Edit";

export default function List() {
  const { fetchedTodos } = useTodos();

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              Todo
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {fetchedTodos &&
            fetchedTodos.length !== 0 &&
            fetchedTodos.map((todo) => (
              <tr key={todo._id}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{todo.todo}</td>
                <Edit todoID={todo._id} />
                <Delete todo={todo} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
