
export const addNode = (node) => {
  return {
    type: 'ADD_NODE',
    node
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