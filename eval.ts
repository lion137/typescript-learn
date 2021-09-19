import { Stack } from "./stack";

let stack = new Stack<string>();

stack.push("A");
console.log(stack);
stack.pop();
console.log(stack.length());
