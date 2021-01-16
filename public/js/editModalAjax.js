
$(document).ready(function () {
    "use strict"
    let resource = null
    // page is ready
    $.ajax({
        type: 'GET',
        url: '/profiles/',
        async: false,
        dataType: 'json',
        success: function (data) {
            resource = data
        }
    });

    for(var profile in profiles){
        profiles[profile].label = profiles[profile].userName;
    }

    var input = document.getElementById("profiles");
    var ownerId = document.getElementById("ownerId");

    autocomplete({
        input: input,
        fetch: function (text, update) {
            text = text.toLowerCase();
            // you can also use AJAX requests instead of preloaded data
            var suggestions = profiles.filter(n => (n.label !== undefined && n.label.toLowerCase().startsWith(text)))
            update(suggestions);
        },
        onSelect: function (item) {
            input.value = item.userName;
            ownerId.value = item._id;
        }
    });
})