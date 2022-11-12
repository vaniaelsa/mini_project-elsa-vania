import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_TWT } from "../../GraphQL/mygraphql";

export const SearchTweets = () => {
  const [inputVal, setInputVal] = useState("");
  const [search, { data }] = useLazyQuery(SEARCH_TWT);

  return (
    <>
      <div className="text-center">
        <input
          className="form-control"
          type="search"
          name="search"
          placeholder="Search By Description"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        ></input>

        <button
          onClick={() =>
            search({
              variables: { filter: setInputVal },
            })
          }
        >
          Search
        </button>
      </div>
    </>
  );
};
