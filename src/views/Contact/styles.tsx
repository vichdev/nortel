import styled from "styled-components";
import { Button } from "../../components/Button/styles";

export const ContactWrapper = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

//Forms

export const FormButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  margin-top: 2rem;
  justify-content: flex-end;
`;

export const FormButton = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: var(--primary);
  color: #fff;
  border-radius: 5px;
  border: 1px solid var(--primary);
  cursor: pointer;
  opacity: 1;
  font-size: 1rem;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: var(--primary);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FirstInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 35rem;

  margin-bottom: 1rem;
`;

export const FormInput = styled.input<{ setWidth?: string }>`
  width: ${(props) => (props.setWidth ? props.setWidth : "100%")};
  height: 3rem;
  max-width: 35rem;
  padding: 0.5rem;
  border: 1px solid #e0d9c5;
  &::placeholder {
    font-size: 1rem;
  }
  :focus {
    border: 1px solid var(--primary);
  }
`;

export const FormArea = styled.textarea`
  width: 100%;
  max-width: 35rem;
  height: 12rem;
  padding: 1rem;
  resize: none;
  border: 1px solid #e0d9c5;
  &::placeholder {
    font-size: 1rem;
  }
  :focus {
    border: 1px solid var(--primary);
  }
`;

export const FormInputWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 35rem;
  flex-direction: column;
  margin-top: 1rem;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
`;

export const Description = styled.span``;

//Informacoes contato

export const InformationWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 35rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InformationTitle = styled.h1``;

export const InformationDescription = styled.span``;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;
