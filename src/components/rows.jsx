import rowStyles from "@/components/rows.module.css";
import Image from "next/image";
import photo2 from "@/../public/Assets/Images/photo2.jpg";
import photo1 from "@/../public/Assets/Images/photo1.jpg";
import photo3 from "@/../public/Assets/Images/photo3.jpg";
import photo4 from "@/../public/Assets/Images/photo4.jpg";
import photo5 from "@/../public/Assets/Images/photo5.jpg";
import acidavian from "@/../public/Assets/Images/acidavian.jpg";

export default function Rows() {
  return (
    <container className={rowStyles.rows}>
      <Image
        src={photo2}
        alt="Photograph of two people riding in a vintage pink car in Las Vegas Nevada."
        width={500}
        height={500}
        priority="false"
        placeholder="blur"
      />
      <Image
        src={photo1}
        alt="Photograph of retro TVs and gaming consoles."
        width={500}
        height={750}
        priority="false"
        placeholder="blur"
      />
      <Image
        src={photo3}
        alt="Photograph of various entertainment machines in an arcade."
        height={500}
        width={500}
        priority="false"
        placeholder="blur"
      />
      <Image
        src={photo4}
        alt="Photograph of a starry milkyway in the sky."
        height={500}
        width={500}
        priority="false"
        placeholder="blur"
      />
      <Image
        src={photo5}
        alt="Photograph of an indoor light exhibiton in an art gallery."
        height={500}
        width={500}
        priority="false"
        placeholder="blur"
      />
      <Image src={acidavian} height={500} width={500} />
    </container>
  );
}
