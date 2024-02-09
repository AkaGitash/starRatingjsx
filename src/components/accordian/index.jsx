//single selection accordian
//multi selection accordian
import data from "./data.js";
import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null); //since we are not selecting anything
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }

  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        <h1>Accordian</h1>
        {
          data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                  >
                  <h3>{dataItem.question}</h3>
                  <span className="icon">+</span>
                </div>
                
                <div>
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                      )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                      )}
                  {/* {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null} */}
                </div>
              </div>
            ))
          ) : (
            <div>No data</div>
          ) //check if data or data.length is zero or not
        }
      </div>
    </div>
  );
}
