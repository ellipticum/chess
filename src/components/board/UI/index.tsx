import cn from 'classnames'

import styles from './styles.module.scss'

const Board = () => {
    const cells: { letter: string; color: string, number: number }[][] = []

    const letters = new Map([
        [0, 'a'],
        [1, 'b'],
        [2, 'c'],
        [3, 'd'],
        [4, 'e'],
        [5, 'f'],
        [6, 'g'],
        [7, 'h']
    ])

    for (let i = 0; i < 8; i++) {
        cells[i] = []

        for (let j = 0; j < 8; j++) {
            const letter = letters.get(j)
            const number = 7 - i

            const color = i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0 ? 'white' : 'black'

            if (!letter) {
                return
            }

            cells[i].push({
                letter,
                number,
                color
            })
        }
    }

    return (
        <div className={styles.board}>
            {
                cells.map(row => {
                    return (
                        <div className={styles.row}>
                            {row.map(cell => {
                                return <div className={cn(styles.cell, styles[cell.color])}>{cell.letter} {cell.number + 1}</div>
                            })}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Board