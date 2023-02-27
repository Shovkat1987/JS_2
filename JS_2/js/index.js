

const userAge = +prompt('Yoshingizni kiriting')

if (userAge <= 18) {
    console.log('Siz oqshingiz kerak');
} else if (userAge >= 18 && userAge <= 60) {
    console.log('Siz mehnat qilishingiz kerak');
}
else {
    console.log('Siz pensiyani olib nevaralaringizga berin');
}