const url = "https://news67.p.rapidapi.com/v2/feed";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "786147084bmsh09fecb5d9b9b3c1p19f929jsn575c161f2786",
    "X-RapidAPI-Host": "news67.p.rapidapi.com",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    title1.innerHTML = response.news[0].Title;
    desc1.innerHTML = response.news[0].Description;
    img1.src = response.news[0].Image;
    source1.innerHTML = "Source: " + response.news[0].Source;
    summary1.innerHTML = response.news[0].Summary;

    title2.innerHTML = response.news[1].Title;
    desc2.innerHTML = response.news[1].Description;
    img2.src = response.news[1].Image;
    source2.innerHTML = "Source: " + response.news[1].Source;
    summary2.innerHTML = response.news[1].Summary;

    title3.innerHTML = response.news[2].Title;
    desc3.innerHTML = response.news[2].Description;
    img3.src = response.news[2].Image;
    source3.innerHTML = "Source: " + response.news[2].Source;
    summary3.innerHTML = response.news[2].Summary;

    title4.innerHTML = response.news[3].Title;
    desc4.innerHTML = response.news[3].Description;
    img4.src = response.news[3].Image;
    source4.innerHTML = "Source: " + response.news[3].Source;
    summary4.innerHTML = response.news[3].Summary;

    title5.innerHTML = response.news[4].Title;
    desc5.innerHTML = response.news[4].Description;
    img5.src = response.news[4].Image;
    source5.innerHTML = "Source: " + response.news[4].Source;
    summary5.innerHTML = response.news[4].Summary;

    title6.innerHTML = response.news[5].Title;
    desc6.innerHTML = response.news[5].Description;
    img6.src = response.news[5].Image;
    source6.innerHTML = "Source: " + response.news[5].Source;
    summary6.innerHTML = response.news[5].Summary;

    title7.innerHTML = response.news[6].Title;
    desc7.innerHTML = response.news[6].Description;
    img7.src = response.news[6].Image;
    source7.innerHTML = "Source: " + response.news[6].Source;
    summary7.innerHTML = response.news[6].Summary;

    title8.innerHTML = response.news[7].Title;
    desc8.innerHTML = response.news[7].Description;
    img8.src = response.news[7].Image;
    source8.innerHTML = "Source: " + response.news[7].Source;
    summary8.innerHTML = response.news[7].Summary;

    title9.innerHTML = response.news[8].Title;
    desc9.innerHTML = response.news[8].Description;
    img9.src = response.news[8].Image;
    source9.innerHTML = "Source: " + response.news[8].Source;
    summary9.innerHTML = response.news[8].Summary;

    title10.innerHTML = response.news[9].Title;
    desc10.innerHTML = response.news[9].Description;
    img10.src = response.news[9].Image;
    source10.innerHTML = "Source: " + response.news[9].Source;
    summary10.innerHTML = response.news[9].Summary;
  });

navbtn = document.getElementById("menu-btn");
navlist = document.getElementById("nav-item");

navbtn.addEventListener("click", () => {
  navlist.classList.toggle("active");
  navbtn.classList.toggle("active");
});
