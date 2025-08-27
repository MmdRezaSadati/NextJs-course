import { IEvent } from "../types/IEvent";

export const getEvents = async (): Promise<IEvent[]> => {
  const res = await fetch(
    "https://68acab60b996fea1c08a9849.mockapi.io/api/v1/users/2/events?page="
  );
  if (!res.ok) {
    throw new Error("failed to fetch events");
  }
  return res.json();
};
