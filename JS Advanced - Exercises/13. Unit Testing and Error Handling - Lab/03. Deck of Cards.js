function printDeckOfCards(cardsInput) {
    function createCard(input) {
        let inputArray = input.split('');
        let suit = inputArray.pop();
        let face = inputArray.join('');

        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if (!validFaces.includes(face) || !suits.hasOwnProperty(suit)) {
            let error = new Error('Invalid card!');
            error.card = input;

            throw error;
        }

        return {
            face: face,
            suit: suits[suit],
            toString: function () {
                return this.face + this.suit;
            }
        };
    }

    try {
        let cards = [];

        cardsInput.forEach((x) => {
            let card = createCard(x);
            cards.push(card.toString());
        });

        console.log(cards.join(' '));
    } catch (error) {
        console.log(`Invalid card: ${error.card}`);
    }
}