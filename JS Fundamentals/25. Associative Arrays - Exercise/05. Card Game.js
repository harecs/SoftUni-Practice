function solution(input) {
    let players = generateHands(input);
    let cardMapper = {
        p: {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14
        },
        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1
        }
    };

    Object.keys(players).forEach((player) => {
        console.log(`${player}: ${totalDeckPower(players[player])}`);
    });

    function totalDeckPower(cardSet) {
        totalPower = 0;

        cardSet.forEach((card) => {
            let tokens = card.split('');

            let value = tokens.slice(0, tokens.length - 1).join('');
            let suit = tokens.slice(-1).join('');

            let p = 0;

            if (!cardMapper.p[value]) {
                p = Number(value);
            } else {
                p = cardMapper.p[value];
            }

            totalPower += (p * cardMapper.t[suit]);
        });

        return totalPower;
    }

    function generateHands(arr) {
        let obj = {};

        arr.forEach((playerInfo) => {
            let [player, cards] = playerInfo.split(': ');

            if (!obj[player]) {
                obj[player] = new Set(cards.split(', '));
            } else {
                cards.split(', ').forEach((card) => {
                    obj[player].add(card);                    
                });
            }
        });

        return obj;
    }
}

solution([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);
solution([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);