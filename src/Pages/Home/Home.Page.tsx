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
import { InvestmentsPage } from '../Dev/InvestmentsPage'
import OneViewPage from '../Dev/OneViewPage'

const HomePage: FC = () => {
  const [tabValue, setTabValue] = useState<number>(0)
  return <InvestmentsPage />
}

export default HomePage
