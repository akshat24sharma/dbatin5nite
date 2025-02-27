const LENDING_BANNER_IMAGE = [
  {
    src: new URL(
      '~/src/AssetFiles/LendingBannerExp.png?as=avif',
      import.meta.url
    ).href,
    alt: 'LendingBannerExp Image',
    as: 'image/avif'
  },
  {
    src: new URL(
      '~/src/AssetFiles/LendingBannerExp.png?as=webp',
      import.meta.url
    ).href,
    alt: 'LendingBannerExp Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/LendingBannerExp.png', import.meta.url).href,
    alt: 'LendingBannerExp Image',
    as: 'image/png'
  }
]

const LENDING_HADER_IMAGE = [
  {
    src: new URL(
      '~/src/AssetFiles/lendingHeader2x.png?as=avif',
      import.meta.url
    ).href,
    alt: 'lendingHeader2x Image',
    as: 'image/avif'
  },
  {
    src: new URL(
      '~/src/AssetFiles/lendingHeader2x.png?as=webp',
      import.meta.url
    ).href,
    alt: 'lendingHeader2x Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/lendingHeader2x.png', import.meta.url).href,
    alt: 'lendingHeader2x Image',
    as: 'image/png'
  }
]

const LENDING_BANNER_EXP_IMAGE = [
  {
    src: new URL('~/public/images/lendingBanner15.png?as=avif', import.meta.url)
      .href,
    alt: 'lendingBanner15 Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/public/images/lendingBanner15.png?as=webp', import.meta.url)
      .href,
    alt: 'lendingBanner15 Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/public/images/lendingBanner15.png', import.meta.url).href,
    alt: 'lendingBanner15 Image',
    as: 'image/png'
  }
]

const LENDING_BANNER_2_IMAGE = [
  {
    src: new URL('~/src/AssetFiles/lendingTypeImg.png?as=avif', import.meta.url)
      .href,
    alt: 'lendingTypeImg Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/src/AssetFiles/lendingTypeImg.png?as=webp', import.meta.url)
      .href,
    alt: 'lendingTypeImg Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/lendingTypeImg.png', import.meta.url).href,
    alt: 'lendingTypeImg Image',
    as: 'image/png'
  }
]

export {
  LENDING_BANNER_IMAGE,
  LENDING_BANNER_2_IMAGE,
  LENDING_BANNER_EXP_IMAGE,
  LENDING_HADER_IMAGE
}
