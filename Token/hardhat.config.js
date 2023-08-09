require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => { 
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) { 
    console.log(account.address); 
  }
 });

 //https://sepolia.infura.io/v3/01621beb7c754a4fbd91adac9a24e7fa
  const INFURA_API_KEY = "01621beb7c754a4fbd91adac9a24e7fa";
  
  /**
  
  @type import('hardhat/config').HardhatUserConfig */ 
  const SEPOLIA_PRIVATE_KEY ="1d96ebb696f8a9571eab8250c76df82064a4e931dd46b02b3dba380d02f8413c";
   module.exports = { 
     solidity: "0.8.9", 
     
     networks:
      { sepolia:
         { url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`, 
           accounts: [`${SEPOLIA_PRIVATE_KEY}`],
           },
           },
           };
