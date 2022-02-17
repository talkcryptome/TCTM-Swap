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
        href: 'https://exchange.talkcryptotome.com/#/exchange',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.talkcryptotome.com/#/liquidity',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://talkcryptotome.com/farm',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://talkcryptotome.com/pool',
  },
  {
    label: 'Vault',
    icon: 'MoonIcon',
    href: 'https://talkcryptotome.com/vault',
  },
  {
    label: 'Bridge',
    icon: 'TicketIcon',
    href: 'https://talkcryptotome.com/bridge',
  },
  {
    label: 'Aggregator',
    icon: 'SunIcon',
    href: 'https://talkcryptotome.com/tin',
  },
  {
    label: 'Charts',
    icon: 'HamburgerIcon',
    items: [
      {
        label: 'DexGuru',
        href: 'https://talkcryptotome.com/dex',
      },
      {
        label: 'PooCoins',
        href: 'https://talkcryptotome.com/poo',
      },
    ],
  },

  
]

export default config
