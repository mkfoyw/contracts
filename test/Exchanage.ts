import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat"

describe("Exchange", function () {
    async function deployExchange() {
        const [owner, otherAccount] = await ethers.getSigners()

        const Token = await ethers.getContractFactory("Token");
        const token = await Token.deploy("Test Token", "TKN", BigInt(1000000000000000000000))

        const Exchange = await ethers.getContractFactory("Exchange")
        const exchange = await Exchange.deploy(token.address)

        return { token, exchange, owner, otherAccount }
    }
    
    describe("Deployment",  function () {
        it("should set the right token address", async function () {
            const {token, exchange} = await loadFixture(deployExchange)
            expect(await exchange.tokenAddress()).to.equal(token.address)
        })
    })

    describe("GetPrice", function(){
        it("should return the right price", async function(){

        })
    })
})