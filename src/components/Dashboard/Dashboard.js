import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Cards from "./Cards";
import Chart from "./Chart";

export default function Dashboard() {
  const { userData } = useContext(UserContext);

  return (
    <>
      {/* Header with background color */}
      <header
        className="mb-6"
        style={{
          backgroundColor: "#5b9bd5",
          padding: "16px 24px",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <h1 className="text-3xl font-extrabold">Dashboard</h1>
      </header>

      <div className="p-4">
        {/* Navigation Bar */}
        <nav
          className="mb-6 flex justify-between items-center"
          style={{
            backgroundColor: "#90ee90", // light green
            padding: "12px 24px",
            borderRadius: "8px",
          }}
        >
          <div className="text-white font-bold text-xl"></div>
          <div className="flex gap-6">
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
            <Link to="/profile" className="text-white hover:underline">
              Profile
            </Link>
            <Link to="/settings" className="text-white hover:underline">
              Settings
            </Link>
            <Link to="/logout" className="text-white hover:underline">
              Logout
            </Link>
          </div>
        </nav>

        <h2 className="text-2xl font-bold">Welcome, {userData.name}</h2>
        <p>Email: {userData.email}</p>
        <Cards />
        <Chart />
      </div>
    </>
  );
}
