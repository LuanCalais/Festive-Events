import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./event-create.css";
import Navbar from "../../components/navbar";
import { useSelector } from "react-redux";

function EventCreate() {
  const [msgType, setMsgType] = useState();

  return (
    <>
      <Navbar />
      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="mx-auto font-weight-bold">New Event</h3>
        </div>

        <form>
          <div className="form-group">
            <label>Title: </label>
            <input type="text" className="form-control " />
          </div>

          <div className="form-group">
            <label>Event Type: </label>

            <select className="form-control">
              <option disabled selected value>
                -- Select a Type --
              </option>
              <option>Party</option>
              <option>Work</option>
              <option>Show</option>
            </select>

            <div className="form-group">
              <label>Description: </label>
              <textarea className="form-control" rows="3" />
            </div>
            <div className="form-group row">
              <div className="col-6">
                <label>Date: </label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-6">
                <label>Hour: </label>
                <input type="time" className="form-control" />
              </div>
            </div>

            <div className="form-group">
              <label>Upload Image: </label>
              <input type="file" className="form-control " />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-lg btn-block mt-3 mb-5 btn-create-event"
          >
            Create Event
          </button>
        </form>

        <div
          className="
        msg-login text-black text-center mt-2"
        >
          {msgType === "success" && (
            <span>
              <strong>Wow! </strong>
              Event Created &#128526;
            </span>
          )}

          {msgType === "error" && (
            <span>
              <strong>Ops! </strong>
              Please check event info &#128546;
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default EventCreate;
