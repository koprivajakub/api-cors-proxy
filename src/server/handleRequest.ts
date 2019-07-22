import {RequestHandler} from "express-serve-static-core";
import {Request, Response} from "express";
import {httpClient} from "client/axiosFactory";
import {Method} from "axios";

const handleRequest: RequestHandler = (req: Request, res: Response) => {
  const { host, origin, ...headers } = req.headers;

  httpClient.request({
    method: req.method as Method,
    baseURL: process.env.BASE_URL || 'http://localhost',
    url: req.originalUrl,
    headers: {
      ...headers,
      host: process.env.HOST || "localhost",
      origin: process.env.ORIGIN || "http://localhost"
    }
  }).then((response) => {
    const { headers } = response;
    Object.keys(headers).forEach(headerKey => {
      const headerValue = headers[headerKey];
      res.setHeader(headerKey, headerValue);
    });

    res.setHeader("Access-Control-Allow-Origin", process.env.ACCESS_CONTROL_ALLOW_ORIGIN || "*")

    res.json({
      ...response.data
    });
  }).catch((reason => {
    res.status(reason.response.status).json({
      ...reason.response.data
    });
  }));
};

export { handleRequest };
