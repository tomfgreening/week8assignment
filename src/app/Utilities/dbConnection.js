import pg from "pg";

const dbConnectionString = process.env.DATABASEURL;
const db = new pg.Pool({
  connectionString: dbConnectionString,
});

export default async function PostsPage() {
  const posts = (await db.query("SELECT * FROM posts")).rows;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.photourl} alt={post.alt}/>
            <p> Photo by {post.photographer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
