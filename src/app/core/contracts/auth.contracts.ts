export interface AuthApiContract {
  jwt: string;
  user: {
    id: number;
    username: string;
  };
}
