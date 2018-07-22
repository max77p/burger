$(".devour").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var eatenState = {
        id:id,
        burger: eaten
    };
    console.log("uadaua "+eatenState);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenState
    }).then(
        function () {
            console.log("changed burger to", eatenState);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$("#createBurger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
if($("#submitArea").val().trim()){
    var newBurger = {
        burger: $("#submitArea").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
    console.log(newBurger);
}
else{
    alert("Please enter a name");
}
    
    
    
});

//   $("#updateplan").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var id = $("[name=id]").val().trim();

//     var updatedPlan = {
//       plan: $("#updateplan [name=plan]").val().trim()
//     };

//     // Send the PUT request.
//     $.ajax("/todos/" + id, {
//       type: "PUT",
//       data: updatedPlan
//     }).then(
//       function() {
//         console.log("updated id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });