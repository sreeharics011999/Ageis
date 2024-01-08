$(document).ready(function(){
    $("#edit-prfl-btn").click(function(){
        $("#name-update").show();
    });

    $("#close-btn").click(function(){
        $("#name-update").hide();
    });
    $("#pic").focus(function(){
        $(this).attr("type","file");
    });
    $("#update-btn-name").click(function(event){
        let profilepic= $("#pic").val();
        let firstname = $("#firstname").val();
        let lastname = $("#lastname").val();
        let currentposition = $("#current-position").val();
        let currentcompany = $("#current-company").val();
        if(firstname === "" || lastname === "" || currentposition === "" || currentcompany === "" || profilepic==""){
            if(profilepic == ""){
                $("#error-notification-pic").show();
            } else {
                $("#error-notification-pic").hide();
                event.preventDefault();
            }
            if(firstname === ""){
                $("#error-notification-frst-name").show();
            } else {
             
                $("#error-notification-frst-name").hide();
                event.preventDefault();
            }
            if(lastname === ""){
                $("#error-notification-last-name").show();
            } else {
                $("#error-notification-last-name").hide();
                event.preventDefault();
            }
            if(currentposition === ""){
                $("#error-notification-position").show();
            }
            else {
                $("#error-notification-position").hide();
                event.preventDefault();
            }
            if(currentcompany === ""){
                $("#error-notification-company").show();
            } else {
                $("#error-notification-company").hide();
                event.preventDefault();
            }
        } else {
            $("#prfl-firstname").text(firstname)
            $("#prfl-lastname").text(lastname)
            $("#prfl-company").text(currentcompany)
            $("#prfl-position").text(currentposition)
            $("#prfl-pic").attr("src", profilepic);
            $("#name-update").hide();
        }
    });
});
$(document).ready(function(){
    $("#edit-contact-btn").click(function(){
        $("#contact-update").show();
    });
    $("#contact-close-btn").click(function(){
        $("#contact-update").hide();
    });
    $("#update-btn-contact").click(function(event){
        let number= $("#number").val();
        let location = $("#location").val();
        let email = $("#email").val();
        if(number === "" || location === "" || email === ""){
            if(number == ""){
                $("#error-notification-number").show();
            } else {
                $("#error-notification-number").hide();
                event.preventDefault();
            }
            if(location === ""){
                $("#error-notification-location").show();
            } else {
             
                $("#error-notification-location").hide();
                event.preventDefault();
            }
            if(email === ""){
                $("#error-notification-email").show();
            } else {
                $("#error-notification-email").hide();
                event.preventDefault();
            }
        } else {
            $("#prfl-number").text(number)
            $("#prfl-location").text(location)
            $("#prfl-email").text(email)
            $("#contact-update").hide();
        }
    });
});
// $(document).ready(function(){
//     $(".education-edit-btn").click(function(){
//         $("#education-update").show();
//     });
//     $("#education-close-btn").click(function(){
//         $("#education-update").hide();
//     });
//     $(".education-delete-btn").click(function(){
//         $(this).closest(".eachrow").remove();
//     });
   
    

//     $("#update-btn-education").click(function(event){
//         let graduation= $("#qulification").val();
//         let university = $("#university").val();
//         let branch = $("#stream").val();
//         let cgpa = $("#percentage").val();
//         if(graduation === "" || university === "" || branch === ""|| cgpa=== ""){
//             if(graduation == ""){
//                 $("#error-notification-qualification").show();
//             } else {
//                 $("#error-notification-qualification").hide();
//                 event.preventDefault();
//             }
//             if(university === ""){
//                 $("#error-notification-university").show();
//             } else {
             
//                 $("#error-notification-university").hide();
//                 event.preventDefault();
//             }
//             if(branch === ""){
//                 $("#error-notification-stream").show();
//             } else {
//                 $("#error-notification-stream").hide();
//                 event.preventDefault();
//             }
//             if(cgpa === ""){
//                 $("#error-notification-percentage").show();
//             } else {
//                 $("#error-notification-percentage").hide();
//                 event.preventDefault();
//             }
//         } else {
//             $("#prfl-header").text(graduation)
//             $("#prfl-univercity").text(university)
//             $("#prfl-branch").text(branch)
//             $("#prfl-percentage").text(cgpa)
//             $("#education-update").hide();
//         }
//     });
//     $("#prfl-add-btn").click(function(){
//         $("#education-update").show();
//         $("#qulification").val('');
//         $("#university").val('');
//         $("#stream").val('');
//         $("#percentage").val('');
//         var educationEntry = '<div class="row row-edu eachrow">' +
//         '<h2 class="education-header">' + graduation + '</h2>' +
//         '<div class="col-3">' +
//             '<div class="post-graduation">' +
//                 '<h5 class="univercity-h5">' + university + '</h5>' +
//             '</div>' +
//         '</div>' +
//         '<div class="col-3">' +
//             '<div class="post-graduation">' +
//                 '<h5 class="branch-h5">' + branch + '</h5>' +
//             '</div>' +
//         '</div>' +
//         '<div class="col-3">' +
//             '<div class="post-graduation">' +
//                 '<h5 class="cgpa-h5">' + cgpa + '</h5>' +
//             '</div>' +
//         '</div>' +
//         '<div class="col-3">' +
//             '<div class="post-graduation education-edit-btn">' +
//                 '<h5 class="cgpa-h5"><i class="bi bi-pencil-square me-2"></i></h5>' +
//             '</div>' +
//             '<div class="post-graduation education-delete-btn">' +
//                 '<h5 class="cgpa-h5"><i class="bi bi-trash me-2"></i></h5>' +
//             '</div>' +
//         '</div>' +
//     '</div>';
//     $("#append").append(educationEntry);
//       });
      
// });


$(document).ready(function(){
    $(".education-edit-btn").click(function(){
        $("#education-update").show();
    });
    $("#education-close-btn").click(function(){
        $("#education-update").hide();
    });
    $(".education-delete-btn").click(function(){
        $(this).closest(".eachrow").remove();
    });

    $("#update-btn-education").click(function(event){
        let graduation = $("#qulification").val();
        let university = $("#university").val();
        let branch = $("#stream").val();
        let cgpa = $("#percentage").val();
        if(graduation === "" || university === "" || branch === "" || cgpa === ""){
            // ... (same validation logic as before)
        } else {
            $("#prfl-header").text(graduation)
            $("#prfl-univercity").text(university)
            $("#prfl-branch").text(branch)
            $("#prfl-percentage").text(cgpa)
            $("#education-update").hide();
        }
    });

    $("#prfl-add-btn").click(function(){
        $("#education-update").show();
        $("#qulification").val('');
        $("#university").val('');
        $("#stream").val('');
        $("#percentage").val('');
        
        let graduation = $("#qulification").val();
        let university = $("#university").val();
        let branch = $("#stream").val();
        let cgpa = $("#percentage").val();

        var educationEntry = '<div class="row row-edu eachrow">' +
            '<h2 class="education-header">' + graduation + '</h2>' +
            '<div class="col-3">' +
                '<div class="post-graduation">' +
                    '<h5 class="univercity-h5">' + university + '</h5>' +
                '</div>' +
            '</div>' +
            '<div class="col-3">' +
                '<div class="post-graduation">' +
                    '<h5 class="branch-h5">' + branch + '</h5>' +
                '</div>' +
            '</div>' +
            '<div class="col-3">' +
                '<div class="post-graduation">' +
                    '<h5 class="cgpa-h5">' + cgpa + '</h5>' +
                '</div>' +
            '</div>' +
            '<div class="col-3">' +
                '<div class="post-graduation education-edit-btn">' +
                    '<h5 class="cgpa-h5"><i class="bi bi-pencil-square me-2"></i></h5>' +
                '</div>' +
                '<div class="post-graduation education-delete-btn">' +
                    '<h5 class="cgpa-h5"><i class="bi bi-trash me-2"></i></h5>' +
                '</div>' +
            '</div>' +
        '</div>';
        $("#append").append(educationEntry);
    });
});

$(document).ready(function () {
    // $("#skill-edit-btn").click(function(){
    //     $("#skill-update").show();
    // });

    // $("#update-btn-skill").click(function(){
    //     let skill = $(".skill-input").val();
    //     if(skill === ""){
    //         $("#error-notification-skill").show();
    //     } else {
    //         $("#error-notification-skill").hide();
    //         $("#linkList").append('<li class="link" id="skill-list">'+ skill + '<a href="" class="delete"><i class="bi bi-trash3 ms-3"></i></a></li>');
    //         $("#skill-update").hide();
    //     }
    // });

    // $(document).on('click', '.delete', function(){
    //     $(this).hide();
    // });
    function showSkillUpdateForm() {
        $('#skill-update').show();
    }

    // Function to hide the skill update form
    function hideSkillUpdateForm() {
        $('#skill-update').hide();
    }

    // Function to update skills
    function updateSkill() {
        var skillValue = $('#skill').val().trim();

        if (skillValue !== "") {
            // Add the skill to the list
            var linkId = 'skill_' + ($('#linkList li').length + 1);
            var listItem = $('<li>', {
                id: linkId,
                class: 'link'
            }).appendTo('#linkList');

            $('<a>', {
                href: '#',
                class: 'delete',
                click: function () {
                    listItem.remove();
                }
            }).append($('<i>', {
                class: 'bi bi-trash3 ms-3'
            })).appendTo(listItem);

            listItem.append(document.createTextNode(skillValue));

            // Clear the input field after updating the skill
            $('#skill').val('');
            
            // Hide the skill update form
            hideSkillUpdateForm();
        } else {
            // Display an error message if the input is empty
            $('#error-notification-skill').show();
        }
    }
});

    // Function to show the skill update form
    function showSkillUpdateForm() {
        $('#skill-update').show();
    }

    // Function to hide the skill update form
    function hideSkillUpdateForm() {
        $('#skill-update').hide();
    }

    // Function to update skills
    function updateSkill() {
        var skillValue = $('#skill').val().trim();

        if (skillValue !== "") {
            // Add the skill to the list
            var linkId = 'skill_' + ($('#linkList li').length + 1);
            var listItem = $('<li>', {
                id: linkId,
                class: 'link'
            }).appendTo('#linkList');

            $('<a>', {
                href: '#',
                class: 'delete',
                click: function () {
                    listItem.remove();
                }
            }).append($('<i>', {
                class: 'bi bi-trash3 ms-3'
            })).appendTo(listItem);

            listItem.append(document.createTextNode(skillValue));

            // Clear the input field after updating the skill
            $('#skill').val('');
            
            // Hide the skill update form
            hideSkillUpdateForm();
        } else {
            // Display an error message if the input is empty
            $('#error-notification-skill').show();
        }
    }


