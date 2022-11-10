import React, { useState } from "react";
import "./HomeMyTweets.css";
import { Link } from "react-router-dom";
import ListTweets from "../../Components/Tweets/ListTweets";

// Subscription
import { useQuery, useSubscription, useLazyQuery } from "@apollo/client";
import { SUB_TWEET, GET_TWEET_DESCRIPTION } from "../../GraphQL/mygraphql";

const HomeMyTweets = () => {
  const [search, { data, loading, error }] = useLazyQuery(
    GET_TWEET_DESCRIPTION
  );
  const [inputVal, setInputVal] = useState({
    description: "",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const onPublish = (e) => {
    e.preventDefault();

    search({
      variables: {
        description: `%${inputVal.description}%`,
      },
    });
  };

  const onChange = (e) => {
    setInputVal({
      ...inputVal,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2 className=" h2-text text-center mt-3">My Saved Tweets</h2>
      <div className="text-center my-5">
        <input
          type="search"
          placeholder="Search Tweets"
          name="description"
          value={inputVal.description}
          onChange={onChange}
        />
        <button className="btn btn-primary" onClick={onPublish}>
          Cari
        </button>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <Link className="btn btn-sm btn-primary" to="/mytweets/inputtweets">
          Add Tweets
        </Link>
      </div>
      <br />

      <div>
        <ListTweets newInput={data ? data.project_tweet : ""} />
      </div>
    </>
  );
};

export default HomeMyTweets;
