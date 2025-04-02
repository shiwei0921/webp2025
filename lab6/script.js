function tree(n) {
    printTreeTop(n);
    printTreeBottom(n);
}

function printTreeTop(n) {
    for (let i = 0; i < n; i++) {
        let spaces = repeatchar(' ', n - i - 1);
        let stars = repeatchar('*', 2 * i + 1);
        console.log(spaces + stars);
    }
}

function printTreeBottom(n) {
    for (let i = 0; i < 3; i++) {  // 樹幹高度固定 3 層
        let spaces = repeatchar(' ', n - 1);
        console.log(spaces + '*');
    }
}

function repeatchar(arg_char, count) {
    return arg_char.repeat(count);
}