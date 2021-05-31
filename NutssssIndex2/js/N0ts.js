window.onload = function () {
    document.getElementsByClassName("load")[0].style.display = "none";
    document.getElementsByClassName("Box")[0].classList.add("BoxLoad");
}

// 侧栏菜单 && 打开模糊背景
function MeClick(a) {

    if (a) {
        var a = document.getElementById("leftBar-Me");
        a.classList.add("leftBar-Me-Click");
        var b = document.getElementById("pages");
        b.classList.add("blur");
        var c = document.getElementById("menu");
        c.classList.add("blur");
        var d = document.getElementById("pages2");
        d.classList.add("blur");
        var e = document.getElementById("footer");
        e.classList.add("blur");
    } else {
        var a = document.getElementById("leftBar-Me");
        a.classList.remove("leftBar-Me-Click");
        var b = document.getElementById("pages");
        b.classList.remove("blur");
        var c = document.getElementById("menu");
        c.classList.remove("blur");
        var d = document.getElementById("pages2");
        d.classList.remove("blur");
        var e = document.getElementById("footer");
        e.classList.remove("blur");
    }
}

function MenuClick(a) {
    if (a) {
        var a = document.getElementById("leftBar-titleMenu");
        a.classList.add("leftBar-titleMenu-Click");
        var b = document.getElementById("pages");
        b.classList.add("blur");
        var c = document.getElementById("menu");
        c.classList.add("blur");
        var d = document.getElementById("pages2");
        d.classList.add("blur");
        var e = document.getElementById("footer");
        e.classList.add("blur");
    } else {
        var a = document.getElementById("leftBar-titleMenu");
        a.classList.remove("leftBar-titleMenu-Click");
        var b = document.getElementById("pages");
        b.classList.remove("blur");
        var c = document.getElementById("menu");
        c.classList.remove("blur");
        var d = document.getElementById("pages2");
        d.classList.remove("blur");
        var e = document.getElementById("footer");
        e.classList.remove("blur");
    }
}

function PagesClick(a) {
    if (a) {
        var a = document.getElementById("leftBar-Pages");
        a.classList.add("leftBar-Pages-Click");
        var b = document.getElementById("pages");
        b.classList.add("blur");
        var c = document.getElementById("menu");
        c.classList.add("blur");
        var d = document.getElementById("pages2");
        d.classList.add("blur");
        var e = document.getElementById("footer");
        e.classList.add("blur");
    } else {
        var a = document.getElementById("leftBar-Pages");
        a.classList.remove("leftBar-Pages-Click");
        var b = document.getElementById("pages");
        b.classList.remove("blur");
        var c = document.getElementById("menu");
        c.classList.remove("blur");
        var d = document.getElementById("pages2");
        d.classList.remove("blur");
        var e = document.getElementById("footer");
        e.classList.remove("blur");
    }
}

// 页面切换
var pages_title_option = 1;

function pages_title_option_click(a, b) {
    if (a != pages_title_option) {
        var option1 = document.getElementById("pages-title-option" + a);
        option1.classList.add("pages-title-option-click");
        var option2 = document.getElementById("pages-title-option" + pages_title_option);
        option2.classList.remove("pages-title-option-click");

        var pages_text1 = document.getElementById("pages-text" + a);
        pages_text1.classList.add("pages-text-show");
        var pages_text2 = document.getElementById("pages-text" + pages_title_option);
        pages_text2.classList.remove("pages-text-show");
    } else {
        if (b) {
            var option1 = document.getElementById("pages-title-option1" + a);
            option1.classList.add("pages-title-option-click");
            var option2 = document.getElementById("pages-title-option1" + pages_title_option);
            option2.classList.remove("pages-title-option-click1");

            var pages_text1 = document.getElementById("pages-text1" + a);
            pages_text1.classList.add("pages-text-show1");
            var pages_text2 = document.getElementById("pages-text1" + pages_title_option);
            pages_text2.classList.remove("pages-text-show1");
        }
    }

    pages_title_option = a;
}

//计时
function lovetime() {
    window.setTimeout("lovetime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()
    var todayYear = today.getFullYear()
    var todayMonth = today.getMonth() + 1
    var todayDate = today.getDate()
    var todayHour = today.getHours()
    var todayMinute = today.getMinutes()
    var todaySecond = today.getSeconds()
    var t1 = Date.UTC(2018, 11, 19, 00, 00, 00)
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)
    var diff = t2 - t1
    var diffYears = Math.floor(diff / years)
    var diffDays = Math.floor((diff / days) - diffYears * 365)
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes *
        minutes) / seconds)
    document.getElementById("lovetime1").innerHTML = "我们已经在一起 " + diffYears + "年" + diffDays + "天" +
        diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦"
    document.getElementById("lovetime2").innerHTML = "我们已经在一起 " + diffYears + "年" + diffDays + "天" +
        diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦"
}
lovetime();