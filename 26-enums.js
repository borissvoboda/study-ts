var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
var editorRole = 1;
console.log(userRole);
console.log(editorRole);
var Role_v2;
(function (Role_v2) {
    Role_v2[Role_v2["Admin"] = 1] = "Admin";
    Role_v2[Role_v2["Editor"] = 2] = "Editor";
    Role_v2[Role_v2["Guest"] = 3] = "Guest";
})(Role_v2 || (Role_v2 = {}));
var Role_v3;
(function (Role_v3) {
    Role_v3["Admin"] = "Admin";
    Role_v3["Editor"] = "Editor";
    Role_v3["Guest"] = "Guest";
})(Role_v3 || (Role_v3 = {}));
