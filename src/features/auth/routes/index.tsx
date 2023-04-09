import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/SignIn";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
    </Routes>
  );
}
