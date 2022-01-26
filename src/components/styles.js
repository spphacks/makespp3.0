import styled from 'styled-components';

export const Wrap = styled.div`
  white-space: nowrap;
`;

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
