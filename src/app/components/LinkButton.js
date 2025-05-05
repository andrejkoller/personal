import Link from "next/link";

export const LinkButton = ({ href, isExternal }) => {
  return (
    <div className="link-button-container">
      <div className="link-button-content">
        <h4 id="linkButton" className="link-button">
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
