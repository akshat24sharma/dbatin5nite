import { FC } from 'react'

const AboutPage: FC = () => {
  return (
    <>
      {/* <DsBox
        sx={{
          backgroundImage: `background-image: url(${
            new URL('~/src/AssetFiles/ccMainBanner.png', import.meta.url).href
          });
  background-image: -webkit-image-set(
    url(${
      new URL('~/src/AssetFiles/ccMainBanner.png', import.meta.url).href
    }) 1x,
    url("large-landscape-2048x1536.jpg") 2x);
  background-image: image-set(
    url(${
      new URL('~/src/AssetFiles/ccMainBanner.png', import.meta.url).href
    }) 1x,
    url(${
      new URL('~/src/AssetFiles/ccMainBanner.png', import.meta.url).href
    }) 2x)`,
          //   backgroundImage: `url(${
          //     new URL("~/src/AssetFiles/ccMainBanner.png", import.meta.url).href
          //   })`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 250px',
          height: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end'
        }}
      >
        <DsBox
          sx={{
            py: 'var(--ds-spacing-mild)',
            px: 'var(--ds-spacing-bitterCold)',
            backgroundColor: 'var(--ds-colour-surfacePrimary)',
            mx: 'var(--ds-spacing-bitterCold)',
            borderRadius: 'var(--ds-radius-glacial)',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <DsBox sx={{ display: 'flex', gap: 'var(--ds-spacing-bitterCold)' }}>
            <DsBox
              sx={{
                p: 'var(--ds-spacing-glacial)',
                backgroundColor: 'var(--ds-colour-surfaceSecondary)',
                height: 'fit-content'
              }}
            >
              <DsRemixIcon className='ri-wallet-line' />
            </DsBox>
            <DsStack gap='var(--ds-spacing-glacial)'>
              <DsTypography sx={{ textDecoration: 'underline' }}>
                TOTAL OUTSTANDING
              </DsTypography>
              <DsTypography variant='headingBoldExtraSmall'>
                ₹36,386.44
              </DsTypography>
              <DsTypography
                sx={{ textDecoration: 'underline', color: '#12877F' }}
              >
                Available Credit Limit ₹189,755.04
              </DsTypography>
            </DsStack>
          </DsBox>
          <DsRemixIcon className='ri-arrow-right-s-line' />
        </DsBox>
      </DsBox> */}
    </>
  )
}

export default AboutPage
