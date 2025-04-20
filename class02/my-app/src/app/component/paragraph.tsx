export default function Paragraph(props:any){ //using props to make it dynamic
    // console.log(props) //checking props 
    return(
        <div>
            <p>{props.text}</p>
        </div>
    )
}