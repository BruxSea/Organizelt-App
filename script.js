
// Function to update dates in notes:
const notes = document.querySelectorAll('.note');

function updateModificationDate(noteElement) {
    const dateElement = noteElement.querySelector('.modification-date');
    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}-${now.getUTCFullYear()}`;
    dateElement.textContent = formattedDate;
};

// One-click note update simulation:
notes.forEach(note => {
    note.addEventListener('click', () => {
        updateModificationDate(note)
    })
});