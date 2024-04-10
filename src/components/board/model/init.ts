import ICell from '../../cell/model/cell.ts'

import letters from './letters.ts'

import { fabric } from './conditions.ts'

import Figure from '../../figure/model/figure.ts'

const init = () => {
    const cells: ICell[][] = []

    for (let i = 0; i < 8; i++) {
        cells[i] = []

        for (let j = 0; j < 8; j++) {
            const letter = letters.get(j) as string
            const number = 8 - i

            const color =
                (i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0) ? 'white' : 'black'

            let figure = null

            fabric(number, letter).forEach((entity) => {
                if (entity.condition) {
                    figure = new Figure(entity.name, entity.color, entity.image)
                }
            })

            cells[i].push({
                letter,
                number,
                color,
                figure
            })
        }
    }

    return cells
}

export default init
