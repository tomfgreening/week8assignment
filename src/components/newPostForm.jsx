// import { db } from "@/Utilities/dbConnection";
// export default function newPostForm() {
//     async function handleSubmit(formValues) {
//       "use server";
//       const photoURL = formValues.get("photo_url");
//       const photographer = formValues.get("photographer");
//       const uploadedBy = formValues.get("your_name");
//       const altText = formValues.get("alt_text");
//       db.query(
//         `INSERT INTO posts (photo_url, photographer, your_name, alt_text) VALUES ($1, $2, $3, $4)`,
//         [photoURL, photographer, uploadedBy, altText]
//       );
//     }
//     return (
//       <>
//         <h2>Upload your favourite photograph to the photoblog!</h2>
//         <form action={handleSubmit}>
//           <label htmlFor="photo_url">Upload photograph URL: </label>
//           <input
//             type="text"
//             name="photourl"
//             id="photourl"
//             className="text-emerald-600"
//           />
  
//           <label htmlFor="photographer">Photographer name: </label>
//           <input
//             type="text"
//             name="photographer"
//             id="photographer"
//             className="text-emerald-600"
//           />
  
//           <label htmlFor="your_name">Your name: </label>
//           <input
//             type="text"
//             name="uploaded_by"
//             id="uploaded_by"
//             className="text-emerald-600"
//           />
  
//           <label htmlFor="alt_text">Alt text </label>
//           <input
//             type="text"
//             name="alt"
//             id="alt"
//             className="text-emerald-600"
//           />
  
//           <button
//             type="submit"
//             className="border-amber-600 border-4 m-4 hover:bg-sky-700"
//           >
//             Submit
//           </button>
//         </form>
//       </>
//     );
//   }