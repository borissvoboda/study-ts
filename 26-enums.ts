enum Role {
  Admin, //0
  Editor,
  Guest
}

let userRole: Role = Role.Admin;
let editorRole: Role = 1;

console.log(userRole);
console.log(editorRole);

enum Role_v2 {
  Admin = 1,
  Editor,
  Guest
}

enum Role_v3 {
  Admin = 'Admin',
  Editor = 'Editor',
  Guest = 'Guest'
}
