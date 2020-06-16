import Queue from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email } = req.body;

    // Database user create
    const user = {
      name,
      email,
    };

    //Envia email para a fila
    await Queue.add("SendMail", { user });

    return res.json({ success: "200", user });
  },
};
