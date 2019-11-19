class Deck {
	constructor() {
		this.deck = []
	}

	// generates a deck of cards
	generate_deck () {

		// creates card generator function for 
		let card = (suits, values) => {

			//returns key and values into each instance of the this.deck array
            		return {suits,values}
       	 	}

		let values = ['2', '3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = ['&#9827', '&#9824', '&#9830', '&#9829']

        for ( let s = 0; s < suits.length; s++ ){
            for ( let v = 0; v < values.length; v++ ){
                           this.deck.push(card(suits[s], values[v]))
                    }

		}
    }
    print_deck () {
			for ( let c = 0; c < this.deck.length; c++ ) {
	       			console.log(this.deck[c])
			}
	}
	
        }
deck = new Deck()
deck.generate_deck()
deck.print_deck()