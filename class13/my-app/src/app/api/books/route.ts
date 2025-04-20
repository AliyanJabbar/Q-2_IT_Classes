import { NextRequest, NextResponse } from "next/server";

// GET
export function GET(request: NextRequest) {
  //request is the parameter given by next
  //function ke name ki jaga method ka name. The method name should be capital

  const url = request.nextUrl;
  const searchParams = url.searchParams;
  // 1. Name
  // console.log("Request:",request.url);
  // console.log(request.nextUrl)
  // console.log(url.searchParams)
  const name = url.searchParams.get("name");
  const age = url.searchParams.get("age");

  if (age === "18") {
    return new NextResponse(`Salam ${name}, your age is ${age}`);
  }
  return NextResponse.json({ name: name, age: age, url: url });



  // 2. token
  const token = searchParams.has("token"); //if search params contain the "token" than has will return true else return false
  // if (token) {
  // return NextResponse.json({ message: "You are authorize", token});
  // }
  // else return NextResponse.json({ message: "You are not authorize", token });
}


// POST
export async function POST(req: NextRequest) {
  // return new NextResponse("My Name is aliyan")
  // const body = await req.json();

  const {name,age,_id}= await req.json() //destructuring from body

  // data connect await db.create({name,age,_id})  //saving data in database
  // return NextResponse.json({name,age,_id});
  return new NextResponse(`User ${name} created`)


  // console.log(body)
  // if (body.token) {
  //   return NextResponse.json({ ...body, message: "You are authorize" });
  // }
  // return NextResponse.json({ ...body, message: "You are not authorize" });
  // return NextResponse.json(body);
}


//UPDATE OR PUT
export async function PUT(req: NextRequest) {

  const {name,age,_id}= await req.json() //destructuring from body

  // data connect await db.updateOne({name,age,_id})  //updating data in database
  // return NextResponse.json({name,age,_id});
  return new NextResponse(`User ${name} updated`)

}


//DELETE
export async function DELETE(req: NextRequest) {
  // return new NextResponse("My Name is aliyan")
  // const body = await req.json();

  const {_id}= await req.json() //destructuring from body

  // data connect await db.deleteOne({_id})  //updating data in database
  return new NextResponse(`User deleted!`)

}
