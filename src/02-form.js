document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const storageKey = 'feedback-form-state';

    const savedData = JSON.parse(localStorage.getItem(storageKey)) || {};
    if (savedData.email) emailInput.value = savedData.email.trim();
    if (savedData.message) messageInput.value = savedData.message.trim();

    form.addEventListener('input', () => {
        const data = {
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };
        localStorage.setItem(storageKey, JSON.stringify(data));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (email && message) {
            console.log({ email, message });
            localStorage.removeItem(storageKey);
            form.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });
});