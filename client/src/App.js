import { ListTodos } from './components/ListTodos';
import { Header } from './components/layout/Header';

function App() {
  return (
    <>
    <Header/>
      <div className="container">
        <ListTodos />
      </div>
    </>
  );
}

export default App;
