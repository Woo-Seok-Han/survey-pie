import styled from 'styled-components';

function TextAreaInput({ answer, setAnswer }) {
  return (
    <TextArea
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
    ></TextArea>
  );
}

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 18px;
  height: 196px;
  resize: none;
`;

export default TextAreaInput;
