let screenBlockContent = '';
let counter = 0;

function addLogLine(result) {
    let logEquation;
    [logEquation, screenBlockContent] = [screenBlockContent, result];
    $( '#screen-block' ).val(result);

    /*let newLogLine = document.createElement('div');
    $( newLogLine ).addClass('logs-block__line');

    $( newLogLine ).html(
        "<div class=\"logs-block__empty-circle\">\n" +
        "          <svg class=\"logs-block__empty-circle-svg\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z\"/></svg>\n" +
        "        </div>" +
        "" +
        "<div class=\"logs-block__close-sign\">\n" +
        "          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z\"/></svg>\n" +
        "        </div>"
    );

    $( '.logs-block' ).prepend( newLogLine );*/

    let newLogLine = document.createElement('div');
    $( newLogLine ).addClass('logs-block__line');

    let emptyCircleSign = $( '.logs-block__empty-circle' ).clone().removeClass('logs-block__empty-circle')
        .addClass('logs-block__empty-circle-clone');
    $( newLogLine ).append(emptyCircleSign);

    let newLogEquation = document.createElement('span');
    $( newLogEquation ).css('margin-right', 'auto');
    $( newLogEquation ).css('margin-left', 'auto');
    newLogEquation.textContent = `${logEquation}=${result}`;
    if ( newLogEquation.textContent.includes('48') ) {
        $( newLogEquation ).css('text-decoration', 'underline');
    }
    newLogLine.appendChild(newLogEquation);

    let closeSign = $( '.logs-block__close-sign' ).clone().removeClass('logs-block__close-sign')
        .addClass('logs-block__close-sign-clone');
    $( newLogLine ).append(closeSign);

    $( '.logs-block' ).prepend( newLogLine );
}

$( '.numbers-block' ).click(function( event ) {
    if ($( event.target ).hasClass('equal-sign')) {
        if ( screenBlockContent.includes('+') ) {
            let operatorIndex = screenBlockContent.indexOf('+');
            let firstOperand = screenBlockContent.slice(0, operatorIndex);
            let secondOperand = screenBlockContent.slice(operatorIndex + 1);
            let result = (Number(firstOperand) + Number(secondOperand)).toString();

            addLogLine(result);
        }
        if ( screenBlockContent.includes('-') ) {
            let operatorIndex = screenBlockContent.indexOf('-');
            let firstOperand = screenBlockContent.slice(0, operatorIndex);
            let secondOperand = screenBlockContent.slice(operatorIndex + 1);
            let result = (Number(firstOperand) - Number(secondOperand)).toString();

            addLogLine(result);
        }
        if ( screenBlockContent.includes('*') ) {
            let operatorIndex = screenBlockContent.indexOf('*');
            let firstOperand = screenBlockContent.slice(0, operatorIndex);
            let secondOperand = screenBlockContent.slice(operatorIndex + 1);
            let result = (Number(firstOperand) * Number(secondOperand)).toString();

            addLogLine(result);
        }
        if ( screenBlockContent.includes('/') ) {
            let operatorIndex = screenBlockContent.indexOf('/');
            let firstOperand = screenBlockContent.slice(0, operatorIndex);
            let secondOperand = screenBlockContent.slice(operatorIndex + 1);
            if (secondOperand === '0') {
                $( '#screen-block' ).val('ERROR').css('color', 'red');
            } else {
                let result = (Number(firstOperand) / Number(secondOperand)).toString();

                addLogLine(result);
            }
        }
        counter = 0;
    }

    if (event.target.textContent === 'C') {
        screenBlockContent = '';
        $( '#screen-block' ).val(screenBlockContent);
        counter = 0;
    } else if ($( event.target ).hasClass('empty-cell-common') !== true &&
                                                        $( event.target ).hasClass('equal-sign') !== true) {
        if ($( event.target ).hasClass('arithmetic') && counter >= 1) {
            const lastIndex = -1;
            screenBlockContent = screenBlockContent.replace(screenBlockContent.at(lastIndex), event.target.textContent);
            $( '#screen-block' ).val(screenBlockContent);
        } else if ($( event.target ).hasClass('arithmetic') && counter === 0) {
            counter++;
            screenBlockContent += `${event.target.textContent}`;
            $( '#screen-block' ).val(screenBlockContent);
        } else {
            screenBlockContent += `${event.target.textContent}`;
            $( '#screen-block' ).val(screenBlockContent);
        }
    }
});

$( '.logs-block' ).scroll(function() {
    console.log(`Scroll Top: ${$('.logs-block').scrollTop()}`)
});

/*$( '.logs-block__empty-circle-svg' ).hover(
    function() {
        $( this ).css('cursor', 'pointer');
        $( this ).css('background-color', 'red');
    },
    function() {
        $( this ).css('cursor', 'none');
        $( this ).css('background-color', 'white');
    }
)*/

// TODO Toggle background-color

$( '.logs-block__empty-circle-svg' ).click(function( event ) {
    $( event.target ).toggleClass('bg-red');
});

// TODO Removal of log line

/*$( document ).ready(function() {
    $( ".logs-block" ).click(function( event ) {
        if ( $( event.target ).hasClass("logs-block__close-sign-clone") ) {
            $( event.target ).parent().remove();
        }
    });
});*/

$( '.logs-block' ).on('click', function( event ) {
    if ( $( event.target ).hasClass('logs-block__close-sign') ) {
        $( event.target ).parent().remove();
    }
})
