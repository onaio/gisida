
export const addLayer = (layer) => {
  return {
    type: 'ADD_LAYER',
    layer
  }
}

export const initApp = (config) => {
  
  return {
    type: 'INIT_APP',
    config
  }
}

export const initStyles = (styles) => {
  return {
    type: 'INIT_STYLES',
    styles
  }
}

// todo - add timeseries actions
