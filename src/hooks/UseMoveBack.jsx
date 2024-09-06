import { useNavigate } from "react-router-dom";

export default function UseMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
