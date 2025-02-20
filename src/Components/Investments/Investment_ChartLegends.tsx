import {
  DsBox,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'
import { InrFormatter } from '~/src/Helpers/Utils'

type Props = {
  label: string
  legendColor: string
  value: number
}

export const Investment_ChartLegends = ({
  label,
  legendColor,
  value
}: Props) => {
  return (
    <DsStack gap='1px' maxWidth='150px'>
      <DsStack flexDirection='row' justifyContent='space-between'>
        <DsBox sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <DsBox
            sx={{ height: '10px', width: '10px', background: legendColor }}
          ></DsBox>
          <DsTypography
            variant='supportRegularInfo'
            color='var(--ds-spacing-typoSecondary)'
          >
            {label}
          </DsTypography>
        </DsBox>
        <DsRemixIcon
          sx={{ color: 'var(--ds-colour-iconDisabled)', fontSize: '24px' }}
          className='ri-arrow-drop-right-line'
        />
      </DsStack>
      <DsTypography variant='bodyBoldSmall'>
        {InrFormatter.format(value)}
      </DsTypography>
    </DsStack>
  )
}
