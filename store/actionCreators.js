import { PAGE_TITLE_CHANGE, TOGGLE_THEME } from './actionTypes'

export const setPageTitle = (title) => ({
  type: PAGE_TITLE_CHANGE,
  payload: { title },
})

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
})
