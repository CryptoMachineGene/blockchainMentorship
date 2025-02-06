require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

//import helpers from "@nomicfoundation/hardhat-toolbox/network-helpers";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    localhost: {}
  },
};
