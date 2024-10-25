"use client";

import { useState } from "react";
import Header from "@/components/Staff/Header";
import TabBtn from "@/components/Staff/ChangeTabBtn";
import EnterScores from "@/components/Staff/EnterScores";
import ChooseClass from "@/components/Staff/ChooseClass";
import Psychomotor from "@/components/Staff/Psychomotor";
import ScoreInput from "@/components/Staff/ScoreInput";

export default function StaffDashboard() {
  const [title, setTitle] = useState("Please select an option");
  const [activeComponent, setActiveComponent] = useState("");

  function renderComponent() {
    switch (activeComponent) {
      case "one":
        return <EnterScores onSubmit={setActiveComponent} />;
      case "two":
        return <ChooseClass name="Comment" onSubmit={setActiveComponent} />;
      case "three":
        return <ChooseClass name="Psychomotor" onSubmit={setActiveComponent} />;
        case 'score' :
          return <ScoreInput />
      case "comments":
        return <div>Comments</div>;
        case 'psychomotor':
          return <Psychomotor />
      default:
        return null;
    }
  }

  function changeTab(component: string, headtext: string) {
    setActiveComponent(component);
    setTitle(headtext);
  }

  return (
    <>
      <div className="dash-top">
        <Header />
        <div className="d-flex flex-column gap-3">
          <h1 className="dash-head">{title}</h1>
          <div className="d-flex gap-3">
            <TabBtn
              num="one"
              titles="Scores"
              functionName={changeTab}
              text="Scores"
              nameClass={`btn dash-btn ${
                title === "Scores" ? null : "inactive"
              }`}
            />
            <TabBtn
              num="two"
              titles="Comment"
              text="Comment & Attendance"
              functionName={changeTab}
              nameClass={`btn dash-btn ${
                title === "Comment" ? null : "inactive"
              }`}
            />
            <TabBtn
              num="three"
              titles="Psychomotor"
              text="Psychomotor"
              functionName={changeTab}
              nameClass={`btn dash-btn ${
                title === "Psychomotor" ? null : "inactive"
              }`}
            />
          </div>
        </div>
      </div>
      {renderComponent()}
    </>
  );
}
