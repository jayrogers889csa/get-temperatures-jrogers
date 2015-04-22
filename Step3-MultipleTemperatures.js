$(document).ready(function() {

  // Uncomment this line to have this step selected upon reload
  showStep(3);
  var output = new OutputView({ el: $('.multiple-temperature .output') });

  // Put your implementation here
  // Define a getTemperatures function which takes an array of zipCodes and a callback
  // Within the getTemperatures function, you will want to see the results of the temperatures for each zip code
  // This would likely mean a call to the getTemperature function for each zipCode
  // As the calls are asynchronous, in order to capture the state at which the call was made (for proper hash lookup)
  // use a closure and pass the index variable into the self-invoking function
  // The results then would likely be a hash containing the temperatures at each location
  // The callback, which takes the results, would output the results.

  var getTemperatures = function(zipCodes, callback) {

    //Define a tempResults object
    var tempResults = {};

    for (var i = 0; i < zipCodes.length; i++) {

      //Needed to use a closure to call the getTemperature function with 
      //the "captured" index
      (function(capturedI) {
        getTemperature(zipCodes[capturedI], function(temp) {
          tempResults[zipCodes[capturedI]] = temp;
          if (Object.keys(tempResults).length == zipCodes.length) {
            callback(tempResults);
          }
        })
      })(i);
    }
  };

  getTemperatures([32605, 11201, 90210], function(results) {
    //Render the results
    output.append("Zipcode: Temp");
    for (zipcode in results) {
      output.append("" + zipcode + ": " + results[zipcode]);
    }
  });

});