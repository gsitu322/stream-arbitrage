    // Saves options to chrome.storage
function save_options() {
    localStorage["steamArbitrage"] = document.getElementById('toggle-event').checked;
}

// Restores select box and checkbox state using the preferences
function restore_options() {
    var steamArbitrage = localStorage["steamArbitrage"];
    console.log(steamArbitrage);
    if(steamArbitrage == "true"){
        $('#toggle-event').bootstrapToggle('on');
    }else{
        $('#toggle-event').bootstrapToggle('off')
    }
}

document.addEventListener('DOMContentLoaded', restore_options);

$(function() {
    $('#toggle-event').change(function() {
        save_options();
    })
});
