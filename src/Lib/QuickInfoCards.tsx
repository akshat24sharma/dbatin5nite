import { DsRemixIcon, DsStack, DsTypography } from '@am92/react-design-system'

type Props = {
  icon: string
  text: string
}

export const QuickInfoCards = ({ icon, text }: Props) => {
  return (
    <DsStack
      sx={{
        p: 'var(--ds-spacing-bitterCold)',
        backgroundColor: 'var(--ds-colour-surfacePrimary)',
        borderRadius: 'var(--ds-radius-glacial)',
        gap: 'var(--ds-spacing-bitterCold)',
        minWidth: '144px'
      }}
    >
      <DsStack flexDirection='row' justifyContent='space-between'>
        <DsRemixIcon className={icon} />
        <DsRemixIcon className='ri-arrow-right-s-line' />
      </DsStack>
      <DsTypography sx={{ width: '60%' }}>{text}</DsTypography>
    </DsStack>
  )
}
