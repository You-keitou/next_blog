import Image from "next/image";
import utilStyles from "@/styles/utils.module.css";

export const Icon = () => {
  return (
    <>
      <Image
        className={utilStyles.borderCircle}
        src={"/imgs/IMG_0311.JPG"}
        height={144}
        width={144}
        alt="jinyang"
        priority
      ></Image>
    </>
  );
};
