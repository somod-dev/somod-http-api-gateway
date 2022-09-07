export const getBaseHttpApiEndPoint = () => {
  const endpoint = process.env.NEXT_PUBLIC_SOMOD_BASE_HTTP_API_ENDPOINT;
  if (!endpoint) {
    throw new Error("Unable to get Endpoint URL.");
  }
  return endpoint;
};
