
const Modal = {
    open(){
        // Abrir modal
        // Adicionar a classe 'active' ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        // fechar o modal 
        // remover a class 'active' do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const Transaction = {
    incomes(){
        // Somar as entradas

    },
    expenses(){
        // Somar as saída
    },
    total(){
        // Entradas - saídas
    }
}