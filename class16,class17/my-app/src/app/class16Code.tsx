
import { client } from "../sanity/lib/client";



  // async function fetchExternalData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await response.json();
  //   return data;
  // }

  // async function uploadDataToSanity() {
  //   const extractedData = await fetchExternalData();
  //   {
  //     extractedData.map(async (item: any, ind: number) => {
  //       try {
  //         const doc = {
  //           _id: (ind + 1).toString(),
  //           _type: "authorType", // Document type in your schema
  //           name: item.name, // Map fields from the API response
  //           slug: { current: item.id },
  //         };

  //         const result = await client.createOrReplace(doc); // Create or update the document
  //         console.log("Document uploaded:", result);
  //       } catch (error) {
  //         console.error("Error uploading document:", error);
  //       }
  //     });
  //   }
  // }

  // uploadDataToSanity();

  //   async function postAuthorToSanity(authorData: any) {
  //     const transformedAuthor = {
  //       _type: "author", // Schema type
  //       name: authorData.name, // Name of the author
  //       slug: { current: authorData.name.toLowerCase() }, // Generate slug from username
  //       bio: [
  //         {
  //           _type: "block",
  //           style: "normal",
  //           children: [
  //             {
  //               _type: "span",
  //               text: `Contact: ${authorData.email}, Phone: ${authorData.phone}, Website: ${authorData.website}`,
  //             },
  //           ],
  //         },
  //       ],
  //     };

  //     try {
  //       const result = await client.createOrReplace({
  //         _id: `author-${authorData.id}`, // Unique document ID
  //         ...transformedAuthor,
  //       });
  //       console.log("Author uploaded:", result);
  //     } catch (error) {
  //       console.error("Error posting author:", error);
  //     }
  //   }
  //   const users = await fetchExternalData();
  //   for (const user of users) {
  //     await postAuthorToSanity(user);
  //   }
  //   async function fetchPosts() {
  //     const query = `*[_type == "author"]{ name, slug }`;
  //     const posts = await client.fetch(query);
  //     return posts;
  //   }

  //   let fetchedPost = await fetchPosts();
  //   console.log("Fetched Posts:", fetchedPost);
  //   return (
  //     <div>
  //       <h1>Revision About Hackathon</h1>
  //     </div>
  //   );
