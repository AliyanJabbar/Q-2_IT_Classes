export default async function Home() {
  const url = "http://localhost:3000/api/books";
  const fetchedData = await fetch(url);
  const res =await fetchedData.json();
  // console.log(res.name);
  return (
    <div>
      <h1 className="flex itesm-center justify-center text-4xl mt-[100px]">How to make api</h1>
      <h1 className="flex itesm-center justify-center text-4xl mt-[100px]">Api Routes</h1>
      <h1 className="flex itesm-center justify-center text-4xl mt-[100px]">My name is {res.name}</h1>
    </div>
  );
}
