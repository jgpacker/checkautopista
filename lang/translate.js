$(document).ready( function() {
	var userlang = (window.navigator.userLanguage || window.navigator.language);
    if (userlang.substr(0,2) == "en") {
    	$.i18n.load(my_dictionary_en);
    } else {
    	$.i18n.load(my_dictionary_es);
    }
	

	$('div#lema')._t('lema', '<a href="http://www.openstreetmap.org/">', '</a>');
	$('input[name=ver]').prop('value', $.i18n._('verautopistas'));
	$('input[name=cargar]').prop('value', $.i18n._('cargar'));
	$('div#txtleyenda')._t('leyenda');
	$('div.leyenda_text#Peaje')._t('Peaje');
	$('div.leyenda_text#SalDestination')._t('SalDestination', '<span class="code">', '</span>');
	$('div.leyenda_text#SalExitTo')._t('SalExitTo', '<span class="code">', '</span>');
	$('div.leyenda_text#SalName')._t('SalName', '<span class="code">', '</span>');
	$('div.leyenda_text#SalNada')._t('SalNada', '<span class="code">', '</span>');
	$('div.leyenda_text#SalRef')._t('SalRef', '<span class="code">', '</span>');
	$('div.leyenda_text#SalNoRef')._t('SalNoRef', '<span class="code">', '</span>');
	$('div.leyenda_text#SalSinSal')._t('SalSinSal');
	$('div.leyenda_text#Areas')._t('Areas');
	$('div.leyenda_text#ViaTodo')._t('ViaTodo');
	$('div.leyenda_text#ViaNoMaxspeed')._t('ViaNoMaxspeed', '<span class="code">', '</span>');
	$('div.leyenda_text#ViaNoLanes')._t('ViaNoLanes', '<span class="code">', '</span>');
	$('div.leyenda_text#ViaNoMaxspeedNoLanes')._t('ViaNoMaxspeedNoLanes', '<span class="code">', '</span>');
	$('div.leyenda_text#ViaNoName')._t('ViaNoName', '<span class="code">', '</span>');
	$('div.leyenda_text#ViaConstruccion')._t('ViaConstruccion');
	$('div.leyenda_text#ViaProyecto')._t('ViaProyecto');
	$('div#mostrar').text($.i18n._('esconder') + " →");


});