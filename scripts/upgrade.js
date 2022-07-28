// const { ethers, upgrades } = require ('hardhat')

async function main() {
    const BoxV2 = await ethers.getContractFactory("Boxv2")
    // console.log("Deploying proxy,  box implementation, and proxy admin")
    let box = await upgrades.upgradeProxy("0x8F856EdA48FD124a1C788C41095F8540B4864Bd6", BoxV2)
    // const instance = await upgrades.deployProxy(Box, [42], { initializer: 'store'})
    await box.deployed();
    console.log("Upgraded proxy", box.address)
  }
  
  main()
  .then(() => process.exit(0))
  .catch( error => {
    console.error(error)
    process.exit(1)
  });