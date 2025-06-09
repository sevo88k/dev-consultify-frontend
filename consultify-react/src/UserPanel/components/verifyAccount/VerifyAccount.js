import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../../../Redux/Actions/user/auth";
import { resetVerified } from "../../../Redux/Reducers/user/RegAuthSlice";

const VerifyAccount = () => {
  const { otp, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isVerified = useSelector((state) => state.userRegAuth.isVerified);
  useEffect(() => {
    if (otp && id) {
      dispatch(verifyEmail({ otp: otp, id: id }));
    }
  }, [otp, id]);
  useEffect(() => {
    if (isVerified) {
      dispatch(resetVerified());
      navigate("/login");
    }
  }, [isVerified]);
  return (
    <div className="spinnerDiv">
      <Spinner
      className="spinnerClass"
        variant="primary"
        as="span"
        animation="border"
        size="lg"
        role="status"
        aria-hidden="true"
      />
    </div>
  );
};

export default VerifyAccount;
