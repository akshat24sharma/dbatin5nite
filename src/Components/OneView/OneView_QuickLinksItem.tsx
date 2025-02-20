import {
  DsBox,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'

interface Props {
  icon: string
  label: string
}

export const QuickLinksItem = ({ icon, label }: Props) => {
  return (
    <DsStack gap='4px' alignItems='center' justifyContent='center'>
      <DsStack maxWidth='50px'>
        <DsBox
          sx={{
            p: 'var(--ds-spacing-glacial)',
            backgroundColor: 'var(--ds-colour-surfaceSecondary)',
            borderRadius: 'var(--ds-radius-glacial)'
          }}
        >
          <DsRemixIcon
            sx={{
              fontSize: '32px',
              color: 'var(--ds-colour-actionSecondary)'
            }}
            className={icon}
          />
        </DsBox>
      </DsStack>
      <DsTypography variant='supportRegularInfo'>{label}</DsTypography>
    </DsStack>
  )
}
