$(function () {
    let title;
    let first;
    let last;
    let picture;
    let country;
    let city;
    let postcode;
    let street;
    let email;
    let phone;
    
    $("button").click(async function() { 
        $("button").attr("disabled", true)
        $("button").hover( function() {
            $("button").css("cursor", "progress");
        })

        if($("div.user-box")){
            $("div.user-box").remove();
        }
        await $.ajax({
            url: "https://randomuser.me/api/",
            dataType: "json",
            success: function (data) {
                console.log(data.results);
                title = data.results[0].name.title;
                first = data.results[0].name.first;
                last = data.results[0].name.last;
                picture = data.results[0].picture.large;
                street = data.results[0].location.street.name + " " + data.results[0].location.street.number;
                postcode = data.results[0].location.postcode;
                city = data.results[0].location.city;
                country = data.results[0].location.state;
                phone = data.results[0].phone;
                email = data.results[0].email;
                $("button").attr("disabled", false);
    
            },
            error: function (error) {
                console.log(error);
                if($("div.user-box")){
                    $("div.user-box").remove();
                }
                $("button").attr("disabled", false);

            }
        })
        $(this).after("<div class="+ 'user-box' +"> </diV>");
        $("div.user-box").append(`<h3 class="name-user">${title} ${first} ${last}</h3>`,
         `<div class="top-row"><img src="${picture}"></div>`)
        $("div.top-row").append(`<div class="right-box"><p>${street}</p><p>${postcode} ${city}</p><p>${country}</p></div>`).addClass("flex");
        $("div.user-box").append(`<div class="bottom-row"><p>Phone: ${phone}</p><p>Email: ${email}</p></div>`)
        
        $("button").hover( function() {
            $(this).css("cursor", "pointer");
        })
    })
})