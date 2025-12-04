function service(){
    document.getElementById('Services').scrollIntoView({behavior:'smooth'});
    document.getElementById('Home1').removeAttribute('class');
    document.getElementById('Skills1').removeAttribute('class');
    document.getElementById('About1').removeAttribute('class');
    document.getElementById('Contact1').removeAttribute('class');
    document.getElementById('Services1').setAttribute('class','active');
}
function home(){
    document.getElementById('home').scrollIntoView({behavior:'smooth'});
    document.getElementById('Services1').removeAttribute('class');
    document.getElementById('Skills1').removeAttribute('class');
    document.getElementById('About1').removeAttribute('class');
    document.getElementById('Contact1').removeAttribute('class');
    document.getElementById('Home1').setAttribute('class','active');
}
function skill(){
    document.getElementById('Skills').scrollIntoView({behavior:'smooth'});
    document.getElementById('Services1').removeAttribute('class');
    document.getElementById('Home1').removeAttribute('class');
    document.getElementById('About1').removeAttribute('class');
    document.getElementById('Contact1').removeAttribute('class');
    document.getElementById('Skills1').setAttribute('class','active');
}
function about(){
    document.getElementById('About').scrollIntoView({behavior:'smooth'});
    document.getElementById('Services1').removeAttribute('class');
    document.getElementById('Home1').removeAttribute('class');
    document.getElementById('Skills1').removeAttribute('class');
    document.getElementById('Contact1').removeAttribute('class');
    document.getElementById('About1').setAttribute('class','active');
}
function contact(){
    document.getElementById('Contact').scrollIntoView({behavior:'smooth'});
    document.getElementById('Services1').removeAttribute('class');
    document.getElementById('Home1').removeAttribute('class');
    document.getElementById('About1').removeAttribute('class');
    document.getElementById('Skills1').removeAttribute('class');
    document.getElementById('Contact1').setAttribute('class','active');

}
setInterval(function(){
    document.getElementById('home').style.opacity=1;
},1000);