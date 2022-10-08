export enum ExamTaskSubject {
  math,
  english,
  german,
  it,
  biology,
}

export interface ExamTask {
  id: string;
  question: string;
  solution: string;
  metadata?: {
    classLevel: number;
    subject: ExamTaskSubject;
  };
}
