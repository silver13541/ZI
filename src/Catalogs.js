import React from "react";
import configuration from "./Configuration.json";
import styled from "styled-components";

const Title = styled.h2``;

export const Catalogs = ({ catalog, setCatalog }) => {
  const catalogs = [];
  configuration.forEach((el) => {
    el.catalogs.forEach((catalog) => catalogs.push(catalog));
  });

  return (
    <>
      <Title>Выберите каталог</Title>
      <select value={catalog} onChange={(e) => setCatalog(e.target.value)}>
        {catalogs.map((catalog) => (
          <option value={catalog}>{catalog}</option>
        ))}
      </select>
    </>
  );
};
