// const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
// const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
import { check, validationResult } from "express-validator";
import initMiddleware from "../../../utils/initMiddleware";
import validateMiddleware from "../../../utils/validateMiddleware";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("name")
        .isLength({ min: 1, max: 40 })
        .withMessage("Your name must be between 1-40 characters!"),
      check("email")
        .isEmail({ min: 1, max: 31 })
        .withMessage("You must enter a valid email address!"),
      check("phone")
        .custom((phone) => {
          if (
            phone &&
            phone.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
          )
            return true;
        })
        .withMessage("You must enter a valid phone number!"),
      check("subject")
        .isLength({ min: 1, max: 40 })
        .withMessage("The subject must be between 1-40 characters!"),
      check("message")
        .isLength({ min: 10, max: 1000 })
        .withMessage("Your message must be between 10 and 1000 characters!"),
    ],
    validationResult
  )
);

export default async (req, res) => {
  // Optional logging to see the responses
  // in the command line where next.js app is running.
  switch (req.method) {
    case "POST":
      await validateBody(req, res);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(422).json({ errors: errors.array() });
      }

      const body = JSON.parse(req.body);

      return res.status(200).json(body);

    default:
      return res
        .status(404)
        .json({ message: "Request HTTP Method Incorrect." });
  }
};
