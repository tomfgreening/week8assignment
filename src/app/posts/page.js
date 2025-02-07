// export default async function PostsPage({ params }) {
//   const idParams = await params;
//   console.log(idParams);
//   return (
//     <>
//       <h1>ID Page</h1>
//       <p>{idParams.id}</p>
//     </>
//   );
// }

// The params prop is used make dynamic URLs posts/post1, for example. In the above example, we are calling a user post by it's id. Hence the {idParams.id

export default async function PostsPage() {
  const posts = (await db.query("SELECT * FROM posts")).rows;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.photourl} alt={post.alt} height={500} width={500} priority="false" placeholder="blur"/>
            <p> Photo by {post.photographer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}