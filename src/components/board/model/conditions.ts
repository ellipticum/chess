export const condition = (letter: string) => ({
    rock: letter === 'a' || letter === 'h',
    knight: letter === 'b' || letter === 'g',
    bishop: letter === 'c' || letter === 'f',
    queen: letter === 'd',
    king: letter === 'e'
})

export const fabric = (number: number, letter: string) => {
    return [
        {
            condition: number === 2,
            name: 'pawn',
            color: 'white',
            image: 'wp'
        },
        {
            condition: number === 7,
            name: 'pawn',
            color: 'black',
            image: 'bp'
        },
        {
            condition: number === 1 && condition(letter).rock,
            name: 'rock',
            color: 'white',
            image: 'wr'
        },
        {
            condition: number === 8 && condition(letter).rock,
            name: 'rock',
            color: 'black',
            image: 'br'
        },
        {
            condition: number === 1 && condition(letter).knight,
            name: 'knight',
            color: 'white',
            image: 'wn'
        },
        {
            condition: number === 8 && condition(letter).knight,
            name: 'knight',
            color: 'black',
            image: 'bn'
        },
        {
            condition: number === 1 && condition(letter).bishop,
            name: 'bishop',
            color: 'white',
            image: 'wb'
        },
        {
            condition: number === 8 && condition(letter).bishop,
            name: 'bishop',
            color: 'black',
            image: 'bb'
        },
        {
            condition: number === 1 && condition(letter).queen,
            name: 'queen',
            color: 'white',
            image: 'wq'
        },
        {
            condition: number === 8 && condition(letter).queen,
            name: 'queen',
            color: 'black',
            image: 'bq'
        },
        {
            condition: number === 1 && condition(letter).king,
            name: 'king',
            color: 'white',
            image: 'wk'
        },
        {
            condition: number === 8 && condition(letter).king,
            name: 'king',
            color: 'black',
            image: 'bk'
        }
    ]
}
