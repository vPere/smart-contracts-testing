const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("InputVal Contract", function () {
    let inputVal;
    let owner;

    beforeEach(async function () {
        // Get the contract factory and deploy the contract
        const InputVal = await ethers.getContractFactory("InputVal");
        inputVal = await InputVal.deploy();

        // Ensure contract is deployed
        //await inputVal.deployTransaction.wait();

        [owner] = await ethers.getSigners();
    });

    it("Should set the correct age", async function () {
        await inputVal.setAge(25);
        expect(await inputVal.getAge()).to.equal(25);
    });

    it("Should allow setting age as 255 (max uint8)", async function () {
        await inputVal.setAge(255);
        expect(await inputVal.getAge()).to.equal(255);
    });

    it("Should not allow setting an age above 255", async function () {
        // Since the age is a uint8, it can only go up to 255. Let's test for a value greater than 255
        const overLimitValue = 256;
        await expect(inputVal.setAge(overLimitValue)).to.be.revertedWith("VM Exception while processing transaction: revert");
    });

    it("Should allow setting age as 0", async function () {
        await inputVal.setAge(0);
        expect(await inputVal.getAge()).to.equal(0);
    });

    it("Should revert when trying to set an invalid value (e.g., negative)", async function () {
        // This will fail due to the nature of uint8 type, as it can't handle negative values
        const invalidValue = -1;
        await expect(inputVal.setAge(invalidValue)).to.be.revertedWith("VM Exception while processing transaction: revert");
    });
});
