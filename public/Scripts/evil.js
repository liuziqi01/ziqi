/*
 * This code should be wrapped into adsafe widget structure
 * trys to put ad content into div ad 
 * malacious try to change div introduction to "This part is hacked by 3rd party script"
 *
 */


 document.getElementById('introduction').innerHTML= "This is hacked";
 var adImg = document.createElement('img');
 adImg.setAttribute('src','http://www.hit-counts.com/wp-content/uploads/2015/10/google-adwords.jpg');
 document.getElementById('ad').appendChild(adImg);