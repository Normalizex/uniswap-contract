import Web3 from "web3";
import fs from 'fs';

import UniswapV2RouterRead from "./v2/RouterRead";
import UniswapV2RouterWrite from "./v2/RouterWrire";

export const UniswapV2Abi = JSON.parse(fs.readFileSync('./abi/UniswapV2Router.abi.json').toString());

export class UniswapV2Router {
	private _web3;
	private _contract;

	public read;
	public write;
	public address;


	constructor(routerAddress: string, provider?: string) {
		this._web3 = new Web3(provider || '');
		this.address = Web3.utils.toChecksumAddress(routerAddress);
		this._contract = new this._web3.eth.Contract(UniswapV2Abi, this.address);
		
		this.read = new UniswapV2RouterRead(this._contract);
		this.write = new UniswapV2RouterWrite(this._contract);
	};
};
