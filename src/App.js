import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Step1 from "./components/Onboarding/Step1";
import Step2 from "./components/Onboarding/Step2";
import Step3 from "./components/Onboarding/Step3";
import Dashboard from "./components/Dashboard/Dashboard";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
