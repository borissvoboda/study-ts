function add(a: number, b: number): number {
  // return "hello"; // error

  return 1;
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

/*
never - special type, override of void.
It will never finish; the prog. will crash.
Subtle diff.

*/
