const Confess: React.FC = () => (
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
    <form name="confessionForm">
      {/*Add an onsumbit to the form*/}
      <label htmlFor="confesSubject">Subject: </label>
      <input type="text" id="confessSubject"></input>

      <label htmlFor="confessReason">Reason for contact</label>
      <select id="confessReason">
        <option value="select">Select</option>
        <option value="rudeness">Rudeness</option>
        <option value="vegetables">Vegetables</option>
        <option value="lift">Talking in a lift</option>
        <option value="united">Supporting manchester united</option>
        <option value="vent">Venting</option>
      </select>

      <textarea id="confessDescription"></textarea>

      <input type="submit" value="submit" id="confessSubmit"></input>
    </form>
  </>
);

export default Confess;
