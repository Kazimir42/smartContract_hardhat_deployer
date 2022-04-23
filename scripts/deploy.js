const hre = require("hardhat");
const {MerkleTree} = require("merkletreejs");
const keccak256 = require("keccak256");
const tokens = require("./tokens.json")

async function main() {
  const [deployer] = await ethers.getSigners(); //get the account to deploy the contract

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("file name of contract");
  const greeter = await Greeter.deploy("PARAMETERS OF CONTRACT");

  await character.deployed();

  console.log("Character deployed to:", greeter.character);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
