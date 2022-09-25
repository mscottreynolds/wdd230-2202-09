// Set the year for the copyright date.
const copyright_date = document.querySelector("#copyright-date");
const d = new Date();
const year = d.getFullYear();
copyright_date.innerHTML = `${year}`;

// Display the date the document last last updated.
const last_modified_date = document.querySelector("#last-modified-date");
const last_modified = document.lastModified;
last_modified_date.innerHTML = `${last_modified}`;
