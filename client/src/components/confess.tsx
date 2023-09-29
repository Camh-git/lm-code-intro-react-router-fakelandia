import { useEffect, useRef, useState } from "react";
import { json } from "node:stream/consumers";
import { error } from "console";

const Confess: React.FC = () => {
  const submitBtn = document.getElementById("confessSubmit");
  const [subject, setSubject] = useState("");
  const [reasonSelected, setreasonSelected] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    /*Validation*/
    /*Chosen rules: must have a subject of > 5 chars, a description >20 and a reason selected */
    if (
      subject.length >= 5 &&
      reasonSelected !== 0 &&
      description.length >= 20
    ) {
      submitBtn?.removeAttribute("disabled");
    } else {
      submitBtn?.setAttribute("disabled", "");
    }
  }, [subject, reasonSelected, description]);

  function convertReason(selectedOption: number) {
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
  function sendToServer() {
    //figure out how to convert the values into json
    const data = {
      subject: subject,
      reason: convertReason(reasonSelected),
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
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <input type="submit" value="submit" id="confessSubmit" disabled></input>
      </form>
    </>
  );
};

export default Confess;
