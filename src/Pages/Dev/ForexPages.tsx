import {
  DsBox,
  DsButton,
  DsDatePicker,
  DsDivider,
  DsFormLabel,
  DsHeader,
  DsImage,
  DsRemixIcon,
  DsSelect,
  DsStack,
  DsTab,
  DsTabs,
  DsTag,
  DsTagGroup,
  DsTextField,
  DsToggle,
  DsTypography
} from '@am92/react-design-system'
import { FOREX_END_ICON_USA_IMAGE } from '~/src/Assets/FOREX_IMAGES'

export const ForexPage = () => {
  return (
    <DsStack sx={{ backgroundColor: 'var(--ds-colour-neutral1)' }}>
      {/* Header section  */}

      <DsHeader
        sx={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: 99,
          width: '100%'
        }}
        BoxProps={{
          sx: {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end'
          }
        }}
        StackProps={{
          sx: {
            width: { md: '50%', xs: '100%' },
            position: 'relative',
            right: '0px'
          }
        }}
        // logoUrl={
        //   new URL("~/src/AssetFiles/forexHeader.png", import.meta.url).href
        // }
      >
        <DsStack
          flexDirection='row'
          width='100%'
          alignItems='center'
          justifyContent='space-between'
        >
          <DsBox>
            <DsTabs value={1}>
              <DsTab label='Trade' tabIndex={0} />
              <DsTab label='Forex Booking' tabIndex={0} />
              <DsTab label='Treasury' tabIndex={0} />
            </DsTabs>
          </DsBox>
          <DsStack
            sx={{ display: { xs: 'none', md: 'flex' } }}
            alignItems='center'
            flexDirection='row'
            gap='var(--ds-spacing-bitterCold)'
          >
            <DsRemixIcon
              sx={{ fontSize: '20px' }}
              className='ri-notification-3-line'
            />
            <DsRemixIcon
              sx={{ fontSize: '20px' }}
              className='ri-install-line'
            />
            <DsRemixIcon sx={{ fontSize: '20px' }} className='ri-moon-line' />
            <DsButton
              color='secondary'
              startIcon={<DsRemixIcon className='ri-customer-service-line' />}
            >
              Support
            </DsButton>
          </DsStack>
        </DsStack>
      </DsHeader>

      {/* Forex booking header section  */}

      <DsStack
        sx={{
          mt: 'var(--ds-rules-headerDesktopHeight)'
        }}
      >
        <DsStack
          sx={{
            px: 'var(--ds-spacing-superheated)',
            pt: 'var(--ds-spacing-mild)',
            backgroundColor: 'var(--ds-colour-surfaceBackground)'
          }}
          gap='16px'
        >
          <DsStack flexDirection='row' justifyContent='space-between'>
            <DsTypography variant='headingBoldSmall'>
              Forex Booking
            </DsTypography>
            <DsButton
              color='secondary'
              startIcon={<DsRemixIcon className='ri-video-line' />}
            >
              View Demo
            </DsButton>
          </DsStack>
          <DsTabs value={0}>
            <DsTab tabIndex={0} label='Live Rates' />
            <DsTab tabIndex={0} label='Derivatives' />
            <DsTab tabIndex={0} label='Transaction History' />
          </DsTabs>
        </DsStack>
      </DsStack>

      {/* Main box  */}

      <DsStack
        sx={{
          my: 'var(--ds-spacing-mild)',
          mx: {
            lg: 'var(--ds-spacing-superheated)',
            xs: 'var(--ds-spacing-bitterCold)'
          },
          backgroundColor: 'var(--ds-colour-surfaceBackground)',
          p: 'var(--ds-spacing-mild)',
          borderRadius: 'var(--ds-radius-glacial)'
        }}
      >
        {/* Tabs section  */}

        <DsStack
          sx={{
            flexDirection: { md: 'column', lg: 'row' },
            alignItems: { md: 'flex-start', lg: 'center' }
          }}
          gap='24px'
        >
          <DsTabs ds-variant='container' value={0}>
            <DsTab tabIndex={0} label='BUY' />
            <DsTab tabIndex={0} label='SELL' />
            <DsTab tabIndex={0} label='BUY AND SELL' />
          </DsTabs>
          <DsBox
            sx={{
              display: 'flex',
              gap: 'var(--ds-spacing-bitterCold)',
              backgroundColor: 'var(--ds-colour-surfaceSecondary)',
              borderRadius: 'var(--ds-radius-mild)',
              p: 'var(--ds-spacing-glacial)',
              pl: 'var(--ds-spacing-frostbite)',
              width: 'fit-content'
            }}
          >
            <DsFormLabel>
              Single currency view
              <DsToggle
                sx={{ ml: 'var(--ds-spacing-glacial)' }}
                id='currecyToggleId'
                aria-label='currecyToggleLabel-button'
                aria-labelledby='currecyToggleId'
                name='currency'
                value={false}
                onChange={() => {}}
              />
            </DsFormLabel>
          </DsBox>
        </DsStack>

        {/* Forex cards section  */}

        <DsBox
          sx={{
            mt: 'var(--ds-spacing-mild)',
            display: 'grid',
            gridTemplateColumns: {
              lg: '1fr 1fr 1fr',
              md: '1fr 1fr',
              xs: '1fr'
            },
            columnGap: '22px',
            rowGap: 'var(--ds-spacing-mild)'
          }}
        >
          {['Cash', 'Tom', 'Forward'].map((item, index) => (
            <DsStack
              sx={{
                p: 'var(--ds-spacing-cool)',
                border: '1px solid var(--ds-colour-strokeDefault)',
                borderRadius: 'var(--ds-radius-glacial)'
              }}
              key={index}
              gap='20px'
            >
              <DsTagGroup value={item}>
                <DsTag key='Cash' value='Cash' label='Cash' />
                <DsTag key='Tom' value='Tom' label='Tom' />
                <DsTag key='Spot' value='Spot' label='Spot' />
                <DsTag key='Forward' value='Forward' label='Forward' />
              </DsTagGroup>

              {/* Rates section  */}

              <DsStack
                sx={{
                  p: 'var(--ds-spacing-frostbite)',
                  border: '1px solid var(--ds-colour-strokeDefault)',
                  borderRadius: 'var(--ds-radius-glacial)'
                }}
              >
                <DsStack flexDirection='row' justifyContent='space-between'>
                  <DsBox>
                    <DsTypography variant='bodyBoldMedium'>
                      USD / INR
                    </DsTypography>
                  </DsBox>
                  <DsRemixIcon className='ri-arrow-down-s-line' />
                </DsStack>
                <DsDivider sx={{ my: 'var(--ds-spacing-frostbite)' }} />
                <DsStack>
                  <DsTypography
                    variant='supportRegularInfo'
                    sx={{ color: 'var(--ds-colour-typoSecondary)' }}
                  >
                    USD INR Rate
                  </DsTypography>
                  <DsStack flexDirection='row' justifyContent='space-between'>
                    <DsTypography variant='headingBoldLarge'>
                      84.08
                    </DsTypography>
                    <DsBox
                      sx={{
                        display: 'flex',
                        p: 'var(--ds-spacing-quickFreeze)',
                        pr: '6px',
                        backgroundColor:
                          'var(--ds-colour-supportNegativeNeutral)',
                        borderRadius: 'var(--ds-radius-quickFreeze)',
                        alignItems: 'center'
                      }}
                    >
                      <DsRemixIcon
                        className='ri-arrow-down-line'
                        sx={{
                          color: 'var(--ds-colour-iconNegative)',
                          fontSize: '16px'
                        }}
                      />
                      <DsTypography
                        color='var(--ds-colour-iconNegative)'
                        variant='bodyBoldSmall'
                      >
                        2.08
                      </DsTypography>
                    </DsBox>
                  </DsStack>
                </DsStack>
              </DsStack>

              {/* You buy section  */}

              <DsTextField
                name={`amountField - ${index}`}
                aria-label={`amountField - ${index}`}
                id={`amountField - ${index}`}
                label='You Buy'
                helperText='You pay an equivalent: 84,080.46 INR @ 84.08 USD INR to Bank'
                endAdornment={
                  <DsBox
                    sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <DsBox>
                      <DsImage
                        height='20'
                        width='46'
                        style={{ height: '100%', width: '100%' }}
                        loading='lazy'
                        srcSet={FOREX_END_ICON_USA_IMAGE}
                      />
                    </DsBox>
                    <DsBox
                      sx={{
                        p: 'var(--ds-spacing-quickFreeze)',
                        backgroundColor: 'var(--ds-colour-surfaceSecondary)',
                        lineHeight: 0
                      }}
                    >
                      <DsRemixIcon
                        sx={{ fontSize: '16px' }}
                        className='ri-arrow-left-right-line'
                      />{' '}
                    </DsBox>
                  </DsBox>
                }
              />

              {/* Date picker section  */}

              <DsDatePicker label='Date of Maturity' name='forex' />

              {/* Register Type section  */}

              <DsStack
                width='100%'
                flexDirection='row'
                gap='var(--ds-spacing-bitterCold)'
              >
                <DsSelect
                  inputProps={{
                    'aria-label': `typeselect - ${index}`,
                    'aria-labelledby': `typeselect - ${index} label`
                  }}
                  aria-label={`typeselect - ${index}`}
                  aria-labelledby={`typeselectLabel - ${index} label`}
                  id={`typeselect - ${index}`}
                  name={`typeselect - ${index}`}
                  placeholder='Select'
                  fullWidth
                  label='Register Type'
                />
                <DsSelect
                  inputProps={{
                    'aria-label': `typeselect - ${index}`,
                    'aria-labelledby': `typeselect - ${index} label`
                  }}
                  aria-label={`regiSelect - ${index}`}
                  aria-labelledby={`regiSelect - ${index} lebdy`}
                  id={`regiSelect - ${index}`}
                  name={`regiSelect - ${index}`}
                  placeholder='Select'
                  fullWidth
                  label='Type'
                />
              </DsStack>

              <DsButton
                name='Buy button'
                fullWidth
                size='medium'
                // disabled={item !== "Forward"}
                endIcon={<DsRemixIcon className='ri-arrow-right-down-line' />}
              >
                Buy USD
              </DsButton>
            </DsStack>
          ))}
        </DsBox>
      </DsStack>
    </DsStack>
  )
}
