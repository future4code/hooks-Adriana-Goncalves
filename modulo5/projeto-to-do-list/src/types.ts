export type User = {
  id: number;
  name: string;
  nickname: string;
  email: string;
};

export type Task = {
    id: number;
    title: string;
    description: string;
    limitDate: Date;
    creatorUserId: string;
  };
  
