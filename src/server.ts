import fastify from "fastify";

const app = fastify();

app.post("/events", (req, res) => {
  console.log(req.body);
  return "Hello World!";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on port 3333");
});
