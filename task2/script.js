function addListItem()
    {

    var text = $('#new-text').val();
        $("#todo-list").append('<li ><input type="checkbox" class="toggle"/ ><span class="text">'
    + text + ' </span><button class="destroy"></button></li>');
    $("#new-text").val('');

    }

function clearCompleted()
    {

    $("#todo-list .toggle:checked").parent().remove();

    }

function deleteItem()
    {

    $(this).parent().remove();

    }

function completed() {
    var $item = $(this).parent();

    if ( !$item.hasClass('completed') ) {
        $item.addClass('completed');
    } else {
        $item.removeClass('completed');
    }
}


$(document).ready(function(){

    $('#new-text').keyup(function(e)
    {

        if (e.keyCode === 13)

        {
            addListItem();
        }

    });

    $(document).on('click', '.destroy', deleteItem);

    $("#toggle-all").click(function ()

    {

        $('input:checkbox').not(this).prop('checked', this.checked);
        if ( $('li').css('textDecoration') == 'line-through' )
        {
            $('li').css('textDecoration', 'none');
            $('li').parent().css('opacity', '1');
        }

        else

        {
            $('li').css('textDecoration', 'line-through');
            $('li').parent().css('opacity', '0.5');
        }

    });

    $(document).on('click', '.toggle', completed);

    $("#clearcompleted").click(clearCompleted);

    $('#todo-list').on('dblclick', 'span', function ()

        {

            var thisData = this.innerHTML,
            $el = $('<input type="text" class="in-edit-text"/>');
            $(this).replaceWith($el);
            $el.val(thisData).focus();
            $(this).find(".text").hide();
            $(this).find(".destroy").hide();

        }
    );

    $('#todo-list').on('keyup', '.in-edit-text', (function(e)

    {
        if (e.keyCode === 13)

        {
            $(this).replaceWith($('<span class="text">' + $(this).val() + '</span>'));

        }

        if (e.keyCode == 27) {
            $('.in-edit-text').remove();
        }

    }));

});