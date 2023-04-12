import Image from "next/image";
import Link from "next/link";

export const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
          <a className="card">
            <Image width={400} height={300} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};
