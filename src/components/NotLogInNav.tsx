import { NavButton } from "../css/NavStyle";

function NotLogInNav() {
  return (
    <>
      <NavButton to="/login" style={{ color: "white" }}>
        로그인
      </NavButton>
      <NavButton to="/signup" style={{ color: "white" }}>
        회원가입
      </NavButton>
    </>
  );
}

export default NotLogInNav;
