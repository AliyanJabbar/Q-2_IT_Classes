//if we gave the name of the route folder in app as user  than This is a static route because we have decided that it is route of user. But if we use [user] than we can get it through any name

const UserPage = async (props:any) => {
  // console.log(props) // it is giving something like { params: { user: 'user' }, searchParams: {} } here params is an object which contains the name of our dynamic route which is user here and the value of user will be the name by which we are getting it in the browser after http://localhost:3000/
  const url = "https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=1"
  const fetchedData = await fetch(url,
    {cache:"no-cache"} //for dynamic pages1 //ager data same hai to cache(computer ki storage) kre ga means jo fetch kia hai wohi render kr de ga
    // {cache:"no-store"} //for dynamic pages2 //no store kabhi bhi data cache(computer ki storage) me store nhi karega.
    // {next:{revalidate:2000}} //for static pages //ab yeh har 2seconds bad build banaye ga or changes check kare ga, ager honge to update kr dega. Isme humen bar bar build banane ki need nhi hoti. build hum backend me banayen ge.
  )
  // console.log(fetchedData)
  const res = await fetchedData.json()
  // console.log(res)
  return (
    // this is known as fragment "<> </>"
    <> 
    <h1>{res.data[0].firstname}</h1>
    </>
  )
}

export default UserPage
