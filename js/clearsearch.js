//clearsearch

$('#clear-search-button').on('click',function(){
    console.log('#######CLEARSEARCH.js#####');
    $('#search-box').val('');
    $('#results-list').empty();
    console.log('cleared search');
    console.log('######/CLEARSEARCH.js#####');
});

console.log('clear search loaded');