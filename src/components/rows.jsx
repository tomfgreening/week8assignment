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
      {/* <Image
        src={photo1}
        alt="Photograph of retro TVs and gaming consoles."
        width={500}
        height={750}
        priority="false"
        placeholder="blur"
      /> */}
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
      <Image src={photo6} alt="Photograph of a commodore 64 gaming system." height={500} width={500} priority="false" placeholder="blur" />
      <Image src={photo7} alt="Photograph of sunset over Vernazza, Italy."height={500} width={500} priority="false" placeholder="blur"/>
      <Image src={photo8} alt="Photograph of lava dripping into the ocean from a volcano in Hawaii" height={500} width={500} priority="false" placeholder="blur"/>
      <Image src={photo9} alt="Photograph of Shibuya crossing in Tokyo, Japan" height={500} width={500} priority="false" placeholder="blur"/>
      <Image src={photo10} alt="Photograph of dotonbori street in Osaka, Japan"height={500} width={500} priority="false" placeholder="blur"/>
    </container>
  );
}
