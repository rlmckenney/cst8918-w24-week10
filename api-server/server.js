import cors from "@fastify/cors";
import { build } from "./app.js";

const envLogLevels = {
  dev: "debug",
  development: "debug",
  test: "info",
  stage: "warn",
  prod: "error",
  production: "error",
};

const server = build({
  logger: {
    level: envLogLevels[process.env.NODE_ENV] || "info",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

server.register(cors, {});

/** Start the server! */
const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
