const FOREX_HEADER_IMAGE = [
  {
    src: new URL('~/src/AssetFiles/forexHeader.png?as=avif', import.meta.url)
      .href,
    alt: 'forexHeader Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/src/AssetFiles/forexHeader.png?as=webp', import.meta.url)
      .href,
    alt: 'forexHeader Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/forexHeader.png', import.meta.url).href,
    alt: 'forexHeader Image',
    as: 'image/png'
  }
]

const FOREX_END_ICON_USA_IMAGE = [
  {
    src: new URL('~/src/AssetFiles/endIconUsa.png?as=avif', import.meta.url)
      .href,
    alt: 'endIconUsa Image',
    as: 'image/avif'
  },
  {
    src: new URL('~/src/AssetFiles/endIconUsa.png?as=webp', import.meta.url)
      .href,
    alt: 'endIconUsa Image',
    as: 'image/webp'
  },
  {
    src: new URL('~/src/AssetFiles/endIconUsa.png', import.meta.url).href,
    alt: 'endIconUsa Image',
    as: 'image/png'
  }
]

export { FOREX_HEADER_IMAGE, FOREX_END_ICON_USA_IMAGE }
