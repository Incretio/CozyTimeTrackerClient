import {Tag} from "./Tag";

export class Task {
  id: number;
  number: string;
  name: string;
  description: string;
  tagsList: Tag;
  status: string;
  progress: number;
  timeLeftToday?: string;
  timeLeftAll?: string;
  timeLimit?: string;
}
