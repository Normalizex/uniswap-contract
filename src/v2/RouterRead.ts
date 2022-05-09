import Web3 from "web3";
import { Contract } from "web3-eth-contract";

class UniswapV2RouterRead {
	private _contract: Contract;

	/**
	 * @returns address
	*/
	WETH = async () => this._contract.methods.WETH().call() as string;

	/**
	 * @returns address
	*/
	factory = async () => this._contract.methods.factory().call() as string;


	/**
	 * @param amountOut - unit
	 * @param reverseIn - unit
	 * @param reserveOut - unit
	 * @returns amountIn - unit
	*/
	getAmountIn = async (
		amountOut: string | number,
		reverseIn: string | number,
		reserveOut: string | number
	) =>
		this._contract.methods.getAmountIn(
			amountOut.toString(),
			reverseIn.toString(),
			reserveOut.toString()
		).call() as string;

	/**
	 * @param amountIn - unit
	 * @param reserveIn - unit
	 * @param reserveOut - unit
	 * @returns amountOut - unit
	*/
	getAmountOut = async (
		amountIn: string | number,
		reserveIn: string | number,
		reserveOut: string | number
	) =>
		this._contract.methods.getAmountOut(
			amountIn.toString(),
			reserveIn.toString(),
			reserveOut.toString()
		).call() as string;
	
	/**
	 * @param amountOut - unit
	 * @param path - address[]
	 * @returns unit[]
	*/
	getAmountsIn = async (amountOut: string | number, path: string[]) => 
		this._contract.methods.getAmountsIn(
			amountOut.toString(),
			[...path.map(address => Web3.utils.toChecksumAddress(address))]
		).call() as string[];
	
	/**
	 * @param amountIn - unit
	 * @param path - address[]
	 * @returns unit[]
	*/
	getAmountsOut = async (amountIn: string | number, path: string[]) => 
		this._contract.methods.getAmountsOut(
			amountIn.toString(),
			[...path.map(address => Web3.utils.toChecksumAddress(address))]
		).call() as string[];
	
	/**
	 * @param amountA - unit
	 * @param reverseA - unit
	 * @param reverseB - unit
	 * @returns unit
	*/
	quote = async (
		amountA: string | number,
		reverseA: string | number,
		reverseB: string | number
	) => 
		this._contract.methods.quote(
			amountA.toString(),
			reverseA.toString(),
			reverseB.toString(),
		).call() as string;

	constructor(contract: Contract) {
		this._contract = contract;
	}
};

export default UniswapV2RouterRead;