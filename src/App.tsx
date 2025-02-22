import {
  Experimental_CssVarsProvider as CssVarsProvider,
  DsCssBaseline,
  getTheme
} from '@am92/react-design-system'

// import AppInitializer from '~/src/AppInitializer'

import { THEME_MODE_STORAGE_KEY } from '~/src/Constants/THEME'

import '~/src/App.scss'
import { FC } from 'react'
import HomePage from './Pages/Home/Home.Page'
import ThemeManager from './ThemeManager'

export interface IAppProps {
  persisted: boolean
}

const App: FC<IAppProps> = () => {
  // const { persisted } = props

  // const { fontFamily, palette } = useSelector(getThemeReducer);
  const AppTheme = getTheme()

  return (
    <CssVarsProvider theme={AppTheme} modeStorageKey={THEME_MODE_STORAGE_KEY}>
      <DsCssBaseline>
        <ThemeManager />
        <HomePage />
      </DsCssBaseline>
    </CssVarsProvider>
  )
}

export default App
