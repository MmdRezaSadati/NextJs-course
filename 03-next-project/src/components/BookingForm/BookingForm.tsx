"use client";
import { IBookEventResponse } from "@/app/events/[id]/page";
import React, { FC } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { useFormState } from "react-dom";
interface IProps {
  action: (
    prevState: IBookEventResponse,
    formData: FormData
  ) => Promise<IBookEventResponse>;
  eventId: string;
}
const BookingForm: FC<IProps> = ({ action, eventId }) => {
  const initialState: IBookEventResponse = { message: "" };
  const [state, formAction, pending] = useFormState(action, initialState);
  console.log("state", state, pending);
  return (
    <form action={formAction}>
      <input type="hidden" name="eventId" value={eventId} />
      <SubmitButton />
    </form>
  );
};

export default BookingForm;
