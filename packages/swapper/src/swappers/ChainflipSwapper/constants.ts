import type { ChainId } from '@shapeshiftoss/caip'
import { Asset, KnownChainIds } from "@shapeshiftoss/types";
import { SupportedChainIds, SwapperName, SwapSource } from '../../types'

export const ChainflipSupportedChainIds = [
  KnownChainIds.EthereumMainnet,
  KnownChainIds.ArbitrumMainnet,
  KnownChainIds.BitcoinMainnet,
  KnownChainIds.SolanaMainnet,
] as const

export type ChainflipSupportedChainId = (typeof ChainflipSupportedChainIds)[number]

export const ChainflipSupportedAssets = {
  [KnownChainIds.EthereumMainnet]: ['eth', 'flip', 'usdc', 'usdt'],
  [KnownChainIds.ArbitrumMainnet]: ['eth', 'usdc'],
  [KnownChainIds.BitcoinMainnet]: ['btc'],
  [KnownChainIds.SolanaMainnet]: ['sol', 'usdc'],
}

export const chainIdToChainflipNetwork: Partial<Record<KnownChainIds, string>> = {
  [KnownChainIds.EthereumMainnet]: 'eth',
  [KnownChainIds.ArbitrumMainnet]: 'arb',
  [KnownChainIds.BitcoinMainnet]: 'btc',
  [KnownChainIds.SolanaMainnet]: 'sol',
}

export const assetGasLimits: Partial<Record<string, string>> = {
  ["eth.eth"]: '34000',
  ["flip.eth"]: '52000',
  ["usdc.eth"]: '63000',
  ["usdt.eth"]: '70000',
  ["eth.arb"]: '100000',
  ["usdc.arb"]: '100000',
}

export const CHAINFLIP_SUPPORTED_CHAIN_IDS: SupportedChainIds = {
  sell: ChainflipSupportedChainIds as unknown as ChainId[],
  buy: ChainflipSupportedChainIds as unknown as ChainId[],
}

export const CHAINFLIP_SWAP_SOURCE: SwapSource = SwapperName.Chainflip;
export const CHAINFLIP_BOOST_SWAP_SOURCE: SwapSource = `${SwapperName.Chainflip} • Boost`
export const CHAINFLIP_DCA_SWAP_SOURCE: SwapSource = `${SwapperName.Chainflip} • DCA`
export const CHAINFLIP_DCA_BOOST_SWAP_SOURCE: SwapSource = `${SwapperName.Chainflip} • DCA • Boost`

export const usdcAsset: Asset = {
  assetId: "eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  chainId: KnownChainIds.EthereumMainnet,
  color: "#2373CB",
  explorer:"https://etherscan.io",
  explorerAddressLink:"https://etherscan.io/address/",
  explorerTxLink:"https://etherscan.io/tx/",
  icon:"https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  name:"USDC on Ethereum",
  precision: 6,
  relatedAssetKey: "eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  symbol:"USDC"
}
