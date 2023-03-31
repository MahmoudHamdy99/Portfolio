// typing animation 
var typed = new Typed(".typing", {
    strings: ["","Web Developer"],
    typeSpeed:150,
    BackSpeed:60,
    loop:true
})
// aside 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    allSection = document.querySelectorAll(".section"),
    totalSction = allSection.length;
    totlNavList = navList.length;
    for (let i = 0; i < totlNavList; i++) {
        const a = navList[i].querySelector("a")
        a.addEventListener("click", function () {
            removeBackSection();
            for (let j = 0; j < totlNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
            showSection(this)
            if (window.innerWidth < 1200) {
                asideSectionToggelrBtn()
            }
        })
    }
    function removeBackSection () {
        for (let i = 0; i <totalSction; i++) {
            allSection[i].classList.remove("back-section")
        }
    }
    function addBackSection(num) {
        allSection[num].classList.add("back-section");
    }
    function showSection(element) {
        for (let i = 0; i <totalSction; i++) {
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element) {
        for (let i = 0; i <totlNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function () {
        const sectionIndex = this.getAttribute("data-section-index")
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex)
    })
    const navToggelrBtn = document.querySelector(".nav-toggelr"),
    aside = document.querySelector(".aside");
    navToggelrBtn.addEventListener("click", () => {
        asideSectionToggelrBtn();
    })
    function asideSectionToggelrBtn() {
        aside.classList.toggle("open");
        navToggelrBtn.classList.toggle("open");
        for (let i = 0; i < totalSction; i++) {
            allSection[i].classList.toggle("open")
        }
    }
    const download = document.getElementById("mahmoud");
    download.addEventListener("click", function(){
        download.innerText = "This file is not currently available";
    });