import ICell from '../../board/model/cell.ts'

class Figure {
    name: string
    color: string
    image: string

    constructor(name: string, color: string, image: string) {
        this.name = name
        this.color = color
        this.image = image
    }

    move(initial: ICell, target: ICell) {
        if (initial !== target) {
            console.log('moved')
        }
    }
}

export default Figure
