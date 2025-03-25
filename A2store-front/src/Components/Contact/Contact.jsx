import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-container">
      <div className="contact-left">
        <h2>Envoyez-nous un message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="contact-right">
        <h3>Nos coordonnées</h3>
        <ul>
          <li><FaMapMarkerAlt /> A2Store, Nouakchott, Mauritanie</li>
          <li><FaPhone /> +222 34 61 01 01</li>
          <li><FaEnvelope /> contact@a2store.com</li>
          <li><FaClock /> Lun - Ven : 9h à 18h</li>
        </ul>
        <img src="/assets/contact-illustration.svg" alt="Illustration" />
      </div>
    </section>
  );
};

export default ContactPage;
