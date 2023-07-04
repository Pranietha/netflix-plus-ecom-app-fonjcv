import React, { useEffect, useReducer, useRef } from 'react';
import todoReducer from '../../../reducers/todoReducer';

const TodosVariant2 = () => {
  const todoInput = useRef('');

  const [todoList, todoDispatch] = useReducer(todoReducer);
  console.log(todoList); //undefined -- get the state data from reducer
  console.log(todoDispatch); //dispatcher fn -- part of react core
  //dispatcher fn must be called with an action obj to get state data from the reducer

  useEffect(() => {
    //will be excecuted after initial rendering
    //ideal place for your REST API call
    console.log('After initial rendering');
    todoDispatch({
      type: 'LIST_TODOS',
    });
  }, []);

  const handleAddTodo = () => {
    console.log('will add todo');
    console.log(todoInput.current.value);
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 10000),
        title: todoInput.current.value,
        isCompleted: false,
      },
    });
  };

  const handleDeleteTodo = ({ id }) => {
    todoDispatch(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ backgroundColor: '#D8BFD8', padding: '20px' }}>
      <h3>Todos App with useReducer and useRef</h3>

      <div className="row">
        <div className="col-auto">
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodo}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoList?.map((todo) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    {todo.title}
                    <button
                      type="button"
                      className="btn btn-secondary col-3 ms-2"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger col-3 ms-2"
                      onClick={() => handleDeleteTodo(todo)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant2;
