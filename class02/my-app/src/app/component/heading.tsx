// component aik function hai js/ts ka
// component html ka parent element return krta hai
// component ka pehla letter capital hoga
// component re-useable hai
// component me js/ts ke andar html & css likh sakte hain
// component me html ke andar js/ts bhi likh sakte hain


// component ka folder app ke andar bhi bana sakte hain or bahir bhi bana sakte hain

interface Props { //defining type for props
    name:string 
    cast: string 
    age: number
}
export default function Heading(props:Props){
    // console.log(props) //checking props
    return (
        <div>
            <h1>Hello dear {props.name} {props.cast}. {props.name} {props.cast}'s age is {props.age}</h1>
        </div>
    )
}
