import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import ProgressBar from "./ProgressBar";

export default function Step2() {
  const { updateUser } = useContext(UserContext);
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [size, setSize] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNext = () => {
    const newErrors = {};
    if (!company) newErrors.company = "Company name is required";
    if (!industry) newErrors.industry = "Industry is required";
    if (!size) newErrors.size = "Company size is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      updateUser({ company, industry, size });
      navigate("/step3");
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <ProgressBar step={2} />
      <h2>Step 2: Business Info</h2>

      {/* Company Name */}
      <div className="form-group">
        <label htmlFor="company">Company Name</label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        {errors.company && <p className="error-text">{errors.company}</p>}
      </div>

      {/* Industry */}
      <div className="form-group">
        <label htmlFor="industry">Industry</label>
        <input
          id="industry"
          type="text"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
        {errors.industry && <p className="error-text">{errors.industry}</p>}
      </div>

      {/* Company Size */}
      <div className="form-group">
        <label htmlFor="companySize">Company Size</label>
        <select
          id="companySize"
          name="companySize"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        >
          <option value="">Select size</option>
          <option value="1-10">1–10 employees</option>
          <option value="11-50">11–50 employees</option>
          <option value="51-200">51–200 employees</option>
          <option value="201-1000">201–1000 employees</option>
          <option value="1000+">1000+ employees</option>
        </select>
        {errors.size && <p className="error-text">{errors.size}</p>}
      </div>

      {/* Navigation Buttons */}
      <div className="button-group">
        <button className="btn bg-gray" onClick={handleBack}>Back</button>
        <button className="btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

