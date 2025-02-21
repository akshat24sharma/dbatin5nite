import { DsAvatar, DsStack, DsTypography } from '@am92/react-design-system'

type Props = {
  label: string
  name: any
}

export const OneViewSendMoneyItem = ({ label, name }: Props) => {
  return (
    <DsStack
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      gap='var(--ds-spacing-glacial)'
    >
      <DsAvatar ds-size='XXL' ds-variant='text'>
        {name}
      </DsAvatar>
      <DsTypography variant='supportRegularInfo'>{label}</DsTypography>
    </DsStack>
  )
}
