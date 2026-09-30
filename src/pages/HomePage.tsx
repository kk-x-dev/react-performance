import { useState } from "react";
import { Header } from "../component/Header";
import { UserContext } from "../context";
import { Couter } from "../component/Couter";
import { Couter2 } from "../component/Couter2";

export const HomePage = () => {
    console.log("Home Page Called")
    // const [userName, setUserName] = useState<string>("ram")
    return (
        <div>
            <h1>This is Home Page</h1>
            {/* <UserContext.Provider value={userName}>
                <Header />
            </UserContext.Provider> */}
            <Couter/>
            <Couter2/>
        </div>
    )
}