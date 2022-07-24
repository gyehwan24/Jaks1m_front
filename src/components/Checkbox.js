import { useState } from "react";
import styled from "styled-components";
function Checkbox({ text }) {
  const [checkState, setCheckState] = useState(false);
  const handleToggle = () => {
    setCheckState((current) => !current);
  };

  return (
    <div>
      {/* <button
        className={checkState ? styles.on : styles.off}
        onClick={handleToggle}
      >
        {text}
      </button> */}

      <StyledLabel htmlFor={text}>
        <StyledInput type="checkbox" name={text} />
        {text}
      </StyledLabel>
    </div>
  );
}
export default Checkbox;

const StyledInput = styled.input`
  display: grid;
  grid-template-columns: 550px 1fr;

  appearance: none;
  border-color: transparent;
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  background-size: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #a9a9a9;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 1rem;
  &:checked {
    background-color: #684fca;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;
  /* display: grid;
  grid-template-columns: 50px 1fr; */
`;

const Button = styled.button`
  display: block;
  font-size: 18px;
  background-color: white;
  border: 0;
`;