import React, { useRef, useState } from 'react';

const TodosVariant1 = () => {
  //create a ref for the input field to capture the entered input in a fn comp
  const todoInput = useRef('');
  console.log(todoInput);

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'complete task #2',
    },
    {
      id: 2,
      title: 'complete task #9',
    },
  ]);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoInput.current.value,
      },
    ]);
  };

  const handleDeleteTodo = ({id}) => {
    setTodoList(todoList.filter((todo)=>todo.id !== id))
  }

  return (
    <div style={{ backgroundColor: '#ddd', padding: '20px' }}>
      <h3>Todos App with useState and useRef</h3>

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
              {todoList.map((todo) => {
                return (
                  <li className="list-group-item row" key={todo.id}>
                    {todo.title}
                    <button
                      type="button"
                      className="btn btn-secondary col-3 ms-2"
                      onClick={()=>handleEditTodo(todo)}
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger col-3 ms-2" onClick={()=> handleDeleteTodo(todo)}>
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

export default TodosVariant1;
