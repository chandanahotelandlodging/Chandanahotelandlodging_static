$(document).ready(function () {
    $("form").submit(function (event) {
        // Data
        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let radio = $('input[name="radio_button"]:checked').val();
        let content = $('#content').val();

        let data = {
            'name' : name,
            'email': email,
            'subject' : subject,
            'radio' : radio,
            'content' : content
        }


        // Data Validation

        if(name=="" || name==null)
        {
            document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: initial;');
            document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: none;');
            document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: none;');
            event.preventDefault();
            return;
        }
        else if(email=="" || email==null)
        {
            document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: initial;');
            document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: none;');
            document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: none;');
            event.preventDefault();
            return;
        }
        else if(email.indexOf('@')<=0 || (email.charAt(email.length-4)!='.' && email.charAt(email.length-3) != '.'))
        {
            document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: initial;');
            document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: none;');
            document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: none;');
            event.preventDefault();
            return;
        }
        else if(subject=="" || subject==null)
        {
            document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: initial;');
            document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: none;');
            document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: none;');
            event.preventDefault();
            return;
        }
        else if(radio=="" || radio==null)
        {
            document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: initial;');
            document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: none;');
            document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: none;');
            event.preventDefault();
            return;
        }
        else if(content=="" || content==null)
        {
            document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: initial;');
            document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: none;');
            document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: none;');
            event.preventDefault();
            return;
        }

        document.querySelector('#contentLabel').setAttribute('style', 'text-align: center; display: none;');
        document.querySelector('#queryTypeLabel').setAttribute('style', 'text-align: left; display: none;');
        document.querySelector('#subjectLabel').setAttribute('style', 'text-align: left; display: none;');
        document.querySelector('#emailLabel').setAttribute('style', 'text-align: left; display: none;');
        document.querySelector('#nameLabel').setAttribute('style', 'text-align: left; display: none;');
        document.querySelector('.email-text').setAttribute('style', 'text-align: left; display: none;');

        // Ajax
        $.ajax({
            type: "POST",
            url: "servletFeedback",
            data: data,
            success: function (data, textStatus, jqXHR) {
                if (data.trim() === "Failure") {
                    $('#feedback-form').trigger('reset');
                    swal({
                        title: "Oops! Something went wrong",
                        text: "Please try again!",
                        icon: "error",
                        button: "Close",
                    });
                } else if (data.trim() === "query") {
                    $('#feedback-form').trigger('reset');
                    swal({
                        title: "Thank you for your question",
                        text: "We will get back to you as soon as possible",
                        icon: "success",
                        button: "Close",
                    });
                } else if (data.trim() === "review") {
                    $('#feedback-form').trigger('reset');
                    swal({
                        title: "Thank you for your feedback",
                        text: "It will be taken into consideration",
                        icon: "success",
                        button: "Close",
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(data);
            }
        });
        event.preventDefault();
    });

});