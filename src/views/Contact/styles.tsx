import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 3rem;
  align-items: center;
`;

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
`;

//Forms

export const FormButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  justify-content: flex-start;
  flex-direction: column;
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
  color: var(--text);
`;

export const Description = styled.span`
  color: var(--sub-text);
`;

//Informacoes contato

export const InformationWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 40rem;
  gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InformationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 19rem;
  max-height: 6rem;
  background-color: #f8f8f8;
  justify-content: space-around;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: -1px -1px 25px 6px rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(52, 94, 171, 0.1);
  border-radius: 99rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--primary);
  }
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 70%;
  justify-content: space-around;
`;

export const InformationTitle = styled.h1`
  color: var(--text);
  font-size: 24px;
`;

export const InformationDescription = styled.span`
  color: #6c6f75;
  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.5rem;
`;

export const EmailErrorMessage = styled.span<{ isErro: boolean }>`
  margin-top: 0.5rem;
  color: ${(props) => (props.isErro ? "green" : "red")};
`;

export const LojasWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

export const LojasLink = styled.a<{ setBackground?: boolean }>`
  width: 4rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  height: 4rem;
  svg {
    font-size: 3rem;
    color: ${(props) => (props.color ? props.color : "var(--text)")};
    border-radius: 0.5rem;
    background-image: ${(props) =>
      props.setBackground
        ? "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
        : "transparent"};
    &:hover {
      color: var(--primary);
    }
  }
`;

export const LojasImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LojasTitle = styled.h1`
  color: var(--text);
  font-size: 2rem;
`;

export const LojasTitleWrapper = styled.div`
  width: 100%;
`;
