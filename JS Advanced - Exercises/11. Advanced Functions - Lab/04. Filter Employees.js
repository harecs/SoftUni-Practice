function filterEmployees(input, criteria) {
    let employees = JSON.parse(input);
    let [key, value] = criteria.split('-');

    employees
        .filter(x => x[key] == value || key == 'all')
        .forEach((x, i) => console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`));
}