$(".popup p").html("Мое первое модальное окно!");
$(".popup-close").on("click", () => {
  $(".popup").fadeOut("slow");
});
$(".showPopup").on("click", () => {
  $(".popup").fadeIn("slow");
});
