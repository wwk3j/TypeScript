// interface Ctor<T> {
    // new(): T;
// }
interface Lengthed<T> {
    length: T;
}
declare function create<U, C extends Lengthed<U>>(long: C): U;
// declare function create<T>(l: Lengthed<T>): T;
// class A { a }
let a = create('foo'); // should be A
