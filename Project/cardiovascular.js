// Toggle dropdown menu open/close
function toggleDropdown() {
    const habitsList = document.getElementById('habitsList');
    const toggle = document.getElementById('toggle');
    
    habitsList.classList.toggle('open');
    toggle.classList.toggle('open');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.habits-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('habitsList').classList.remove('open');
        document.getElementById('toggle').classList.remove('open');
    }
});