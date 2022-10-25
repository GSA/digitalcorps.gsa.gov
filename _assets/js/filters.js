var searchbox = document.getElementById('fellows-search-input');
var searchInput = document.getElementById('fellows-search-input'); // Found in fellow-filters.html
var resultsContainer = document.getElementById('fellow-search-results');
var inFellowSearch = false;
var defaultList = document.getElementById("fellow-search-default");
var agencySelect = document.getElementById("fellows-select-agency");
var trackSelect = document.getElementById("fellows-select-track");
/* In order to filter the JSON blob correctly later and have both the search
and the filters work as expected, we need to not bind the filters' SJS instance
to the actual search input. */
var searchInputDummy = {addEventListener: () => {}}; 

let sjs = SimpleJekyllSearch({
  searchInput:  searchInputDummy,
  resultsContainer: resultsContainer,
  json: fellowsJson,
  searchResultTemplate: searchResultTemplate
}); 

// Set filters based on path during page load
const parseURL = () => {
  let json = fellowsJson;

  var splitPath = window.location.pathname.split('/')
  for (i in splitPath) { 
    item = splitPath[i]
    if (validAgencies.includes(item) ) {
      agencySelect.value = item;
      json = json.filter(fellow => fellow.agency === item);
      break;
    }

    if (validTracks.includes(item)) {
      trackSelect.value = item;
      json = json.filter(fellow => fellow.track === item);
      break;
    }
  }
  return json; // used in filters.tests.js
}
// Call the parseURL function immediately on page load. Could also be an IIFE.
parseURL();

const resetFilters = () => {
  agencySelect.value="";
  trackSelect.value="";
  window.history.replaceState({}, '', `${siteBaseurl}/fellows`); 
  defaultList.style.display = "flex";
};

const resetSearch = () => {
  inFellowSearch = false;
  searchInput.value = '';
};

/* When the searchbox is focused, create a new instance of SJS with access
 * to the full fellows JSON blob and clear any filter choices. 
 * We also bind this SJS instance to the actual search input element. */
searchbox.addEventListener('focus', () => {
  sjs = SimpleJekyllSearch({
    searchInput: searchInput,
    resultsContainer: resultsContainer,
    json: fellowsJson,
    searchResultTemplate: searchResultTemplate
  });
  // We can't search in a way that takes the filters into account, so set them back to "all"
  resetFilters();
});

const respondToSearchbox = (searchterm) => {
  if (searchterm.length && !inFellowSearch) {
    sjs.search(searchterm);
    inFellowSearch = true;
    defaultList.style.display = "none";
  }
  if (!searchterm.length && inFellowSearch) {
    inFellowSearch = false;
    // show initial list after search is over
    defaultList.style.display = "flex";
  }
}

searchbox.addEventListener('keyup', () => {
  respondToSearchbox(searchInput.value.trim());
});

// we need to track both the filters by way of the URL so that if someone shares the path, we can render the right results
const buildPath = () => {
  const base = `${siteBaseurl}/fellows`;
  return trackSelect.value ? base + `/${trackSelect.value}` : (agencySelect.value ? base + `/${agencySelect.value}` : base)
};

const doSJS = (json, searchterm) => {
  sjs = SimpleJekyllSearch({
    searchInput:  searchInputDummy,
    resultsContainer: resultsContainer,
    json: json,
    searchResultTemplate: searchResultTemplate
  }); 
  sjs.search(searchterm); 
};

// exports for tests in filters.test.js
try {
  if (process.env.JEST_WORKER_ID !== undefined) {
    module.exports = {
      searchbox,
      searchInput,
      resultsContainer,
      inFellowSearch,
      defaultList,
      agencySelect,
      trackSelect,
      searchInputDummy,
      parseURL,
      buildPath,
      resetFilters,
      resetSearch,
      doSJS,
      respondToSearchbox
    }
  }
} catch {
  // triggering the catch means we're in a prod environment, so don't do anything
};