require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
      hardhat: {},

    bsc: {
      // chainId: 97,
      url: "https://bsc-dataseed.binance.org/",
      accounts: ['9915ad9d4c2908713f3d3d6262506f3c94eb93434102fb307e0fec5c207df304'],
    },

  
  },
  etherscan: {
    apiKey: "XH3M2Y7EMXUE8SEX1F5XYDQ8Z51AX585JK",
  },
  
};
