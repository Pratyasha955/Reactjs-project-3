import React from 'react';
import './List.css';
const List = ({ users }) => {
  return (
    <div className='list-container'>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>{user.name} ({user.age} years old)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
