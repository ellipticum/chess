import { create } from 'zustand'

import ICell from './cell.ts'

import init from './init.ts'

interface IState {
    cells: ICell[][] | undefined
    setCells: (cells: ICell[][] | ((prevState: ICell[][]) => ICell[][])) => void
}

const useBoardStore = create<IState>((set) => ({
    cells: init(),
    setCells: (value) =>
        set((state) => ({ cells: typeof value === 'function' ? value(state.cells) : value }))
}))

export default useBoardStore
