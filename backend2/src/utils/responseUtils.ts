import Express from "express";
import createHttpError from "http-errors";

export namespace ResponseUtils {
  export function sendData(data: any, res: Express.Response) {
    return res.status(200).json(data);
  }
  export function sendError(
    err: createHttpError.HttpError,
    res: Express.Response
  ) {
    let apiError = err;
    apiError = createHttpError(err);
    apiError.status = 404;
    console.log(apiError.status);
    // set locals, only providing error in development
    // res.locals.message = apiError.message;
    // res.locals.error = apiError;

    // render the error page
    return res.status(apiError.status).json({ message: apiError.message });
  }
}
