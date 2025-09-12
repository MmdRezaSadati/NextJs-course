"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="p-5 m-10 bg-amber-700 disabled:opacity-60 disabled:cursor-auto cursor-pointer rounded-3xl"
      type="submit"
      disabled={pending}
    >
      {pending ? "booking..." : "Book event"}
    </button>
  );
};

export default SubmitButton;
