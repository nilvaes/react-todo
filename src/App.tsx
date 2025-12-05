import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodoSummary';
import useTodos from './hooks/useTodos';

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodo,
  } = useTodos();

  return (
    <main className=" py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Todo App</h1>
      <div className="max-w-lg mt-10 text-center mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodo} />
    </main>
  );
}

export default App;
