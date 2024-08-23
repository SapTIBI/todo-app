import { makeAutoObservable } from 'mobx';

export interface TodoItemData {
  id: number;
  title: string;
  description: string;
  deadline: string;
  isActive: boolean;
}

class TodoStore {
  todoItems: TodoItemData[] = [
    {
      id: 1,
      title: 'title 1',
      description: 'some description 1',
      deadline: '21-08-2024',
      isActive: true,
    },
    {
      id: 2,
      title: 'title 2',
      description: 'some description 2',
      deadline: '12-08-2024',
      isActive: false,
    },
    {
      id: 3,
      title: 'title 3',
      description: 'some description 3',
      deadline: '01-09-2024',
      isActive: true,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todoItem: TodoItemData) => {
    this.todoItems.push(todoItem);
  };

  deleteTodo = (todoId: number) => {
    this.todoItems = this.todoItems.filter((todo) => todo.id !== todoId);
  };

  toggleTodoStatus = (todoId: number) => {
    const todo = this.todoItems.find((item) => item.id === todoId);
    if (todo) {
      todo.isActive = !todo.isActive;
    }
  };
}

export default TodoStore;