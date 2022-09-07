
export const swEnvVariables = {
  // Aut networks
  networks: 'Goerli,Mumbai',
  networkNames: 'Görli (Ethereum),Mumbai (Polygon)',
  rpcUrls: 'https://goerli.infura.io/v3/,https://matic-mumbai.chainstacklabs.com/|https://rpc-mumbai.matic.today/',
  chainIds: '5,80001',
  blockExplorerUrls: 'https://goerli.etherscan.io/,https://explorer-mumbai.maticvigil.com/',
  autIDAddresses: '0x56C5E4126B2D2E4b3d4319639d0272420f1FEd4A,0xb6868B3920712729A24689Cb5c770639d0C56aDd',
  manifestoAddresses: '0x08b7df00EFf36226c9BE19fC912f9345A8491bd5,0x08b7df00EFf36226c9BE19fC912f9345A8491bd5',

  manifestApi: 'https://manifesto-api.aut.id/api',
};

export const environment = swEnvVariables;

export const getNetworkVariables = (name) => {
  const index = environment.networks.split(',').findIndex((r) => r.trim().toLowerCase() === name.trim().toLowerCase());
  const autIdAddress = environment.autIDAddresses.split(',')[index];
  const manifestoAddress = environment.manifestoAddresses.split(',')[index];
  const rpcUrls = environment.rpcUrls.split(',')[index].split('|');
  const blockExplorerUrls = environment.blockExplorerUrls.split(',')[index].split('|');
  const chainId = environment.chainIds.split(',')[index];

  return {
    autIdAddress,
    manifestoAddress,
    network: {
      name,
      rpcUrls,
      chainId: Number(chainId),
      blockExplorerUrls,
    },
  };
};
