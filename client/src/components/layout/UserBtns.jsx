import React, {useEffect} from 'react';
import {FaSortAlphaDown, FaSortAmountDown, FaLock} from 'react-icons/fa';
import AddTodoModal from './AddTodoModal';

export const UserBtns = ({ setSortOrder, sortOrder, getTodos }) => {
    const btnToggle = (e) => {
        sortOrder === 'todo_name' ? setSortOrder('due_date') : setSortOrder('todo_name');
        getTodos()
    }

    useEffect(()=> {
        btnToggle()
    },[])


    return (
        <div className="d-flex m-3">
        <div className="mr-auto">
          <AddTodoModal getTodos={getTodos}/>
        </div>
        {sortOrder === 'due_date' ? (
          <button className="btn btn-sm mr-2" onClick={(e) => btnToggle()}>
            <FaSortAlphaDown size={20} />
          </button>
        ) : (
          <button className="bt btn-sm mr-2" onClick={(e) => btnToggle()}>
            <FaSortAmountDown size={20} />
          </button>
        )}
        <div className='mr-2'>
          <button className="btn btn-sm btn-danger" onClick={() => console.log('lock')}><FaLock size={20}/></button>
        </div>
      </div>
    )
}
