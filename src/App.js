import React, { useState } from 'react';
import Form from './components/Form/Form';
import List from './components/List/List';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserInput = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <div className="App">
      <Form onUserInput={handleUserInput} />
      <List users={users} />
    </div>
  );
};

export default App;
