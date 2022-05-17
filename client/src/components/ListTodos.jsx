import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

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
      
    </>
  );
};
