import produce from "immer"
import Data from "../data/data"

// INITIAL STATE
const initialState = {
  isDarkMode: false,
  titlesCount: Data.length,
  maxTitles: Data.length - 1,
  currentIndex: 0,
  nextIndex: 1,
  prevIndex: 4,
}

// ACTIONS
const TOGGLE_DARKMODE = "TOGGLE_DARKMODE"
export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

const INCREMENT_INDEX = "INCREMENT_INDEX"
export const incrementIndex = () => ({
  type: INCREMENT_INDEX,
})

const DECREMENT_INDEX = "DECREMENT_INDEX"
export const decrementIndex = () => ({
  type: DECREMENT_INDEX,
})

// REDUCER
export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_DARKMODE:
        return { ...state, isDarkMode: action.isDarkMode }
      case INCREMENT_INDEX:
        draft.currentIndex += 1
        draft.nextIndex += 1
        draft.prevIndex += 1
        if (draft.currentIndex > draft.maxTitles) {
          draft.currentIndex = 0
        }
        if (draft.nextIndex > draft.maxTitles) {
          draft.nextIndex = 0
        }
        if (draft.prevIndex > draft.maxTitles) {
          draft.prevIndex = 0
        }
        break
      case DECREMENT_INDEX:
        draft.currentIndex -= 1
        draft.nextIndex -= 1
        draft.prevIndex -= 1
        if (draft.currentIndex === -1) {
          draft.currentIndex = draft.maxTitles
        }
        if (draft.nextIndex === -1) {
          draft.nextIndex = draft.maxTitles
        }
        if (draft.prevIndex === -1) {
          draft.prevIndex = draft.maxTitles
        }
        break
      default:
        return state
    }
  })
