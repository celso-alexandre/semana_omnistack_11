import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
//import heroesImg from "../../assets/heroes.png";

export default function NewIncident() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/incidents");
    } catch (err) {
      alert("Error on registering incident. Try again later.");
    }
  }

  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register New Incident</h1>
          <p>Explain the story, so the heroes will find it</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041I" />
            Take me back Home.
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Money Goal"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
