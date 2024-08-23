import { observer } from 'mobx-react-lite';
import './TodoItem.css';
import {TodoItemData} from '../../../TodoStore';

interface TodoItemProps {
  data: TodoItemData;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = observer(({ data, onDelete, onToggleStatus }) => {
  const handleComplete = () => {
    onToggleStatus(data.id);
  };

  const handleDelete = () => {
    onDelete(data.id);
  };

  const itemClass = data.isActive ? 'todo-isActive' : 'todo-isNotActive';

  return (
    <div className={`todo-item ${itemClass}`}>
      <div className="todo-item-wrapper">
        <div className="todo-label">
          <h4>todo: </h4>
          {data.title}
        </div>
        <div className="todo-description">
          <h4>доп.описание: </h4>
          {data.description}
        </div>
        <div className="todo-other-info">
          <div className="other-info">
            <div className="status-info">
              <h4>статус: </h4>
              {data.isActive ? 'не завершено' : 'завершено'}
            </div>
            <div className="deadline-info">
              <h4>дедлайн: </h4>
              {data.deadline}
            </div>
          </div>
          <div className="todo-item-buttons">
            {data.isActive && (
              <button onClick={handleComplete}>
                <img className="todo-item-btn" src="/Check.png" alt="Check" />
              </button>
            )}
            <button onClick={handleDelete}>
              <img className="todo-item-btn" src="/delete.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TodoItem;