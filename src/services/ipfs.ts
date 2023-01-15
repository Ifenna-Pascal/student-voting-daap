import { create } from "ipfs-http-client";
const projectId = "2K3v8fSiUEALNi3JRURV9maoSNZ";
const projectSecret = "f24630ce9b12d1a3777d4f7bf6b9a290";

const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

console.log(auth);

const ifpsConfig = {
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
};

const ipfs = create(ifpsConfig);

export const addDataToIPFS = async (metadata: any): Promise<string> => {
  const ipfsHash = await ipfs.add(metadata);
  console.log("IPFS", ipfsHash);
  return ipfsHash.cid.toString();
};
