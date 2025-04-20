export default function Home() {
  return (
    <div>
      <h1 className="flex justify-center mt-[100px] text-4xl font-bold text-blue-600">
        Welcome Shadcn UI
      </h1>
      <hr />
      <h1 className="flex justify-center mt-[100px] text-4xl font-bold text-blue-600">Welcome Backend</h1>
      <div className="flex justify-center mt-[50px]">
        <ul>
          <h1>API</h1>
          <h2>Api methods</h2>
          <li>Get (jab read karen ga)</li>
          <li>Post (jab create karen ga)</li>
          <li>Fetch (jab fetch karen ga)</li>
          <li>Delete (jab delete karen ga)</li>
        </ul>
      </div>
    </div>
  );
}
