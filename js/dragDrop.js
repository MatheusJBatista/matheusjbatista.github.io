// const drop = (e) => {

// }

// const allowDrop = (e) => {
//     e.preventDefault()
// }

// const drag = (e) => {
//     console.log(e.target)
//     e.dataTransfer.setData('card', e.target)
//     console.log(e.dataTransfer.getData('card'))
// }

$('.cartao').sortable({
    connectWith: '.cartao',
    handle: '.cards',
    start(event, ui) {
        ui.item.addClass('drag')
    },
    stop(event, ui) {
        ui.item.removeClass('drag')
    }
})