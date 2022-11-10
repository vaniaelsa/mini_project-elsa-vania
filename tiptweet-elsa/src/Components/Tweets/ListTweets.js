import Tweets from "./Tweets";

// Subscription
import { useQuery } from "@apollo/client";
import { GET_TWEET } from "../../GraphQL/mygraphql";
import { useState } from "react";

const ListTweets = (newInput) => {

  const { loading, error, data } = useQuery(GET_TWEET);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const newInputValue = newInput;

  // const [newTrue, setNewTrue] = useState({
  //   varNew: true
  // })

  // const setingNewTrue =()=>{
  //   setNewTrue({
  //   ...newTrue, varNew: false
  //   })
  // }

  console.log(newInputValue);

  if (error !== true) {
    return (
      <>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>My Saved Link</th>
              <th bgcolor="white"> Actions</th>
            </tr>
          </thead>
          {
          newInputValue.newInput ?

          newInputValue.newInput.map((item) => (
            <Tweets key={item.id} data={item} />
          ))
          : 
          data.project_tweet.map((item) => (
            <Tweets key={item.id} data={item} />
          ))
          
          }
        </table>
      </>
    );
  }
};

export default ListTweets;
