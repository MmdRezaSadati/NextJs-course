import { NextRequest, NextResponse } from "next/server";

const products = [{ name: "react", price: 10000, caption: "ssss" }];

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams
  const searchedValue = url.get("search");
  console.log("searchValue", searchedValue, req.url);
  const filteredProducts = products.filter((item) => {
    return item.name.includes(searchedValue ?? "");
  });
  return NextResponse.json(filteredProducts);
}

