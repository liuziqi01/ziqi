/*
 * This code should be wrapped into adsafe widget structure
 * trys to put ad content into div ad 
 * malacious try to change div introduction to "This part is hacked by 3rd party script"
 *
 */


 document.getElementById('introduction').innerHTML= "This is hacked";
 document.getElementById('ad').innerHTML = "<img src='/img/fake_google_ad.png'/>";