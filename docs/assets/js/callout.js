document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.show-hide-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const container = this.parentElement.nextElementSibling;
            container.classList.toggle('hidden');
            
            if (container.classList.contains('hidden')) {
                this.textContent = '+';
            } else {
                this.textContent = '-';
            }
        });
    });
});