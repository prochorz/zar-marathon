type ConcatFn = (...args: Array<string>) => string

const concat: ConcatFn = (...args) => args.join();

concat('Hello ', 'World') // -> Hello World;

/* */

interface MyHometask {
    howIDoIt: string,
    simeArray: Array<string|number>,
    withData?: Array<MyHometask>
}

const myHometask: MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

/* */

interface MyArray<T> {
    [N: number]: T;

    reduce(fn: (previousValue: T, currentValue: T, currentIndex?: number, array?: T[]) => T): T;
    reduce<U>(fn: (previousValue: U, currentValue: T, currentIndex: number, array?: T[]) => U, initialValue?: U): U;
}

const myArray: MyArray<number> = [1,2,3,4,5];
const myArray2: MyArray<number|string> = [1,2,3,4,'5'];

myArray.reduce((acc, value) => acc + value);
myArray.reduce((acc, value) => acc + value, 10);
myArray2.reduce((acc, value) => `${acc} + ${value}`);