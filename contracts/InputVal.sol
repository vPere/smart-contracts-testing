// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract InputVal {
    mapping(address => uint8) public ages;

    // Function to set age
    function setAge(uint8 age) public {
        // Vulnerability: No check to ensure that age is within a valid range
        ages[msg.sender] = age;
    }

    // Function to get age
    function getAge() public view returns (uint8) {
        return ages[msg.sender];
    }
}
