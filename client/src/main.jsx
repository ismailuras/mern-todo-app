import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodosProvider from "./components/TodosProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
