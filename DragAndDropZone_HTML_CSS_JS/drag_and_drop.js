$(document).on({
            dragleave: function (e) {
                if (e.target.id == "dropzone" || e.target.id == "dropzone-text") {
                    e.preventDefault();     // Prevents the default event to trigger
                    e.stopPropagation();    // Stop the click event from bubbling to parent elements
                    $("#dropzone").css("background-color", "rgba(0,0,0,0.05)");
                }
            },
            dragover: function (e) {
                if (e.target.id == "dropzone" || e.target.id == "dropzone-text") {
                    e.preventDefault();     // Prevents the default event to trigger
                    e.stopPropagation();    // Stop the click event from bubbling to parent elements
                    $("#dropzone").css("background-color", "rgba(0,0,0,0.1)");
                }
            },
            drop: function (e) {
                if (e.target.id == "dropzone" || e.target.id == "dropzone-text") {
                    e.preventDefault();     // Prevents the default event to trigger
                    e.stopPropagation();    // Stop the click event from bubbling to parent elements
                    $("#dropzone").css("background-color", "rgba(0,0,0,0.05)");
                    var files = e.originalEvent.dataTransfer.files;
                    var filelist = getFormData();
                    filelist.append('file', files[0]);
                    $("#dropzone-text").html("<strong>" + files[0].name + "</strong>");
                    if (filelist != null) {
                        // ... complete
                    } else {
                        $("#status").text('No file uploaded...');
                    }
                }
            }
        });
