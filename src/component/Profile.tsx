import type React from "react";
import { useContext } from "react";
import { UserContext } from "../context";

export const Profile=()=>{
    console.log("Profile Called")
    const userName = useContext(UserContext)
    return(
        <div>
            <h1>This is Profile</h1>
            <p>hellow {userName}</p>
        </div>
    )
}