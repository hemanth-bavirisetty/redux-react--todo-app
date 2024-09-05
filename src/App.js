import AddTodo from './components/AddTodoInput'
import Todos from './components/Todos'

import './App.css';



function App() {
  return (
    <div className='bg-slate-400 w-screen h-screen flex flex-col '>
      <AddTodo /> 
      <Todos />
    </div>
  );
}

export default App;
