import { IEvent } from "@/core/types/IEvent";
import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  value: IEvent;
}
const EventCard: FC<IProps> = ({ value }) => {
  return (
    <div className="p-10 text-center bg-blue-950">
      <Image
        src={value.imageAddress}
        width={200}
        height={200}
        alt={value.title}
      />
      <h5>title: {value.title}</h5>
      <p>category: {value.category}</p>
    </div>
  );
};

export default EventCard;
