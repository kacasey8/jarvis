var o = document.getElementsByClassName("uiTextareaAutogrow _552m");
var chatTextBox = o[0];
chatTextBox.value = "new";
var e = new Event("keydown");
e.keyCode = 65;
chatTextBox.dispatchEvent(e);

field = document.getElementsByClassName('textInput')[1];

post = document.getElementsByClassName('_42ft _4jy0 _11b _4jy3 _4jy1')[0];

String.prototype.repeat = function( num )
{
    return new Array( num + 1 ).join( this );
}

field.value = "Hi Alice! ".repeat( 4 );
post.click();

