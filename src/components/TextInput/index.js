import styled from 'styled-components';

function TextInput({ answer, setAnswer }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
    ></Input>
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 18px;
`;

export default TextInput;
