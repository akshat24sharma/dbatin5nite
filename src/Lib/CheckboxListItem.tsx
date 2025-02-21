import {
  DsCheckbox,
  DsFormLabel,
  DsStack,
  DsTypography
} from '@am92/react-design-system'

type Props = {
  heading: string
  infoText: string
  price: string
}

const CheckboxListItem = ({ heading, infoText, price }: Props) => {
  return (
    <DsStack
      sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        p: 'var(--ds-spacing-bitterCold)',
        borderBottom: '1px solid var(--ds-colour-strokeDefault)'
      }}
    >
      <DsStack flexDirection='row' gap='10px'>
        <DsFormLabel>
          {' '}
          <DsCheckbox
            aria-label={`emi-checkbox - ${heading + price}`}
            size='medium'
          />
        </DsFormLabel>

        <DsStack gap='3px'>
          <DsTypography variant='bodyRegularSmall'> {heading}</DsTypography>
          <DsTypography
            variant='supportRegularFootnote'
            sx={{ color: 'var(--ds-colour-typoSecondary)' }}
          >
            {infoText}
          </DsTypography>
        </DsStack>
      </DsStack>
      <DsTypography variant='bodyRegularSmall'>{price}</DsTypography>
    </DsStack>
  )
}

export default CheckboxListItem
