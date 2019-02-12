

export interface TodoItem {
  id: string;
  description: string;
  completed: boolean;
}

export interface TodoList {
  items: TodoItem[];
}


