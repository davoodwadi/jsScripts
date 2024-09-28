// Function to store data in IndexedDB
function storeDataInIndexedDB(data) {
  // Open the IndexedDB database, and explicitly specify a version number
  const request = indexedDB.open("StreamingDataDB", 2); // Version 2

  // This event is triggered if the database is being created or upgraded
  request.onupgradeneeded = function (event) {
    const db = event.target.result;

    // Create the object store if it doesn't exist
    if (!db.objectStoreNames.contains("dataStore")) {
      // Create an object store called 'dataStore' with autoIncrement key
      db.createObjectStore("dataStore", { autoIncrement: true });
      console.log("Object store 'dataStore' created.");
    } else {
      console.log("Object store 'dataStore' already exists.");
    }
  };

  // When the database is successfully opened
  request.onsuccess = function (event) {
    const db = event.target.result;

    // Check if the object store exists before trying to access it
    if (!db.objectStoreNames.contains("dataStore")) {
      console.error(
        "Object store 'dataStore' does not exist after opening the database."
      );
      return;
    }

    // Create a transaction to add data
    const transaction = db.transaction(["dataStore"], "readwrite");
    const store = transaction.objectStore("dataStore");

    // Add data to the object store
    const addRequest = store.add(data);

    // Handle success case for the add operation
    addRequest.onsuccess = function () {
      console.log("Data stored successfully:", data);
    };

    // Handle errors during the add operation
    addRequest.onerror = function (event) {
      console.error("Error adding data:", event.target.error);
    };

    // Handle transaction errors
    transaction.onerror = function (event) {
      console.error("Transaction error:", event.target.error);
    };
  };

  // Handle database open errors
  request.onerror = function (event) {
    console.error("Error opening IndexedDB:", event.target.error);
  };
}

// Example usage:
storeDataInIndexedDB({ name: "jack" });

// Retrieve all stored data from IndexedDB
function getDataFromIndexedDB(callback) {
  const request = indexedDB.open("StreamingDataDB", 1);

  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction(["dataStore"], "readonly");
    const store = transaction.objectStore("dataStore");

    const getAllRequest = store.getAll();
    getAllRequest.onsuccess = function () {
      callback(getAllRequest.result);
    };
  };
}

// Usage example
getDataFromIndexedDB(function (data) {
  console.log("Retrieved data:", data);
});

async function writeFile(data) {
  // Prompt the user to select a file for writing
  const handle = await window.showSaveFilePicker({
    suggestedName: "data.json",
    types: [
      {
        description: "JSON file",
        accept: { "application/json": [".json"] },
      },
    ],
  });

  const writable = await handle.createWritable();

  // Write data to the file
  await writable.write(JSON.stringify(data));

  // Close the file and save the changes
  await writable.close();
}

// Call writeFile with your data
//   const data = { timestamp: Date.now(), value: 42 };
//   writeFile(data);

// get all data from indexedDb
// Function to get all data from a specific object store in IndexedDB

// Function to get all data from a specific object store in IndexedDB
function getAllDataFromIndexedDB() {
  return new Promise((resolve, reject) => {
    // Open the IndexedDB database (use your database name)
    const dbRequest = indexedDB.open("StreamingDataDB", 1);

    // Handle the error case
    dbRequest.onerror = function (event) {
      console.error("Error opening IndexedDB:", event.target.error);
      reject(event.target.error);
    };

    // On database upgrade (e.g., when the database is created or version is changed)
    dbRequest.onupgradeneeded = function (event) {
      const db = event.target.result;
      // Create object store if it doesn't exist (example)
      if (!db.objectStoreNames.contains("dataStore")) {
        db.createObjectStore("dataStore", { autoIncrement: true });
      }
    };

    // When the database is successfully opened
    dbRequest.onsuccess = function (event) {
      const db = event.target.result;

      // Start a read-only transaction to the object store
      const transaction = db.transaction("dataStore", "readonly");

      // Get the object store from the transaction
      const objectStore = transaction.objectStore("dataStore");

      // Get all records from the object store
      const getAllRequest = objectStore.getAll();

      // On success, return all the records
      getAllRequest.onsuccess = function (event) {
        const allData = event.target.result;
        console.log("Retrieved data:", allData);
        resolve(allData);
      };

      // Handle errors in getting data
      getAllRequest.onerror = function (event) {
        console.error(
          "Error retrieving data from IndexedDB:",
          event.target.error
        );
        reject(event.target.error);
      };
    };
  });
}

// Example usage:
getAllDataFromIndexedDB()
  .then((data) => {
    console.log("All data from IndexedDB:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
