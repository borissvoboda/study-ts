/*
W/ interfaces you can def func types/
*/

type SumFnType = (a: number, b: number) => number; // function type

let sum: SumFn; // making sure sum can only store values of that function type

sum = (a, b) => a + b; // assigning a value that adheres to that function type

// Or def func type via interface

interface SumFnIntf {
  (a: number, b: number): number;
}
