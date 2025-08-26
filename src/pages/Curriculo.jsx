import React, { useState } from "react";

export default function Curriculo() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    resumo: "",
    experiencia: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Currículo enviado!\nNome: ${form.nome}\nEmail: ${form.email}`);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Currículo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Telefone</label>
          <input
            type="tel"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Resumo Profissional</label>
          <textarea
            name="resumo"
            value={form.resumo}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2"
            rows="3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Experiência</label>
          <textarea
            name="experiencia"
            value={form.experiencia}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="bg-brand text-white px-4 py-2 rounded hover:bg-blue-900"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
