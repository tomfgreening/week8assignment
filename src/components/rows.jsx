import rowStyles from "@/components/rows.module.css";
import Image from "next/image";
import photo2 from "@/../public/Assets/Images/photo2.jpg";
import photo1 from "@/../public/Assets/Images/photo1.jpg";
import photo3 from "@/../public/Assets/Images/photo3.jpg";
import photo4 from "@/../public/Assets/Images/photo4.jpg";
import photo5 from "@/../public/Assets/Images/photo5.jpg";
import photo6 from "@/../public/Assets/Images/photo6.jpg";
import photo7 from "@/../public/Assets/Images/photo7.jpg";
import photo8 from "@/../public/Assets/Images/photo8.jpg";
import photo9 from "@/../public/Assets/Images/photo9.jpg";
import photo10 from "@/../public/Assets/Images/photo10.jpg";
import acidavian from "@/../public/Assets/Images/acidavian.jpg";



export default async function PostsPage() {
  const posts = (await db.query("SELECT * FROM posts")).rows;
  return (
    <container className={rowStyles.rows}> 
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <img src={post.photourl} alt={post.alt} height={500} width={500} priority="false" placeholder="blur"/>
            <p> Photo by {post.photographer}</p>
          </li>
        ))}
      </ul>
  </container>
  );
}