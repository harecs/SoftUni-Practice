function solution(command) {

    function addOneVote(typeOfVote) {
        this[typeOfVote] += 1;
    }

    function reportPostInfo() {
        const neededTotalVotesForObfuscation = 50;
        let reportedUpvotes = 0;
        let reportedDownvotes = 0;
        let totalVotesBeforeObfuscation = this.upvotes + this.downvotes;

        if (totalVotesBeforeObfuscation > neededTotalVotesForObfuscation) {
            [reportedUpvotes, reportedDownvotes] = obfuscate(this.upvotes, this.downvotes);

        } else {
            reportedUpvotes = this.upvotes;
            reportedDownvotes = this.downvotes;
        }

        return [
            reportedUpvotes,
            reportedDownvotes,
            reportedUpvotes - reportedDownvotes,
            calculateRating(this.upvotes, this.downvotes)
        ];

        function obfuscate(upvotes, downvotes) {
            let numberForAdding = Math.ceil(Math.max(upvotes, downvotes) * 0.25);

            return [(upvotes + numberForAdding), (downvotes + numberForAdding)];
        }

        function calculateRating(upvotes, downvotes) {
            if ((upvotes / (upvotes + downvotes) * 100) > 66) {
                return 'hot';
            } else if ((upvotes - downvotes) >= 0 && (upvotes + downvotes) > 100) {
                return 'controversial';
            } else if ((upvotes - downvotes) < 0) {
                return 'unpopular';
            } else {
                return 'new';
            }
        }
    }

    if (command == 'upvote') {
        addOneVote.call(this, 'upvotes');
    } else if (command == 'downvote') {
        addOneVote.call(this, 'downvotes');
    } else if (command == 'score') {
        return reportPostInfo.call(this);
    }
}

// test input

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']

console.log(score);

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');       // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']


console.log(score);