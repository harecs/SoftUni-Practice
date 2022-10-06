function calculateSalary(input) {
    let openTabsNum = parseInt(input[0]);
    let salary = Number(input[1]);

    for (let tabIndex = 2; tabIndex <= openTabsNum + 2; tabIndex++) {
        let currentTab = input[tabIndex]

        if (currentTab === "Facebook") {
            salary -= 150;
        } else if (currentTab === "Instagram") {
            salary -= 100;
        } else if (currentTab === "Reddit") {
            salary -= 50;
        }
    }

    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}