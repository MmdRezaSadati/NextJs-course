import { getEvents } from "@/core/api/events";

const EventsPage = async () => {
  const events = await getEvents();
  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="flex flex-wrap gap-2">
        {events.map((value) => (
          <div className="p-10 text-center bg-blue-950" key={value.title}>
            <h5>title: {value.title}</h5>
            <p>category: {value.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
