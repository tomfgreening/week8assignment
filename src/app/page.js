import Rows from "@/components/rows";
import PostsPage from "./Utilities/dbConnection";

export default function HomePage() {
  return (
    <>
      <h1>Ph0t0Bl0g </h1>
      <h3>Get inspired</h3>
      <PostsPage />
      
    </>
  );
}
