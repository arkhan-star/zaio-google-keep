//Two pieces of input are used to create a component in the page when a button is clicked. The first input is used as the text in the component and the second input is used as the color of the text. The component is added to the page when the button is clicked.
// Input Process Output Pattern

function readInput() {
    let title = document.getElementById("title").value;
    let note = document.getElementById("note").value;
    return { title, note };
}

function createNoteComponent(title, note) {
    let noteComponent = document.createElement("div");
    let titleElement = document.createElement("h2");
    let noteElement = document.createElement("p");

    titleElement.textContent = title;
    noteElement.textContent = note;

    noteComponent.appendChild(titleElement);
    noteComponent.appendChild(noteElement);

    return noteComponent;
}

function displayNote() {
    let { title, note } = readInput();
    let noteComponent = createNoteComponent(title, note);
    document.getElementById("notesContainer").appendChild(noteComponent);
}