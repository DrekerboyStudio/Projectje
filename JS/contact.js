console.log('It works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('clicked')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>email valid</div>')
        } 
        else {
            event.preventDefault()
            statusElm.append('<div>email invalid</div')
        }

        if(subject.length >= 2) {
            statusElm.append('<div>subject valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>subject invalid</div>')
        }

        if(message.length >= 10) {
            statusElm.append('<div>message valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div>message too short</div>')
        }
    })
})