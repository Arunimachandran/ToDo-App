import React, { useState, useCallback } from 'react';
import './Todoapp.css';

function Todo() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = useCallback(event => {
    setInput(event.target.value);
  }, []);

  const storeItems = useCallback(event => {
    event.preventDefault();
    setItems([...items, input]);
    setInput('');
  }, [input, items]);

  const deleteItem = useCallback(key => {
    setItems(items.filter((data, index) => index !== key));
  }, [items]);

  return (
    <div className='todo-container'>
      <form className='inputsection' onSubmit={storeItems}>
        <h1>ToDo App</h1>
        <input
          type='text'
          value={input}
          onChange={handleChange}
          placeholder='Enter Items....'
        />
      </form>
      <ul>
        {items.map((data, index) => (
          <li key={index}>
            {data}{' '}
            <i
              className='fa-solid fa-trash-can'
              onClick={() => deleteItem(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;


