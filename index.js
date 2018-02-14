// Your code goes here:


let changePoster = function(event) {
   $('#main-image').attr('src', $(this).attr('src'));
 }
$('#thumbnails img').on('click', changePoster)
