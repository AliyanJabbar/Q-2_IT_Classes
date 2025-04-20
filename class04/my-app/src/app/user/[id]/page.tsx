import Heading from "../../../../component/Heading";

export default async function UserDet(props:any) {
    let url = `https://jsonplaceholder.typicode.com/users/${props.params.id}`
    let fetchedData =await fetch(url)
    let res =await fetchedData.json()
    // console.log(props.params.id)
  return (
    <div>
      <Heading text={`${res.name} Details:`} />
      <Heading text={`ID: ${res.id}`} />
      <Heading text={`Email:${res.email}`} />
    </div>
  );
}
