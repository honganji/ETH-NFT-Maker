<p align="center">
  <br />
  <img width="100" src="./assets/eth-logo.png" alt="ETH Logo" width="400" height="100">
  <br/>
  <br />
  <p align="center">
<img src="https://img.shields.io/badge/Solidity-0.8.17-blue?logo=solidity"/>
<img src="https://img.shields.io/badge/hardhat-2.14.0-blue"/>
<img src="https://img.shields.io/badge/React-18.1.0-blue?logo=react"/>
<img src="https://img.shields.io/badge/-javascript-blue?logo=javascript"/>
</p>

<br/>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<br/>

## • Links

[![production](https://img.shields.io/badge/production-v1-blue)](https://eth-nft-maker-client.vercel.app/)

## • Overview

This is a dapp that you can mint NFT. The URI is IPFS so the NFT is completely desentralized and diversed.

This app is deployed to [here](https://eth-nft-maker-client.vercel.app/).

## • Launch

1. run `yarn install` in terminal.

2. make `.env` file under `packages/contract` and input your `Private Key` and `Alchemy HTTP Key` like below.

```
PRIVATE_KEY = <YOUR_PRIVATE_KEY>
STAGING_ALCHEMY_KEY = <ALCHEMY_HTTP_KEY>
```

3. run `yarn contract deploy` in terminal. The result would be like below.

```
Deploying contracts with account:  0x04CD057E4bAD766361348F26E847B546cBBc7946
Account balance:  272899657284590565
WavePortal address:  0x40aB7863b1b4987Df1e514cD99791d523AA128A4
```

4. change the line 80 in `packages/client/src/conponents/NFTUploader.jsx` secription.

```javascript
const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS';
```

5. replace the json file in `packages/client/src/utils/Web3Mint.json` with the content of the json file in `packages/contract/artifacts/contracts/Web3Mint.sol/Web3Mint.json`.

6. Finally, run `yarn client start` in terminal and see how it works!
