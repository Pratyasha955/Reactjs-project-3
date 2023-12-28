import React, { useState } from 'react';
import PopupError from '../ErrorMsg/ErrorMsg'; 
import './Form.css';

const Form = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [college, setCollege] = useState('');
  const [error, setError] = useState(null);

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const collegeInputChangeHandler = (event) => {
    setCollege(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0 || college.trim().length === 0) {
      setError('Please enter a valid name, age and college!');
      return;
    }

    if ( +age < 0 || isNaN(+age)) {
      setError('Please enter age > 0.');
      return;
    }

    props.onUserInput({ name, age: +age,college});
    setName('');
    setAge('');
    setCollege('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className="form-container">
      {error && <PopupError onClose={errorHandler} message={error} />}
      <form className="user-form" onSubmit={formSubmitHandler}>
        <div className="user-input-control">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={nameInputChangeHandler}
          />
        </div>
        <div className="user-input-control">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={ageInputChangeHandler}
          />
        </div>
        <div className="user-input-control">
          <label>College:</label>
          <input
            type="text"
            value={college}
            onChange={collegeInputChangeHandler}
          />
        </div>
        <button type="submit">ADD USER</button>
      </form>
    </div>
  );
};


export default Form;
