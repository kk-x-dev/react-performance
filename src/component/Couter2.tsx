import { useCounterStore } from "../store/CounterStore";

type CouterProps = {
    id: number,
    name: string
};

export const Couter2 = () => {
    console.log("Counter 2 called")
    const { usernam ,setName } = useCounterStore()
    return (
        <div>
            <h1>Count: {usernam}</h1>
            <button className="px-6 border mr-2" onClick={setName}>+</button>
        </div>
    )
};