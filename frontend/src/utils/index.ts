import BigNumber from 'bignumber.js'

export { default as formatAddress } from './formatAddress'

export const bnToDec = (bn: BigNumber, decimals = 9): number => {
  return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber()
}

export const decToBn = (dec: number, decimals = 9) => {
  return new BigNumber(dec).multipliedBy(new BigNumber(10).pow(decimals))
}
