const url = "https://example.com/path/to/your/file.json"; // Replace with your URL

// Fetch the existing JSON file
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the JSON data
  })
  .then((existingData) => {
    // Check if existingData is an array
    if (!Array.isArray(existingData)) {
      throw new Error("The JSON data must be an array.");
    }

    // New data to append
    const newData = { name: "jack" };

    // Append new data
    existingData.push(newData);

    // Create a new Blob with the updated data
    const blob = new Blob([JSON.stringify(existingData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);

    // Create a temporary link to download the new file
    const a = document.createElement("a");
    a.href = url;
    a.download = "updated_data.json"; // Set the filename for the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up
  })
  .catch((error) => {
    console.error("Error fetching or processing the file:", error);
  });
