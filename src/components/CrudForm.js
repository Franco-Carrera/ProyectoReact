import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  date: "",
  distance: "",
  time_and_elevation_gain: "",
  id: null,
};

const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  // readOneData,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.date || //
      !form.distance ||
      !form.time_and_elevation_gain
    ) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
      // readOneData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="date"
          placeholder="Fecha"
          onChange={handleChange}
          value={form.date}
        />
        <input
          type="text"
          name="distance"
          placeholder="Distancia"
          onChange={handleChange}
          value={form.distance}
        />
        <input
          type="text"
          name="time_and_elevation_gain"
          placeholder="Tiempo de elevación"
          onChange={handleChange}
          value={form.time_and_elevation_gain}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
