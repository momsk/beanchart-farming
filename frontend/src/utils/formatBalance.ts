import BigNumber from 'bignumber.js'

export const getBalanceNumber = (balance: BigNumber, decimals = 9) => {
  const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

export const getDisplayBalance = (balance: BigNumber, decimals = 9) => {
  const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toPrecision(5)
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 9) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
}
