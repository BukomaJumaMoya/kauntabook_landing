import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Define a mapping of platform names to their corresponding colors
const socialColors: { [key: string]: string } = {
  facebook: "#1877f2",
  twitter: "#1DA1F2",
  instagram: "#C13584",
  linkedin: "#0077B5",
  youtube: "#FF0000",
  pinterest: "#E60023",
  snapchat: "#FFFC00",
};

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="padding-container max-container flex w-full flex-col gap-20 bg-green-60 pt-20 lg:pt-30"
    >
      <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
        <div>
          <Link href="/">
            <Image
              src="/images/Logo/kb-logo.svg"
              alt="logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-col gap-5 max-w-[400px] my-10">
            <h3 className="bold-18 text-white">
              Vision:{" "}
              <span className="regular-16 text-white">
                To become the leading global platform for student financial
                management, revolutionizing the way families, schools, and
                students interact with their finances.
              </span>
            </h3>
            <h3 className="bold-18 text-white">
              Mission:{" "}
              <span className="regular-16 text-white">
                To empower busnisesses with innovative financial management
                solutions, fostering transparency, efficiency.
              </span>
            </h3>
          </div>
          {/* SOCIALS */}
          <div className="flex flex-col gap-5">
            <ul className="regular-14 flex gap-4 text-white">
              {SOCIALS.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <Image
                      src={link.image}
                      alt="logo"
                      width={24}
                      height={24}
                      color={socialColors[link.name.toLowerCase()]}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LEARN MORE  */}
        <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn key={columns.title} title={columns.title}>
              <ul className="regular-14 flex flex-col gap-4 text-white">
                {columns.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={classNames(
                        link.current ? "bg-black" : "hover:opacity-100",
                        "rounded-md font-normal opacity-50 hover:text-black space-links"
                      )}
                      aria-current={link.href ? "page" : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
        </div>
      </div>
      <div className="border bg-gray-50" />
      <p className="regular-14 w-full text-center text-white">
        &copy; 2024 Kauntabook | All rights reserved
      </p>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap text-white">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
