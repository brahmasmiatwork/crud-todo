// const { ethers, upgrades } = require ('hardhat')

const networkName = hre.network.name;
const networkUrl = hre.network.config.url;
const PUBLIC_KEY = process.env.PUBLIC_KEY
console.log('Deploying to network', networkName, networkUrl);

async function main() {
  const Box = await ethers.getContractFactory("Bloc")
  console.log("Deploying Bloc = Bloc.sol")
  const instance = await upgrades.deployProxy(Box)
  await instance.deployed();
  console.log("Bloc deployed to:", instance.address)
}



main()
.then(() => process.exit(0))
.catch( error => {
  console.error(error)
  process.exit(1)
});