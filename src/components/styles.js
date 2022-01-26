import styled from 'styled-components';

export const RegisterButton = styled.button`
display: inline-block;
  cursor: pointer;
  font-size: 10pt;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.5s ease;
  background: #444444;
  color: #FFF;
  :hover {
    box-shadow: ${({ theme }) => (theme === 'dark' ? 'inset 0 0 100px 100px #E5E5E5' : 'inset 0 0 100px 100px #444d56')};
  }
  @media only screen and (max-width: 640px) {
    font-size: 8pt;
  }
`;

export const Input = styled.input`
display: inline-block;
  font-size: 10pt;
  padding: 8px;
  background: #DCDCDC;
  border: none;
  border-radius: 10px 0 0 10px;
  @media only screen and (max-width: 640px) {
    font-size: 8pt;
  }
`;

export const Wrapper1 = styled.div`
`;

export const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Details = styled.div`
  h1 {
    font-size: 30pt;
  }
  p {
    font-size: 15pt;
    font-weight: bold;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
`;

export const Select = styled.select`
  font-size: 18px;
  padding: 10px;
  border: 2px solid #e4e4e4;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 5px;
  width: 100%;
  margin: 10px;
  transition: all 300ms ease hover;
  &:focus {
    border: 2px solid #ca043f;
  }
`;

export const Submit = styled.button`
  font-size: 24px;
  padding: 10px;
  border: 3px solid #ca043f;
  background: #fff;
  width: 30%;
  margin: 20px;
  border-radius: 5px;
  transition: all 300ms ease;
  &:hover {
    border: 3px solid #ca043f;
    background: #ca043f;
    color: #e4e4e4;
    cursor: pointer;
  }
`;

export const Label = styled.p`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 24px;
`;

export const SubLabel = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  border: 2px solid #e4e4e4;
  border-radius: 5px;
  transition: all 300ms ease hover;
  width: 90%;
  font-size: 18px;
  &:focus {
    border: 2px solid #ca043f;
  }
`;