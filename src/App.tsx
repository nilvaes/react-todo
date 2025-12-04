import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { dummyData } from './data/todos';

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }
  return (
    <main className=" py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Todo App</h1>
      <div className="max-w-lg mt-10 text-center mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-1">
          {/* {dummyData.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })} */}
          {todos.map((todo) => (
            <TodoItem
              onCompletedChange={setTodoCompleted}
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
