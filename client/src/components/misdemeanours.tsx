import { useContext, useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourContext from "../hooks/misdemeanour_context";

const Misdomeanours: React.FC = () => {
  const incidentContext = useContext(MisdemeanourContext);
  const [incidents, setIncidents] = useState<Array<Misdemeanour>>();
  const [visibleList, setvisibleList] = useState<Array<Misdemeanour>>();
  const [filter, setFilter] = useState("none");
  useEffect(() => {
    const list = async () => {
      const result = await fetch("http://localhost:8080/api/misdemeanours/3");
      const json = await result.json();
      setIncidents(json.misdemeanours);
      incidentContext.setMisdemeanours(incidents);
    };
    list();
    setFilter("none");
  }, []);

  useEffect(() => {
    if (filter === "none") {
      console.log("unfiltered");
      setvisibleList(incidents);
    } else {
      let visible: Misdemeanour[] = [];
      incidents?.forEach((incident) => {
        if (incident.misdemeanour === filter) {
          visible.push(incident);
        }
      });
      setvisibleList(visible);
    }
  }, [filter]);

  return (
    <div>
      <h1>Misdemeanours</h1>
      <label htmlFor="filterOptions">Filter misdemeanours:</label>
      <select
        name="filterOptions"
        defaultValue="none"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="none">No filter</option>
        <option value="rudeness">Mild Public Rudeness</option>
        <option value="vegetables">Not eating your vegetables</option>
        <option value="lift">Talking in a lift</option>
        <option value="united">Supporting manchester united</option>
      </select>
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
            {visibleList?.map((index) => {
              return (
                <tr>
                  <td data-testid="citizenId">{index.citizenId}</td>
                  <td>{index.date}</td>
                  <td data-testid="incidentType">{index.misdemeanour}</td>
                  <td>
                    <img
                      //TODO: try and find what the valid range is so you can call some different images
                      src="https://picsum.photos/190/100"
                      alt="punishment idea"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Misdomeanours;
