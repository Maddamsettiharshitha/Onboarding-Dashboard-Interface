import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import ProgressBar from "./ProgressBar";

export default function Step3() {
  const { updateUser } = useContext(UserContext);
  const [theme, setTheme] = useState("light");
  const [layout, setLayout] = useState("default");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newErrors = {};
    if (!theme) newErrors.theme = "Theme selection is required";
    if (!layout) newErrors.layout = "Layout selection is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      updateUser({ theme, layout });
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    navigate("/step2");
  };

  return (
    <div className="container">
      <ProgressBar step={3} />
      <h2>Step 3: Preferences</h2>

      {/* Theme Selection */}
      <div className="form-group">
        <label htmlFor="theme">Theme</label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          required
        >
          <option value="">Select Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        {errors.theme && <p className="error-text">{errors.theme}</p>}
      </div>

      {/* Layout Selection */}
      <div className="form-group">
        <label htmlFor="layout">Dashboard Layout</label>
        <select
          id="layout"
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
          required
        >
          <option value="">Select Layout</option>
          <option value="default">Default</option>
          <option value="compact">Compact</option>
        </select>
        {errors.layout && <p className="error-text">{errors.layout}</p>}
      </div>

      {/* Navigation Buttons */}
      <div className="button-group">
        <button className="btn bg-gray" onClick={handleBack}>Back</button>
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
