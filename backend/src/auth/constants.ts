import * as process from 'node:process';

// gets the secret from the environment variables
export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};
