import React from 'react';
import {FaRegCheckSquare} from 'react-icons/fa'

export const Header = () => {
  return (
    <div className="p-3 text-center nav-bar">
    <h1 className="mb-3 text-white">My Todo List <FaRegCheckSquare size={30}/></h1>
  </div>
  );
};
