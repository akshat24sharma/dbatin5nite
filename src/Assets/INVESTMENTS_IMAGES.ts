const INVESTMENT_CREDIT_IMAGES = [
  {
    src: new URL('~/src/AssetFiles/creditScore.png?as=avif', import.meta.url)
      .href,
    alt: 'creditScore Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/src/AssetFiles/creditScore.png?as=webp', import.meta.url)
      .href,
    alt: 'creditScore Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/creditScore.png', import.meta.url).href,
    alt: 'creditScore Image',
    as: 'image/png'
  }
]

const INVESTMENT_PROTECTION_IMAGES = [
  {
    src: new URL(
      '~/src/AssetFiles/protectionCover.png?as=avif',
      import.meta.url
    ).href,
    alt: 'protectionCover Image',
    as: 'image/avif'
  },
  {
    src: new URL(
      '~/src/AssetFiles/protectionCover.png?as=webp',
      import.meta.url
    ).href,
    alt: 'protectionCover Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/protectionCover.png', import.meta.url).href,
    alt: 'protectionCover Image',
    as: 'image/png'
  }
]

export { INVESTMENT_CREDIT_IMAGES, INVESTMENT_PROTECTION_IMAGES }
