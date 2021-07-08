// jsonwebtoken test
import jwt from "jsonwebtoken";
const data = {
  name: 1,
  email: "test@test.com",
};

const token = jwt.sign(data, "secretKey", { expiresIn: "1day" });

console.log(token);

const decodeToken = jwt.verify(token, "secretKey");

console.log(decodeToken);
