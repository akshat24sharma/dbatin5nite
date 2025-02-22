const CREADIT_CARDCAROUSEL_1_IMAGE = [
  {
    src: new URL('~/src/AssetFiles/ccCarouselUp.png?as=avif', import.meta.url)
      .href,
    alt: 'ccCarouselUp Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/src/AssetFiles/ccCarouselUp.png?as=webp', import.meta.url)
      .href,
    alt: 'ccCarouselUp Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/ccCarouselUp.png', import.meta.url).href,
    alt: 'ccCarouselUp Image',
    as: 'image/png'
  }
]

const CREDIT_CARD_MAIN_BANNER_IMAGE = [
  {
    src: new URL('~/src/AssetFiles/ccMainBanner2x.png?as=avif', import.meta.url)
      .href,
    alt: 'ccMainBanner2x Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/src/AssetFiles/ccMainBanner2x.png?as=webp', import.meta.url)
      .href,
    alt: 'ccMainBanner2x Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/ccMainBanner2x.png', import.meta.url).href,
    alt: 'ccMainBanner2x Image',
    as: 'image/png'
  }
]

export { CREADIT_CARDCAROUSEL_1_IMAGE, CREDIT_CARD_MAIN_BANNER_IMAGE }
