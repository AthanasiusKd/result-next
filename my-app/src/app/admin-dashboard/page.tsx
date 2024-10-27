"use client";

import { useState } from "react";
import TabBtn from "@/components/Admin/TabBtn";
import AdminHeader from "@/components/Admin/AdminHeader";
import ClassInformation from "@/components/Admin/ClassInformation";
import CreateAccount from "@/components/Admin/CreateAccount";
import OverallAttendance from "@/components/Admin/OverallAttendance";
import UpdateSession from "@/components/Admin/UpdateSession";
import TeacherComments from "@/components/Admin/Comments/TeacherComments";
import ClassList from "@/components/Admin/ClassList/ClassList";
import EntrySheet from "@/components/Admin/ScoreSheet/EntrySheet";
import Subjects from "@/components/Admin/Subjects/Subjects";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState("");

  function changeTab(component: string) {
    setActiveComponent(component);
  }

  function goTo(link: string) {
    window.open(link);
  }
  function renderComponent() {
    switch (activeComponent) {
      case "one":
        return <CreateAccount />;
        case "two":
          return <ClassList />;
      case "three":
        return <ClassInformation />;
        case "four":
          return <TeacherComments />;
      case "five":
        return <OverallAttendance />;
      case "six":
        return <UpdateSession />;
        case "seven":
          return <TeacherComments />;
        case "eight":
          return <Subjects />;
        case "nine":
          return <EntrySheet />;
      default:
        return null;
    }
  }

  return (
    <div className="admin-page">
      <div className="head-div">
        <AdminHeader />
        <div className="btns-div">
          <TabBtn
            title="Manage Accounts"
            handleClick={changeTab}
            caseNumber="one"
          />
          <TabBtn
            title="Update Session"
            handleClick={changeTab}
            caseNumber="six"
          />
          <TabBtn
            title="Class Information"
            handleClick={changeTab}
            caseNumber="three"
          />
          <TabBtn
            title="Overall Attendance"
            handleClick={changeTab}
            caseNumber="five"
          />
          <TabBtn
            title="Comment List"
            handleClick={changeTab}
            caseNumber="seven"
          />
          <TabBtn
            title="Master Sheet"
            handleClick={changeTab}
            caseNumber="three"
          />
          <TabBtn title="Subjects" handleClick={changeTab} caseNumber="eight" />
          <TabBtn title="Class List" handleClick={changeTab} caseNumber="two" />
          <TabBtn
            title="Entry Sheet"
            handleClick={changeTab}
            caseNumber="nine"
          />
          <TabBtn
            title="Upload Files"
            handleClick={changeTab}
            caseNumber="three"
          />
          <TabBtn
            title="Enter Result"
            handleClick={goTo}
            caseNumber="/staff-dashboard"
          />
          <TabBtn
            title="Check Result"
            handleClick={goTo}
            caseNumber="/check-result"
          />
          <TabBtn
            title="Disable Result"
            handleClick={changeTab}
            caseNumber="four"
          />
          <TabBtn
            title="Enable Result"
            handleClick={changeTab}
            caseNumber="three"
          />
        </div>
      </div>
      {renderComponent()}
    </div>
  );
}
