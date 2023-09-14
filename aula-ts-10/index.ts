type Identity<TIPO> = {
    content: TIPO;
}

function identity<TIPO>(value: TIPO): Identity<TIPO> {
    return { content: value };
}

console.log(identity<number>(42).content); // 42
console.log(identity<string>("Hello").content); // Hello
console.log(identity<number[]>([1,2,3]).content); // [1, 2, 3]
