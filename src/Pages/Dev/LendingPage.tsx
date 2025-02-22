import {
  DsBox,
  DsButton,
  DsDivider,
  DsFormLabel,
  DsHeader,
  DsImage,
  DsPopup,
  DsRemixIcon,
  DsStack,
  DsToggle,
  DsTypography
} from '@am92/react-design-system'
import { useState } from 'react'
import {
  LENDING_BANNER_2_IMAGE,
  LENDING_BANNER_IMAGE
} from '~/src/Assets/LENDING_IMAGES'
import { BannerPercentInfoCard } from '~/src/Lib/BannerInfoCard'

const LendingPage = () => {
  const [openBottomSheet, setOpenBottomSheet] = useState(false)
  return (
    <DsStack>
      {/* HEader section  */}

      <DsHeader
        sx={{
          '* > img': {
            width: '100%',
            height: '100%'
          }
        }}
        logoUrl={
          new URL('~/src/AssetFiles/lendingHeader2.png', import.meta.url).href
        }
      />

      {/* Banner section  */}

      <DsBox sx={{ display: 'flex' }}>
        <DsStack
          sx={{
            px: 'var(--ds-spacing-bitterCold)',
            py: 'var(--ds-spacing-mild)',
            width: '100%'
          }}
        >
          <DsStack gap='6px'>
            <DsTypography variant='bodyRegularMedium'>
              Hi Harsh, Just for you!
            </DsTypography>
            <DsTypography variant='bodyBoldMedium'>
              Pre-Qualified Loan offer of
            </DsTypography>
            <DsTypography variant='headingBoldExtraLarge'>
              ₹4,00,000
            </DsTypography>
            <DsTypography>@ 16.5% p.a.</DsTypography>
            <DsTypography></DsTypography>
          </DsStack>
        </DsStack>
        <DsImage
          width='251'
          height='227'
          rel='preload'
          // loading="eager"
          fetchPriority='high'
          style={{ width: '100%', height: '100%' }}
          srcSet={LENDING_BANNER_IMAGE}
        />
      </DsBox>

      {/* Main stack  */}
      <DsStack
        gap='var(--ds-spacing-bitterCold)'
        sx={{ p: 'var(--ds-spacing-bitterCold)' }}
      >
        {/* Loan type section  */}

        <DsTypography variant='headingBoldSmall'>Select loan type</DsTypography>
        <DsStack flexDirection='row' gap='var(--ds-spacing-mild)'>
          <BannerPercentInfoCard
            popular={true}
            heading='Merge Loan'
            subHeading='Combine your existing loan with a top up'
            percent='@12.65%'
            bottomText='Loan offer'
            bottomTextAmount='₹4,00,000'
            seleted
          />
          <BannerPercentInfoCard
            popular={false}
            heading='New Loan'
            subHeading='Take a new Personal loan of your choice'
            percent='@14%'
            bottomText='Loan offer'
            bottomTextAmount='₹2,00,000'
          />
        </DsStack>
      </DsStack>

      {/* View comparision banner section  */}

      <DsStack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'var(--ds-colour-neutral1)',
          py: 'var(--ds-spacing-frostbite)',
          pl: 'var(--ds-spacing-bitterCold)',
          mt: 'var(--ds-spacing-glacial)'
        }}
      >
        <DsStack gap='var(--ds-spacing-glacial)' alignItems='start'>
          <DsTypography variant='headingBoldItalicExtraSmall'>
            Want to know the difference?
          </DsTypography>
          <DsTypography
            variant='supportRegularInfo'
            sx={{ color: 'var(--ds-colour-typoSecondary)' }}
          >
            Compare and select what’s best for you
          </DsTypography>
          <DsButton
            onClick={() => setOpenBottomSheet(true)}
            variant='text'
            color='secondary'
          >
            VIEW comparision
          </DsButton>
        </DsStack>
        <DsBox>
          <DsImage
            height='100'
            width='124'
            style={{ width: '100%' }}
            srcSet={LENDING_BANNER_2_IMAGE}
          />
        </DsBox>
      </DsStack>

      {/* Footer section  */}

      <DsStack gap='var(--ds-spacing-frostbite)' my='var(--ds-spacing-warm)'>
        <DsStack
          flexDirection='row'
          justifyContent='space-between'
          sx={{
            p: 'var(--ds-spacing-bitterCold)',
            backgroundColor: 'var(--ds-colour-surfaceSecondary)'
          }}
        >
          <DsBox
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--ds-spacing-bitterCold)'
            }}
          >
            <DsRemixIcon className='ri-whatsapp-line' />
            <DsTypography variant='bodyRegularSmall'>
              Turn on WhatsApp Updates.{' '}
              {
                <DsTypography color='var(--ds-colour-actionSecondary)'>
                  T&C.
                </DsTypography>
              }
              .
            </DsTypography>
          </DsBox>
          <DsFormLabel>
            <DsToggle
              sx={{ ml: 'var(--ds-spacing-glacial)' }}
              id='whatsappUpadte'
              aria-label='whatsappUpadteLabel-button'
              aria-labelledby='whatsappUpadte'
              name='whatsappUpadte'
              value={false}
              onChange={() => {}}
            />
          </DsFormLabel>
        </DsStack>
        <DsTypography
          variant='supportRegularInfo'
          sx={{
            color: 'var(--ds-colour-typoSecondary)',
            px: 'var(--ds-spacing-bitterCold)'
          }}
        >
          By proceeding, I authorize bank officials to provide assistance by
          contacting me with reference to the loan application process and
          consent to a credit bureau enquiry.
        </DsTypography>
        <DsBox sx={{ px: 'var(--ds-spacing-bitterCold)' }}>
          <DsButton size='medium' fullWidth>
            Proceed to Merge Loan
          </DsButton>
        </DsBox>
      </DsStack>

      {/* bottom sheet section  */}

      <DsPopup
        open={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
        title='Comparison'
      >
        <DsStack>
          {/* comparision box section   */}

          <DsBox sx={{ display: 'flex', gap: 'var(--ds-spacing-bitterCold)' }}>
            <DsBox
              sx={{
                py: 'var(--ds-spacing-bitterCold)',
                px: 'var(--ds-spacing-frostbite)',
                backgroundColor: 'var(--ds-colour-surfaceSecondary)',
                borderRadius: 'var(--ds-radius-glacial)',
                width: '50%'
              }}
            >
              <DsTypography variant='headingBoldExtraSmall'>
                Merge Loan
              </DsTypography>
              <DsDivider sx={{ my: 'var(--ds-spacing-frostbite)' }} />
              <DsStack gap='var(--ds-spacing-frostbite)'>
                <DsTypography variant='bodyRegularSmall'>
                  Loan Offer ₹4,00,000 @12.65%
                </DsTypography>
                <DsTypography variant='bodyRegularSmall'>
                  Only one loan account and one EMI cycle after disbursal.
                </DsTypography>
                <DsTypography variant='bodyRegularSmall'>
                  New interest rate applicable on entire loan outstanding.
                </DsTypography>
              </DsStack>
            </DsBox>
            <DsBox
              sx={{
                py: 'var(--ds-spacing-bitterCold)',
                px: 'var(--ds-spacing-frostbite)',
                backgroundColor: 'var(--ds-colour-surfaceSecondary)',
                borderRadius: 'var(--ds-radius-glacial)',
                width: '50%'
              }}
            >
              <DsTypography variant='headingBoldExtraSmall'>
                New Loan
              </DsTypography>
              <DsDivider sx={{ my: 'var(--ds-spacing-frostbite)' }} />
              <DsStack gap='var(--ds-spacing-frostbite)'>
                <DsTypography variant='bodyRegularSmall'>
                  Loan Offer ₹2,00,000 @14%
                </DsTypography>
                <DsTypography variant='bodyRegularSmall'>
                  Two parallel loans and two EMI cycles after disbursal.
                </DsTypography>
                <DsTypography variant='bodyRegularSmall'>
                  New loan runs at new interest rate. Existing loan interest
                  rate is unchanged.
                </DsTypography>
              </DsStack>
            </DsBox>
          </DsBox>
          <DsStack
            gap='var(--ds-spacin-glacial)'
            mt='var(--ds-spacing-bitterCold)'
          >
            <DsTypography variant='bodyBoldSmall'>
              Existing Loan Details
            </DsTypography>
            <DsTypography
              variant='supportRegularInfo'
              sx={{ color: 'var(--ds-colour-typoSecondary)' }}
            >
              Loan Account No: PPR067704117901
            </DsTypography>
          </DsStack>
          <DsStack
            gap='var(--ds-spacing-glacial)'
            mt='var(--ds-spacing-bitterCold)'
          >
            <DsTypography variant='bodyBoldSmall'>
              ₹5,00,000 @19.6% p.a.
            </DsTypography>
            <DsBox
              sx={{
                height: '3px',
                background:
                  'linear-gradient(to right, #5273CC 70%, #D9D9D9 30%)',
                borderRadius: '8px'
              }}
            ></DsBox>
            <DsStack flexDirection='row' justifyContent='space-between'>
              <DsTypography
                variant='supportRegularInfo'
                sx={{ color: 'var(--ds-colour-typoSecondary)' }}
              >
                46/60 EMIs @ ₹8,333/mo
              </DsTypography>
              <DsTypography
                variant='supportRegularInfo'
                sx={{ color: 'var(--ds-colour-supportVariable)' }}
              >
                ₹2,00,000 Outstanding
              </DsTypography>
            </DsStack>
          </DsStack>
        </DsStack>
      </DsPopup>
    </DsStack>
  )
}

export default LendingPage
