export default function Product(props:any) {
  console.log(props.params.product)
  return (
    <div>
      <h1>Products Details of {props.params.product}</h1>
    </div>
  );
}
