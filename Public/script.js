// Event listener for the search form submission
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get the keyword input value
    const keyword = document.getElementById('keyword').value.trim();

    // Basic validation
    if (keyword === '') {
        alert('Please enter a keyword to search for products.');
        return;
    }

    // Show loading spinner
    document.getElementById('loading').classList.remove('hidden');

    // Simulate a search (for now, we'll just log the keyword)
    console.log('Searching for products with keyword:', keyword);

    // Placeholder for actual API call or data processing (to be added later)
    setTimeout(() => {
        // Hide loading spinner after a short delay (simulating a search)
        document.getElementById('loading').classList.add('hidden');
        alert(`Searched for: ${keyword}. Results will be implemented in the next steps!`);
    }, 2000);
});
