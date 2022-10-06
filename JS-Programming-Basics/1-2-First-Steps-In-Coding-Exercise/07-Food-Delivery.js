function calculatePrice([arg1, arg2, arg3]) {
    let chickenMenus = parseInt(arg1);
    let fishMenus = parseInt(arg2);
    let vegeterianMenus = parseInt(arg3);

    let menusPrice = (chickenMenus * 10.35) + (fishMenus * 12.40) + (vegeterianMenus * 8.15);
    let dessertPrice = menusPrice * 0.20;
    let totalPrice = menusPrice + dessertPrice + 2.50;

    console.log(totalPrice);
}