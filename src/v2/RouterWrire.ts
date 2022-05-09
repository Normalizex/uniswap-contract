import Web3 from "web3";
import { Contract } from "web3-eth-contract";

export class UniswapV2RouterWrite {
	private _contract;

	/**
	 * @param tokenA - address
	 * @param tokenB - address
	 * @param amountADesired - unit (ether)
	 * @param amountBDesired - unit (ether)
	 * @param amountAMin - unit (ether)
	 * @param amountBMin - unit (ether)
	 * @param to - address 
	 * @param deadline - time (seconds)
	 * @returns transaction data
	 */
	addLiquidity = (
		tokenA: string,
		tokenB: string,
		amountADesired: string | number,
		amountBDesired: string | number,
		amountAMin: string | number,
		amountBMin: string | number,
		to: string,
		deadline: number
	) => this._contract.methods.addLiquidity(
		Web3.utils.toChecksumAddress(tokenA),
		Web3.utils.toChecksumAddress(tokenB),
		amountADesired.toString(),
		amountBDesired.toString(),
		amountAMin.toString(),
		amountBMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline,
	).encodeABI() as string;

	/**
	 * @param token - address
	 * @param amountTokenDesired - unit (ether)
	 * @param amountTokenMin - unit (ether)
	 * @param amountETHMin - unit (ether)
	 * @param to - address 
	 * @param deadline - time (seconds)
	 * @returns transaction data
	 */
	addLiquidityETH = (
		token: string,
		amountTokenDesired: string | number,
		amountTokenMin: string | number,
		amountETHMin: string | number,
		to: string,
		deadline: number
	) => this._contract.methods.addLiquidityETH(
		Web3.utils.toChecksumAddress(token),
		amountTokenDesired.toString(),
		amountTokenMin.toString(),
		amountETHMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline,
	).encodeABI() as string;
	
	/**
	 * @param tokenA - address
	 * @param tokenB - address
	 * @param liquidity - unit (ether)
	 * @param amountAMin - unit (ether)
	 * @param amountBMin - unit (ether)
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	removeLiquidity = (
		tokenA: string,
		tokenB: string,
		liquidity: string | number,
		amountAMin: string | number,
		amountBMin: string | number,
		to: string,
		deadline: number
	) => this._contract.methods.removeLiquidity(
		Web3.utils.toChecksumAddress(tokenA),
		Web3.utils.toChecksumAddress(tokenB),
		liquidity.toString(),
		amountAMin.toString(),
		amountBMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	/**
	 * @param token - address
	 * @param liquidity - unit (ether)
	 * @param amountTokenMin - unit (ether)
	 * @param amountETHMin - unit (ether)
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	removeLiquidityETH = (
		token: string,
		liquidity: string | number,
		amountTokenMin: string | number,
		amountETHMin: string | number,
		to: string,
		deadline: number
	) => this._contract.methods.removeLiquidityETH(
		Web3.utils.toChecksumAddress(token),
		liquidity.toString(),
		amountTokenMin.toString(),
		amountETHMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	/**
	 * @param token - address
	 * @param liquidity - unit (ether)
	 * @param amountTokenMin - unit (ether)
	 * @param amountETHMin - unit (ether)
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	removeLiquidityETHSupportingFeeOnTransferTokens = (
		token: string,
		liquidity: string | number,
		amountTokenMin: string | number,
		amountETHMin: string | number,
		to: string,
		deadline: number
	) => this._contract.methods.removeLiquidityETHSupportingFeeOnTransferTokens(
		Web3.utils.toChecksumAddress(token),
		liquidity.toString(),
		amountTokenMin.toString(),
		amountETHMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	/**
	 * @param token - address
	 * @param liquidity - unit (ether)
	 * @param amountTokenMin - unit (ether)
	 * @param amountETHMin - unit (ether)
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @param approveMax - bool
	 * @param v - uint
	 * @param r - bytes (string)
	 * @param s - bytes (string)
	 * @returns transaction data
	*/
	removeLiquidityETHWithPermit = (
		token: string,
		liquidity: string | number,
		amountTokenMin: string | number,
		amountETHMin: string | number,
		to: string,
		deadline: number,
		approveMax: boolean,
		v: string | number,
		r: string | number,
		s: string | number
	) => this._contract.methods.removeLiquidityETHWithPermit(
		Web3.utils.toChecksumAddress(token),
		liquidity.toString(),
		amountTokenMin.toString(),
		amountETHMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline,
		approveMax,
		v.toString(),
		r.toString(),
		s.toString()
	).encodeABI() as string;

	/**
	 * @param token - address
	 * @param liquidity - unit (ether)
	 * @param amountTokenMin - unit (ether)
	 * @param amountETHMin - unit (ether)
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @param approveMax - bool
	 * @param v - uint
	 * @param r - bytes (string)
	 * @param s - bytes (string)
	 * @returns transaction data
	 */
	removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = (
		token: string,
		liquidity: string | number,
		amountTokenMin: string | number,
		amountETHMin: string | number,
		to: string,
		deadline: number,
		approveMax: boolean,
		v: string | number,
		r: string | number,
		s: string | number
	) => this._contract.methods.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
		Web3.utils.toChecksumAddress(token),
		liquidity.toString(),
		amountTokenMin.toString(),
		amountETHMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline,
		approveMax,
		v.toString(),
		r.toString(),
		s.toString()
	).encodeABI() as string;
	
	/**
	 * @param tokenA - address
	 * @param tokenB - address
	 * @param liquidity - unit (ether)
	 * @param amountAMin - unit (ether)
	 * @param amountBMin - unit (ether)
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @param approveMax - bool
	 * @param v - uint
	 * @param r - bytes (string)
	 * @param s - bytes (string)
	 * @returns transaction data
	 */
	removeLiquidityWithPermit = (
		tokenA: string,
		tokenB: string,
		liquidity: string | number,
		amountAMin: string | number,
		amountBMin: string | number,
		to: string,
		deadline: number,
		approveMax: boolean,
		v: string | number,
		r: string | number,
		s: string | number
	) => this._contract.methods.removeLiquidityWithPermit(
		Web3.utils.toChecksumAddress(tokenA),
		Web3.utils.toChecksumAddress(tokenB),
		liquidity.toString(),
		amountAMin.toString(),
		amountBMin.toString(),
		Web3.utils.toChecksumAddress(to),
		deadline,
		approveMax,
		v.toString(),
		r.toString(),
		s.toString()
	).encodeABI() as string;

	/**
	 * @param amountOut - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapETHForExactTokens = (
		amountOut: string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapETHForExactTokens(
		amountOut.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;;

	/**
	 * @param amountOutMin - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapExactETHForTokens = (
		amountOutMin : string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapExactETHForTokens(
		amountOutMin.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;;
	
	/**
	 * @param amountOutMin - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapExactETHForTokensSupportingFeeOnTransferTokens = (
		amountOutMin: string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(
		amountOutMin.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	);

	/**
	 * @param amountIn - unit (ether)
	 * @param amountOutMin - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapExactTokensForETH = (
		amountIn: string | number,
		amountOutMin: string | number,
		path: string[],
		to: string,
		deadline: number,
	) => this._contract.methods.swapExactTokensForETH(
		amountIn.toString(),
		amountOutMin.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;
	
	/**
	 * @param amountIn - unit (ether)
	 * @param amountOutMin - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapExactTokensForETHSupportingFeeOnTransferTokens = (
		amountIn: string | number,
		amountOutMin: string | number,
		path: string[],
		to: string,
		deadline: number,
	) => this._contract.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(
		amountIn.toString(),
		amountOutMin.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	/**
	 * @param amountIn - unit (ether)
	 * @param amountOutMin - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapExactTokensForTokens = (
		amountIn: string | number,
		amountOutMin: string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapExactTokensForTokens(
		amountIn.toString(),
		amountOutMin.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	/**
	 * @param amountIn - unit (ether)
	 * @param amountOutMin - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapExactTokensForTokensSupportingFeeOnTransferTokens = (
		amountIn: string | number,
		amountOutMin: string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(
		amountIn.toString(),
		amountOutMin.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	/**
	 * @param amountOut - unit (ether)
	 * @param amountInMax - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapTokensForExactETH = (
		amountOut: string | number,
		amountInMax: string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapTokensForExactETH(
		amountOut.toString(),
		amountInMax.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;
	
	/**
	 * @param amountOut - unit (ether)
	 * @param amountInMax - unit (ether)
	 * @param path - address[]
	 * @param to - address
	 * @param deadline - time (seconds)
	 * @returns transaction data
	*/
	swapTokensForExactTokens = (
		amountOut: string | number,
		amountInMax: string | number,
		path: string[],
		to: string,
		deadline: number
	) => this._contract.methods.swapTokensForExactTokens(
		amountOut.toString(),
		amountInMax.toString(),
		[...path.map(address => Web3.utils.toChecksumAddress(address))],
		Web3.utils.toChecksumAddress(to),
		deadline
	).encodeABI() as string;

	constructor(contract: Contract) {
		this._contract = contract;
	}
}

export default UniswapV2RouterWrite;