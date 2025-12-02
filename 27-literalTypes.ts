// Literal type (unlike general - string, number)

let userRole: 'admin' | 'user' = 'user';

console.log(userRole);

let possibleResults: [1 | 2 | 3, 1];
possibleResults = [2, 1];
