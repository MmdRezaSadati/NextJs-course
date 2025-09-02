import EventCard from "@/components/EventCard/EventCard";
import { getEvents } from "@/core/api/events";

const EventsPage = async () => {
  const events = await getEvents();

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="flex flex-wrap gap-2">
        {events.map((value) => (
          <EventCard value={value} key={value.title} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
