// pages need to be made inside corresponding folders. The about page for my website needs to be inside a folder called "about", same idea for "contact", "menu" etc.

// 💭 This is the equivalent of creating a new route in React Router, but instead of defining a route in a <Route /> component, we create a new folder - with the page name - and page.js file in the /app directory.

export default function AboutPage() {
  return (
    <>
      <h1> About Page </h1>
    </>
  );
}
