const { expect } = require("chai"); // to chrck whether the contract works properly or not

describe("Token Contract", function () { 
  let Token; 
  let hardhatToken;
   let owner; 
   let addr1; 
   let addr2;
    let addrs;

beforeEach(async function () { 
  Token = await ethers.getContractFactory("Token"); // create instance of sc  
   [owner, addr1, addr2, ...addrs] = await ethers.getSigners(); // destructing      // no need to repeat this three lines while deploying
   hardhatToken = await Token.deploy();
   });

describe("Deployment", function () { 
  it("Should set the right owner", async function () { 
    expect(await hardhatToken.owner()).to.equal(owner.address); });
     it("Should assign the total supply of tokens to the owener", async function () { 
       const ownerBalance = await hardhatToken.balanceOf(owner.address); 
       expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
       });
       });

describe("Transaction", function () { 
  it("Should transfer tokens between accounts", async function () { 
    await hardhatToken.transfer(addr1.address, 10); //owner to addr1 10 tokens
     const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(10);

  await hardhatToken.connect(addr1).transfer(addr2.address, 5); //addr1 to addr2 5 tokens
  const addr2Balance = await hardhatToken.balanceOf(addr2.address);
  expect(addr2Balance).to.equal(5);
});

it("Should fail if sender does not have enough tokens", async function () { // as beforeeach will redeploy the sc and addr1 will have 0 
  const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);
  await expect(
    hardhatToken.connect(addr1).transfer(owner.address, 10)
  ).to.be.revertedWith("Not enough tokens"); //addr1 to owner address 10 tokens
  expect(await hardhatToken.balanceOf(owner.address)).to.equal(         // just cheching as the owner balace must equal to its initial balance
    initialOwnerBalance
  );
});
}); });