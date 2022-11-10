// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_TWEET, SUB_TWEET } from "../../GraphQL/mygraphql";
import { EditMyTweets } from "../../Pages/Tweets/EditMyTweets";

const Tweets = ({ data }) => {
  const [deleteTweet] = useMutation(DELETE_TWEET, {
    updateQueries: { query: SUB_TWEET },
  });

  const removeTweet = (id) => {
    deleteTweet({
      variables: {
        id: id,
      },
    });
  };
  
  // console.log(data.id)


  return (
    <>
      <thead>
        <tr>
          <td>{data.id}</td>
          <td>
            <div className="card">
              <div className="row">
                <div className="col-md-3">
                  <p>Link : </p>
                  <p>Descriptions : </p>
                  <p>Category : </p>
                </div>
                <div className="col-md-9">
                  <p>
                    <a target="_blank" rel="noreferrer" href={data.link}>
                      {data.link}
                    </a>
                  </p>
                  <p>{data.description}</p>
                  <p>{data.category}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="col-md-8 p-4">
              <EditMyTweets data={data.id}/>
            </div>
            {/* className="col-md-4" */}
            <div className="col-md-8 p-4">
              <button
                onClick={() => removeTweet(data.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </thead>
    </>
  );
};

export default Tweets;
