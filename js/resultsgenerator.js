//results generator

function generateResults(data, apiCall, listPre, listMid, listPost){
    console.log('######RESULTSGENERATOR.js#####');
    console.log('*calling api...');
    var resultsList = $('#results-list');
    $.getJSON( apiCall, function(data){
        console.log('*...complete');
        for(i=0, j=data.length; i<j; i++){
            resultsList.append(listPre +data[i].name +listMid +data[i].types[0] +listPost);
            console.log(data[i]);
        } //end for loop
        $('#results-list li:first').css('margin-top','40px');
        console.log('#####/RESULTSGENERATOR.js#####');
    });
};

console.log('results generator loaded');