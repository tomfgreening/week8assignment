import Link from "next/link";
import headerStyles from "@/components/header.module.css";
// This is next.js optimised anchor tag. This anchors an element to a component. In this example, we are creating a navigational header bar that we want anchored to the top of the screen across all our pages on the website.

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <h1>Your favourite photoblog</h1>
      <nav>
        <Link href={"/"}> Home </Link>
        <Link href={"/about"}> About us </Link>
        <Link href={"/contact"}> Get in touch </Link>
      </nav>
    </header>
  );
}
