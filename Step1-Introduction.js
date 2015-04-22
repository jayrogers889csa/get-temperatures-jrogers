// This view will output content into the 'Introduction' section.

// When the document is loaded ...
$(document).ready(function() {
  // This is helpful to ensure this step is currently shown
  showStep(1);
  
  // Create a view to write content to the Introduction Output DIV
  var output = new OutputView({ el: $('.introduction .output') });

  // Append something to 'output' here to make sure you can see
  // it on the screen
   output.append('This is another line');
});
