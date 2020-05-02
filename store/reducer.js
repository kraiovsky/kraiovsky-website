import update from 'immutability-helper'
import initialState from './initialState'
import { PAGE_TITLE_CHANGE, TOGGLE_THEME } from './actionTypes'

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_TITLE_CHANGE:
      return update(state, { pageTitle: { $set: action.payload.title } })
    case TOGGLE_THEME:
      return update(state, { darkTheme: { $set: !state.darkTheme } })
    default:
      return state
  }
}
