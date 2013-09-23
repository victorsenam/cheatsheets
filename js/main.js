// Indice
var indice = {
	cliqueEspecifico: function () {
		var numero = $(this).attr("data-num");
		var wrapper = $(this).parent().parent().parent();

		indice.limparTodos(wrapper);
		indice.selecionarEspecifico(wrapper, numero);
	},
	limparTodos: function (wrapper) { // Resetando Tudo
		$(wrapper).find(".monitor").addClass("hidden");
		$(wrapper).find("li a").removeClass("pure-button-active");
	},
	selecionarEspecifico: function (wrapper, numero) { // Selecionando Específico
		$(wrapper).find(".monitor[data-num="+numero+"]").removeClass("hidden");
		$(wrapper).find("li a[data-num="+numero+"]").addClass("pure-button-active");
	}
};
$("a.pure-button.spec").click(indice.cliqueEspecifico);

// Toggler
$(".toggler").click(function () {
    var classe = $(this).attr("data-classe");
    var target = $(this).attr("data-target");
    var add = $(this).attr("data-add");
    var remove = $(this).attr("data-remove");

    $(target).toggleClass(classe);
    $(add).addClass(classe);
    $(remove).removeClass(classe);
});
