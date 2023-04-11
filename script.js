function mode(x) {

    const nav=document.querySelector('.navbar');
    const body=document.querySelector('body');

    if (x==1) {
        nav.style.backgroundColor='#282828';
        body.style.backgroundColor='#121212';
    }
    else if (x==2) {
        nav.style.backgroundColor='#FAEDCD';
        body.style.backgroundColor='#FEFAE0';
    }
}