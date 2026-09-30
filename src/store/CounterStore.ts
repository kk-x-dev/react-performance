import { create } from 'zustand'

type CounterState = {
    count: number
    usernam: string
    increment: () => void
    decrement: () => void
    setName: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    usernam: "g",
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setName: () => set((state) => ({ usernam: state.usernam + 8 })),
    reset: () => set({ count: 0 }), // Direct state overwrite
}))
