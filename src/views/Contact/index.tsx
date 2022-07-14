import React from "react";
import BannerButton from "../../components/BannerButton";
import Footer from "../../components/Footer";
import ScreenBanners from "../../components/ScreenBanners";
import banner_contato from "../../assets/ProductsBanner/productbanner_2.jpg";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Header from "../../components/Header";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import * as Styles from "./styles";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_pxa18en",
        "template_okl9ji3",
        "#form_contato",
        "YDsDi4Bi4rd8HJxTF"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <Header />
      <ScreenBanners
        title="Podemos ajudar?"
        description="É um prazer poder tirar suas dúvidas!"
        img={banner_contato}
      >
        <BannerButton title="Home" to="/" />
        <FaAngleDoubleLeft />
        <BannerButton title="Contato" to="/contact" toggleUnderline />
      </ScreenBanners>
      <Styles.ContactWrapper>
        <Styles.ContactContainer>
          <Styles.FormWrapper>
            <Styles.TitleWrapper>
              <Styles.Title>Envie sua mensagem</Styles.Title>
              <Styles.Description>
                Nos envie uma mensagem que responderemos em breve.
              </Styles.Description>
            </Styles.TitleWrapper>
            <Styles.FormContainer
              onSubmit={handleSubmit(onSubmit)}
              id="form_contato"
            >
              <Styles.FirstInputsWrapper>
                <Styles.FormInputWrapper>
                  <Styles.FormLabel>Nome</Styles.FormLabel>
                  <Styles.FormInput
                    type="text"
                    name="name"
                    setWidth="90%"
                    {...register("name", { required: true })}
                    placeholder="Nome"
                  />
                  {errors?.name && (
                    <Styles.ErrorMessage>
                      Esse campo é necessário.
                    </Styles.ErrorMessage>
                  )}
                </Styles.FormInputWrapper>
                <Styles.FormInputWrapper>
                  <Styles.FormLabel>Email</Styles.FormLabel>
                  <Styles.FormInput
                    type="text"
                    placeholder="Email"
                    name="email"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    })}
                  />
                  {errors?.email && (
                    <Styles.ErrorMessage>
                      Por favor, insira um email válido.
                    </Styles.ErrorMessage>
                  )}
                </Styles.FormInputWrapper>
              </Styles.FirstInputsWrapper>
              <Styles.FormInputWrapper>
                <Styles.FormLabel>Assunto</Styles.FormLabel>
                <Styles.FormInput
                  type="text"
                  placeholder="Assunto"
                  name="assunto"
                  {...register("assunto", {
                    required: true,
                  })}
                />
                {errors?.assunto && (
                  <Styles.ErrorMessage>
                    Esse campo é necessário.
                  </Styles.ErrorMessage>
                )}
              </Styles.FormInputWrapper>
              <Styles.FormInputWrapper>
                <Styles.FormLabel>Mensagem</Styles.FormLabel>
                <Styles.FormArea
                  placeholder="Digite sua mensagem"
                  name="mensagem"
                  {...register("mensagem", {
                    required: true,
                  })}
                />
                {errors?.assunto && (
                  <Styles.ErrorMessage>
                    Esse campo é necessário.
                  </Styles.ErrorMessage>
                )}
              </Styles.FormInputWrapper>
              <Styles.FormButtonWrapper>
                <Styles.FormButton
                  type="submit"
                  title="Enviar mensagem"
                  value="Enviar Mensagem"
                />
              </Styles.FormButtonWrapper>
            </Styles.FormContainer>
          </Styles.FormWrapper>
          <Styles.InformationWrapper>
            <Styles.InformationTitle>Nossos contatos</Styles.InformationTitle>
            <Styles.InformationContainer>
              <Styles.InformationTitle>Endereço</Styles.InformationTitle>
              <Styles.InformationDescription>
                R. São Miguel dos Campos, 29 - Valéria, Salvador - BA, 41301-360
              </Styles.InformationDescription>
            </Styles.InformationContainer>
            <Styles.InformationContainer>
              <Styles.InformationTitle>E-mail</Styles.InformationTitle>
              <Styles.InformationDescription>
                <MdEmail /> sabonetes.nortel@gmail.com
              </Styles.InformationDescription>
            </Styles.InformationContainer>
            <Styles.InformationContainer>
              <Styles.InformationTitle>Telefones</Styles.InformationTitle>
              <Styles.InformationDescription>
                <MdPhone /> +55 (71) 3301-7719
              </Styles.InformationDescription>
              <Styles.InformationDescription>
                <FaWhatsapp /> +55 (71) 3301-7719
              </Styles.InformationDescription>
            </Styles.InformationContainer>
          </Styles.InformationWrapper>
        </Styles.ContactContainer>
      </Styles.ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
