export default function lngLat(LOC, APP) {
  let center;
  let zoom;
  if (LOC && LOC.location) {
    center = Array.isArray(LOC.location.center) ? {
      lng: LOC.location.center[0],
      lat: LOC.location.center[1],
    } :
      { ...LOC.location.center };
    zoom = LOC && LOC.location.zoom;
  } else {
    center = Array.isArray(APP.mapConfig.center) ? {
      lng: APP.mapConfig.center[0],
      lat: APP.mapConfig.center[1],
    } : { ...APP.mapConfig.center };
    zoom = APP && APP.mapConfig.zoom;
  }
  return { center, zoom };
}
