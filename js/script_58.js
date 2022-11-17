function change(index) {

    const p = document.querySelector('.show-classdemo')
    console.log('p',p);
    switch(index) {
        case 1:
            p.innerHTML = `<iframe src="./demo/w01_58/index.html" width="100%" height="100%" />`
            break
        case 2:
            p.innerHTML = `<iframe src="./demo/w02_58/card_58.html" width="100%" height="100%" />`
            break
        case 3:
            p.innerHTML = `<iframe src="./demo/w04_58/blog_58.html" width="100%" height="100%" />`
            break
        case 4:
            p.innerHTML = `<iframe src="./demo/w06_58/blog_58.html" width="100%" height="100%" />`
            break
        case 5:
            p.innerHTML = `<iframe src="./demo/w08_58/landing_58.html" width="100%" height="100%" />`
            break
        case 6:
            p.innerHTML = `<iframe src="./demo/w09_58/resume_58.html" width="100%" height="100%" />`
            break
    }
}