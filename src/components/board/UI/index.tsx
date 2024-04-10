import styles from './styles.module.scss'

import Cell from '../../cell/UI'

import useBoardStore from '../model/store.ts'

const Board = () => {
    const { cells } = useBoardStore()

    if (!cells) {
        return
    }

    return (
        <div className={styles.board}>
            {cells.map((row) => {
                return (
                    <div className={styles.row}>
                        {row.map((cell) => {
                            return <Cell {...cell} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board
