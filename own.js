let page = 1;
let limit = 1;
let items = document.querySelectorAll(".list .item");

function loadCount() {
    let start = limit * (page - 1);
    let end = limit * page - 1;
    items.forEach((item, index) => {
        if (index >= start && index <= end) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    listPage();
}

function listPage() {
    let listOfPage = document.querySelector(".listPage");
    listOfPage.innerHTML = "";
    let countPage = Math.ceil(items.length / limit);
    
    let visiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    let endPage = Math.min(startPage + visiblePages - 1, countPage);

    let backToStart = document.createElement("li");
    backToStart.innerHTML = "<<";
    backToStart.setAttribute("onclick", "changePage(1)");
    listOfPage.appendChild(backToStart);

    let prev = document.createElement("li");
    prev.innerHTML = "<";
    if (page > 1) {
        prev.setAttribute("onclick", "changePage(" + (page - 1) + ")");
    }
    listOfPage.appendChild(prev);

    if (startPage > 1) {
        let startEllipsis = document.createElement("li");
        startEllipsis.innerHTML = "...";
        startEllipsis.setAttribute("onclick", "changePage(" + (startPage - 1) + ")");
        listOfPage.appendChild(startEllipsis);
    }

    for (let i = startPage; i <= endPage; i++) {
        let newPage = document.createElement("li");
        newPage.innerHTML = i;
        listOfPage.appendChild(newPage);
        if (i === page) {
            newPage.classList.add("active");
        }
        newPage.setAttribute("onclick", "changePage(" + i + ")");
    }

    if (endPage < countPage) {
        let endEllipsis = document.createElement("li");
        endEllipsis.innerHTML = "...";
        endEllipsis.setAttribute("onclick", "changePage(" + (endPage + 1) + ")");
        listOfPage.appendChild(endEllipsis);
    }

    let next = document.createElement("li");
    next.innerHTML = ">";
    if (page < countPage) {
        next.setAttribute("onclick", "changePage(" + (page + 1) + ")");
    }
    listOfPage.appendChild(next);

    let goToEnd = document.createElement("li");
    goToEnd.innerHTML = ">>";
    goToEnd.setAttribute("onclick", "changePage(" + countPage + ")");
    listOfPage.appendChild(goToEnd);
}

function changePage(i) {
    page = i;
    loadCount();
}

loadCount();
