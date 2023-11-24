// export interface AddUser {
//   firstName: string;
//   lastName: string;
//   displayName: string;
//   userName: string;
//   domain: number;
//   autoCreatePassword: boolean;
//   password: string;
//   requireChangePassword: boolean;
//   sendPasswordEmail: boolean;
//   passwordSendEmail: string;
//   role: number;
// }
export interface AddUser {
  fullName: string;
  username: string;
  email:string;
  password: string;
  roleId: number;
  userTypeId: number;
}
