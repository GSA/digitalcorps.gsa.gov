/**
 * This script is used to generate the /fellows/ directory which stores the page definitions of the different combinations of filters applied to the list of fellows. 
 * It pulls the list of agencies/tracks/years from the /_data/ folder using js-yaml. 
 * 
 * To run, execute `node fellow_files_creation_script.js` from the project directory
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * This function returns the data from the given yaml file path
 * @param {String} filePath path to yaml file
 */
const readYamlConstants = (filePath) => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.error(`Error reading YAML file: ${e}`);
  }
}

/**
 * This function takes a year, track, and agency and returns the appropriate page definition 
 * @param {Integer} year filter applied 
 * @param {Object} track filter applied 
 * @param {Object} agency filter applied
 */
const createFileContents = (year, track, agency) => {
  const nonNullFilterTitles = [year, agency && agency.fullname, track && track.display_name].filter(filter => filter !== null);
  const nonNullFilterTags = [year, agency && agency.name, track && track.url_name].filter(filter => filter !== null);

  const title = nonNullFilterTitles.join(' ');
  const filterTag = nonNullFilterTags.length === 1 ? `'${nonNullFilterTags[0]}'` : nonNullFilterTags.join(',');

  return `---
layout: fellow-landing
title: ${title} Fellows
sidenav: true
banner: true
pagination:
  enabled: true
  collection: fellows
  sort_field: 'title'
  tag: ${filterTag}
---

{% include_cached fellows-list.html  fellows=paginator.posts %}
`
}

/**
 * This function takes a file path, year, track, and agency, and writes the appropriate page definition to the file 
 * @param {String} filePath path of file to write to
 * @param {Integer} year filter applied
 * @param {Object} track filter applied
 * @param {Object} agency filter applied
 */
const createFile = (filePath, year, track, agency) => {
  const content = createFileContents(year, track, agency); 
  fs.writeFileSync(filePath, content);
  console.log(`Created file: ${filePath}`);
}

/**
 * Creates nested directories of files representing page definitions with different combinations of filters applied 
 * @param {Array<Object>} agencies 
 * @param {Array<Object>} tracks 
 * @param {Array<Integer>} years 
 */
const createFellowFilterDirectoriesAndFiles = (agencies, tracks, years) => {
  const baseDir = path.join(__dirname, 'fellows');
  fs.mkdirSync(baseDir, { recursive: true });

  years.forEach(year => {
    // Create filter for year 
    createFile(path.join(baseDir, `${year}.html`), year, null, null);

    const yearDir = path.join(baseDir, `${year}`);
    fs.mkdirSync(yearDir, { recursive: true });

    agencies.forEach(agency => {
      // Create filter for year + agency 
      createFile(path.join(yearDir, `${agency.name}.html`), year, null, agency);
    });

    tracks.forEach(track => {
      // Create filter for year + track 
      createFile(path.join(yearDir, `${track.url_name}.html`), year, track, null);
      
      const trackDir = path.join(yearDir, track.url_name);
      fs.mkdirSync(trackDir, { recursive: true });

      agencies.forEach(agency => {
        // Create filter for year + track + agency 
        createFile(path.join(trackDir, `${agency.name}.html`), year, track, agency);
      });
    });
  });

  tracks.forEach(track => {
    // Create filter for track 
    createFile(path.join(baseDir, `${track.url_name}.html`), null, track, null);

    const trackDir = path.join(baseDir, track.url_name);
    fs.mkdirSync(trackDir, { recursive: true });

    agencies.forEach(agency => {
      // Create filter for track + agency 
      createFile(path.join(trackDir, `${agency.name}.html`), null, track, agency);
    });
  });

  agencies.forEach(agency => {    
    // Create filter for agency 
    createFile(path.join(baseDir, `${agency.name}.html`), null, null, agency);
  });
}

// Read constants 
const agencies = readYamlConstants('_data/agencies.yaml');
const tracks = readYamlConstants('_data/fellow-tracks.yml');
const years = readYamlConstants('_data/years.yml'); 

// Create directories and files
createFellowFilterDirectoriesAndFiles(agencies, tracks, years);
