//// [constraintsAsInferenceSites.ts]
interface Ctor<T> {
    new(): T;
}
declare function create<U, C extends Ctor<U>>(ctor: C): U;
class A { a }
let a = create(A); // should be A


//// [constraintsAsInferenceSites.js]
var A = (function () {
    function A() {
    }
    return A;
}());
var a = create(A); // should be A
