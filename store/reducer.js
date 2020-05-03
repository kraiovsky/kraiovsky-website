import update from 'immutability-helper'
import { setCookie } from 'nookies'
import initialState from './initialState'
import { PAGE_TITLE_CHANGE, TOGGLE_THEME } from './actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_TITLE_CHANGE:
      return update(state, { pageTitle: { $set: action.payload.title } })
    case TOGGLE_THEME: {
      const themeToSet = state.theme === 'light' ? 'dark' : 'light'
      setCookie(null, 'theme', themeToSet, {
        maxAge: 12 * 30 * 24 * 60 * 60,
        path: '/',
      })
      return update(state, {
        theme: { $set: themeToSet },
      })
    }
    default:
      return state
  }
}
