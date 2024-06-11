import PostRefreshToken from "@/apis/auth/PostRefreshToken";
import { Token } from "@/types/api";

export const saveTokenToLocalStorage = (token: Token): void => {
  localStorage.setItem("accessToken", token.accessToken);
  localStorage.setItem("refreshToken", token.refreshToken);
};

export const loadTokenFromLocalStorage = (): Token | null => {
  const accessToken = localStorage.getItem("accessToken")?.replace(/"/gi, "");
  const refreshToken = localStorage.getItem("refreshToken")?.replace(/"/gi, "");
  if (accessToken && refreshToken) {
    return { accessToken, refreshToken } as Token;
  }
  return null;
};

export const getToken = async (): Promise<string | null> => {
  const token = loadTokenFromLocalStorage();
  if (!token) {
    console.log("로그인해라");
    return null;
  }

  if (!token.accessToken) {
    const newToken = await PostRefreshToken(token.refreshToken);
    saveTokenToLocalStorage(newToken);
    return newToken.accessToken;
  } else {
    return token.accessToken;
  }
};
