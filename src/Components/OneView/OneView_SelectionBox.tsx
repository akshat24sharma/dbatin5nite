import {
  DsBox,
  DsButton,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'

interface I_SELECTION_BOX {
  backgroundColor: string
  headerIcon: string
  headerLabel: string
  subHeadingLabel: string
  subHeadingIcon: string
  amount: string
}

const SelectionBox = (props: I_SELECTION_BOX) => {
  const {
    backgroundColor,
    headerIcon,
    headerLabel,
    subHeadingIcon,
    subHeadingLabel,
    amount
  } = props
  return (
    <DsStack
      gap='16px'
      minWidth='194px'
      borderRadius='var(--ds-radius-glacial)'
      sx={{ backgroundColor: backgroundColor }}
      padding='var(--ds-spacing-bitterCold)'
    >
      <DsStack
        alignItems='center'
        flexDirection='row'
        gap='var(--ds-spacing-frostbite)'
      >
        <DsRemixIcon sx={{ fontSize: '24px' }} className={headerIcon} />
        <DsButton variant='text' color='secondary'>
          {headerLabel}
        </DsButton>
      </DsStack>
      <DsStack gap='var(--ds-spcinag-deepFreeze)'>
        <DsBox
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--ds-spacing-glacial)'
          }}
        >
          <DsTypography>{subHeadingLabel}</DsTypography>
          <DsRemixIcon
            sx={{ fontSize: '16px', color: 'var(--ds-colour-actionSecondary)' }}
            className={subHeadingIcon}
          />
        </DsBox>
        <DsTypography variant='bodyBoldMedium'>{`₹ ${amount} `}</DsTypography>
      </DsStack>
    </DsStack>
  )
}

export default SelectionBox
