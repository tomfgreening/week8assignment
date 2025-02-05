import Link from "next/link";
// This is next.js optimised anchor tag. This anchors an element to a component. In this example, we are creating a navigational header bar that we want anchored to the top of the screen across all our pages on the website.

export default function Header() {
  return (
    <>
      <h1>Main app title</h1>
      <nav>
        <Link href={"/"}> Home </Link>
        <Link href={"/about"}> About us </Link>
        <Link href={"/contact"}> Get in touch </Link>
        <Link href={"/posts/1"}> Post 1 </Link>
      </nav>
    </>
  );
}
