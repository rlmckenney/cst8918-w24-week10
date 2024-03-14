import tap from "tap";
import { build } from "./app.js";

tap.test('The "/healthcheck" route', async (t) => {
  t.plan(3);
  const app = build();
  t.teardown(() => app.close());

  const response = await app.inject({
    method: "GET",
    url: "/healthcheck",
  });

  t.equal(response.statusCode, 200, "returns a status code of 200");
  t.equal(response.headers["content-type"], "application/json; charset=utf-8");
  t.match(response.json(), { isAlive: true });
});

tap.test('The "/api/students" route', async (t) => {
  t.plan(3);
  const app = build();
  t.teardown(() => app.close());

  const response = await app.inject({
    method: "GET",
    url: "/api/students",
  });

  t.equal(response.statusCode, 200, "returns a status code of 200");
  t.equal(response.headers["content-type"], "application/json; charset=utf-8");
  t.match(response.json()[0], { id: 1 });
});
