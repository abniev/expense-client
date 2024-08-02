import React from "react";
const obj = [
  {
    type: "Savings",
    color: "#00e4a1",
    percent: 45,
  },
  {
    type: "Investment",
    color: "#ffbe00",
    percent: 20,
  },
  {
    type: "Expense",
    color: "#ff316d",
    percent: 10,
  },
];

function Labels() {
  return (
    <>
      {obj.map((v, i) => (
        <LabelComponent key={i} data={v}></LabelComponent>
      ))}
    </>
  );
}

function LabelComponent({ data }) {
  if (!data) return <></>;
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-5">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: data.color ?? "#f9c74f" }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
        <h3 className="font-bold">{data.percent ?? 0}%</h3>
      </div>
    </div>
  );
}

export default Labels;
