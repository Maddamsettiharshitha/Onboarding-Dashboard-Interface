import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import ProgressBar from "./ProgressBar";

export default function Step1() {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Full name is required";
    if (!email) newErrors.email = "Email address is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      updateUser({ name, email });
      navigate("/step2");
    }
  };

  return (
    <div className="container">
      <ProgressBar step={1} />
      <h2>Step 1: Personal Info</h2>

      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      {/* Email Address */}
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      {/* Navigation Button */}
      <div className="button-group">
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}