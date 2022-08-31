import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-4 bg-blue-100 text-center">
      <div className="flex items-center justify-around">
        <Link href="/ssr">
          <a>SSR (server side rendering )</a>
        </Link>
        <Link href="/">
          <a>CSR (client side rendered )</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
