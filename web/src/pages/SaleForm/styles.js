import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;

  line-height: 10px;
  /* identical to box height, or 50% */

  text-align: center;
  letter-spacing: -0.303916px;

  color: #4f4f4f;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const InputName = styled.h4`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;

  line-height: 17px;
  /* identical to box height, or 113% */

  letter-spacing: -0.303916px;

  color: #4f4f4f;
  margin-top: 0.4rem;
`;

export const StyledInput = styled.input`
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 0.4rem;
  background-color: #fff;
  :focus {
    outline: none;
  }
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: #4f4f4f;
`;

export const BuyButtonText = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  /* identical to box height, or 62% */
  text-align: center;
  letter-spacing: -0.303916px;
  color: #ffffff;
  text-decoration: none;
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  :focus {
    outline: none;
  }
  border-radius: 0.3rem;
  border: 1px solid #4f4f4f;
  padding: 0.6rem;
`;

export const StyledInputEnd = styled.input`
  border: 1px solid #4f4f4f;
  box-sizing: border-box;
  border-radius: 0.4rem;
  background-color: #fff;
  :focus {
    outline: none;
  }
  width: 100%;
  margin-top: 0.2rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: #4f4f4f;
`;
