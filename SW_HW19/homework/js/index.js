let screenBlockContent = '';
let counter = 0;

function addLogLine(result) {
    let logEquation;
    [logEquation, screenBlockContent] = [screenBlockContent, result];
    $( "#screen-block" ).val(result);

    let newLogLine = document.createElement('div');
    $( newLogLine ).addClass('logs-block__line');

    let emptyCircleSign = $( '.logs-block__empty-circle' ).clone().removeClass('logs-block__empty-circle')
        .addClass('logs-block__empty-circle-clone');
    $( newLogLine ).append(emptyCircleSign);

    let newLogEquation = document.createElement('span');
    newLogEquation.textContent = (`${logEquation}=${result}`);
    newLogLine.appendChild(newLogEquation);

    let closeSign = $( '.logs-block__close-sign' ).clone().removeClass('logs-block__close-sign')
        .addClass('logs-block__close-sign-clone');
    $( newLogLine ).append(closeSign);

    $( '.logs-block' ).prepend( newLogLine );
}

$( ".numbers-block" ).click(function( event ) {
    if ($( event.target ).hasClass("equal-sign")) {
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
                $( "#screen-block" ).val('ERROR').css('color', 'red');
            } else {
                let result = (Number(firstOperand) / Number(secondOperand)).toString();

                addLogLine(result);
            }
        }
        counter = 0;
    }

    if (event.target.textContent === 'C') {
        screenBlockContent = '';
        $( "#screen-block" ).val(screenBlockContent);
        counter = 0;
    } else if ($( event.target ).hasClass("empty-cell-common") !== true &&
                                                        $( event.target ).hasClass("equal-sign") !== true) {
        if ($( event.target ).hasClass("arithmetic") && counter >= 1) {
            screenBlockContent = screenBlockContent.replace(screenBlockContent.at(-1), event.target.textContent);
            $( "#screen-block" ).val(screenBlockContent);
        } else if ($( event.target ).hasClass("arithmetic") && counter === 0) {
            counter++;
            screenBlockContent += `${event.target.textContent}`;
            $( "#screen-block" ).val(screenBlockContent);
        } else {
            screenBlockContent += `${event.target.textContent}`;
            $( "#screen-block" ).val(screenBlockContent);
        }
    }
});

$( '.logs-block__empty-circle-svg').click(function() {
    $( this ).toggleClass('bg-red');
});

// TODO ScrollTop console

/*setTimeout(() => {
    console.log($('.logs-block').scrollTop());
}, 100);*/
