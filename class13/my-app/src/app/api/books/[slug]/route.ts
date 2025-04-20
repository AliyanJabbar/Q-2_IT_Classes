import { NextRequest, NextResponse } from "next/server";


interface Context{
    params:{slug:string}
}

export async function GET(req: NextRequest, context: Context) {
    const params = await context.params; // Await the params object
    const slug = params.slug  
    // console.log(slug);

    // db connection
    // const res= await db.findOne(params.slug)
    // after db connected 
    // return NextResponse.json({ message: `Dynamic API route for slug: ${res}` });
    
    return NextResponse.json({ message: `Dynamic API route for slug: ${slug}` });
}
