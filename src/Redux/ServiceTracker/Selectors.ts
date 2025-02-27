import { createSelector } from '@reduxjs/toolkit'

import type { TAppStore } from '~/src/Configurations/AppStore'

export const SLICE_NAME = 'serviceTracker'

const select = (state: TAppStore) => state[SLICE_NAME]

export const getServiceSelector = (state: TAppStore, serviceKey: string) => {
  return createSelector(select, reducer => reducer[serviceKey])(state)
}

export const isServiceLoading = (state: TAppStore, serviceKeys: string[]) => {
  const loading = serviceKeys.reduce((boolean, serviceKey) => {
    return boolean || getServiceSelector(state, serviceKey) === 'LOADING'
  }, false)

  return loading
}
