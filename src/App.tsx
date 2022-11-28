import React from "react";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [
    { id: "t1", text: "TypeScriptでToDoアプリ作成" },
    { id: "t2", text: "アレンジ" },
  ];
  return (
    <div className="App">
		  <TodoList items={todos} />
    </div>
  );
};

export default App;
