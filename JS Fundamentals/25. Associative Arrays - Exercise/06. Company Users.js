function printCompanyUsers(input) {
    let companyUsers = {};

    for (const line of input) {
        let [company, user] = line.split(' -> ');

        if (companyUsers[company]) {
            if (!companyUsers[company].includes(user)) { 
                companyUsers[company].push(user);
            } 
        } else {
            companyUsers[company] = [user];
        }
    }

    sortedCompanies = Object.keys(companyUsers).sort((a, b) => a.localeCompare(b));
    let finalCompanyUsers = {};

    for (const company of sortedCompanies) {
        finalCompanyUsers[company] = companyUsers[company];
    }

    Object.entries(finalCompanyUsers).forEach((kvp) => {
        console.log(kvp[0]);

        for (const user of kvp[1]) {
            console.log(`-- ${user}`);
        }
    });
}

printCompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
printCompanyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);