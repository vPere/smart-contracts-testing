// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // Name and symbol of the NFT collection
    constructor() ERC721("MyNFT", "MNFT") {}

    // Mint a new NFT
    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        // Mint the NFT
        _safeMint(recipient, tokenId);

        // Set the metadata URI for the token
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    // Get the current tokenId
    function currentTokenId() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
}
