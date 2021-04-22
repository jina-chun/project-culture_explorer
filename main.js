function do_showMore() {

    let x = document.getElementById("ticket_info");
    let btn = document.getElementById("btn_name");

    if (x.style.display === "block") {
        x.style.display = "none";
        btn.innerHTML = "Ticket Info"

    } else {
        x.style.display = "block";
        btn.innerHTML = "Hide"
    }
}