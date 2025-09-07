import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const COOKIE_NAME = "baratha_admin";
const TTL = 60 * 60 * 8;

export function setSession(payload: object) {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: TTL });
  cookies().set(COOKIE_NAME, token, { httpOnly: true, sameSite: "lax", secure: false, path: "/" });
}

export function clearSession() {
  cookies().set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
}

export function getSession<T = any>(): T | null {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;
  try { return jwt.verify(token, process.env.JWT_SECRET!) as T; } catch { return null; }
}

export function requireAdmin() {
  const session = getSession<{ role: string }>();
  if (!session || (session.role !== "ADMIN" && session.role !== "EDITOR")) throw new Error("UNAUTHORIZED");
  return session;
}
