import ICell from './cell.ts'

const isEqual = (current: ICell, target: ICell) => {
    return current.letter === target.letter && current.number === target.number
}

export default isEqual
