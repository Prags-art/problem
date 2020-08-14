$(function() {

  $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.form-group')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.form-group')
        .removeClass('has-error');
    },
    errorPlacement: function (error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) 
      || value.length >= 6
      && /\d/.test(value)
      && /[a-z]/i.test(value);
  }, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')

  $.validator.addMethod('nameLimit', function(value, element) {
    return this.optional(element) 
      || value.length <= 20;
  }, 'The Name must be of Maximum 20 characters')

  $.validator.addMethod('classLimit', function(value, element) {
    return this.optional(element) 
      || /^[a-z,A-Z,0-9]+$/i.test(value);
  }, 'Letters and Digits Only.')

  $.validator.addMethod('yearValidator', function(value, element) {
    return this.optional(element) 
      || value<="2017";
  }, 'Year cannot be greater than 2017')


  $("#register-form").validate({
    rules: {
      name: {
        required: true,
        nowhitespace: true,
        lettersonly: true,
        nameLimit: true
      },
      lastName: {
        required: true,
        nowhitespace: true,
        lettersonly: true,
        nameLimit: true
      },
      class: {
        required: true,
        nowhitespace: true,
        classLimit: true
      },
      year: {
        required: true,
        digits: true,
        yearValidator: true,
        maxlength: 4,
        minlength: 4

      },

      percentage: {
        required: true,
        digits: true,
        maxlength: 2
      },
      
    }
    
  });

});