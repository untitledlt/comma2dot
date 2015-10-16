$.fn.uComma2Dot = function() {
	$.each( this, function( i, obj ) {
		$(obj).keydown(function(e) {
			var code = (typeof e.which == "number") ? e.which : e.keyCode;
			if ( code == 188 ) {
				$(obj).val( $(obj).val() + '.' );
				return false;
			}
		});			
	});
};
