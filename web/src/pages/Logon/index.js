import React, { useState } from "react";
import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const res = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", res.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Login failed. Try again.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo" />

        <form onSubmit={handleLogon}>
          <h1>Dress your cape</h1>
          <input
            placeholder="Please type your Hero ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Log-In
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041I" />I don't have a cape yet.
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
