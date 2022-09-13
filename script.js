$(function () {
    let title;
    let first;
    let last;
    let picture;
    
    $("button").click(async function() { 
        $(this).hover( function() {
            $(this).css("cursor", "progress").attr("disabled", true);
        })
        await $.ajax({
            url: "https://randomuser.me/api/",
            dataType: "json",
            success: function (data) {
                console.log(data.results);
                title = data.results[0].name.title;
                first = data.results[0].name.first;
                last = data.results[0].name.last;
                picture = data.results[0].picture.large;
             
    
            },
            error: function (error) {
                console.log(error);
            }
        })
        $(this).after("<div class="+ 'user-box' +"> </diV>");
        $("div.user-box").append(`<h3>${title} ${first} ${last}</h3>`,
         `<img src="${picture}">`)
        $("button").hover( function() {
            $(this).css("cursor", "pointer").attr("disabled", false);
        })
    })
})