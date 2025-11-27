/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

setTimeout(function() {
    $('input').addClass('animated tada');
}, 3000);

setTimeout(function() {
    $('.form').addClass('animated bounce');
}, 7000);

var config = {
      '.chzn-select'           : {},
      '.chzn-select-deselect'  : {allow_single_deselect:true},
      '.chzn-select-no-single' : {disable_search_threshold:10},
      '.chzn-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chzn-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

$('body').on('change', '#model', function() {
        $('#trim_chzn').css('display', 'inline-block').addClass("chzn-container-active chzn-with-drop");
  $('#model_chzn, #make_chzn').width("auto").addClass('square');
  
  setTimeout(function() {
    $('#trim_chzn input').focus();
}, 200);
    });

$('body').on('change', '#year', function() {
       $('#make_chzn').addClass("chzn-container-active chzn-with-drop");
  
  setTimeout(function() {
    $('#make_chzn input').focus();
}, 200);

});

$('body').on('change', '#make', function() {
       $('#model_chzn').addClass("chzn-container-active chzn-with-drop");
  
setTimeout(function() {
    $('#model_chzn input').focus();
}, 200);
  
    });