import React, { useEffect, useState } from "react";
import configuration from "./Configuration.json";

export const Result = ({ user, catalog, action }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    for (let i = 0; i < configuration.length; i++) {
      if (
        configuration[i].catalogs.includes(catalog) &&
        configuration[i].users.includes(user)
      ) {
        setResult(`Доступ разрешен! (${user} ${action} ${catalog})`);
        return;
      }

      if (
        configuration.findIndex((el) => el.users.includes(user)) <
          configuration.findIndex((el) => el.catalogs.includes(catalog)) &&
        action === "read"
      ) {
        setResult(`Доступ разрешен! (${user} ${action} ${catalog})`);
        return;
      } else {
        setResult(`Доступ запрещен! (${user} ${action} ${catalog})`);
      }

      if (
        configuration.findIndex((el) => el.users.includes(user)) >
          configuration.findIndex((el) => el.catalogs.includes(catalog)) &&
        action === "write"
      ) {
        setResult(`Доступ разрешен! (${user} ${action} ${catalog})`);
      } else {
        setResult(`Доступ запрещен! (${user} ${action} ${catalog})`);
      }
    }
  }, [action, catalog, user]);

  return <h2>{result}</h2>;
};
