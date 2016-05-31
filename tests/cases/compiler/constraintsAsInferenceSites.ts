interface Ctor<T> {
    new(): T;
}
declare function create<U, C extends Ctor<U>>(ctor: C): U;
class A { a }
let a = create(A); // should be A
