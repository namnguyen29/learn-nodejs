import http from "http";

export const appRoutes = function (
  req: http.IncomingMessage,
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  }
) {
  // 2. return text on route '/'
  const url = req.url;
  const method = req.method;
  if (url === "/create-user" && method === "POST") {
    const body_1 = [];
    req.on("data", function (chunk) {
      body_1.push(chunk);
    });
    req.on("end", function () {
      console.log(body_1);
      const parseBody = Buffer.concat(body_1).toString();
      console.log(parseBody.split(" "));
    });
    res.statusCode = 302; // redirect status code
    // 3. res.setHeader("Location", "/");
    res.end();
  } else if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '\n    <!DOCTYPE html>\n    <html lang="en">\n      <body>\n        <h1>Learn nodejs with Maximilian</h1>\n        <form action="/create-user" method="post">\n          <input type="text" name="username" />\n          <button type="submit">Submit</button>\n        </form>\n      </body>\n    </html>\n    '
    );
    return res.end();
  } else if (url === "/users") {
    res.write(
      '\n    <!DOCTYPE html>\n    <html lang="en">\n      <body>\n        <ul>\n          <li>Dii 1</li><li>Dii 2</li><li>Dii 3</li>\n        </ul>\n      </body>\n    </html>\n    '
    );
    return res.end();
  }
};
