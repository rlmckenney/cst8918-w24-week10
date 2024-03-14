import Fastify from "fastify";
import students from "./data.json" assert { type: "json" };

export function build(opts = {}) {
  const app = Fastify(opts);

  /** Declare Routes */
  app.get("/healthcheck", async function (request, reply) {
    return { isAlive: true };
  });

  app.get("/api/students", async function (request, reply) {
    return students;
  });

  return app;
}
