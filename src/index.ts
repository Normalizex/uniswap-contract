import Web3 from "web3";

import UniswapV2RouterRead from "./v2/RouterRead";
import UniswapV2RouterWrite from "./v2/RouterWrire";
import UniswapRouterV2Abi from "./v2/RouterABI";

export class UniswapV2Router {
	private _web3;
	private _contract;

	public read;
	public write;
	public address;

	constructor(routerAddress: string, provider: string | Web3) {
		this._web3 = typeof provider === 'string' ? new Web3(provider) : provider;
		this.address = Web3.utils.toChecksumAddress(routerAddress);
		this._contract = new this._web3.eth.Contract(UniswapRouterV2Abi, this.address);
		
		this.read = new UniswapV2RouterRead(this._contract);
		this.write = new UniswapV2RouterWrite(this._contract);
	};
};

export { UniswapRouterV2Abi };