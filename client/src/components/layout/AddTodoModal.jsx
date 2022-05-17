import React, { useState } from 'react';
import axios from 'axios';
import { FaCalendarPlus, FaTimes } from 'react-icons/fa';

const AddTodoModal = ({ getTodos }) => {
  const initialState = {
    todo_name: '',
    description: '',
    due_date: '',
    tagIds: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { todo_name, description, due_date, tagIds } = formData;

  const onChange = (e) => {
    // spreading formData to prevent overwriting other fields not targeted
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (!todo_name || !description) {
      setBtnDisabled(true);
      setMessage('Please add Name and Description');
    } else {
      setBtnDisabled(false);
      setMessage('');
    }
  };

  const updateTag = (e) => {
    e.target.checked ? tagIds.push(e.target.value) : tagIds.pop(e.target.value);
  };

  const submitData = async (e) => {
    try {
      const newTodo = await axios.post('http://localhost:5000/api/todo', {
        todo_name,
        description,
        due_date,
        tagIds,
      });
    
      getTodos()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-success btn-sm align-right"
        data-toggle="modal"
        data-target="#addTodoModal"
        onClick={() => setFormData(initialState)}
      >
        <FaCalendarPlus size={20} />
      </button>

      <div id="addTodoModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Todo</h4>
              <button type="button" className="btn p-0" data-dismiss="modal">
                <FaTimes />
              </button>
            </div>
            <form className="p-3">
              <div className="form-group">
                <label className="col-form-label">Todo</label>
                <input
                  type="text"
                  className="form-control"
                  name="todo_name"
                  value={todo_name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onChange}
                  maxLength={45}
                />
              </div>
              <div className="form-group">
                <label className="col-form-label">Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="due_date"
                  value={due_date}
                  onChange={onChange}
                />
              </div>
              <label htmlFor="" className="col-form-label">
                Tags <span className="text-muted">(optional)</span>
              </label>
              <div className="row">
                <div className="col">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      value={1}
                      onChange={updateTag}
                    />
                    <label className="form-check-label" onChange={onChange}>
                      Urgent
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      value={2}
                      onChange={updateTag}
                    />
                    <label className="form-check-label">Work</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      value={3}
                      onChange={updateTag}
                    />
                    <label className="form-check-label">Leisure</label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      value={4}
                      onChange={updateTag}
                    />
                    <label className="form-check-label">Home</label>
                  </div>
                </div>
              </div>
            </form>
            <div className="modal-footer">
              {message && <div className="text-danger">{message}</div>}
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                disabled={btnDisabled}
                onClick={(e) => submitData(e, formData)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodoModal;
