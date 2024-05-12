// Function to show the loading spinner and hide content
function showLoading() {
    document.getElementById("loadingSpinner").classList.remove("hidden");
    document.getElementById("content").style.display = "none";
}

// Function to hide the loading spinner and show content
function hideLoading() {
    document.getElementById("loadingSpinner").classList.add("hidden");
    document.getElementById("content").style.display = "block";
}

// Simulate loading process
function simulateLoading() {
    showLoading(); // Show loading spinner
    setTimeout(function() {
        hideLoading(); // Hide loading spinner after 3 seconds (simulating loading process)
    }, 3000);
}

// Call the simulateLoading function to start the loading process
simulateLoading();