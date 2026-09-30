import { useCounterStore } from "../store/CounterStore";

type CouterProps = {
    id: number,
    name: string
};

export const Couter = () => {
    console.log("Counter called")
    const count = useCounterStore((state) => state.count)
    // const { usernam } = useCounterStore()
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button className="px-6 border mr-2" onClick={increment}>+</button>
            <button className="px-6 border" onClick={decrement}>-</button>
        </div>
    )
};