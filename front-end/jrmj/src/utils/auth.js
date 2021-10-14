import bcrypt from "bcryptjs";

export const validatePassword = (enteredPassword, retrievedPassword) => {
let validated = null;
 validated = bcrypt.compareSync(enteredPassword, retrievedPassword);
  return validated;
};