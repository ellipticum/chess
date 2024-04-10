import Figure from '../../figure/model/figure.ts'

interface ICell {
    letter: string
    color: string
    number: number
    figure: Figure | null
}

export default ICell
