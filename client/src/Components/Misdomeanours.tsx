import { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

const Misdomeanours: React.FC = () => {
  const [incidents, setIncidents] = useState<Array<Misdemeanour>>();
  useEffect(() => {
    const list = async () => {
      const result = await fetch("http://localhost:8080/api/misdemeanours/3");
      result.json().then((json) => {
        setIncidents(json.misdemeanours);
        /*console.log("json");
        console.log(json);
        console.log("state:");
        console.log(incidents);//keep until done, for when it inevitably breaks */
      });
    };
    list();
  }, []);
  return (
    <>
      <h2>Misdomeanours</h2>
      <p>{incidents === undefined && "Loading..."}</p>
      <p>{incidents && incidents[0].citizenId}</p>
    </>
  );
};

export default Misdomeanours;
