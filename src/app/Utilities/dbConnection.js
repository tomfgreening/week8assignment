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
            {post.photourl} {post.photographer}
          </li>
        ))}
      </ul>
    </div>
  );
}
