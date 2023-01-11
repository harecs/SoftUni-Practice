function matchAndPrintDates(input) {
    let pattern = /\b(?<day>\d{2})(?<seperator>[\.\-\/])(?<month>[A-Z][a-z]{2})\k<seperator>(?<year>\d{4})\b/g;
    let validDates = input.toString().matchAll(pattern);

    for (const date of validDates) {
        let day = date.groups.day;
        let month = date.groups.month;
        let year = date.groups.year;

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}