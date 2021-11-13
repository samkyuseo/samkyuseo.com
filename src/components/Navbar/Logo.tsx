import { Link, Image } from "@chakra-ui/react";
const Logo = () => {
  return (
    <Link href="/" variant="nav-logo">
      <Image boxSize="25px" src="/coffee.svg" />
      samkyuseo
    </Link>
  );
};

export default Logo;
