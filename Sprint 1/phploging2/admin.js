const comments = document.querySelectorAll('.comment');

comments.forEach(comment => {
const approveBtn = comment.querySelector('.approve-btn');
const rejectBtn = comment.querySelector('.reject-btn');

approveBtn.addEventListener('click', () => {
    comment.classList.add('hidden');
    setTimeout(() => {
    comment.remove();
    }, 500);
});

rejectBtn.addEventListener('click', () => {
    comment.classList.add('hidden');
    setTimeout(() => {
    comment.remove();
    }, 500);
});
});


const addButton = document.querySelector('.add-button');
const container = document.querySelector('.container');

addButton.addEventListener('click', () => {
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerHTML = `
    <div class="name">Nuevo Usuario</div>
    <p>Este es un comentario recién agregado.</p>
    <div class="rating">
        <span class="star">★</span><span class="star">☆</span><span class="star">☆</span><span class="star">☆</span><span class="star">☆</span>
    </div>
    <div class="buttons">
        <button class="approve-btn">Aprobar</button>
        <button class="reject-btn">Rechazar</button>
    </div>
    `;

    container.appendChild(newComment);

    const approveBtn = newComment.querySelector('.approve-btn');
    const rejectBtn = newComment.querySelector('.reject-btn');

    approveBtn.addEventListener('click', () => {
    newComment.classList.add('hidden');
    message.textContent = 'Comentario aprobado';
    message.classList.add('success');
    setTimeout(() => {
        newComment.remove();
        message.textContent = '';
        message.classList.remove('success');
    }, 1500);
    });

    rejectBtn.addEventListener('click', () => {
    newComment.classList.add('hidden');
    message.textContent = 'Comentario rechazado';
    message.classList.add('error');
    setTimeout(() => {
        newComment.remove();
        message.textContent = '';
        message.classList.remove('error');
    }, 1500);
    });
});