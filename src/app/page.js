import Rows from "@/components/rows";
import PostsPage from "./posts/page";
import newPostForm from "./posts/page";
export default function HomePage() {
  return (
    <>
      <h1>Ph0t0Bl0g </h1>
      <h3>Get inspired</h3>
      <newPostForm />
      
    </>
  );
}
// I need to add a form button to this page where users can upload their own image URLs and photographer names to the database and have them rendered on the page.