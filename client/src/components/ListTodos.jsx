import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';
import formatDate from '../utils/formatDate';

import { UserBtns } from './layout/UserBtns';

export const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('todo_name');

  const getTodos = async () => {
    const headers = {
      // will change based on which button user selects
      SORT_BY: sortOrder,
    };
    try {
      const response = await axios.get('/api/todo', {
        headers,
      });
      const payload = response.data;
      setTodos(payload);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await axios.delete(
        `/api/todo/${id}`
      );

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <UserBtns sortOrder={sortOrder} setSortOrder={setSortOrder} getTodos={getTodos}/>
      {todos.map((todo) => {
        let array = [];
        for (let i = 0; i < todo.tags.length; i++) {
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
                  onClick={() => deleteTodo(todo.id)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div>
              <p className="font-weight-bold">Description:</p>
              <p className="card-text lead">{todo.description}</p>
            </div>
            <p className="card-text mt-3">
              <span className="font-weight-bold">Date Due:</span>{' '}
              {todo.due_date ? formatDate(todo.due_date) : 'No Due Date'}
            </p>
            <p className="card-text">{todoTags}</p>
          </div>
        );
      })}
    </>
  );
};
