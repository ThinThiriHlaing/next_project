import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => {
  return (
    <div className="home-body">
      {data.map((ev) => (
        <Link key={ev.id} href={`events/${ev.id}`} legacyBehavior>
          <a className="card">
            <div className="image">
              <Image width={500} height={400} src={ev.image} alt={ev.title} />
            </div>
            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
