import ICell from './cell.ts'

const moves = (initial: ICell, target: ICell) => {
    if (!initial.figure) {
        return
    }

    const dx = Math.abs(target.letter.charCodeAt(0) - initial.letter.charCodeAt(0))
    const dy = Math.abs(target.number - initial.number)
    const sameColumn = initial.letter === target.letter
    const sameRow = initial.number === target.number
    const direction = initial.figure.color === 'white' ? 1 : -1

    switch (initial.figure.name) {
        case 'pawn':
            const isFirstMove =
                (initial.figure.color === 'white' && initial.number === 2) ||
                (initial.figure.color === 'black' && initial.number === 7)

            const forwardMove = target.number === initial.number + direction

            const doubleForwardMove =
                isFirstMove && target.number === initial.number + 2 * direction

            const attackMove = dx === 1 && dy === 1 && target.figure

            return (
                (target.letter === initial.letter && (forwardMove || doubleForwardMove)) ||
                attackMove
            )

        case 'knight':
            return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)

        case 'bishop':
            return dx === dy && dx > 0

        case 'rook':
            return (sameColumn || sameRow) && (dx > 0 || dy > 0)

        case 'queen':
            return (dx === dy || sameColumn || sameRow) && (dx > 0 || dy > 0)

        case 'king':
            return dx <= 1 && dy <= 1

        default:
            return false
    }
}

export default moves
