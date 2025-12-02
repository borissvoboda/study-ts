// enum Role {
//   Admin, //0
//   Editor,
//   Guest
// }

// let userRole: Role = 1;

// type is TS keyword, just as enum
type MyNumber = number; // makes no sense but works
type Role = 'admin' | 'editor';
type User = {
  name: string;
  age: number;
  role: Role;
  permission: Array<string>;
};

type Agent = {
  name: string;
  version: string;
};

type Accessor = User & Agent;

function access(userRole) {}

let user1: Accessor;

user1.version = '1.1';
