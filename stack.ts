import { strict } from "assert/strict";

export class Stack<T>{
    private stack: T[] = [];
    constructor () {
    }
    push (elem: T): void {
        this.stack.push(elem);

    }
    pop (): T {
        if (!this.stack.length) {
            throw new RangeError("Index out of bounds - pop empty Stack");
        }
        let out: T = this.stack[this.stack.length - 1];
        this.stack.pop();
        return out;
    }
    isEmpty (): boolean {
        return this.stack.length == 0;
    }
    peek(): T {
        if (!this.stack.length) {
            throw new RangeError("Index out of bounds - peek empty Stack");
        }
        return  this.stack[this.stack.length - 1];       
    }
    length (): number {
        return this.stack.length;
    }
}