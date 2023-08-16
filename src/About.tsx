import { useNavigate } from "react-router-dom";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

const About = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <div>
      <CCard>
        <CCardHeader>Header</CCardHeader>
        <CCardBody>
          <CCardTitle>Special title treatment</CCardTitle>
          <CCardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CCardText>
          <CButton onClick={onClick}>Go back</CButton>
        </CCardBody>
      </CCard>
    </div>
  );
};
export default About;
