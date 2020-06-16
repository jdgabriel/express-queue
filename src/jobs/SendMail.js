import Mail from "../lib/Mail";

export default {
  key: "SendMail",
  options: {
    delay: 5000,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Teste de Filas <queue@queuetest.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá, ${user.name}, este email é enviado diretamente das filas`,
    });
  },
};
