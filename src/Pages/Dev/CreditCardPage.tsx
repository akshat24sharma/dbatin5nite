import {
  DsBottomNavigation,
  DsBottomNavigationAction,
  DsBox,
  DsButton,
  DsCarousel,
  DsImage,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'
import { CREADIT_CARDCAROUSEL_1_IMAGE } from '~/src/Assets/CREDIT_CARD_IMAGES'
import CheckboxListItem from '~/src/Lib/CheckboxListItem'
import { QuickInfoCards } from '~/src/Lib/QuickInfoCards'

const CreditCardPage = () => {
  return (
    <DsStack
      sx={{
        backgroundColor: 'var(--ds-colour-surfaceSecondary)',
        pb: 'calc(var(--ds-rules-appBarMobileMinHeight) + var(--ds-spacing-mild))'
      }}
    >
      {/* Main banner  */}
      <DsBox
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
      </DsBox>
      <DsStack
        sx={{ px: 'var(--ds-spacing-bitterCold)' }}
        gap='var(--ds-spacing-cool)'
      >
        {/* Carousel section  */}

        <DsCarousel pagination={{ mode: 'external' }} navigation={false}>
          <DsBox>
            <DsImage
              width='344'
              height='134'
              style={{ height: '100%', width: '100%' }}
              srcSet={CREADIT_CARDCAROUSEL_1_IMAGE}
            />
          </DsBox>
          <DsBox>
            <DsImage
              width='344'
              height='134'
              style={{ height: '100%', width: '100%' }}
              srcSet={CREADIT_CARDCAROUSEL_1_IMAGE}
            />
          </DsBox>
          <DsBox>
            <DsImage
              width='344'
              height='134'
              style={{ height: '100%', width: '100%' }}
              srcSet={CREADIT_CARDCAROUSEL_1_IMAGE}
            />
          </DsBox>
        </DsCarousel>

        {/* Quick info cards section  */}

        <DsStack
          sx={{
            flexDirection: 'row',
            gap: 'var(--ds-spacing-bitterCold)',
            overflowX: 'auto'
          }}
        >
          <QuickInfoCards icon='ri-file-download-line' text='Get Statement' />
          <QuickInfoCards icon='ri-gift-line' text='Rewards & Benefits' />
          <QuickInfoCards icon='ri-gift-line' text='Other Benefits' />
        </DsStack>

        {/* Current Bill section  */}

        <DsStack>
          {/* first section  */}
          <DsStack
            sx={{
              backgroundColor: 'var(--ds-colour-surfacePrimary)',
              borderRadius:
                'var(--ds-radius-glacial) var(--ds-radius-glacial) 0px 0px',
              py: 'var(--ds-spacing-mild)',
              px: 'var(--ds-spacing-bitterCold)',
              borderBottom: '1px solid var(--ds-colour-strokeDefault)'
            }}
            gap='var(--ds-spacing-bitterCold)'
          >
            <DsStack flexDirection='row' justifyContent='space-between'>
              <DsBox
                sx={{ display: 'flex', gap: 'var(--ds-spacing-frostbite)' }}
              >
                <DsBox
                  sx={{
                    p: 'var(--ds-spacing-glacial)',
                    backgroundColor: 'var(--ds-colour-neutral1)',
                    borderRadius: '4px'
                  }}
                >
                  <DsRemixIcon className='ri-file-list-3-line' />
                </DsBox>
                <DsStack>
                  <DsTypography variant='headingBoldExtraSmall'>
                    Current Bill
                  </DsTypography>
                  <DsTypography
                    variant='supportRegularInfo'
                    sx={{ color: 'var(--ds-colour-typoSecondary)' }}
                  >
                    May’21
                  </DsTypography>
                </DsStack>
              </DsBox>
              <DsRemixIcon className='ri-arrow-right-s-line' />
            </DsStack>
            <DsBox
              sx={{
                p: 'var(--ds-spacing-frostbite)',
                backgroundColor: 'var(--ds-colour-surfaceSecondary)',
                borderRadius: 'var(--ds-radius-glacial)'
              }}
            >
              <DsTypography>
                Pay your current bill due to avoid interest charges or pay the
                minimum due to avoid late fee
              </DsTypography>
            </DsBox>
          </DsStack>

          {/* second section  */}

          <DsStack
            sx={{
              backgroundColor: 'var(--ds-colour-surfacePrimary)',
              borderRadius:
                'var(--ds-radius-glacial) var(--ds-radius-glacial) 0px 0px',
              py: 'var(--ds-spacing-mild)',
              px: 'var(--ds-spacing-bitterCold)',
              borderBottom: '1px solid var(--ds-colour-strokeDefault)',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <DsStack>
              <DsTypography
                variant='supportRegularInfo'
                sx={{ color: 'var(--ds-colour-typoSecondary)' }}
              >
                Current Bill Due
              </DsTypography>
              <DsTypography variant='bodyBoldLarge'>₹25,000.00</DsTypography>
            </DsStack>
            <DsStack>
              <DsTypography
                variant='supportRegularInfo'
                sx={{ color: 'var(--ds-colour-typoSecondary)' }}
              >
                Current Bill Due
              </DsTypography>
              <DsTypography variant='bodyBoldLarge'>₹25,000.00</DsTypography>
            </DsStack>
          </DsStack>

          {/* third section  */}

          <DsStack
            sx={{
              backgroundColor: 'var(--ds-colour-surfacePrimary)',
              borderRadius:
                'var(--ds-radius-glacial) var(--ds-radius-glacial) 0px 0px',
              py: 'var(--ds-spacing-mild)',
              px: 'var(--ds-spacing-bitterCold)',
              borderBottom: '1px solid var(--ds-colour-strokeDefault)',
              flexDirection: 'row',
              gap: 'var(--ds-spacing-mild)'
            }}
          >
            <DsStack width='25%'>
              <DsTypography
                variant='supportRegularInfo'
                sx={{ color: 'var(--ds-colour-typoSecondary)' }}
              >
                Due On
              </DsTypography>
              <DsTypography variant='bodyBoldLarge'>03 June</DsTypography>
            </DsStack>
            <DsButton fullWidth size='medium'>
              Pay Now
            </DsButton>
          </DsStack>
        </DsStack>

        {/* Payment History section  */}

        <DsStack
          sx={{
            backgroundColor: 'var(--ds-colour-surfacePrimary)',
            borderRadius:
              'var(--ds-radius-glacial) var(--ds-radius-glacial) 0px 0px',
            py: 'var(--ds-spacing-mild)',
            px: 'var(--ds-spacing-bitterCold)'
          }}
          gap='var(--ds-spacing-bitterCold)'
        >
          <DsStack flexDirection='row' justifyContent='space-between'>
            <DsBox sx={{ display: 'flex', gap: 'var(--ds-spacing-frostbite)' }}>
              <DsBox
                sx={{
                  p: 'var(--ds-spacing-glacial)',
                  backgroundColor: 'var(--ds-colour-neutral1)',
                  borderRadius: '4px'
                }}
              >
                <DsRemixIcon className='ri-file-list-3-line' />
              </DsBox>
              <DsStack>
                <DsTypography variant='headingBoldExtraSmall'>
                  Payment History
                </DsTypography>
                <DsTypography
                  variant='supportRegularInfo'
                  sx={{ color: 'var(--ds-colour-typoSecondary)' }}
                >
                  View all past payments towards bill
                </DsTypography>
              </DsStack>
            </DsBox>
            <DsRemixIcon
              sx={{ color: 'var(--ds-colour-typoSecondary)' }}
              className='ri-arrow-right-s-line'
            />
          </DsStack>
        </DsStack>

        {/* Active EMIs section  */}

        <DsStack
          sx={{
            backgroundColor: 'var(--ds-colour-surfacePrimary)',
            borderRadius:
              'var(--ds-radius-glacial) var(--ds-radius-glacial) 0px 0px',
            py: 'var(--ds-spacing-mild)',
            px: 'var(--ds-spacing-bitterCold)'
          }}
          gap='var(--ds-spacing-bitterCold)'
        >
          <DsStack flexDirection='row' justifyContent='space-between'>
            <DsBox sx={{ display: 'flex', gap: 'var(--ds-spacing-frostbite)' }}>
              <DsBox
                sx={{
                  p: 'var(--ds-spacing-glacial)',
                  backgroundColor: 'var(--ds-colour-neutral1)',
                  borderRadius: '4px'
                }}
              >
                <DsRemixIcon className='ri-alarm-warning-line' />
              </DsBox>
              <DsStack>
                <DsTypography variant='headingBoldExtraSmall'>
                  Active EMIs
                </DsTypography>
                <DsTypography
                  variant='supportRegularInfo'
                  sx={{ color: 'var(--ds-colour-typoSecondary)' }}
                >
                  Summary of your running EMIs including loans and conversions
                  on transactions
                </DsTypography>
              </DsStack>
            </DsBox>
            <DsRemixIcon
              sx={{ color: 'var(--ds-colour-typoSecondary)' }}
              className='ri-arrow-right-s-line'
            />
          </DsStack>
        </DsStack>

        {/* Flexi EMIs section  */}

        <DsStack
          sx={{
            backgroundColor: 'var(--ds-colour-surfacePrimary)',
            borderRadius: 'var(--ds-radius-glacial)'
          }}
        >
          <DsStack
            sx={{
              pt: 'var(--ds-spacing-pleasant)',
              px: 'var(--ds-spacing-bitterCold)',
              pb: 'var(--ds-spacing-cool)',
              backgroundImage: `url(${
                new URL('~/src/AssetFiles/ccEmiBanner.png', import.meta.url)
                  .href
              })`
            }}
          >
            <DsTypography
              variant='bodyBoldLarge'
              sx={{ color: 'var(--ds-colour-typoOnSurface)' }}
            >
              Flexi EMI, Easy Payments
            </DsTypography>
            <DsTypography sx={{ color: 'var(--ds-colour-typoOnSurface)' }}>
              Convert one or multiple transactions into EMI
            </DsTypography>
          </DsStack>
          <DsStack>
            <CheckboxListItem
              heading='Jugs and Mugs'
              infoText='22 DEC • REF NO. 12000000'
              price='₹ 61,500.72'
            />
            <CheckboxListItem
              heading='ABCD'
              infoText='22 DEC • REF NO. 12000000'
              price='₹ 65,000.00'
            />
            <DsStack
              gap='var(--ds-spacing-bitterCold)'
              m='var(--ds-spacing-bitterCold)'
            >
              <DsButton variant='text' color='secondary'>
                view all transactions
              </DsButton>
              <DsButton size='medium' disabled>
                Convert to EMI
              </DsButton>
            </DsStack>
          </DsStack>
        </DsStack>
      </DsStack>

      {/* bottom navigation section  */}
      <DsBox
        sx={{ position: 'fixed', bottom: '0px', left: '0px', width: '100%' }}
      >
        <DsBottomNavigation value={0}>
          <DsBottomNavigationAction
            icon={<DsRemixIcon className='ri-dashboard-fill' />}
            label='Dashboard'
          />
          <DsBottomNavigationAction
            icon={<DsRemixIcon className='ri-percent-fill' />}
            label='Offers'
          />
          <DsBottomNavigationAction
            icon={<DsRemixIcon className='ri-file-list-2-line' />}
            label='Transactions'
          />
          <DsBottomNavigationAction
            icon={<DsRemixIcon className='ri-equalizer-line' />}
            label='Control Center'
          />
        </DsBottomNavigation>
      </DsBox>
    </DsStack>
  )
}

export default CreditCardPage
