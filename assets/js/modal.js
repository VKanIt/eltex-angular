export class Modal {
    async init() {
        this.modalContainer = document.getElementById('modal-container');
        
        const data = await fetch('modals.html')
            .then((resp) => resp.text())
            .then((data) => data);

        this.modalContainer.innerHTML = data;
            
        this.openModal();
        this.closeModal();

        return this.modalContainer;
    }

    openModal () {
        const btnModal = document.querySelectorAll('[data-modal]');

        btnModal.forEach((node) => {
            node.addEventListener('click', () => {
                const modal = this.modalContainer.querySelector('#' + node.dataset.modal);

                if (modal === null) {
                    return;
                }
                
                modal.style.display = 'flex';
                modal.showModal();
            });
        });
    }

    closeModal() {
        const elemetsModalClose = document.querySelectorAll('.modal__close, .modal');
        const modalContent = document.querySelectorAll('.modal-content');

        elemetsModalClose.forEach((node) => {
            node.addEventListener('click', (e) => {
                const modal = e.target.closest('dialog');
                if (modal.style.display === 'none') {
                    return;
                }
                
                modal.style.display = 'none';
                const form = modal.querySelector('form');

                if (form !== null) {
                    form.reset();
                }

                modal.close();
            });
        });

        modalContent.forEach((node) => {
           node.addEventListener('click', (e) => {
                const buttonClose = e.target.closest('.modal__close');
                if (buttonClose !== null) {
                    return;
                }

                e.stopPropagation();
            }); 
        });
    }
}