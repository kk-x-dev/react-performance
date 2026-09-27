import { useState } from "react";
import { Header } from "../component/Header";
import { UserContext } from "../context";

export const HomePage = () => {
    console.log("Home Page Called")
    const [userName, setUserName] = useState<string>("ram")
    return (
        <div>
            <h1>This is Home Page</h1>
            <UserContext.Provider value={userName}>
                <Header />
            </UserContext.Provider>
        </div>
    )
}