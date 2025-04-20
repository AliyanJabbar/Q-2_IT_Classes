interface Val {
  id: number;
  username: string;
  email: string;
  age: number;
}

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/users");
  const res = await data.json();
  console.log(res);
  return (
    <div>
      {res.map((val: Val) => (
        <h1 className="w-full mx-auto mt-10 text-2xl">
          {val.username} is {val.age} years old having {val.email} email
        </h1>
      ))}
    </div>
  );
}
