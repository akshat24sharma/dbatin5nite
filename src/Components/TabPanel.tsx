import { DsBox, DsTypography } from '@am92/react-design-system'

export const TabPanel = (props?: any) => {
  const { children, value, index, ...other } = props
  return (
    <DsBox hidden={value !== index} {...other}>
      {value === index && (
        <DsBox p={1}>
          <DsTypography>{children}</DsTypography>
        </DsBox>
      )}
    </DsBox>
  )
}
