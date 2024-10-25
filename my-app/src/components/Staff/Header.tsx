import power from "@/img/power.svg";
import { redirect } from "next/navigation";

function Header() {
//   function handleLogout() {
//     redirect("/");
//   }

return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="dash-head">Welcome User</h1>
        <button className="btn login-btn" type="button">
          Log Out
          <img src={power} />
        </button>
      </div>
      <p className="dash-text">
        <span className="staff-span">Staff Platform: </span>You can manage
        everything from here
      </p>
      <p className="dash-text">For support, Contact the Admin</p>
    </div>
  );
}

export default Header;
