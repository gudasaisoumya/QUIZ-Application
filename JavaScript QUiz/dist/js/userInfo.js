let user_name = localStorage.getItem("name");
let user_points = localStorage.getItem("points");
let user_time = localStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;