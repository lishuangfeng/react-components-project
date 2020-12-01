import { SET_LANGUAGE } from "@/consts";

export const setLanguage = (language: string) => ({
  type: SET_LANGUAGE,
  payload: language
})