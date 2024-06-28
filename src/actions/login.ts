"use server";

import { cookies } from "next/headers";

export type Login = {
  username: string | null;
  password: string | null;
};

export default async function login(formData: FormData) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const username = formData.get("username") as Login["username"];
  const password = formData.get("password") as Login["password"];

  try {
      const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
          response = await fetch(url, {
              method: "POST",
              body: formData,
          }),
          data = await response.json();
      
      
      cookies().set('Authtoken', data.token, {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24,
      })
      

    return data;
  } catch (error) {
    console.log(error);
  }
}
