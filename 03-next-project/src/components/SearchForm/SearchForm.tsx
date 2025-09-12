"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FormEvent, useState } from "react";

const SearchForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", query);
    router.push(`?${params.toString()}`);
  };
  return (
    <form onSubmit={handleSearch} className="m-10 flex gap-6">
      <input
        type="search"
        className="bg-white text-black "
        placeholder="Search events..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        type="submit"
        className="bg-amber-800 p-4 cursor-pointer rounded-4xl"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
