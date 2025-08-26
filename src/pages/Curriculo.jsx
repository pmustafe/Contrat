import React, { useContext, useState } from "react";
import { VagasContext } from "../App";

export default function Curriculo() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    localidade: "",
    resumo: "",
    experiencia: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { curriculos, setCurriculos } = useContext(VagasContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurriculos([...curriculos, form]);
    setForm({
      nome: "",
      email: "",
      telefone: "",
      dataNascimento: "",
      localidade: "",
      resumo: "",
      experiencia: "",
    });
    alert("Currículo enviado!");
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
          <label className="block text-sm font-medium">Data de Nascimento</label>
          <input
            type="date"
            name="dataNascimento"
            value={form.dataNascimento}
            onChange={handleChange}
            className="mt-1 w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Localidade</label>
          <input
            type="text"
            name="localidade"
            value={form.localidade}
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
