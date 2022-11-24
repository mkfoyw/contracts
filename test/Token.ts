import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

console.log(describe)
describe("Token", function () {
    async function deployToken() {
        const name = "Test Token"
        const symbol = "TKN"
        const initSupply = 10000000000000
        const [owner, otherAccount] = await ethers.getSigners()
        
        const Token = await ethers.getContractFactory("Token");
        const token = await Token.deploy(name, symbol, initSupply)
        return {token, name, symbol, initSupply, owner, otherAccount}
    }
    
    describe("Deployment", function(){
        it("Should set the right name", async function () {
            const {token, name} = await loadFixture(deployToken);
            expect(await token.name()).to.equal(name);
        })

        it("Should set right symbol", async function () {
            const {token, symbol}  = await loadFixture(deployToken);
            expect(await token.symbol()).to.equal(symbol)
            
        })

        it("Should set the right initialSupply", async function () {
            const {token, owner, initSupply} = await loadFixture(deployToken)
            expect(await token.totalSupply()).to.equal(initSupply)
            expect(await token.balanceOf(owner.address)).to.equal(initSupply)

        })
    })
})