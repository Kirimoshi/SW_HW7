// TODO: Make it work

$('.numbers-block').click(function (event) {
    event.preventDefault();
    $('#screen-block').html(event.target.textContent);
});
