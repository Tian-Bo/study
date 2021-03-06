function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// fibs()
let [first, second, third, fourth, fifth, sixth] = fibs()
console.log(first, second, third, fourth, fifth, sixth)