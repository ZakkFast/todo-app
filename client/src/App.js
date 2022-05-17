import React, { useState } from 'react';
import { ListTodos } from './components/ListTodos';
import { Header } from './components/layout/Header';
import { LockScreen } from './components/layout/LockScreen';

function App() {
  const [lock, setLock] = useState(true);

  return (
    <>
      <Header />
      <div className="container">
        {lock ?<LockScreen setLock={setLock} lock={lock} /> : <ListTodos setLock={setLock} />
        }
      </div>
    </>
  );
}

export default App;
