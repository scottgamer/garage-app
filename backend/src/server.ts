import app from "./app";
import { initialize } from "./service/db";

const port = parseInt(process.env.APP_PORT as string) || 3000;

(() => {
  initialize();

  app.listen(port, () => {
    const logYellow = "\x1b[33m%s\x1b[0m";
    console.log(logYellow, `💾 running on ${port}`);
  });
})();
