import {TaskStatusType} from "./TaskStatusType";
import {TimeInterval} from "./TimeInterval";

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
  timeIntervalList: TimeInterval[];
}
