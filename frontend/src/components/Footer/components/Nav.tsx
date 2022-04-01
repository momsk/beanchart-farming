import React from 'react'
import styled from 'styled-components'
import { contractAddresses } from '../../../farm/lib/constants'
import { getEthChainInfo } from '../../../utils/getEthChainInfo'
import githubLogo from '../../../assets/img/github.png'
import { GITHUB } from '../../../constants/config'

const { ethscanType, chainId } = getEthChainInfo()

const contractAddressesTemp = contractAddresses as { [index: string]: any }

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href={`https://bscscan.com/token/${contractAddressesTemp.erc20[chainId]}#code`}
      >
        BEP-20 Contract
      </StyledLink>

      <StyledLink
        target="_blank"
        href={`https://bscscan.com/address/${contractAddressesTemp.farm[chainId]}#code`}
      >
        Farm Contract
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: #0f4c5c;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: #0f4c5c;
    text-decoration: underline;
  }
  img {
    height: 19px;
  }
`

export default Nav
