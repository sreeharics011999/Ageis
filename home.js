$(document).on("click", "#send-it", function () {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
        var b = $("#get-number").text(),
            c = document.getElementById("chat-input").value,
            //   d = "https://wa.me/918089407417",
            d = "https://wa.me/918089407417/";
        e = b,
            f = "?text=" + c;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        )
            var d = "https://wa.me/918089407417/";
        var g = d + f;
        window.open(g, "_blank");
    }
})
$(document).on("click", "#send-it-mob", function () {
    var a = document.getElementById("chat-input-mob");
    if ("" != a.value) {
        var b = $("#get-number").text(),
            c = document.getElementById("chat-input-mob").value,
            //   d = "https://wa.me/918089407417",
            d = "https://wa.me/918089407417/";
        e = b,
            f = "?text=" + c;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        )
            var d = "https://wa.me/918089407417/";
        var g = d + f;
        window.open(g, "_blank");
    }
})
$(document).ready(function () {
    $("#open-eye").click(function () {
        $("#close-eye").show();
        $("#open-eye").hide();
        $("#password").attr("type", "text");
    })
    $("#close-eye").click(function () {
        $("#open-eye").show();
        $("#close-eye").hide();
        $("#password").attr("type", "password");
    })
})

$(document).ready(function () {
    $("#chatwithus").click(function () {
        $("#chat-box").animate({ top: "150%" })
    })
    $("#close-btn").click(function () {
        $("#chat-box").animate({ top: "-800%" })
    })
})
$(document).ready(function () {
    $("#chat-with-us").click(function () {
        $("#chat-box-mob").animate({ top: "150%" })
    })
    $("#close-btn-mob").click(function () {
        $("#chat-box-mob").animate({ top: "-800%" })
    })
})
$(document).ready(function(){
    $(".toogle-icon-a").click(function(){
        $(".toogle-icon").hide();
        $(".toogle-div").animate({right:"0px"});
    })
    $(".close-icon-a").click(function(){
        $(".toogle-icon").show();
        $(".toogle-div").animate({right:"-300px"});
    })
})
