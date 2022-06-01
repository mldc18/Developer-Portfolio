import Link from "next/link";

type NewtabLinkProps = {
  href: string;
  text: string;
};

const NewtabLink = (props: NewtabLinkProps) => {
  const { href, text } = props;
  return (
    <Link href={href}>
      <a target="_blank">{text}</a>
    </Link>
  );
};

export default NewtabLink;
