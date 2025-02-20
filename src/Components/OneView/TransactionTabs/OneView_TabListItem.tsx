import {
  DsBox,
  DsRemixIcon,
  DsStack,
  DsTypography
} from '@am92/react-design-system'

interface I_LIST_ITEM {
  item: any
  index: number
}

export const TabListItem = ({ item, index }: I_LIST_ITEM) => {
  return (
    <DsBox key={index} sx={{ display: 'flex', gap: '16px' }}>
      <DsStack
        sx={{
          backgroundColor: 'var(--ds-colour-neutral1)',
          padding: '5px',
          gap: '2px',
          borderRadius: '4px',
          textAlign: 'center',
          minWidth: '40px'
        }}
      >
        <DsTypography variant='supportRegularInfo'>{item.date1}</DsTypography>
        <DsTypography variant='supportRegularInfo'>{item.date2}</DsTypography>
      </DsStack>
      <DsStack textAlign='left' width='160px' justifyContent='center'>
        <DsTypography variant='supportRegularInfo'>{item.heading}</DsTypography>
        <DsTypography variant='supportRegularInfo'>
          {item.subHeading}
        </DsTypography>
      </DsStack>
      <DsStack
        flexDirection='row'
        alignItems='center'
        gap='2px'
        textAlign='right'
        justifyContent='end'
        width='100px'
      >
        <DsRemixIcon
          sx={{
            fontSize: '16px',
            color: !item.debit ? 'var(--ds-colour-supportPositive)' : ''
          }}
          className={
            item.debit ? 'ri-arrow-right-up-line' : 'ri-arrow-left-down-line'
          }
        />
        <DsTypography
          sx={{
            color: !item.debit ? 'var(--ds-colour-supportPositive)' : ''
          }}
          variant='bodyBoldMedium'
        >
          {item.price}
        </DsTypography>
      </DsStack>
    </DsBox>
  )
}
