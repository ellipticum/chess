import ICell from '../../board/model/cell.ts'

import styles from './styles.module.scss'
import cn from 'classnames'

interface Props extends ICell {}

const Cell = ({ number, letter, color, figure }: Props) => {
    const isVertical = (number: number) => number === 1
    const isHorizontal = (letter: string) => letter === 'a'

    return (
        <div className={cn(styles.cell, styles[color])} onClick={() => {}}>
            {figure && (
                <img className={styles.figure} src={`/images/${figure.image}.png`} alt='Pawn' />
            )}
            {isHorizontal(letter) && <span className={styles.number}>{number}</span>}{' '}
            {isVertical(number) && <span className={styles.letter}>{letter}</span>}
        </div>
    )
}

export default Cell
