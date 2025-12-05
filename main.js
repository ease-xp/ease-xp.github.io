window.onload = function() {
    const thisPath = document.location.pathname.split('/').at(-1);
    if (thisPath === '' || thisPath === 'index.html') {
        document.querySelector('.nav-link[href="index.html"]').classList.add('active');
    } else if (thisPath === "people.html") {
        document.querySelector('.nav-link[href="people.html"]').classList.add('active');
    } else if (/^news.+/ig.test(thisPath)) {
        document.querySelector('.nav-link[href*="news.html"]').classList.add('active');
    } else if (thisPath === "data.html") {
        document.querySelector('.nav-link[href="data.html"]').classList.add('active');
    } else if (thisPath === "projects.html") {
        document.querySelector('.nav-link[href="projects.html"]').classList.add('active');
    } else if (thisPath === "publications.html") {
        document.querySelector('.nav-link[href="publications.html"]').classList.add('active');
    } else if (thisPath === "opportunities.html") {
        document.querySelector('.nav-link[href="opportunities.html"]').classList.add('active');
    } else if (thisPath === "lab.html") {
        document.querySelector('.nav-link[href="lab.html"]').classList.add('active');
    }
}

