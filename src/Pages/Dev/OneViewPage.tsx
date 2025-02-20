import {
  DsAppBar,
  DsAvatar,
  DsBottomNavigation,
  DsBottomNavigationAction,
  DsBox,
  DsButton,
  DsCarousel,
  DsImage,
  DsRemixIcon,
  DsStack,
  DsTab,
  DsTabs,
  DsTypography
} from '@am92/react-design-system'
import { FC, useState } from 'react'
import {
  ONE_VIEW_BANNER_1_IMAGE,
  ONE_VIEW_BANNER_2_IMAGE,
  ONE_VIEW_CAROUSEL_1_IMAGE
} from '~/src/Assets/ONE_VIEW_IMAGES'
import { QuickLinksItem } from '~/src/Components/OneView/OneView_QuickLinksItem'
import SelectionBox from '~/src/Components/OneView/OneView_SelectionBox'
import { OneViewSendMoneyItem } from '~/src/Components/OneView/OneView_SendMoneyItem'
import { TabListItem } from '~/src/Components/OneView/TransactionTabs/OneView_TabListItem'
import { TabPanel } from '~/src/Components/TabPanel'
import { QUICK_LINKS_DATA } from '~/src/Constants/OneView/OneView_OneViewQuickLinksData'
import { OneViewSendMoneyData } from '~/src/Constants/OneView/OneView_SendMoneyData'
import {
  TRANSACTIONS_SAVINGS_ACCOUNT,
  TRANSACTION_CREDIT_CARDS
} from '~/src/Constants/OneView/OneView_TransactionsData'

const OneViewPage: FC = () => {
  const [tabValue, setTabValue] = useState<number>(0)
  return (
    <DsStack
      padding='var(--ds-spacing-bitterCold)'
      gap='var(--ds-spacing-warm)'
      mb='var(--ds-rules-appBarMobileMinHeight)'
    >
      <DsAppBar
        appBarTitle={
          <DsAvatar ds-variant='text' sizes='M'>
            VJ
          </DsAvatar>
        }
        actions={[
          <DsRemixIcon className='ri-notification-2-line' />,
          <DsRemixIcon className='ri-search-line' />
        ]}
        sx={{ boxShadow: 'none' }}
        color='default'
      />

      {/* Heading with cards  */}

      <DsStack
        mt='calc(var(--ds-rules-appBarMobileMinHeight) + var(--ds-spacing-bitterCold))'
        gap='var(--ds-spacing-bitterCold)'
      >
        <DsTypography
          variant='headingBoldLarge'
          color='var(--ds-colour-actionPrimary)'
        >
          Hi, Vijay
        </DsTypography>

        <DsStack
          sx={{ overflowX: 'auto' }}
          flexDirection='row'
          gap='var(--ds-spacing-frostbite)'
        >
          <SelectionBox
            amount='2.36 Cr'
            subHeadingLabel='Total value'
            subHeadingIcon='ri-eye-line'
            backgroundColor='var(--ds-colour-neutral4)'
            headerIcon='ri-bank-line'
            headerLabel='One View'
          />
          <SelectionBox
            amount='42,40,400.45'
            subHeadingLabel='Axis account balance'
            subHeadingIcon='ri-eye-line'
            backgroundColor='var(--ds-colour-neutral5)'
            headerIcon='ri-bank-line'
            headerLabel='accounts'
          />
        </DsStack>
      </DsStack>

      {/* Offers Section (carousel) */}

      <DsStack gap='12px'>
        <DsStack
          alignItems='center'
          flexDirection='row'
          justifyContent='space-between'
          pb='var(--ds-spacing-bitterCold)'
          px='var(--ds-spacing-bitterCold)'
        >
          <DsTypography variant='subheadingSemiboldDefault'>
            Offers for you
          </DsTypography>
        </DsStack>
        <DsCarousel pagination={{ mode: 'external' }} navigation={false}>
          <DsBox>
            <DsImage
              style={{ width: '100%' }}
              srcSet={ONE_VIEW_BANNER_1_IMAGE}
            />
          </DsBox>
          <DsBox>
            <DsImage
              style={{ width: '100%' }}
              srcSet={ONE_VIEW_BANNER_2_IMAGE}
            />
          </DsBox>
        </DsCarousel>
      </DsStack>

      {/* Transaction section */}

      <DsStack>
        <DsStack
          alignItems='center'
          flexDirection='row'
          justifyContent='space-between'
          pb='var(--ds-spacing-bitterCold)'
          px='var(--ds-spacing-bitterCold)'
        >
          <DsTypography variant='subheadingSemiboldDefault'>
            Transactions
          </DsTypography>
          <DsButton color='secondary' variant='text'>
            view all
          </DsButton>
        </DsStack>
        <DsBox
          sx={{
            p: 'var(--ds-spacing-bitterCold)',
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-glacial)'
          }}
        >
          <DsTabs
            onChange={(_, value) => setTabValue(value)}
            value={tabValue}
            variant='fullWidth'
            ds-variant='container'
          >
            <DsTab label='SAVINGS A/C' tabIndex={0} />
            <DsTab label='CREDIT CARD' tabIndex={1} />
            <DsTab label='UPCOMING' tabIndex={2} />
          </DsTabs>
          <DsStack sx={{ mt: 'var(--ds-spacing-bitterCold)' }}>
            <TabPanel value={tabValue} index={0}>
              <DsStack gap='var(--ds-spacing-bitterCold)'>
                {TRANSACTIONS_SAVINGS_ACCOUNT.map((item, index) => {
                  return <TabListItem item={item} index={index} />
                })}
              </DsStack>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <DsStack gap='var(--ds-spacing-bitterCold)'>
                {TRANSACTION_CREDIT_CARDS.map((item, index) => {
                  return <TabListItem item={item} index={index} />
                })}
              </DsStack>
            </TabPanel>
          </DsStack>
        </DsBox>
      </DsStack>

      {/* Quick links section */}

      <DsStack>
        <DsStack
          alignItems='center'
          flexDirection='row'
          justifyContent='space-between'
          pb='var(--ds-spacing-bitterCold)'
          px='var(--ds-spacing-bitterCold)'
        >
          <DsTypography variant='subheadingSemiboldDefault'>
            quick links
          </DsTypography>
        </DsStack>
        <DsBox
          sx={{
            px: 'var(--ds-spacing-glacial)',
            py: 'var(--ds-spacing-bitterCold)',
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-glacial)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            columnGap: 'var(--ds-spacing-frostbite)',
            rowGap: 'var(--ds-spacing-bitterCold)'
          }}
        >
          {QUICK_LINKS_DATA.map((item, index) => {
            return (
              <DsBox key={index}>
                <QuickLinksItem icon={item.icon} label={item.lable} />
              </DsBox>
            )
          })}
        </DsBox>
      </DsStack>

      {/* Send money section */}

      <DsStack>
        <DsStack
          alignItems='center'
          flexDirection='row'
          justifyContent='space-between'
          pb='var(--ds-spacing-bitterCold)'
          px='var(--ds-spacing-bitterCold)'
        >
          <DsTypography variant='subheadingSemiboldDefault'>
            SEND MONEY
          </DsTypography>
          <DsButton color='secondary' variant='text'>
            view all
          </DsButton>
        </DsStack>
        <DsBox
          sx={{
            p: 'var(--ds-spacing-bitterCold)',
            border: '1px solid var(--ds-colour-strokeDefault)',
            borderRadius: 'var(--ds-radius-glacial)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr'
          }}
        >
          <DsStack
            justifyContent='center'
            alignItems='center'
            textAlign='center'
            gap='var(--ds-spacing-glacial)'
          >
            <DsBox
              sx={{
                p: 'var(--ds-spacing-cool)',
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
                className='ri-add-line'
              />
            </DsBox>
            <DsTypography
              color='var(--ds-colour-actionSecondary)'
              variant='supportRegularInfo'
            >
              Add item
            </DsTypography>
          </DsStack>

          {OneViewSendMoneyData.map((item, index) => (
            <DsBox key={index}>
              <OneViewSendMoneyItem label={item.label} name={item.name} />
            </DsBox>
          ))}
        </DsBox>
      </DsStack>

      {/* Banner section */}

      <DsStack gap='12px'>
        <DsStack
          alignItems='center'
          flexDirection='row'
          justifyContent='space-between'
          pb='var(--ds-spacing-bitterCold)'
          px='var(--ds-spacing-bitterCold)'
        >
          <DsTypography variant='subheadingSemiboldDefault'>
            Recommended For you
          </DsTypography>
          <DsButton color='secondary' variant='text'>
            view all
          </DsButton>
        </DsStack>
        <DsBox>
          <DsImage
            loading='lazy'
            aspectRatio={3 / 1}
            srcSet={ONE_VIEW_CAROUSEL_1_IMAGE}
          />
        </DsBox>
      </DsStack>

      {/* Bottom Navigation section */}

      <DsBottomNavigation
        sx={{
          position: 'fixed',
          bottom: '0px',
          width: '100%',
          left: '0px',
          zIndex: 12
        }}
      >
        <DsBottomNavigationAction
          icon={<DsRemixIcon className='ri-bank-line' />}
          label='Accounts'
        />
        <DsBottomNavigationAction
          icon={<DsRemixIcon className='ri-hand-coin-line' />}
          label='Apply Now'
        />
        <DsBottomNavigationAction
          icon={<DsRemixIcon className='ri-price-tag-3-line' />}
          label='Grab deals'
        />
        <DsBottomNavigationAction
          icon={<DsRemixIcon className='ri-more-line' />}
          label='More'
        />
      </DsBottomNavigation>
    </DsStack>
  )
}

export default OneViewPage
