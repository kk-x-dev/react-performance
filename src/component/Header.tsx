import { Profile } from "./Profile";


export const Header=()=>{
    console.log("Header Called")
    return(
        <div>
            <h1>This is Header</h1>
            <Profile/>
        </div>
    )
}