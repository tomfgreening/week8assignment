import rowStyles from "@/components/rows.module.css";
import Image from "next/image";
import photo2 from "@/../public/Assets/Images/photo2.jpg";

export default function rows() {
  return (
    <container className={rowStyles.rows}>
      <Image
        src={photo2}
        alt="Two people riding in a vintage pink car in Las Vegas Nevada."
        width={500}
        height={500}
        priority="false"
        placeholder="blur"
      />
    </container>
  );
}
