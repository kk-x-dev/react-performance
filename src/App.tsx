import { useState, type ChangeEvent, type JSX } from "react";
import { SignUpForm } from "./component/SignUpForm";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

type User = {
  userName: string,
  age: number
}

// function Greet({ userName, age }: User): JSX.Element {
//   return <h1>{userName} is {age} year old</h1>
// }

// function CanVote({ age }: { age: number }): JSX.Element {
//   return (
//     <>
//       {age >= 18 ? (
//         <h1></h1>
//       ) : (
//         <h1></h1>
//       )}
//     </>
//   )
// }

// function ToggleText(): JSX.Element {
//   console.log("toggle text is called")
//   const [show, setShow] = useState<boolean>(false)
//   return (
//     <>
//       <button className="bg-amber-200 p-2" onClick={() => setShow(!show)}>Click Me</button> <br />
//       {show ? (
//         <button>Log In</button>
//       ) : (
//         <button>sign In</button>
//       )}
//     </>
//   )
// }

// function InputText(): JSX.Element {
//   const[val,setVal]=useState<string>("")
//   const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
//         const currentText = event.target.value
//         if(currentText.length<=5){
//           setVal("length is so small")
//         }
//         else{
//           setVal(event.target.value)
//         }
//   }
//   return (
//     <div>
//       <input type="text" onChange={handleChange} /> <br />
//       <p>{val}</p>
//     </div>
//   )
// }
interface todo {
  id: number,
  text: string,
  completed: boolean
}

function Todolist(): JSX.Element {
  const todos: todo[] = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
    { id: 3, text: "Finish coding project", completed: false }
  ];
  return (
    <ul>
      {todos.map((todo: todo) => (
        <li key={todo.id
        }>
          {todo.text}
        </li>
      ))}
    </ul>
  )

}

// function HomePage():JSX.Element{
//   return(
//     <h1>This is Home Page</h1>
//   )
// }
function AboutPage():JSX.Element{
  return(
    <h1>This is About Page</h1>
  )
}
function ContactPage():JSX.Element{
  return(
    <h1>This is Contact Page</h1>
  )
}
function NotFoundPage():JSX.Element{
  return(
    <h1>404 Page Not Found</h1>
  )
}

export const App = (): JSX.Element => {
  console.log("app is called")
  return (
    <div>
      {/* <Greet userName="raju" age={22} />
      <CanVote age={2} />
      <ToggleText />
      <InputText/> */}
      {/* <Todolist /> */}
      {/* <SignUpForm/> */}

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}