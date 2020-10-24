const numberOnetoNineteen = (number, flag = false) => {
    switch (parseInt(number)) {
        case 1:
            return "one";
        case 2:
            if (flag) return "twenty";
            return "two";
        case 3:
            if (flag) return "thirty";
            return "three";
        case 4:
            if (flag) return "forty";
            return "four";
        case 5:
            if (flag) return "fifty";
            return "five";
        case 6:
            if (flag) return "sixty";
            return "six";
        case 7:
            if (flag) return "seventy";
            return "seven";
        case 8:
            if (flag) return "eighty";
            return "eight";
        case 9:
            if (flag) return "ninety";
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        default:
            return "";
    }
};
module.exports = function toReadable(number) {
    let numberString = "";

    if (number === 0) return "zero";

    if (number > 99) {
        numberString += `${numberOnetoNineteen((number + "")[0])} hundred `;
    }
    if (number % 100 > 19) {
        numberString += `${numberOnetoNineteen(
            ((number % 100) + "")[0],
            true
        )} `;
        numberString += `${numberOnetoNineteen(((number % 100) + "")[1])}`;
    } else numberString += `${numberOnetoNineteen(number % 100)}`;

    return numberString.trim();
};
