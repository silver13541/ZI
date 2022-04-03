import { useState } from "react";
import styled from "styled-components";
import configuration from "./Configuration.json";
import { Users } from "./Users";
import { Catalogs } from "./Catalogs";
import { Action } from "./Action";
import { Result } from "./Result";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const App = () => {
  const [user, setUser] = useState(configuration[0].users[0]);
  const [catalog, setCatalog] = useState(configuration[0].catalogs[0]);
  const [action, setAction] = useState("read");

  return (
    <Wrapper>
      <Users user={user} setUser={setUser} />
      <Catalogs catalog={catalog} setCatalog={setCatalog} />
      <Action action={action} setAction={setAction} />
      <Result user={user} catalog={catalog} action={action} />
    </Wrapper>
  );
};
