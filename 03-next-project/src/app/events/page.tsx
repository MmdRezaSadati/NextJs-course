import EventCard from "@/components/EventCard/EventCard";
import SearchForm from "@/components/SearchForm/SearchForm";
import { getEvents } from "@/core/api/events";
interface EventPageProps {
  searchParams: {
    page: string;
    search: string;
  };
}
const EventsPage = async ({ searchParams }: EventPageProps) => {
  const { page, search } = searchParams;
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      <SearchForm />
      <p>page : {page}</p>
      <p>search : {search}</p>
      <div className="flex flex-wrap gap-2">
        {events.map((value) => (
          <EventCard value={value} key={value.title} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
