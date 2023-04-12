import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/Apple_logo_black.svg.png";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image src={img} alt="mac-logo" width={30} height={40} />
          <nav>
            <ul>
              <li>
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/events" legacyBehavior>
                  <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href="/about-us" legacyBehavior>
                  <a>AboutUs</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>This is Home Page!</h1>
      </div>
    </header>
  );
};
