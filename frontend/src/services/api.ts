export const url = "http://localhost:3000/api";

export const getList = async () => {
  const response = await fetch(url);
  return await response.json();
};
