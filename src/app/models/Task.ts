import {Tag} from "./Tag";
import {TaskStatusType} from "./TaskStatusType";

export class Task {
  id: number;
  number: string;
  name: string;
  description: string;
  tagsList: string[];
  status: TaskStatusType;
  progress: number;
  timeLeftToday?: string;
  timeLeftAll?: string;
  timeLimit?: string;
  show?: boolean;
}
