function aggregateElements(numbers) {
    function sum(nums) {
        let result = 0;

        nums.forEach(num => {
            result += num;
        });

        return result;
    }

    const sumInversed = function(nums) {
        let result = 0;

        for (const num of nums) {
            result += 1 / num;
        }

        return result;
    }

    const concat = nums => nums.join('');

    console.log(sum(numbers));
    console.log(sumInversed(numbers));
    console.log(concat(numbers));
}