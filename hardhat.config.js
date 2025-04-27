require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); // Import dotenv to load environment variables

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache"
  },
  networks: {
    // Sepolia Testnet Configuration
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/9nMjQEfnED5wUjFHqt7_7PCIz8ofRDN5`, // Load from .env
      accounts: [`0x804696765df7564f72f6e0f86e257c4faac06badb07341e80691b08dd99c4baa`] // Load private key from .env
    },
  },
};
