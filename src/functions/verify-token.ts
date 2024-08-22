// import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    // await jwtVerify(
    // token,
    // new TextEncoder().encode("chave de criptografia JWT do BACK - colocar no ENV e buscar aqui"),
    // {algorithms: ["Algoritimo de codificação exp HS256"]}
    // );
    return true;
  } catch (error) {
    return false;
  }
}
