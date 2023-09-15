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
      <h1>Misdomeanours</h1>
      <p>{incidents === undefined && "Loading..."}</p>
      {incidents && (
        <table>
          <tr>
            <th>Citizen ID</th>
            <th>Date</th>
            <th>Misdomeanour</th>
            <th>Punishment idea</th>
          </tr>
          <tr>
            <td>{incidents[0].citizenId}</td>
            <td>{incidents[0].date}</td>
            <td>{incidents[0].misdemeanour}</td>
            <td>
              <img src="https://picsum.photos/190/100" alt="punishment idea" />
            </td>
          </tr>
          <tr>
            <td>{incidents[1].citizenId}</td>
            <td>{incidents[1].date}</td>
            <td>{incidents[1].misdemeanour}</td>
            <td>
              <img src="https://picsum.photos/190/99" alt="punishment idea" />
            </td>
          </tr>
          <tr>
            <td>{incidents[2].citizenId}</td>
            <td>{incidents[2].date}</td>
            <td>{incidents[2].misdemeanour}</td>
            <td>
              <img src="https://picsum.photos/190/101" alt="punishment idea" />
            </td>
          </tr>
        </table>
      )}
    </>
  );
};

export default Misdomeanours;
