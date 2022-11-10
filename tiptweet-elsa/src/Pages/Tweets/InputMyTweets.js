import React from "react";
import "./InputMyTweets.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { POST_TWEET, SUB_TWEET } from "../../GraphQL/mygraphql";

const InputMyTweets = () => {
  const [addTweet] = useMutation(POST_TWEET, {
    updateQueries: { query: SUB_TWEET },
  });

  const [state, setState] = useState({
    link: "",
    description: "",
    category: "",
  });

  const add = (data) => {
    addTweet({
      variables: {
        link: data.link,
        description: data.description,
        category: data.category,
      },
    });
  };

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.link.trim() && state.description.trim() && state.category) {
      const description = state.description;
      if (description === "") {
        alert("Isi Deskripsi Yak");
      } else {
        const newData = {
          link: state.link,
          description: state.description,
          category: state.category,
        };
        add(newData);

        setState({
          ...state,
          link: "",
          description: "",
          category: "",
        });
        setTimeout(() => {
          alert("Data Sudah Berhasil Di Input");
        });
      }
    } else {
      alert("Data Masih Kosong");
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12 m-3">
          <div className="row">
            <div className="col-md-12 m-3 text-center">
              <h2 className=" h2-text text-center mt-3">Input My Tweets</h2>
            </div>
            <div className="mx-auto col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Twitter Link : </label>
                  <span></span>
                  <input
                    className="form-control"
                    type="text"
                    name="link"
                    placeholder="Input Your Twitter Link"
                    value={state.link}
                    onChange={onChange}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Description : </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Describe Your Twitter Link"
                    rows="5"
                    value={state.description}
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Category : </label>
                  <select
                    className="form-select"
                    name="category"
                    value={state.category}
                    onChange={onChange}
                  >
                    <option value="">--Select Category--</option>
                    <option value="Food Recipe">Food Recipe</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Tips">Tips</option>
                    <option value="Promo">Promo</option>
                    <option value="Movie">Movie</option>
                  </select>
                </div>
                <br />
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputMyTweets;
