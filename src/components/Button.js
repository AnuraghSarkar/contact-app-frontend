import styled from "styled-components";
const Button = () => {
  return (
    <>
      <DeleteBtn>DELETE CONTACT</DeleteBtn>
    </>
  );
};

const DeleteBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  position: relative;
  width: 320px;
  height: 40px;
  background: #da4b26;
  text-align: center;
  color: white;
  top: 5px;
  border: none;
  border-radius: 6px;
  flex: none;
  order: 4;
  flex-grow: 0;
  margin: 16px 0px;
`;

export default Button;
