// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/access/ownable.sol";

contract Hello is Ownable {
    string  private _gret = "Hello, ";
    string  private _greting = "World!";


    function greet() external view returns (string memory) {
        return  string(abi.encodePacked(_gret, _greting));
    }

    function setGreetie(string calldata  _newGreetie) external onlyOwner {
        _greting = _newGreetie;
    } 
}
