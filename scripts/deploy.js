async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Get contract factory
    const NFT = await ethers.getContractFactory("MyNFT");

    // Deploy contract
    const nft = await NFT.deploy({
        gasLimit: 30000000,
    });
    console.log("MyNFT contract deployed to:", nft.address);

    // Optionally mint an NFT after deployment
    const tokenURI = "https://amber-electoral-carp-513.mypinata.cloud/ipfs/bafkreia2nreuuzk6bglpu7cp5y3djkko3iczfw3zvirzlc5zrcs2s6rvgi";  // Replace with a real token URI
    const mintTx = await nft.mintNFT(deployer.address, tokenURI);
    await mintTx.wait();
    console.log("Minted NFT with token ID:", await nft.currentTokenId());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
