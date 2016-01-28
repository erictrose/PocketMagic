//search

$('#search-box').keypress(function (data){
    var keycode = (data.keyCode ? data.keyCode : data.which);
    if(keycode == '13'){
        
        console.log('#######SEARCH.js#####');
        console.log('enter key pressed');
        
        data.preventDefault();
        
        console.log('hiding loading indicator');
        $('#loading-indicator').hide();
        
        console.log('displaying results box');
        $('#results-box').show();
        
        console.log('emptying ul');
        $('#results-list').empty(); 
        
        var searchInput = $('#search-box').val();
        searchInput.trim();
        console.log('search value: ' +searchInput);
        
        var apiCall = 'https://api.deckbrew.com/mtg/cards?name=' +searchInput;
        var listPre = '<li><p class="result-title">';
        var listMid = '</p><p class="reslult-type">';
        var listPost = '</p></li>';
        console.log('generating list');
        generateResults(data, apiCall, listPre, listMid, listPost);
    } //end if statement
}); //end keypress

console.log('search loaded');