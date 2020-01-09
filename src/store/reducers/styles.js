import defaultState from '../defaultState';
import { INIT_STYLES, CHANGE_STYLE } from '../constants/actionTypes';

export default function STYLES(state = defaultState.STYLES, action) {
  switch (action.type) {
    case INIT_STYLES: {
      const styles = action.styles.map(s => {
        const style = s;
        if (style.url === action.mapConfig.style) style.current = true;
        return style;
      });
      return styles;
    }
    case CHANGE_STYLE: {
      const updatedStyles = state.map(s => {
        const style = s;
        if (action.style === style.url) {
          if (action.mapId) {
            style[action.mapId] = { current: true };
          } else style.current = true;
        } else if (action.mapId) {
          style[action.mapId] = { current: false };
        } else style.current = false;
        return style;
      });
      return updatedStyles;
    }
    default:
      return state;
  }
}
