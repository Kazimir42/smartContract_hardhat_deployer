require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.7",
  networks: {
   rinkeby: { //mainnet if u want deploy to real ETH network
     url: "url", //Infura url with projectId
     accounts: ["PRIVATEKEY"] // add the account that will deploy the contract (private key)
    },
  },
  //networks: {  LOCALHOST
  //  hardhat: {
  //    chainId: 1337
  //  }
  //},
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
