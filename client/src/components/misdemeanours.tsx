import { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourContext from "../hooks/misdemeanour_context";

const Misdomeanours: React.FC = () => {
  const [incidents, setIncidents] = useState<Array<Misdemeanour>>();
  useEffect(() => {
    const list = async () => {
      const result = await fetch("http://localhost:8080/api/misdemeanours/3");
      const json = await result.json();
      setIncidents(json.misdemeanours);
      //console.log(json); //Sanity check
    };
    list();
  }, []);
  return (
    <>
      <h1>Misdemeanours</h1>
      <p>{incidents === undefined && "Loading..."}</p>
      {incidents && (
        <table>
          <tbody>
            <tr>
              <th>Citizen ID</th>
              <th>Date</th>
              <th>Misdemeanour</th>
              <th>Punishment idea</th>
            </tr>
            <tr>
              <td>{incidents[0].citizenId}</td>
              <td>{incidents[0].date}</td>
              <td>{incidents[0].misdemeanour}</td>
              <td>
                <img
                  src="https://picsum.photos/190/100"
                  alt="punishment idea"
                />
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
                <img
                  src="https://picsum.photos/190/101"
                  alt="punishment idea"
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default Misdomeanours;
