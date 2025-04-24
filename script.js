



function changeText() {
    document.getElementById('highlight').textContent = "Let's build cool things together! 💻✨";
}

function styleText() {
    const element = document.getElementById('highlight');
    element.style.color = 'purple';
    element.style.fontWeight = 'bold';
}

function toggleNote() {
    const posts = document.getElementById('posts');
    const existingNote = document.getElementById('blogNote');

    if (existingNote) {
        existingNote.remove();
    } else {
        const note = document.createElement('div');
        note.id = 'blogNote';
        note.textContent = "🔔 New post coming soon: How AI is changing classrooms!";
        note.style.backgroundColor = "#f0f0f0";
        note.style.padding = "10px";
        note.style.marginTop = "10px";
        note.style.borderLeft = "4px solid #007acc";
        posts.appendChild(note);
    }
}
