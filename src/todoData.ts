export interface ATodo {
    heading: string;
    description: string;
    priority: "medium" | "urgent" | "low";
    completed: boolean;
  }
  
  export const TodoArr: ATodo[] = [];