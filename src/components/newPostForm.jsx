export default function newPostForm() {
    async function handleSubmit(formValues) {
      "use server";
      const photoURL = formValues.get("photo_url");
      const photographer = formValues.get("photographer");
      const uploadedBy = formValues.get("your_name");
      const altText = formValues.get("alt_text");
      db.query(
        `INSERT INTO posts (photo_url, photographer, your_name, alt_text) VALUES ($1, $2, $3, $4)`,
        [photoURL, photographer, uploadedBy, altText]
      );
    }
    return (
      <>
        <h2>Upload your favourite photograph to the photoblog!</h2>
        <form action={handleSubmit}>
          <label htmlFor="bird_name">Bird name: </label>
          {/* the name attribute gives an identifier to the input, so I can target each input specifically */}
          {/* it is recommended that the name attribute value matches the table column where the data will be stored */}
          <input
            type="text"
            name="bird_name"
            id="bird_name"
            className="text-emerald-600"
          />
  
          <label htmlFor="bird_size">Bird size: </label>
          <input
            type="text"
            name="bird_size"
            id="bird_size"
            className="text-emerald-600"
          />
  
          <label htmlFor="fluffiness">Fluffiness: </label>
          <input
            type="number"
            name="fluffiness"
            id="fluffiness"
            min={1}
            max={10}
            className="text-emerald-600"
          />
  
          <label htmlFor="bird_colour">Colour: </label>
          <input
            type="text"
            name="bird_colour"
            id="bird_colour"
            className="text-emerald-600"
          />
  
          <label htmlFor="personality">Personality: </label>
          <input
            type="text"
            name="personality"
            id="personality"
            className="text-emerald-600"
          />
  
          <button
            type="submit"
            className="border-amber-600 border-4 m-4 hover:bg-sky-700"
          >
            Submit your bird
          </button>
        </form>
      </>
    );
  }