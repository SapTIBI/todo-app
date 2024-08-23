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
            Создать новый пост
          </button>
        </div>
        {/* Фильтры и другие настройки */}
      </div>
      <div className="todo-list">
        {store.todoItems.map((todoItem) => (
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