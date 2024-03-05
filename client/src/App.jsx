import dayjs from "dayjs";
import Create from "./components/Create";
import List from "./components/List";
function App() {
  const today = dayjs().format("DD.MM.YYYY");

  return (
    <main className="container mx-auto">
      <div className="p-20 text-center">
        <h1 className="text-2xl">Todo List</h1>
        <span>{today}</span>
      </div>
      <div className="flex h-[400px]">
        <div className="w-1/2 overflow-y-scroll">
          <Create />
        </div>
        <div className="w-1/2 overflow-y-scroll">
          <List />
        </div>
      </div>
    </main>
  );
}

export default App;
