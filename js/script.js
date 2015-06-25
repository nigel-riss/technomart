/*jshint browser: true*/ ;

var reportLink = document.querySelector(".btn-report");
var reportPopup = document.querySelector(".popup-report");
var form = document.querySelector(".report-form");
var userNameInput = document.querySelector("[name='name']");
var userEmailInput = document.querySelector("[name='email']");
var userTextInput = document.querySelector("[name='report-text']");

//Обработка клика по кнопке вызова формы
reportLink.addEventListener("click", function (event) {
    event.preventDefault();
    reportPopup.classList.add("popup-content-show");

    var userNameStored = localStorage.getItem("userName");
    var userEmailStored = localStorage.getItem("userEmail");
    if (userNameStored && userEmailStored) {
        userNameInput.value = userNameStored;
        userEmailInput.value = userEmailStored;
        userTextInput.focus();
    } else {
        userNameInput.focus();
    }
});

//Обработка клика по кнопке отправки сообщения
var sendReportLink = document.querySelector(".btn-send-report");

sendReportLink.addEventListener("click", function (event) {
    event.preventDefault();

    if (!(userNameInput.value && userEmailInput.value)) {
        reportPopup.classList.remove("popup-error");
        reportPopup.classList.add("popup-error");
    } else {
        localStorage.setItem("userName", userNameInput.value);
        localStorage.setItem("userEmail", userEmailInput.value);
        form.submit();
        reportPopup.classList.remove("popup-content-show");
        reportPopup.classList.remove("popup-error");
    }
});

//Обработка клика по кнопке отмены отправки сообщения
var cancelReportLink = document.querySelector(".btn-cancel-report");

cancelReportLink.addEventListener("click", function (event) {
    event.preventDefault();
    reportPopup.classList.remove("popup-content-show");
    reportPopup.classList.remove("popup-error");
});

//Обработка нажатия кнопки Escape, окошко закрывается
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (reportPopup.classList.contains("popup-content-show")) {
            reportPopup.classList.remove("popup-content-show");
            reportPopup.classList.remove("popup-error");
        }
    }
});