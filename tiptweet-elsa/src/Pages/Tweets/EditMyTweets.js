import React, { useState, useEffect } from "react";
import "./EditMyTweets.css";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { UPDATE_TWEET } from "../../GraphQL/mygraphql";
import { GET_TWEET_BY_ID } from "../../GraphQL/mygraphql";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const EditMyTweets = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const id = props.data;

  const { data, error, loading } = useQuery(GET_TWEET_BY_ID, {
    variables: { id: id },
  });

  const [editTweet] = useMutation(UPDATE_TWEET);

  const [state, setState] = useState({
    link: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    async function cek() {
      setState({
        link: data?.project_tweet[0].link,
        description: data?.project_tweet[0].description,
        category: data?.project_tweet[0].category,
      });
    }
    cek();
  }, [data]);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (
      state.id === "" ||
      state.link === "" ||
      state.description === "" ||
      state.category === ""
    ) {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Silahkan isi dengan benar!!",
      });
    } else {
      editTweet({
        variables: {
          id: id,
          link: state.link,
          description: state.description,
          category: state.category,
        },
      });
      setTimeout(() => {
        alert("Data Sudah Berhasil Di Ubah");
      });
    }
  };
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12 m-3">
              <div className="row">
                <div className="col-md-12 m-3 text-center">
                  <h2 className=" h2-text text-center mt-3">Edit My Tweets</h2>
                </div>
                <div className="mx-auto col-md-6">
                  <form>
                    <div className="form-group">
                      <label>Twitter Link : </label>
                      <span></span>
                      <input
                        className="form-control"
                        type="text"
                        name="link"
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditMyTweets;
