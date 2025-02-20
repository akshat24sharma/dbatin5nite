import {
  DsAppBar,
  DsBox,
  DsImage,
  DsPieChart,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'
import {
  INVESTMENT_CREDIT_IMAGES,
  INVESTMENT_PROTECTION_IMAGES
} from '~/src/Assets/INVESTMENTS_IMAGES'
import { Investment_ChartLegends } from '~/src/Components/Investments/Investment_ChartLegends'
import Investment_SectionHeader from '~/src/Components/Investments/Investment_SectionHeader'
import { Investments_InvestmentItem } from '~/src/Components/Investments/Investments_InvestmentItesm'
import { Investment_InvestmentItemsData } from '~/src/Constants/Investments/Investments_InvestmentsItemsData'
import { Inevestment_PieData } from '~/src/Constants/Investments/Investments_PieData'

export const InvestmentsPage = () => {
  return (
    <DsStack
      padding='var(--ds-spacing-bitterCold)'
      gap='var(--ds-spacing-warm)'
      mb='var(--ds-rules-appBarMobileMinHeight)'
    >
      <DsAppBar
        appBarTitle={
          <DsTypography variant='headingBoldSmall'>
            My Money/ My Wealth
          </DsTypography>
        }
        actions={[<DsRemixIcon className='ri-notification-2-line' />]}
        color='default'
        sx={{ boxShadow: 'none' }}
      />

      {/* main stack  */}

      <DsStack
        mt='calc(var(--ds-rules-appBarMobileMinHeight) )'
        gap='var(--ds-spacing-warm)'
      >
        <DsTypography
          variant='headingBoldLarge'
          color='var(--ds-colour-actionPrimary)'
        >
          Hi, Vijay
        </DsTypography>

        {/* Networth section  */}

        <DsStack
          sx={{
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: '16px'
          }}
        >
          <DsBox
            sx={{
              height: '132px',
              width: '-webkit-fill-available',
              p: 'var(--ds-spacing-bitterCold)',
              background:
                `url(${
                  new URL(
                    '~/src/AssetFiles/investmentsBanner1.png',
                    import.meta.url
                  ).href
                })` +
                ', radial-gradient(798.5% 141.18% at 1.41% 4.73%, #F4EBF9 0%, #F9F6EB 100%)',
              backgroundPosition: 'right bottom',
              backgroundRepeat: 'no-repeat',
              borderRadius: '16px 16px 0px 0px'
            }}
          >
            <DsStack gap='4px'>
              <DsTypography
                sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}
                variant='headingBoldSmall'
              >
                Your Networth{' '}
                <DsRemixIcon
                  sx={{ fontSize: '16px' }}
                  className='ri-information-line'
                />
              </DsTypography>
              <DsTypography
                sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                variant='headingBoldLarge'
              >
                ₹3.12 Cr{' '}
                <DsRemixIcon
                  sx={{
                    fontSize: '16px',
                    color: 'var(--ds-colour-actionSecondary)'
                  }}
                  className='ri-eye-off-line'
                />
              </DsTypography>
            </DsStack>
          </DsBox>
          <DsStack
            flexDirection='row'
            justifyContent='space-between'
            padding='var(--ds-spacing-bitterCold)'
          >
            <DsTypography variant='bodyBoldMedium'>
              Track your Networth
            </DsTypography>
            <DsRemixIcon className='ri-arrow-right-s-line' />
          </DsStack>
        </DsStack>

        {/* Your Investments Section  */}

        <DsStack
          sx={{
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-bitterCold)'
          }}
        >
          <Investment_SectionHeader
            heading='Your Investments'
            subHeading='Grow your wealth'
            backgroundColor='var(--ds-colour-neutral4)'
          />
          <DsStack
            p='var(--ds-spacing-bitterCold)'
            flexDirection='row'
            justifyContent='space-between'
          >
            <DsTypography variant='bodyBoldMedium'>
              Total Portfolio
            </DsTypography>
            <DsTypography variant='headingBoldExtraSmall'>
              ₹7,20,000
            </DsTypography>
          </DsStack>
          <DsBox
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              rowGap: 'var(--ds-spacing-mild)',
              columnGap: 'var(--ds-spacing-mild)',
              p: 'var(--ds-spacing-bitterCold)'
            }}
          >
            {Investment_InvestmentItemsData.map((item, index) => (
              <DsBox key={index}>
                <Investments_InvestmentItem
                  icon={item.icon}
                  heading={item.heading}
                  price={item.price}
                />
              </DsBox>
            ))}
            <DsStack
              justifyContent='flex-start'
              alignItems='center'
              textAlign='center'
              gap='var(--ds-spacing-glacial)'
            >
              <DsBox
                sx={{
                  p: 'var(--ds-spacing-frostbite)',
                  border: '1px dashed var(--ds-colour-strokeDefault)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <DsRemixIcon
                  sx={{
                    color: 'var(--ds-colour-actionSecondary)',
                    fontSize: '24px'
                  }}
                  className='ri-arrow-down-s-line'
                />
              </DsBox>
              <DsTypography
                color='var(--ds-colour-actionSecondary)'
                variant='supportRegularInfo'
              >
                MORE
              </DsTypography>
            </DsStack>
          </DsBox>
        </DsStack>

        {/* Your spends section  */}

        <DsStack
          sx={{
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-bitterCold)'
          }}
        >
          <Investment_SectionHeader
            heading='Your Spends'
            subHeading='Manage your expenses'
            backgroundColor='var(--ds-colour-neutral3)'
          />
          <DsStack p='var(--ds-spacing-bitterCold)'>
            <DsStack
              flexDirection='row'
              justifyContent='space-between'
              alignItems='center'
              p='var(--ds-spacing-bitterCold)'
            >
              <DsStack>
                <DsTypography variant='bodyBoldSmall'>
                  March Spends
                </DsTypography>
                <DsTypography variant='headingBoldExtraSmall'>
                  ₹2,40,000
                </DsTypography>
              </DsStack>
              <DsBox>
                <DsPieChart
                  width={144}
                  height={144}
                  series={Inevestment_PieData}
                  margin={{
                    right: 0,
                    left: 0,
                    top: 0,
                    bottom: 0
                  }}
                  slotProps={{
                    legend: {
                      hidden: true,
                      direction: 'row',
                      position: { vertical: 'top', horizontal: 'left' },
                      padding: -20
                    }
                  }}
                />
              </DsBox>
            </DsStack>
            <DsBox
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                rowGap: 'var(--ds-spacing-bitterCold)',
                pt: 'var(--ds-spacing-bitterCold)'
              }}
            >
              {Inevestment_PieData[0].data.map(item => (
                <Investment_ChartLegends
                  value={item.value}
                  label={item.label}
                  legendColor={item.color}
                />
              ))}
            </DsBox>
          </DsStack>
          <DsStack
            p='var(--ds-spacing-bitterCold)'
            flexDirection='row'
            justifyContent='space-between'
          >
            <DsTypography variant='headingBoldExtraSmall'>
              View category-wise transactions
            </DsTypography>
            <DsRemixIcon className='ri-arrow-right-s-line' />
          </DsStack>
        </DsStack>

        {/* Credit score section  */}

        <DsStack
          sx={{
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-bitterCold)'
          }}
        >
          <DsBox>
            <DsImage
              loading='lazy'
              // height="200px"
              width='370px'
              style={{
                borderRadius: '16px 16px 0px 0px',
                marginBottom: 'var(--ds-spacing-bitterCold)'
              }}
              srcSet={INVESTMENT_CREDIT_IMAGES}
            />
          </DsBox>
          <DsStack
            sx={{
              p: 'var(--ds-spacing-bitterCold)',
              pt: 'var(--ds-spacing-glacial)'
            }}
          >
            <DsStack flexDirection='row' justifyContent='space-between'>
              <DsTypography variant='headingBoldExtraSmall'>
                Find out your latest credit score
              </DsTypography>
              <DsRemixIcon className='ri-arrow-right-s-line' />
            </DsStack>
            <DsTypography
              sx={{ color: 'var(--ds-colour-typoSecondary)', width: '80%' }}
              variant='bodyRegularSmall'
            >
              Get your detailed report and insights on how to improve your
              credit score.
            </DsTypography>
          </DsStack>
        </DsStack>

        {/* Protection cover section  */}

        <DsStack
          sx={{
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-bitterCold)'
          }}
        >
          <DsBox>
            <DsImage
              loading='lazy'
              style={{
                borderRadius: '16px 16px 0px 0px',
                width: '100%'
              }}
              srcSet={INVESTMENT_PROTECTION_IMAGES}
            />
          </DsBox>
          <DsStack
            sx={{
              p: 'var(--ds-spacing-bitterCold)',
              pt: 'var(--ds-spacing-glacial)'
            }}
          >
            <DsStack flexDirection='row' justifyContent='space-between'>
              <DsTypography variant='headingBoldExtraSmall'>
                Find out your latest credit score
              </DsTypography>
              <DsRemixIcon className='ri-arrow-right-s-line' />
            </DsStack>
            <DsTypography
              sx={{ color: 'var(--ds-colour-typoSecondary)', width: '80%' }}
              variant='bodyRegularSmall'
            >
              Get your detailed report and insights on how to improve your
              credit score.
            </DsTypography>
          </DsStack>
        </DsStack>
      </DsStack>
    </DsStack>
  )
}
