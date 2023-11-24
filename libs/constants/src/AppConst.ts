export const authRole = {
  Admin: ['admin'],
  User: ['user', 'admin'],
};

export const defaultUser: any = {
  uid: 'john-alex',
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: '/assets/images/avatar/A11.jpg',
};
export const allowMultiLanguage = process.env.NX_MULTILINGUAL === 'true';
export const baseUrl = process.env.NX_BASE_URL as string ?? 'https://admin.accountsdash.com/api/';
export const fileStackKey = process.env.NX_FILESTACK_KEY as string;
export const initialUrl = '/dashboard'; // this url will open after login
// export const initialUrl = process.env.NX_INITIAL_URL as string; // this url will open after login
