import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      action={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; &nbsp; Back
    </Button>
  );
}

export default ButtonBack;
