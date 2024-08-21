// Array of placeholder project names
let projects = [
  "Project 1",
  "Project 2",
  "Project 3",
  "Project 4",
  "Project 5",
];

// Function to rename projects based on user input
function renameProjects() {
  for (let i = 0; i < projects.length; i++) {
    let newName = prompt(`Please enter a name for ${projects[i]}:`);
    if (newName) {
      projects[i] = newName;
    }
  }
  console.log("Updated Project Names:", projects);
}

// Call the function to rename projects
renameProjects();
