export const Previous = (method, string) => {
  method(string);
  sessionStorage.setItem("affiliateTab", string);
};
