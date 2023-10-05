import { useContext, useEffect, useState } from "react";
import { MisdemeanourKind } from "../types/misdemeanours.types";
import MisdemeanourContext from "../hooks/misdemeanour_context";

const Confess: React.FC = () => {
  const submitBtn = document.getElementById("confessSubmit");
  const [subject, setSubject] = useState("");
  const [reasonSelected, setreasonSelected] = useState(0);
  const [description, setDescription] = useState("");
  const incidentList = useContext(MisdemeanourContext);

  useEffect(() => {
    /*Validation*/
    /*Chosen rules: must have a subject of > 5 chars, a description >20 and a reason selected */
    function validateInput() {
      if (
        subject.length >= 5 &&
        reasonSelected !== 0 &&
        description.length >= 20
      ) {
        submitBtn?.removeAttribute("disabled");
      } else {
        submitBtn?.setAttribute("disabled", "");
      }
    }
    validateInput();
  }, [subject, reasonSelected, description]);

  function convertReason() {
    switch (reasonSelected) {
      case 1:
        return "rudeness";
      case 2:
        return "vegetables";
      case 3:
        return "lift";
      case 4:
        return "united";
      case 5:
        return "vent";
    }
  }
  function strictConvertReason(selectedOption: number): MisdemeanourKind {
    //basicaly a version of the above without vent and a strict return type to make ts happy
    //decided to make vegetables the default return, since we need one and it seems like an easy mistake to make
    switch (reasonSelected) {
      case 1:
        return "rudeness";
      case 3:
        return "lift";
      case 4:
        return "united";
    }
    return "vegetables";
  }

  function sendToServer() {
    //figure out how to convert the values into json
    const data = {
      subject: subject,
      reason: convertReason(),
      details: description,
    };
    let response = "";
    const request = async () => {
      const result = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        body: JSON.stringify(data),
      });
      result.json().then((json) => {
        response = json;
      });
      //Handle response
      if (!result.ok) {
        //throw error
        throw new Error("There was a problem:" + result.statusText);
      } else if (result.status === 200 && reasonSelected !== 5) {
        //add to misdomeanours list
        try {
          //can't add ...misdemeanours, apparntly it's an fc
          incidentList.setMisdemeanours([
            {
              citizenId: Math.floor(Math.random() * 5000000),
              misdemeanour: strictConvertReason(reasonSelected),
              date: Date(),
            },
          ]);
        } catch (error) {
          console.log(error);
        }
      } else if (reasonSelected === 5) {
        console.log("Venting message recieved, sending cheerful email");
      }
    };
  }
  return (
    <>
      <h1>Confess</h1>
      <p>
        It's very difficult to catch people commiting misdomeanours so we
        appreciate it when citizens confess to us directly
      </p>
      <p>
        However if you're having a hard day and need to vent then your'e welcome
        to contact us here too. Up to you!
      </p>
      <form name="confessionForm" onSubmit={sendToServer}>
        {/*Add an onsumbit to the form*/}
        <label htmlFor="confessSubject">Subject: </label>
        <input
          type="text"
          id="confessSubject"
          onChange={(e) => setSubject(e.target.value)}
        ></input>

        <label htmlFor="confessReason">Reason for contact</label>
        <select
          id="confessReason"
          data-testid="confessReason"
          onChange={(e) => setreasonSelected(e.target.selectedIndex)}
        >
          <option value="select">Select</option>
          <option value="rudeness">Rudeness</option>
          <option value="vegetables">Vegetables</option>
          <option value="lift">Talking in a lift</option>
          <option value="united">Supporting manchester united</option>
          <option value="vent">Venting</option>
        </select>

        <textarea
          id="confessDescription"
          data-testid="confessDescription"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input
          type="submit"
          value="submit"
          id="confessSubmit"
          data-testid="submit"
          disabled
        ></input>
      </form>
    </>
  );
};

export default Confess;
