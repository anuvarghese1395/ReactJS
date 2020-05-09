import React from "react";

function addEvent(props) {
  const { name, description, onChange, onSave } = props;

  return (
    <div>
      <div>
        name : {name} <br />
        desc : {description}
      </div>
      <div>
        <input
          onChange={(event) => onChange("name", event.target.value)}
          type="text"
          value={name}
        ></input>
      </div>
      <div>
        <textarea
          onChange={(event) => onChange("description", event.target.value)}
          value={description}/>
      </div>
      <div>
        <button onClick={onSave}>SAVE</button>
      </div>
    </div>
  );
}

export default addEvent;
