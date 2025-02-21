import {
  DsBox,
  DsChip,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'

type Props = {
  popular: boolean
  heading: string
  subHeading: string
  percent: string
  bottomText: string
  bottomTextAmount: string
  seleted?: boolean
}

export const BannerPercentInfoCard = ({
  popular,
  heading,
  subHeading,
  percent,
  bottomText,
  bottomTextAmount,
  seleted
}: Props) => {
  return (
    <DsStack
      sx={{
        position: 'relative',
        p: 'var(--ds-spacing-bitterCold)',
        border: seleted
          ? '1px solid var(--ds-colour-strokeSelected)'
          : '1px solid var(--ds-colour-strokeDefault)',
        borderRadius: 'var(--ds-radius-glacial)',
        boxShadow: 'var(--ds-elevation-6)',
        pb: 'var(--ds-spacing-tropical)'
      }}
      gap='4px'
    >
      <DsBox sx={{ opacity: popular ? '1' : '0' }}>
        <DsChip
          label='Popular'
          type='nudge'
          icon={<DsRemixIcon className='ri-star-fill' />}
        />
      </DsBox>

      <DsTypography variant='headingBoldSmall'>{heading}</DsTypography>
      <DsTypography
        variant='supportRegularInfo'
        sx={{ color: 'var(--ds-colour-typoSecondary)' }}
      >
        {subHeading}
      </DsTypography>
      <DsTypography
        sx={{ color: 'var(--ds-colour-typoTypical)' }}
        variant='headingBoldLarge'
      >
        {percent}
      </DsTypography>
      <DsBox
        sx={{
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          px: 'var(--ds-spacing-bitterCold)',
          py: 'var(--ds-spacing-quickFreeze)',
          backgroundColor: 'var(--ds-colour-neutral2)',
          width: '100%',
          borderRadius: '0px 0px 8px 8px'
        }}
      >
        <DsTypography
          variant='supportRegularFootnote'
          sx={{
            color: 'var(--ds-colour-typoSecondary)',
            mr: 'var(--ds-spacing-glacial)'
          }}
        >
          {bottomText}
        </DsTypography>
        <DsTypography
          variant='bodyBoldSmall'
          sx={{ color: 'var(--ds-colour-typoSecondary)' }}
        >
          {bottomTextAmount}
        </DsTypography>
      </DsBox>
    </DsStack>
  )
}
