import axios from 'axios';

const BASE_URL = 'https://6869635a2af1d945cea1c907.mockapi.io/api/v1/users';

export interface User {
  id: string;
  username: string;
  password: string;
}

export async function login(username: string, password: string): Promise<User | null> {
  const { data } = await axios.get<User[]>(BASE_URL, {
    params: { username, password }
  });
  return data.length > 0 ? data[0] : null;
}

