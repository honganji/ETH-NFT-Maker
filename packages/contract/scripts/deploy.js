const hre = require('hardhat');

const main = async () => {
  // コントラクトがコンパイルします
  // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
  const nftContractFactory = await hre.ethers.getContractFactory('Web3Mint');
  // Hardhat がローカルの Ethereum ネットワークを作成します。
  const nftContract = await nftContractFactory.deploy();
  // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
  await nftContract.deployed();
  console.log('Contract deployed to:', nftContract.address);
};
// エラー処理を行っています。
const runMain = async () => {
  try {
    await main();
  } catch (error) {
    console.log(error);
    throw new Error('Something bad happened!');
  }
};
runMain();
