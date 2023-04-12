import CatEvent from "@/src/components/events/catEvent";
import Image from "next/image";
import Link from "next/link";

const EventCatPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName} />
);

export default EventCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPath = events_categories.map((ev) => {
    return {
      params: { cat: ev.id.toString() },
    };
  });
  // console.log(allPath);
  return {
    paths: allPath,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  // console.log(data);
  return {
    props: { data, pageName: id },
  };
}
