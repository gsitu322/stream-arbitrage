var s = document.createElement('script');
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('steamRecent.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);

/*

$( document ).ready(function() {
    var maxWait = 4;
    var count=0;
    var counter= 0;
	var refresh = false;
	var notification = true;
	var numRefresh = 1;
	
	var loadCount = 0;
	var loadCounter = 0;

	
	$('#sideBar').remove();
	$('#myListings').remove();
	$('#global_header').remove();
	$('#footer').remove();
	$('#myMarketTabs').remove();
	// $('.market_large_tab_well').remove();
	$('.market_listing_table_showmore').remove();
	$('#popularItemsTable').remove();
	$('.market_page_left').removeClass('market_page_left');
	
	$('.market_listing_row_link').remove();
	$('#sellListingsTable').hide();
	
	document.getElementById("tabRecentSellListings").click(function(){


	}); // Click on the checkbox
	
	console.log('here i am');

	$('.market_large_tab_well').remove();
	
	// $('.market_listing_row').each(function(key, value){
		// console.log(key);
		// console.log(value);
	// });


	// $('.start-btn').on('click', function(){
		// refresh = true;
		// $('.custom-header-status').html('Time Till Refresh: <span class="refresh-time">3</span>');
		// timer();
	// });
	
	
	// $('.stop-btn').on('click', function(){
		// clearInterval(counter);
		// refresh = false;
		// $('.custom-header-status').html('Market Watch Stopped');
	// });
	
	// $('.notification-btn').on('click', function(){
		// if(notification == true){
			// notification = false;
			// $('.notification-btn').attr('value','Turn notifications ON');
		// }else{
			// notification = true;
			// $('.notification-btn').attr('value','Turn notifications OFF');
		// }
	// });
	
	// $('.clear-btn').on('click', function(){
		// $('.featured_weapon_header').hide();
		// $('.featured_weapon').html('');
		// $('.knife-weapon').html('');
	// });

    // $('.refresh-time').html('Loading...');
	// $('.item_market_action_button').on('click', function(e){
		// e.preventDefault();
		// console.log(this.attr('href'));
	// })
	
	loadTime();
	
	function doAjaxa(){
		$('#sellListingsTable').hide();
		loadCount = 2;
		loadCounter = setInterval(loadTime, 1000);
		console.log($('.market_listing_row').length);
		
		if($('.market_listing_row').length == 10){
			clearInterval(loadCounter);			
			$.each($('.market_listing_row'), function(key, value){
				var html = $('.market_listing_row')[key];
				if($(value)[0].innerHTML.match(/Counter-Strike/g)){
					var itemPrice = parseFloat($(value).find('.market_listing_price_with_fee')[0].innerText.trim().substring(1));
					var itemName = $(value).find('.market_listing_item_name_link').attr('href').split('/');

					var inner = '';
					var url = 'http://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=730&market_hash_name=' + itemName[itemName.length - 1];
					
					$.ajax({
						type: 'get',
						url: url,
						dataType: "json"
					}).done(function(res) {
						if(res['success'] == true){
							var lowPrice = parseFloat(res['lowest_price'].replace('&#36;', ''));
							
							
							inner = $(value)[0].outerHTML;
							inner = inner.replace('<div class="market_listing_right_cell market_listing_their_price">', '<div class="market_listing_right_cell market_listing_their_price market_lowest_price"><span class="market_table_value"><span class="market_listing_price market_listing_price_with_fee">$'+ lowPrice +'</span></span></div><div class="market_listing_right_cell market_listing_their_price">');
							
							if(itemPrice < lowPrice){
							
								var itemSellPrice = itemPrice;
								var recieveLowPrice = (lowPrice*.87).toFixed(2);
									
								if((recieveLowPrice - itemSellPrice).toFixed(2) > .1){ 
									$('.featured_weapon').prepend(inner);
									$('.featured_weapon_header').show();
									$('.featured_weapon').show();
									inner = inner.replace('market_listing_row', 'market_listing_row market_listing_row_featured');
								}
								
								$(value)[0].outerHTML = inner;
							}

						} else if(res['success'] == false){
							this.remove();
						}
					}).error(function(res){
						console.log('there was an error');
					})
				}else{
					this.remove();
				}
			})
			
			// $('.market_listing_seller').remove();
			$('#sellListingsTable').show();
		}
	}
	
	// setInterval(location.reload(), 10e3);

	
	function loadTime()
    {
        if (loadCount < 1)
        {
            clearInterval(loadCounter);
            doAjaxa();
        }else {
            loadCount=loadCount-1;
        }
    }
});*/
