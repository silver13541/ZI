import React from "react";
import configuration from "./Configuration.json";
import styled from "styled-components";

const Title = styled.h2``;

export const Users = ({ user, setUser }) => {
  const users = [];
  configuration.forEach((el) => {
    el.users.forEach((user) => users.push(user));
  });

  return (
    <>
      <Title>Выберите пользователя</Title>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        {users.map((user) => (
          <option value={user}>{user}</option>
        ))}
      </select>
    </>
  );
};
