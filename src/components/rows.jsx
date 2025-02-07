import rowStyles from "@/components/rows.module.css";
import db from "@/app/Utilities/dbConnection.js";

export default async function PostsPage() {
  const posts = (await db.query("SELECT * FROM posts")).rows;
  return (
    <container className={rowStyles.rows}>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img
              src={post.photourl}
              alt={post.alt}
              height={500}
              width={500}
              priority="false"
              placeholder="blur"
            />
            <p> Photo by {post.photographer}</p>
          </li>
        ))}
      </ul>
    </container>
  );
}
