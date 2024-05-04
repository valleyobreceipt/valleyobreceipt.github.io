"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const path = usePathname();
  const search = useSearchParams();
  const navigate = useRouter();

  let sort = search.get("sort") || "desc";
  let reverseSort = sort == "asc" ? "desc" : "asc";

  let searchParam = new URLSearchParams(search.toString());
  searchParam.delete("sort");

  let searchFull = searchParam.toString() ? `&${searchParam.toString()}` : "";

  const [searchValue, setSearchValue] = useState(search.get("q") || "");

  function handleSearch(e) {
    e.preventDefault();
    navigate.push(`${path}?q=${searchValue}`);
  }

  return (
    <div className="search-dv">
      <form onSubmit={handleSearch} id="search_form">
        <button type="submit">
          <img src="/asset/img/search-icon.png" alt="Search" />
        </button>
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
        />
      </form>
      <span className="ic-dv arrow-ic">
        <Link
          href={
            searchFull
              ? `${path}?sort=${reverseSort}${searchFull}`
              : `${path}?sort=${reverseSort}`
          }
        >
          <img src="/asset/img/up-dwn-arr.png" alt="Icon" />
        </Link>
      </span>
    </div>
  );
}
