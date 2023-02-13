function solution() {
    let text = '';

    return {
        append: input => text += input,
        removeStart: n => text = text.substring(n),
        removeEnd: n => text = text.substring(0, text.length - n),
        print: () => console.log(text)
    }
}