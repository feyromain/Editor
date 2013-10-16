(function($)
{
    $.fn.editor=function(parametres)
    {

        var textarea, focus, vTextarea, vBtn, lBtn, select, start, end;

        $(parametres).select(function(event) {

            start = event.currentTarget.selectionStart;
            end = event.currentTarget.selectionEnd;
            select = event.currentTarget.value.substring(start, end);
        });

        $.each(this.find('button'), function(i, val) {

            $(this).on('click', $(this), function(){
                /**Récuperer l'élément textarea**/
                textarea = $(this).parent().next().find('textarea').attr('id');
                vTextarea = $('#'+textarea);
                lBtn = $(this).val().length;

                if(select) {
                    vTextarea.val( vTextarea.val().substring(0, start)+$(this).val().replace('|', select)+vTextarea.val().substring(end, vTextarea.val().length));
                    select = '';
                } else {
                        vBtn = $(this).val().replace('|', '');

                        /**Insérer valeur dans le textarea **/
                        vTextarea.val( vTextarea.val() + vBtn );

                        /**Focus sur l'élément et positionnement du curseur**/
                        focus = $('#'+textarea+':input').focus();
                        lTextarea = vTextarea.val().length;

                    if($(this).val().match(/url/)) {
                        focus.get(0).setSelectionRange(lTextarea -19,vTextarea-8);
                    } else {
                        focus.get(0).setSelectionRange(lTextarea - (lBtn/2), lTextarea - (lBtn/2));
                    }
                }
            });

        });
       return this;
    };
})(jQuery);
