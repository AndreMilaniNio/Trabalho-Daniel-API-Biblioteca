export async function Routes(app) {
  app.get("/", async (req, res) => {
    res.status(200).send({ Message: "Hello World!" });
  });
}
