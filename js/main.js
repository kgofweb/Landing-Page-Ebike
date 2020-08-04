const logo = document.querySelector('.logo');
const title = document.querySelector('h1');
const subTitle = document.querySelector('h3');
const parag = document.querySelector('.parag');
const social = document.querySelector('.social');
const image = document.querySelector('#img');

const tl = new TimelineMax();

tl.fromTo (
        logo,
        1.2,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1 }
)

.fromTo (
        title,
        1,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1 }
)

.fromTo (
        subTitle,
        0.6,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 }
)

.fromTo (
        parag,
        0.5,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 }
)

.fromTo (
        social, 
        0.6,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1 }
)

.fromTo (
        image, 
        1,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1 }
)


// Batterie Charging
function chargeBattery () {
        let battery = document.getElementById('battery');
        console.log(battery);
        let fas = document.querySelector('.fas');

        battery.innerHTML = "&#xf244;";

        setTimeout(function() {
                battery.innerHTML = "&#xf243;";
        }, 1000);

        setTimeout(function() {
                battery.innerHTML =  "&#xf242;";
        }, 2000);

        setTimeout(function() {
                battery.innerHTML = "&#xf241;";
        }, 3000);

        setTimeout(function() {
                battery.innerHTML = "&#xf240;";
        }, 4000);
}

chargeBattery();

setTimeout(function() {
        setInterval(chargeBattery, 5000);
});