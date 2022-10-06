function calculate([arg1, arg2, arg3]) {
    let deposit = Number(arg1);
    let months = Number(arg2);
    let percentage = Number(arg3);
    let depositEnd = deposit + months * ((deposit * (percentage / 100)) / 12);
    console.log(depositEnd);
}