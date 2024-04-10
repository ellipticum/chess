import { create } from 'zustand'

enum Player {
    White = 'white',
    Black = 'black'
}

interface IState {
    player: Player
    toggle: () => void
}

const usePlayerStore = create<IState>((set) => ({
    player: Player.White,
    toggle: () =>
        set((state) => ({
            player: state.player === Player.White ? Player.Black : Player.White
        }))
}))

export default usePlayerStore
