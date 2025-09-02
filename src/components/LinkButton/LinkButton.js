import Link from "next/link";
import styles from "./LinkButton.module.css";

export const LinkButton = ({ href, isExternal }) => {
  return (
    <div className={styles.linkButtonContainer}>
      <div className={styles.linkButtonContent}>
        <h4 className={styles.linkButton}>
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
