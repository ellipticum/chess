import { create } from 'zustand'

import ICell from './cell.ts'

interface IState {
    selected: ICell | null
    setSelected: (cell: ICell | null) => void
}

const useCellStore = create<IState>((set) => ({
    selected: null,
    setSelected: (selected: ICell | null) => set({ selected })
}))

export default useCellStore
