import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { auth } from "../lib/auth";

async function seedAdmin() {
  const user = await auth.api.signUpEmail({
    body: {
      name: "HR Admin",
      email: "admin@company.com",
      password: "admin123456",
    },
  });

  console.log("Admin created:", user);
}

seedAdmin()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
