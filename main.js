$(document).ready(function() {
    $('#contact_form').bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        submitHandler: function(validator, form, submitButton) {
            alert('Sumbit Success');
        },
        errorPlacement: function(error, element) {
            alert(error.text());
        },
        fields: {
            your_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your Your Name'
                    }
                }
            },

            address: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your Address'
                    }
                }
            },

            gender: {
                validators: {
                    notEmpty: {
                        message: 'Please select your Gender'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address: ex@abc.com'

                    }
                }
            },

            contact_no: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 10,
                    },
                    notEmpty: {
                        message: 'Please enter your Phone number.'
                    }
                }
            },

            age: {
                validators: {

                    notEmpty: {
                        message: 'Please enter your Age'
                    },
                    regexp: {
                        regexp: /^[0-9_]+$/,
                        message: 'Enter only number'
                    },
                    between: {
                        min: 1,
                        max: 200,
                        message: 'The Age must be between 1 and 200'
                    }

                }
            }
        }
    })
});