/*
In JS, func is a value.
Can be stored as a value.

Function type
*/

// not type
// const logMsg = (msg: string) => {
//   console.log(msg);
// };

function performJob(cb: (m: string) => void) {
  //cb = callback as an arg
  //cb: () => void // function type, what kind of f we exp.
  //..
  //cb: (m: string) // cb func must accept one string as a param

  cb();
}
