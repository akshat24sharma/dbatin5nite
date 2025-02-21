import {
  DsBox,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'

type Props = {
  icon: string
  heading: string
  price: string
}

export const Investments_InvestmentItem = ({ icon, heading, price }: Props) => {
  return (
    <DsStack alignItems='center' gap='8px'>
      <DsBox
        sx={{
          p: 'var(--ds-spacing-mild)',
          backgroundColor: 'var(--ds-colour-neutral1)',
          borderRadius: '50%',
          height: '40px',
          width: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <DsRemixIcon
          sx={{ color: 'var(--ds-colour-actionSecondary)' }}
          className={icon}
        />
      </DsBox>
      <DsStack alignItems='center' gap='2px'>
        <DsTypography
          variant='bodyRegularMedium'
          sx={{ color: 'var(--ds-colour-typoSecondary)' }}
        >
          {heading}
        </DsTypography>
        <DsTypography variant='bodyBoldSmall'>{price}</DsTypography>
      </DsStack>
    </DsStack>
  )
}
