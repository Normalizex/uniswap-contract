# uniswap-contract

***
# Installing
Using npm:
```console
npm i @normalizex/uniswap-contract
```
Using yarn:
```console
yarn add @normalizex/uniswap-contract
```
Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/@normalizex/uniswap-contract/dist/uniswap-contract.min.js"></script>
```
Using unpkg CDN:
```html
<script src="https://unpkg.com/@normalizex/uniswap-contract/dist/uniswap-contract.min.js"></script>
```

***
# Usage:
NodeJS:
```js
import { UniswapV2Router } from '@normalizex/uniswap-contract';
const router = new UniswapV2Router(
	//uniswap contract address in network. (required)
	'0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
	//network provider for read methods.
	'https://mainnet.infura.io/v3/{ID}'
);
```
Browser:
```html
<script type="text/javascript">
const router = new UniswapV2Router(
	//pancakeswap example
	//uniswap contract address in network. (required)
	'0x10ed43c718714eb63d5aa57b78b54704e256024e',
	//network provider for read methods.
	'https://bsc-dataseed.binance.org/'
)

console.log(UniswapRouterV2Abi)//Array (24)
</script>
```
- Support for various contracts that are subject to the `uniswap` contract standard.
- PancakeSwap example: [Support Other Chains](#support-other-chains)

# Example
```js
const uniRouter = new UniswapV2Router(
	'0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
	'https://mainnet.infura.io/v3/'
);
```
#### Read Methods:
* `Provider` required for read methods.
```js
uniRouter.read.WETH().then(address => {
	//0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
});

uniRouter.read.factory().then(address => {
	//0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f
});
```
#### Write Methods:
* Write methods generate `data` for send transaction.
```js
uniRouter.write.removeLiquidityWithPermit(
	"0x7ef95a0FeE0Dd31b22626fA2e10Ee6A223F8a684",
	"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
	"5691064529131472",
	"132207335903419803",
	"274909479842570",
	"0x35552CF3Ce8Cc8a0f7fdC8Aa88a89b92e9Ab5FdB",
	1652068230,
	false,
	"28",
	"0x1c4ca922b5ea2d9f087022ab709587cba848d93d4dcdf6b0d300a9f124abb6ba",
	"0x20db066c84bb8d7553b3aa952a1fcd4d4f97ca737f78aff66ca80f5ff602a57e"
)
//Result: 0x2195995c0000000000000000000000007ef95a0fee0dd31b22626fa2e10ee6a223f8a684000000000000000000000000ae13d989dac2f0debff460ac112a837c89baa7cd000000000000000000000000000000000000000000000000001437fe37a717d000000000000000000000000000000000000000000000000001d5b1df1d395d9b0000000000000000000000000000000000000000000000000000fa0759e4330a00000000000000000000000035552cf3ce8cc8a0f7fdc8aa88a89b92e9ab5fdb0000000000000000000000000000000000000000000000000000000062788f860000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001c1c4ca922b5ea2d9f087022ab709587cba848d93d4dcdf6b0d300a9f124abb6ba20db066c84bb8d7553b3aa952a1fcd4d4f97ca737f78aff66ca80f5ff602a57e

uniRouter.write.swapExactTokensForTokens(
	'100000000000000',
	'44457690775754470',
	[
		"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
		"0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"
	],
	"0x35552CF3Ce8Cc8a0f7fdC8Aa88a89b92e9Ab5FdB",
	1652066681
);
//Result: 0x38ed173900000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000009df208c23916e600000000000000000000000000000000000000000000000000000000000000a000000000000000000000000035552cf3ce8cc8a0f7fdc8aa88a89b92e9ab5fdb00000000000000000000000000000000000000000000000000000000627889790000000000000000000000000000000000000000000000000000000000000002000000000000000000000000ae13d989dac2f0debff460ac112a837c89baa7cd0000000000000000000000007ef95a0fee0dd31b22626fa2e10ee6a223f8a684
```

### Support other chains
```js
const pcRouter = new UniswapV2Router(
	//uniswap contract address in network. (required)
	'0x10ed43c718714eb63d5aa57b78b54704e256024e',
	//network provider for read methods.
	'https://bsc-dataseed.binance.org/'
);

pcRouter.read.WETH().then(address => {
	//0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
});

uniRouter.read.factory().then(address => {
	//0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73
});
```
***
# Donate
Of course, the project was made not for any benefit, but for my personal convenience :)

But I wanted to share this convenience with the Github community.

You can send me any amount of any coins in the **[ETH](https://etherscan.io/address/0x35552cf3ce8cc8a0f7fdc8aa88a89b92e9ab5fdb) / [BSC](https://bscscan.com/address/0x35552CF3Ce8Cc8a0f7fdC8Aa88a89b92e9Ab5FdB)** network as a donation to the address: **`0x35552CF3Ce8Cc8a0f7fdC8Aa88a89b92e9Ab5FdB`**