import { useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";

const Confess: React.FC = () => {
  const submitBtn = document.getElementById("confessSubmit");
  const [subjectLength, setSubjectLength] = useState(0);
  const [reasonSelected, setreasonSelected] = useState(0);
  const [descLength, setdescLength] = useState(0);

  useEffect(() => {
    /*Validation*/
    /*Chosen rules: must have a subject of > 5 chars, a description >20 and a reason selected */
    if (subjectLength >= 5 && reasonSelected != 0 && descLength >= 20) {
      submitBtn?.removeAttribute("disabled");
    } else {
      submitBtn?.setAttribute("disabled", "");
    }
  }, [subjectLength, reasonSelected, descLength]);

  function sendToServer() {
    //figure out how to convert the values into json
    const data = "";
    let response = "";
    const request = async () => {
      const result = await fetch("http://localhost:8080/api/confess", {
        method: "POST",
        body: data,
      });
      result.json().then((json) => {
        response = json;
      });
      //Handle response
      //error if response.success is false
      //if succeess & !just talked add to misdomeanours
      //do nothing if just talked is true
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
        <label htmlFor="confesSubject">Subject: </label>
        <input
          type="text"
          id="confessSubject"
          onChange={(e) => setSubjectLength(e.target.value.length)}
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
          onChange={(e) => setdescLength(e.target.value.length)}
        ></textarea>

        <input type="submit" value="submit" id="confessSubmit" disabled></input>
      </form>
    </>
  );
};

export default Confess;
