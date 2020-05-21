import React from "react";

function addEvent(props) {
  const { event, onChange, onSave, displayData, id, loadEvent } = props;
  const { name = "", description = "" } = event;

  if (id && id!==event._id) loadEvent(id);

  return (
    <div>
      <div>
        name : {name} <br />
        desc : {description}
      </div>
      <div>
        <input
          onChange={(e) => onChange("name", e.target.value)}
          type="text"
          value={name}
        />
      </div>
      <div>
        <textarea
          onChange={(e) => onChange("description", e.target.value)}
          value={description}
        />
      </div>
      <div>
        <button onClick={onSave}>SAVE</button>
      </div>
      <div>
        <button onClick={displayData}>Display</button>
      </div>
    </div>
  );
}

export default addEvent;
