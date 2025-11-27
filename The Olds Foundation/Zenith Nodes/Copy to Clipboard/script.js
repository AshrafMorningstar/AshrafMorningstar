/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

var toCopy = document.getElementById( 'to-copy' ),
btnCopy = document.getElementById( 'copy' ),
paste = document.getElementById( 'cleared' );
btnCopy.addEventListener( 'click', function(){
toCopy.select();
paste.value = '';
if ( document.execCommand( 'copy' ) ) {
btnCopy.classList.add( 'copied' );
paste.focus();
var temp = setInterval( function(){
btnCopy.classList.remove( 'copied' );
clearInterval(temp);
}, 600 );
} else {
console.info( 'document.execCommand went wrong…' )
}
return false;
} );