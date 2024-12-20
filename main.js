// nested function scope
let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
    inner();
}
outer();
