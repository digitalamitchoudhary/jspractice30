// function createCounter(init) {
//     let current = init;
//     return {
//         increment: () => ++current,
//         decrement: () => --current,
//         reset: () => {
//             current = init;
//             return current;
//         }
//     };
// }

// const counter = createCounter(6);

// console.log(counter.increment()); // 6
// console.log(counter.increment()); // 7
// console.log(counter.decrement()); // 6
// console.log(counter.reset());     // 5
// console.log(counter.decrement()); // 4

// ✅ Pehle once function define karo
function once(fn) {
    let called = false;
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
}

// ✅ Fir use karo
function greet(name) {
    console.log("Hello, " + name);
}

const greetOnce = once(greet);

greetOnce("Ali");   // Output: Hello, Ali
greetOnce("Sara");  // ❌ Kuch nahi hoga


