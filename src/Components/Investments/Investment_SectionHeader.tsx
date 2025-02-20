import { DsButton, DsStack, DsTypography } from '@am92/react-design-system'

type Props = {
  heading: string
  subHeading: string
  backgroundColor: string
}

const Investment_SectionHeader = ({
  heading,
  subHeading,
  backgroundColor
}: Props) => {
  return (
    <DsStack
      padding='var(--ds-spacing-bitterCold)'
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: '16px 16px 0px 0px'
      }}
    >
      <DsStack flexDirection='row' justifyContent='space-between'>
        <DsTypography variant='headingBoldSmall'>{heading}</DsTypography>
        <DsButton variant='text' color='secondary'>
          View Details
        </DsButton>
      </DsStack>
      <DsTypography
        variant='subheadingSemiboldDefault'
        sx={{ color: 'var(--ds-colour-typoSecondary)' }}
      >
        {subHeading}
      </DsTypography>
    </DsStack>
  )
}

export default Investment_SectionHeader
