export default function mergeFilters(
  originalFilters,
  filteredFilters,
  clickedFilterKey,
) {
  if (!filteredFilters || !Object.keys(filteredFilters).length) {
    return originalFilters;
  }
  // Define keys of all the filters and an obj to map merged filters into
  const filterKeys = Object.keys(originalFilters);
  const nextFilters = {};

  let filterIsOpen;
  let nextFilter;
  let filterKey;
  let oOptions;
  let fOptions;
  let ooKeys;
  let ooKey;

  // Loop through all the filters
  for (let f = 0; f < filterKeys.length; f += 1) {
    filterKey = filterKeys[f];
    filterIsOpen = originalFilters[filterKey].isOpen;

    if (
      filterKey === clickedFilterKey &&
      originalFilters[filterKey].isFiltered
    ) {
      nextFilters[filterKey] = originalFilters[filterKey];
    } else {
      nextFilter = Object.assign({}, filteredFilters[filterKey], {
        isOriginal: false,
        isFiltered: originalFilters[filterKey].isFiltered,
        toggleAllOn: originalFilters[filterKey].toggleAllOn,
        isOpen: filterIsOpen,
      });
      fOptions = filteredFilters[filterKey].options;
      oOptions = originalFilters[filterKey].options;
      ooKeys = Object.keys(oOptions);

      // Loop through all of the original filter options
      for (let o = 0; o < ooKeys.length; o += 1) {
        ooKey = ooKeys[o];
        // If the filtered filter doesn't have the option, add it
        if (!fOptions[ooKey]) {
          nextFilter.options[ooKey] = {
            count: 0,
            enabled: false,
            hidden: false,
          };
        } else {
          nextFilter.options[ooKey].enabled = oOptions[ooKey].enabled;
        }
      }
      nextFilters[filterKey] = nextFilter;
    }
  }

  return nextFilters;
}
