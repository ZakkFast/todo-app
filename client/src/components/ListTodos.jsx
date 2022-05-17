import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import formatDate from '../utils/formatDate';

export const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('todo_name');

  const getTodos = async () => {
    const headers = {
        // will change based on which button user selects
      SORT_BY: sortOrder,
    };
    try {
      const response = await axios.get('http://localhost:5000/api/todo', {
        headers,
      });
      const payload = response.data;
      setTodos(payload);
      console.log(todos)
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(()=> {
      getTodos()
  }, [])

  return (
    <>
      {todos.map((todo) => {
        let array = [];
        for (let i = 0; i < todo.tags.length; i++) {
          // find a way to remove the last , in the array
          // change to map method
          const arrayItem = `${todo.tags[i].tag_name}, `;
          array.push(arrayItem);
        }
        const todoTags = array.toString().replace(/,/g, ' ');

        return (
          <div className="card p-4 m-3" key={todo.id}>
            <div className="d-flex">
              <h5 className="card-title">{todo.todo_name}</h5>
              <div className="ml-auto">
                <button
                  className="btn text-danger"
                //   onClick={() => deleteTodo(todo.id)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div>
              <p className="font-weight-bold">Description:</p>
              <p className="card-text lead">{todo.description}</p>
            </div>
            <p className="card-text">
              <span className="font-weight-bold">Date Due:</span>{' '}
              {formatDate(todo.due_date)}
            </p>
            <p className="card-text">{todoTags}</p>
          </div>
        );
      })}
    </>
  );
};
