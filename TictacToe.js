let positions = Array(9).fill().map((value, index) => index);
let activePlayer = 'x';
const TicTacToe = {
    getPositions: () => {
        return positions.filter(value => value !== 'x' && value !== 'o');
    },

    getActivePlayer: () => {
        return activePlayer;
    },

    play: (slot, player) => {

        if (slot > 9 || player !== activePlayer) {
            return;
        }
        if ((positions[slot - 1] !== 'x') && positions[slot - 1] !== '0') {
            positions[slot - 1] = player;

            if(player === 'x'){
                activePlayer = 'o';
            }else{
                activePlayer = 'x';
            }
        }
    },

    reset:()=>{
        positions = positions.map((value, index) => index);
        activePlayer = 'x';
    }
};


describe('TicTacToe allows players to place moves and play the game', () => {
    it('starts with all 9 positions empty and player X gets the first chance', () => {
        expect(TicTacToe.getPositions().length).toEqual(9);
        expect(TicTacToe.getActivePlayer()).toEqual('x');
    });

    it('moves can only be made in one of the 9 slots', () => {
        TicTacToe.play(10, 'x');
        expect(TicTacToe.getPositions().length).toEqual(9);
    });

    it('moves will fill the slot and change the active player', () => {
        TicTacToe.play(7, 'x');
        expect(TicTacToe.getPositions().length).toEqual(8);
        expect(TicTacToe.getActivePlayer()).toEqual('o');
    });

    it('same player cannot play twice in row', () => {
        TicTacToe.play(6, 'o');
        expect(TicTacToe.getPositions().length).toEqual(7);
        TicTacToe.play(5, 'o');
        expect(TicTacToe.getPositions().length).toEqual(7);
    });

    it('moves can only be made at empty slots', () => {
        TicTacToe.play(5, 'x');
        expect(TicTacToe.getPositions().length).toEqual(6);
        TicTacToe.play(5, 'o');
        expect(TicTacToe.getPositions().length).toEqual(6);
    });

    it('reset will reset the game to start state', () => {
    });

    describe('each move determines if game is won or draw', () => {

        it('player wins if a row is filled', () => {
        });
        it('player wins if column is filled', () => {
        });
        it('player wins if diagonal id filled', () => {
        });
        it('if all 9 positions are filled the game is draw', () => {
        });
    });
    
});
