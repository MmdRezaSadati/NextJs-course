import BookingForm from "@/components/BookingForm/BookingForm";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import React, { FC } from "react";
interface IProps {
  params: {
    id: string;
  };
}
export interface IBookEventResponse {
  message: string;
}
const bookEvent = async (
  prevState: IBookEventResponse,
  formData: FormData
): Promise<IBookEventResponse> => {
  "use server";
  const eventId = formData.get("eventId");
  const userId = "2";
  try {
    const res = await fetch(
      `https://68acab60b996fea1c08a9849.mockapi.io/api/v1/events/${eventId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          participants: [userId],
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (!res.ok) {
      return { message: "booking failed! please try again" };
    }
    return { message: "Event Booked successfully" };
  } catch (error) {
    return { message: "network error" };
  }
};
const EventPage: FC<IProps> = ({ params }) => {
  return <BookingForm action={bookEvent} eventId={params.id} />;
};

export default EventPage;
