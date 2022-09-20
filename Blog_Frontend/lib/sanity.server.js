import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token:
    "skiu1niw027oKGbhmK3wO83iWQpphzJhozB27kGGTz1TPY0Rd0QCC5EawY3eeRkZEgFpcflMMg75BF01qfROV0QAOqW1vXqtM43ojHJwdEwrQcarhd6MYSoCMiSMYEI2VQR7iDw8APVtmNbE0ZjpFvtM0k9ezjVO7jJYHaaUCdHFLuVNZ4X9",
});

export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
