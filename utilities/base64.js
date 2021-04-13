export const base64Encode = (str) => {
  const buff = Buffer.from(str, "utf-8");
  return buff.toString("base64");
};

export const base64Decode = (str) => {
  const buff = Buffer.from(str, "base64");
  return buff.toString("utf-8");
};

export default { base64Encode, base64Decode };
