import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length <= 5 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Por favor verifique su información nuevamente");
      setMessage("");
    } else {
      setError("");
      setMessage(
        `Gracias ${formData.name}, te contactaremos cuando antes vía mail`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre Completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <p>{error}</p>}

      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
