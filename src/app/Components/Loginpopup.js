import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import ImageView from "@/app/Components/Image";
import TextField from "@mui/material/TextField";
import { useRouter, usePathname } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const scanner = "/assets/images/scanner.png";
export default function LoginPopupPage({ setShowloginPopup }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  let otpFields = [0, 1, 2, 3];

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState("");
  const handleClose = () => {
    setShowloginPopup(false);
    router.replace(pathname);
  };

  const handleChange = (event) => {
    const input = event.target.value;
    if (/^\d*$/.test(input) && input.length <= 10) {
      setMobileNumber(input);
    }
  };
  const handleOtpChange = (e) => {
    let name = +e.target.name;
    let value = e.target.value;
    if (value < 0 || value === "+" || value === "-") {
      return;
    }
    let tempOtp = [...otp];
    if (tempOtp[name] && value.length > 1) {
      value = value.split("")[value.length - 1];
    }
    tempOtp[name] = value;
    setError("");
    setOtp([...tempOtp]);
    for (let i in tempOtp) {
      if (!tempOtp[i]) {
        setDisable(true);
        return;
      }
    }
    setDisable(false);
  };

  const onKeyUp = (e) => {
    let name = +e.target.name;
    let value = e.target.value;

    if (value < 0 || value === "+" || value === "-") {
      return;
    }

    let field = "";

    if (
      e.key === "Delete" ||
      e.key === "Backspace" ||
      (e.shiftKey && e.key === "Tab")
    ) {
      field = e.target.form.elements[name - 1];
    } else if (!e.shiftKey) {
      if (value) {
        field = e.target.form.elements[name + 1];
      }
    }

    if (field) {
      field.focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const value = e.clipboardData.getData("text");
    const arr = value.replace(/\D+/g, "").split("");
    setOtp(arr);
    if (arr && arr.length === 6) {
      setDisable(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !disable) {
      e.preventDefault();
      handleClick();
    }
  };
  const otpClassName = (data) => {
    if (data && error) {
      return "error-otpField";
    } else if (data) {
      return "filled-otpField";
    }
    return "otpField";
  };
  return (
    <Wrapper>
      <LoginPopup>
        <CloseButton onClick={handleClose}>
          <Close size={32} color="#707a94" />
        </CloseButton>
        <Heading>Login or sign up to continue</Heading>
        <SubHeading>Scan QR code or enter phone number to login</SubHeading>
        <Container>
          <ScannerContainer>
            <ImageView
              src={scanner}
              width={180}
              height={180}
              alt="scanner"
              style={{ borderRadius: "10px" }}
            />
            <ScannerHeading>Use Camera App to Scan QR</ScannerHeading>
            <ScannerSubHeading>
              Click on the link generated to redirect to Disney+ Hotstar mobile
              app
            </ScannerSubHeading>
          </ScannerContainer>
          <Divider>
            <OrText>OR</OrText>
          </Divider>
          <PhoneNumberContainer>
            {showOtp ? (
              <OtpContainer>
                <Backbutton onClick={() => setShowOtp(false)}>
                  <GoArrowLeft color="#8f98b2" size="20" />
                  Back
                </Backbutton>
                <OtpHeading>Enter OTP sent to +91{mobileNumber}</OtpHeading>
                <OtpForm>
                  {otpFields.map((data, i) => (
                    <OtpTextField
                      type="number"
                      onPaste={handlePaste}
                      autoFocus={i === 0 ? true : false}
                      key={i}
                      id={`otpField-${i}`}
                      name={data}
                      onChange={handleOtpChange}
                      style={{
                        MozAppearance: "textfield",
                        WebkitAppearance: "none",
                        margin: 0,
                      }}
                      onKeyUp={onKeyUp}
                      onKeyDown={(e) =>
                        i + 1 === otpFields.length && handleKeyDown(e)
                      }
                      className={`${otpClassName(
                        otp[data]
                      )} text-center  text-black font-medium text-xl`}
                      value={otp[data]}
                    />
                  ))}
                </OtpForm>
                <ResendOtp>
                  Resend Otp in:<span>00.30</span>
                </ResendOtp>
              </OtpContainer>
            ) : (
              <>
                <InstructionWrapper>
                  <PhoneInputFieldWrapper>
                    <Code>+91</Code>
                    <StyledTextField
                      id="outlined-basic"
                      label="Enter mobile number"
                      variant="outlined"
                      value={mobileNumber}
                      onChange={handleChange}
                      inputProps={{ maxLength: 10 }}
                    />
                  </PhoneInputFieldWrapper>
                  <PhoneFieldInstruction>
                    By proceeding you confirm that you are above 18 years of age
                    and agree to the <FieldSpan>Privacy Policy</FieldSpan> &{" "}
                    <FieldSpan>Terms of use</FieldSpan>
                  </PhoneFieldInstruction>
                </InstructionWrapper>
                {mobileNumber.length === 10 && (
                  <OtpButton onClick={() => setShowOtp(true)}>
                    Get OTP <FaAngleRight color="white" />
                  </OtpButton>
                )}
              </>
            )}
            <TroubleText>
              Having trouble logging in? <TroubleSpan>Get Help</TroubleSpan>
            </TroubleText>
          </PhoneNumberContainer>
        </Container>
      </LoginPopup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--overlay-color-3);
`;
const LoginPopup = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 50%;
  left: 50%;
  border-radius: 20px;
  background: #16181f;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  gap: 0.3rem;
`;
const Close = styled(IoMdClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const Heading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 30px;
  font-weight: 600;
  color: var(--text-color900);
`;
const SubHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-color1000);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 0 2rem;
`;
const ScannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const ScannerHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color900);
  width: 100%;
  text-align: center;
`;
const ScannerSubHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 18px;
  font-weight: 400;
  color: var(--text-color1000);
  text-align: center;
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  height: 15rem;
  width: 1px;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(112, 122, 148, 0),
    #707a94 50%,
    rgba(112, 122, 148, 0)
  );
  margin: 0 4rem;
`;
const OrText = styled.p`
  background: #16181f;
  font-size: 14px;
  font-weight: 400;
  padding: 4px 0px;
  color: var(--text-color500);
`;
const PhoneNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
`;
const InstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const PhoneInputFieldWrapper = styled.div`
  display: flex;
  gap: 0.7rem;
`;
const Code = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #4b5166;
  padding: 12px;
  background: transparent;
  color: #4b5166;
  width: 4rem;
  font-size: 16px;
  font-weight: 500;
`;

const StyledTextField = styled(TextField)`
  & .MuiInputLabel-root {
    color: var(--text-color1000);
    font-family: 500;
  }
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color800);
    border-radius: 8px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color800);
    border-radius: 8px;
  }
  & .MuiOutlinedInput-input {
    color: var(--text-color900);
    font-size: 20px;
  }
`;

const PhoneFieldInstruction = styled.p`
  color: var(--text-color500);
  font-family: var(--FONT_FAMILY);
  font-size: 14px;
  line-height: 20px;
`;
const FieldSpan = styled.span`
  color: var(--text-color1000);
  font-weight: 600;
`;
const TroubleText = styled.p`
  color: var(--text-color1000);
  font-size: 16px;
`;
const TroubleSpan = styled.span`
  color: var(--text-color700);
  font-weight: 600;
`;
const CloseButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
const OtpButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  background: var(--button-gradieent-color);
  border-radius: 8px;
  justify-content: center;
  border: none;
  padding: 1rem 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const OtpContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: start;
`;
const Backbutton = styled.div`
  color: var(--text-color1000);
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
const OtpHeading = styled.p`
  font-family: var(--FONT-FAMILY);
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color900);
`;
const ResendOtp = styled.p`
  color: var(--text-color1000);
  font-size: 14px;
  font-weight: 500;
  margin-top: 1rem;
`;
const OtpForm = styled.form`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.3rem;
`;
const OtpTextField = styled(TextField)`
  width: 3.5rem;
  height: 2.9rem;
  & .MuiInputLabel-root {
    color: var(--text-color1000);
    font-family: 500;
  }
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color800);
    border-radius: 8px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: var(--border-color800);
    border-radius: 8px;
  }
  & .MuiOutlinedInput-input {
    color: var(--text-color900);
    font-size: 20px;
  }
`;
