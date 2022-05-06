import Avatar from "../static/avatar.jpg";
import Button from "./Button";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <Container>
        <Title>CONTACT INFORMATION</Title>
        <AvatarImg src={Avatar} alt="profile" />
        <Info>
          <Username>Johnny Deep</Username>
          <Contact>+9779915445156</Contact>
        </Info>
        <Button />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  position: relative;
  width: 400px;
  height: 453px;
  background: #ffffff;
  border: 1px solid #d7dedd;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.04),
    0px 4px 3.25px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
`;

const Title = styled.h1`
  position: relative;
  width: 320px;
  height: 30px;
  top: -8px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
}
`;

const AvatarImg = styled.img`
  position: relative;
  width: 150px;
  height: 150px;
  top: 10px;
  border-radius: 100px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: relative;
  width: 304px;
  height: 69px;
  top: 17px;
  border-radius: 16px;
  flex: none;
  order: 3;
  flex-grow: 0;
  margin: 16px 0px;
`;

const Username = styled.h1`
  position: relative;
  width: 304px;
  height: 44px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`;

const Contact = styled.h3`
  position: relative;
  width: 252px;
  height: 17px;
  font-family: "Outfit";
  top: -10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
`;
export default Card;
