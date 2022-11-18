import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"

dotenv.config()

function mnemonic() {
  return process.env.PRIVATE_KEY ?? "";
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      }
    }
  },
  networks: {
    xsc_test: {
      url: process.env.XSC_TEST,
      accounts: [mnemonic()],
    },
    xsc_main: {
      url: process.env.XSC_MAIN,
      accounts: [mnemonic()]
    },
    eth_rinkeby: {
      url: process.env.ETH_RINKEBY,
      accounts: [mnemonic()],
    },
    eth_main: {
      url: process.env.ETH_MAIN,
      accounts: [mnemonic()]
    }
  }
};

export default config;
