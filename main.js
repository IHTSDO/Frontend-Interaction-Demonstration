$(document).ready(function() {
    //Id Search function using jQuery ajax, bound to appropriate button by ID
    $('#sumbitIdSearch').click(function() {
        $.ajax({
            url: 'terminology-server/MAIN/concepts/search',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            //Expanding desired fields and deriving the concept Id to be searched for from the form element. 
            data: JSON.stringify({ "offset": "0", "limit": 10, "expand": "fsn(),descriptions(),relationships()", "activeFilter": true, "conceptIds": [$('#conceptId').val()] }),
            //Print results to page on success
            success: function(data, textStatus, jQxhr) {
                $("#idResult").html(JSON.stringify(data, undefined, 2));
            },
            //Print error message on failure
            error: function(jqXhr, textStatus, errorThrown) {
                $("#idResult").html(errorThrown + 'Please check your input.');
            }
        });
    });
    $('#sumbitTextSearch').click(function() {
        $.ajax({
            url: 'terminology-server/MAIN/concepts/search',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "offset": "0", "limit": 10, "expand": "fsn()", "activeFilter": true, "termFilter": $('#term').val() }),
            success: function(data, textStatus, jQxhr) {
                $("#termResult").html(JSON.stringify(data, undefined, 2));
            },
            error: function(jqXhr, textStatus, errorThrown) {
                $("#termResult").html(errorThrown + 'Please check your input.');
            }
        });
    });
    $('#sumbitECLSearch').click(function() {
        $.ajax({
            url: 'terminology-server/MAIN/concepts/search',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({ "offset": "0", "limit": 10, "expand": "fsn()", "activeFilter": true, "eclFilter": $('#ecl').val() }),
            success: function(data, textStatus, jQxhr) {
                $("#eclResult").html(JSON.stringify(data, undefined, 2));
            },
            error: function(jqXhr, textStatus, errorThrown) {
                $("#eclResult").html(errorThrown + 'Please check your input.');
            }
        });
    });
});