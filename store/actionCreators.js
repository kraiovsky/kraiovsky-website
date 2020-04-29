import {
  PAGE_TITLE_CHANGE,
} from './actionTypes'

export const setPageTitle = (title) => ({
  type: PAGE_TITLE_CHANGE,
  payload: { title },
})
