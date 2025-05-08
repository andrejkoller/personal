import Link from "next/link";
import styles from "./LinkButton.module.css";

export const LinkButton = ({ href, isExternal }) => {
  return (
    <div className={styles["link-button-container"]}>
      <div className={styles["link-button-content"]}>
        <h4 className={styles["link-button"]}>
          <Link href={href} target={isExternal ? "_blank" : "_self"}>
            +
          </Link>
        </h4>
        <div className="round-animation-one"></div>
        <div className="round-animation-two"></div>
      </div>
    </div>
  );
};
