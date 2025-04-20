import Heading from "../../../component/Heading";
import Link from "next/link";

const UserList = async () => {
    let url = "https://jsonplaceholder.typicode.com/users"
    let fetchedData = await fetch(url)
    let res = await fetchedData.json()
  return (<div>
    <Heading text="Users List"/>
    <ol>
        {res.map((val:{name:string,id:number},i:number)=><Link href={`user/${val.id}`} key={i}><li>{val.name}</li></Link>)}
    </ol>
  </div>);
};

export default UserList;
