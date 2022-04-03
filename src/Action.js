import React from "react";
import styled from "styled-components";

const Title = styled.h2``;

export const Action = ({ action, setAction }) => {
  const actions = ["read", "write"];

  return (
    <>
      <Title>Выберите действие</Title>
      <select value={action} onChange={(e) => setAction(e.target.value)}>
        {actions.map((action) => (
          <option value={action}>{action}</option>
        ))}
      </select>
    </>
  );
};
