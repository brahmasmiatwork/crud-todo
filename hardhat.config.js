require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY

const RINKEBY_RPC_URL="https://rinkeby.infura.io/v3/98879bd96e554a22b5b0e6db5c3ddece";
const PRIVATE_KEY="5b6cfbd3ae6a18010088c6bad22b6d28bfa787c4388cbe1bd95a4785c3a021d6"

console.log("url", RINKEBY_RPC_URL);
console.log("key", PRIVATE_KEY)
// const key = "663c22a862ae1a6aac1659b71bc6261607354f4b8f7d053b40f159056bb8a325"
module.exports = {
defaultNetwork: "rinkeby",
networks: {
  rinkeby: {
    url: RINKEBY_RPC_URL ,
    accounts: [PRIVATE_KEY]
  }
},

  solidity: "0.8.1",
};
