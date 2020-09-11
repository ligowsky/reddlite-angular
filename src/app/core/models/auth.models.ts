import { AuthApiContract } from '../contracts';

export interface AuthCredentials {
  identifier: string;
  password: string;
}

export interface Auth {
  jwt: string;
  user: {
    id: number;
    username: string;
  };
}

export function getAuthModel(contract: AuthApiContract): Auth {
  return {
    jwt: contract.jwt,
    user: contract.user,
  };
}
