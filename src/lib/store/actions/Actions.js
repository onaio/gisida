export const changeLayer = (layer, status, map) => {
  return {
    type: 'CHANGE_LAYER',
    layer,
    status,
    map
  };
};
