// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.10;

interface IZuniswapV2Factory{
     function createPair(address tokenA, address tokenB) external returns(address pair)
}