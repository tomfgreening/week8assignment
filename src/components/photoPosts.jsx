import photoPostsStyles from "@/components/photoPosts.module.css";
import { db } from "@/app/Utilities/dbConnection";
export default async function PhotoPosts() {
  const posts = (await db.query("SELECT * FROM posts")).rows;
  return (
    <div className={photoPostsStyles.rows}>
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
    </div>
  );
}
