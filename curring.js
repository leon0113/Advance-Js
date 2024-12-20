function sum(a, b, c) {
    return a + b + c;
}

function curring(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c);
            }
        }
    }
}

const curriedSum = curring(sum);
console.log(curriedSum(1)(2)(3));