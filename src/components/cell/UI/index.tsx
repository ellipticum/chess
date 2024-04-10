import { useEffect, useState } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import ICell from '../model/cell.ts'

import useCellStore from '../model/store.ts'

import usePlayerStore from '../../board/model/player.ts'
import useBoardStore from '../../board/model/store.ts'

import moves from '../model/moves.ts'
import isEqual from '../model/is-equal.ts'

interface Props extends ICell {}

const Cell = ({ number, letter, color, figure }: Props) => {
    const { cells, setCells } = useBoardStore()
    const { selected, setSelected } = useCellStore()
    const { player, toggle } = usePlayerStore()

    const props = { number, letter, color, figure }

    const [isAvailable, setIsAvailable] = useState(false)

    const isVertical = (number: number) => number === 1
    const isHorizontal = (letter: string) => letter === 'a'

    const isSelected = selected && selected.number === number && selected.letter === letter

    useEffect(() => {
        if (selected) {
            setIsAvailable(Boolean(moves(selected, props)))
        } else {
            setIsAvailable(false)
        }
    }, [selected])

    useEffect(() => {
        toggle()

        console.log(true)

        setSelected(null)
    }, [cells])

    const handleClick = () => {
        if (figure && figure.color === player) {
            setSelected({ number, letter, color, figure })
        }

        if (selected && selected.figure && isAvailable) {
            setCells((prevState) => {
                return prevState.map((row) => {
                    return row.map((cell) => {
                        if (isEqual(cell, props)) {
                            cell.figure = selected.figure
                        }

                        if (isEqual(cell, selected)) {
                            cell.figure = null
                        }

                        return cell
                    })
                })
            })

            toggle()
        }
    }

    return (
        <div
            className={cn(styles.cell, styles[color], {
                [styles.selected]: isSelected
            })}
            onClick={() => handleClick()}
        >
            {figure && (
                <img className={styles.figure} src={`/images/${figure.image}.png`} alt='Pawn' />
            )}
            {isAvailable && <div className={styles.indicator}></div>}
            {isHorizontal(letter) && <span className={styles.number}>{number}</span>}{' '}
            {isVertical(number) && <span className={styles.letter}>{letter}</span>}
        </div>
    )
}

export default Cell
