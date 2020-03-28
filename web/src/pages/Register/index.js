import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const res = await api.post("ongs", data);
      alert(`Your Access ID: ${res.data.id}. Keep it safe.`);

      history.push("/");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>A new hero will born soon</h1>
          <p>Tell me more about you</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041I" />I already have a cape.
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="NGO Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="whatsapp"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="City"
              style={{ width: "80%" }}
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="State/Province"
              style={{ width: "18%" }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />

            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
