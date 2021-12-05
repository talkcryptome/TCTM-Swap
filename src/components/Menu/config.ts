import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://talkcryptotome.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.talkcryptotome.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.talkcryptotome.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://talkcryptotome.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://talkcryptotome.com/pool',
  },
  
]

export default config
