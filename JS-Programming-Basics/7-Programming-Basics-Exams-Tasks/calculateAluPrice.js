function calculateAluPrice([arg1, arg2, arg3]) {
    let aluCount = parseInt(arg1);
    let aluType = arg2.toUpperCase();
    let delivery = arg3.toLowerCase();
    let totalPrice = 0;

    if (aluCount < 10) {
        console.log("Invalid order");
    } else {
        switch (aluType) {
            case "90X130":
                totalPrice = aluCount * 110;
            // GLEDAY >= ILI >!!!
                if (aluCount > 30 && aluCount <= 60) {
                    totalPrice *= 0.95;
                } else if (aluCount > 60) {
                    totalPrice *= 0.92;
                }
                break;
            case "100X150":
                totalPrice = aluCount * 140;
            // GLEDAY >= ILI >!!!
                if (aluCount > 40 && aluCount <= 80) {
                    totalPrice *= 0.94;
                } else if (aluCount > 80) {
                    totalPrice *= 0.90;
                }
                break;
            case "130X180":
                totalPrice = aluCount * 190;
            // GLEDAY >= ILI >!!!
                if (aluCount > 20 && aluCount <= 50) {
                    totalPrice *= 0.93;
                } else if (aluCount > 50) {
                    totalPrice *= 0.88;
                }
                break;
            case "200X300":
                totalPrice = aluCount * 250;
            // GLEDAY >= ILI >!!!
                if (aluCount > 25 && aluCount <= 50) {
                    totalPrice *= 0.91;
                } else if (aluCount > 50) {
                    totalPrice *= 0.86;
                }
                break;
        }

        if (delivery === "with delivery") {
            totalPrice += 60;
        }

        if (aluCount > 99) {
            totalPrice *= 0.96;
        }

        console.log(`${totalPrice.toFixed(2)} BGN`);
    }
}

calculateAluPrice(["40", 
"90X130",
"Without delivery"]);
calculateAluPrice(["105",
"100X150",
"With delivery"]);
calculateAluPrice(["2",
"130X180",
"With delivery"]);