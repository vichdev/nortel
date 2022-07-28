import React, { useState } from "react";
import BannerButton from "../../components/BannerButton";
import Footer from "../../components/Footer";
import ScreenBanners from "../../components/ScreenBanners";
import banner_contato from "../../assets/ProductsBanner/productbanner_2.jpg";
import Header from "../../components/Header";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaAngleDoubleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import * as Styles from "./styles";
import shopee from "../../assets/lojas/shopee.svg";
import mercado_livre from "../../assets/lojas/mercado_livre.svg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import WhatsApp from "../../components/WhatsApp";
import ButtonToTop from "../../components/ButtonToTop";

const Contact: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [emailSucess, setEmailSucess] = useState<boolean>(null);

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
          setMessage("E-mail enviado com sucesso.");
          setEmailSucess(true);
        },
        function (error) {
          setMessage("Não foi possível enviar o email.");
          setEmailSucess(false);
        }
      );
    setMessage("");
  };

  return (
    <>
      <Header />
      <ScreenBanners title="Podemos ajudar?" img={banner_contato} />
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
                <Styles.EmailErrorMessage isErro={emailSucess}>
                  {message}
                </Styles.EmailErrorMessage>
              </Styles.FormButtonWrapper>
            </Styles.FormContainer>
          </Styles.FormWrapper>
          <Styles.InformationWrapper>
            <Styles.LojasTitleWrapper>
              <Styles.LojasTitle>Informações para contato </Styles.LojasTitle>
            </Styles.LojasTitleWrapper>
            <Styles.InformationContainer>
              <Styles.IconWrapper>
                <FaMapMarkerAlt />
              </Styles.IconWrapper>
              <Styles.InformationContent>
                <Styles.InformationTitle>Localização</Styles.InformationTitle>
                <Styles.InformationDescription>
                  Salvador - BA, 41301-360
                </Styles.InformationDescription>
              </Styles.InformationContent>
            </Styles.InformationContainer>
            <Styles.InformationContainer>
              <Styles.IconWrapper>
                <MdEmail />
              </Styles.IconWrapper>
              <Styles.InformationContent>
                <Styles.InformationTitle>Email</Styles.InformationTitle>
                <Styles.InformationDescription>
                  sabonetes.nortel@gmail.com
                </Styles.InformationDescription>
              </Styles.InformationContent>
            </Styles.InformationContainer>
            <Styles.InformationContainer>
              <Styles.IconWrapper>
                <MdPhone />
              </Styles.IconWrapper>
              <Styles.InformationContent>
                <Styles.InformationTitle>Telefone</Styles.InformationTitle>
                <Styles.InformationDescription>
                  +55 (71) 3301-7719
                </Styles.InformationDescription>
              </Styles.InformationContent>
            </Styles.InformationContainer>
            <Styles.InformationContainer>
              <Styles.IconWrapper>
                <FaWhatsapp />
              </Styles.IconWrapper>
              <Styles.InformationContent>
                <Styles.InformationTitle>WhatsApp</Styles.InformationTitle>
                <Styles.InformationDescription>
                  +55 (71) 3301-7719
                </Styles.InformationDescription>
              </Styles.InformationContent>
            </Styles.InformationContainer>
            <Styles.LojasTitleWrapper>
              <Styles.LojasTitle>Nos encontre em</Styles.LojasTitle>
            </Styles.LojasTitleWrapper>
            <Styles.LojasWrapper>
              <Styles.LojasLink href="https://www.mercadolivre.com.br/perfil/NORTELNORTEL20220717153637">
                <Styles.LojasImg
                  src={mercado_livre}
                  alt="Link para acesso a loja do mercado livre."
                />
              </Styles.LojasLink>
              <Styles.LojasLink href="https://shopee.com.br/?gclid=CjwKCAjwrNmWBhA4EiwAHbjEQDY3_-yIOrnBTZPT8sWlmysKHpZez4ELAPlWUJTZ97B202RXrni4pBoCMMUQAvD_BwE">
                <Styles.LojasImg
                  src={shopee}
                  alt="Link para acesso a loja da shopee."
                />
              </Styles.LojasLink>
              <Styles.LojasLink
                href="https://www.facebook.com/sabonetesnortel"
                title="Link de acesso ao facebook da nortel."
              >
                <FaFacebook color="#395692" />
              </Styles.LojasLink>
              <Styles.LojasLink
                href="https://www.instagram.com/sabonetesnortel/"
                title="Link de acesso ao instagram da nortel."
                setBackground
              >
                <FaInstagram color="white" />
              </Styles.LojasLink>
              <Styles.LojasLink
                href="https://www.linkedin.com/in/nortel-sabonetes-59b328116/?originalSubdomain=br"
                title="Link de acesso ao linkedin da nortel."
              >
                <FaLinkedinIn color="#0a63bc" />
              </Styles.LojasLink>
            </Styles.LojasWrapper>
          </Styles.InformationWrapper>
        </Styles.ContactContainer>
      </Styles.ContactWrapper>
      <Footer />
      <WhatsApp />
      <ButtonToTop />
    </>
  );
};

export default Contact;
