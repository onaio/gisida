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

export const addLayer = (layer) => {
  return {
    type: 'ADD_LAYER',
    layer
  }
}

export const toggleLayer = (layer) => {
  return {
    type: 'TOGGLE_LAYER',
    layer
  }
}


export default { initApp, initStyles, addLayer, toggleLayer }
