const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    // Toggle the visibility of the icons
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
}

// event listeners for both icons
sunIcon.addEventListener('click', toggleDarkMode);
moonIcon.addEventListener('click', toggleDarkMode);


const paginationButtons = document.querySelectorAll('.page-number');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = 1;
const totalPages = 10; 

function updatePagination() {
    paginationButtons.forEach(button => {
        button.classList.remove('active');
    });


    if (currentPage === 1) {
        document.querySelector(`.page-number:nth-child(1)`).classList.add('active'); 
    } else {
        
        document.querySelector(`.page-number:nth-child(${currentPage})`).classList.add('active');
    }

    // Enable/disable buttons based on the current page
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

paginationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentPage = parseInt(e.target.textContent);
        updatePagination();
    });
});

// Initialize pagination
updatePagination();

