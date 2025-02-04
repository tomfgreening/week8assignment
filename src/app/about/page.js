// pages need to be made inside corresponding folders. The about page for my website needs to be inside a folder called "about", same idea for "contact", "menu" etc.

// 💭 This is the equivalent of creating a new route in React Router, but instead of defining a route in a <Route /> component, we create a new folder - with the page name - and page.js file in the /app directory.

export default function AboutPage() {
  return (
    <>
      <h1> About Page </h1>
      Founded by Jake Kelly, a Brighton-based vegan DJ, our restaurant is more
      than just a dining experience – it’s a celebration of flavour, community,
      and sustainability. Jake has been a fixture of Brighton’s vibrant music
      scene for years, spinning tracks that bring people together. His journey
      into veganism was inspired by his love for animals, the planet, and a
      desire to lead a kinder, more conscious life.
      <br />
      <br />
      Now, he’s combining his culinary passion with his musical roots to create
      a space where everyone can enjoy delicious plant-based food in a
      welcoming, upbeat atmosphere. Every dish on our menu is crafted with care,
      using fresh, locally-sourced ingredients that reflect Jake’s commitment to
      quality and sustainability. <br />
      <br />
      Whether you’re a long-time vegan, just curious, or somewhere in between,
      Jake’s Vegan Restaurant offers something for everyone – from hearty
      classics to bold, innovative dishes. Come for the food, stay for the vibe
      – Jake’s Vegan Restaurant is a place to connect, relax, and enjoy the best
      of Brighton’s plant-based scene. Join us and experience the unique blend
      of flavours and rhythms that Jake Kelly brings to the table. <br />
      <br />
      We can’t wait to welcome you!
    </>
  );
}
