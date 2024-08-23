import { observer } from 'mobx-react-lite';
import TodoItem from './TodoItem/TodoItem';
import './TodoList.css';
import TodoStore, {TodoItemData} from '../../TodoStore';
import CreateTodoModal from './CreateTodoItem/CreateTodoItem';
import { useState } from 'react';
interface TodoListProps {
  store: TodoStore;
}

const TodoList: React.FC<TodoListProps> = observer(({ store }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedButton, setSelectedButton] = useState(1);

    const handleSelectButton = (btnIndex: number) => {
      setSelectedButton(btnIndex);
    }

    const filteredTodoItems = store.todoItems.filter((todoItem) => {
      if (selectedButton === 3) {
          return todoItem.isActive;
      } else if (selectedButton === 2) {
          return !todoItem.isActive;
      }
      return true;
  });

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
  
    const handleAddTodo = (newTodo: TodoItemData) => {
        store.addTodo(newTodo);
  };

    const handleDelete = (id: number) => {
        store.deleteTodo(id);
    };

    const handleToggleStatus = (id: number) => {
        store.toggleTodoStatus(id);
    };

  return (
    <div className="todo-content">
      <div className="todo-settings-part">
        <div className="create-new-todo">
          <button className="createNewBtn" onClick={handleOpenModal}>
            +TODO
          </button>
        </div>
        <div className="view-mode-menu">
          <h4>Показывать:</h4>
          <div className="view-mode-wrapper">
            <button onClick={() => {handleSelectButton(1)}} 
            className={`mode-btn all ${selectedButton === 1 ? 'selected-mode' : ''}`}></button>
            <button onClick={() => {handleSelectButton(2)}} 
            className={`mode-btn complete ${selectedButton === 2 ? 'selected-mode' : ''}`}></button>
            <button onClick={() => {handleSelectButton(3)}} 
            className={`mode-btn active ${selectedButton === 3 ? 'selected-mode' : ''}`}></button>
          </div>
        </div>
        {/* Фильтры и другие настройки */}
      </div>
      <div className="todo-list">
        {filteredTodoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            data={todoItem}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
          />
        ))}
      </div>
      {showModal && <CreateTodoModal onSave={handleAddTodo} onClose={handleCloseModal} />}
    </div>
  );
});

export default TodoList;