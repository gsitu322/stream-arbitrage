var recentRefreshTime = 3e3;

/** UI */
var notifications = false;
var autobuy = false;
var showLogs = false;
var showHistory = false;

/** item details */
var maxlistPrice = 2.00;
var maxlistPrice2 = 2.00;
var neededProfit = 0.25;

function cleanupDom(){
	/** clean up the page */
	$J('#popularItemsTable').remove();
	$J('#sellListingsTable').show();
	$J('.market_listing_table_showmore').remove();
	$J('#global_header').remove();
	$J('#myMarketTabs').remove();
	$J('#myListings').remove();
	$J('#sideBar').remove();
	$J('.market_large_tab_well').remove();
	$J('#footer').remove();
	$J('.market_page_left').removeClass('market_page_left');
	$J('#sellListingRows').html("").prepend('<div class="market_listing_table_header">'+
	'<div class="market_listing_right_cell market_listing_their_price">BUY</div>'+
	'</div>');
	$J('.market_listing_table_header').append('<div class="market_listing_right_cell market_listing_low_price" style="width: 100px;">PRICE</div>');
	$J('.market_listing_table_header').append('<div class="market_listing_right_cell market_listing_low_price" style="width: 100px;">LOW PRICE</div>');
	$J('.market_listing_table_header').append('<div class="market_listing_right_cell market_listing_low_price" style="width: 100px;">PROFIT</div>');
	$J('.market_listing_table_header').append('<div><span class="market_listing_header_namespacer"></span>NAME</div>');
	$J('.market_listing_seller').remove();
}



function modifyPageUI(){
	$J('#BG_bottom').prepend(
		'<div style="padding: 10px; float: none;height: 25px;" class="item_market_action_button_green">' +
			'<div class="market_listing_right_cell market_listing_action_buttons" style="float: none; width: 100%; height: 25px;">' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px;display: inline-block; float: left;" > ' +
					'<a href="javascipt:;" class="toggle-auto-buy item_market_action_button item_market_action_button_green"> ' +
						'<span class="item_market_action_button_edge item_market_action_button_left"></span> ' +
						'<span class="item_market_action_button_contents" style="width: 110px;">AutoBuy: TURN ON</span> ' +
						'<span class="item_market_action_button_edge item_market_action_button_right"></span> ' +
						'<span class="item_market_action_button_preload"></span> ' +
					'</a> ' +
				'</div> ' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px; display: inline-block; float: left;" > ' +
					'<label class="" style="vertical-align: super;">Max AutoBuy: </label>'+
					'<input type="text" value="9.00" class="max-autobuy" style="width: 55px;vertical-align: super;padding: 5px;">'+
				'</div> ' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px; display: inline-block; float: left;" > ' +
					'<label class="" style="vertical-align: super;">Min Profit: </label>'+
					'<input type="text" value="9.00" class="min-profit" style="width: 55px;vertical-align: super;padding: 5px;">'+
				'</div> ' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px; display: inline-block; float: left;" > ' +
					'<a href="javascipt:;" class="toggle-notification item_market_action_button item_market_action_button_green"> ' +
						'<span class="item_market_action_button_edge item_market_action_button_left"></span> ' +
						'<span class="item_market_action_button_contents" style="width: 135px;">Notification: TURN ON</span> ' +
						'<span class="item_market_action_button_edge item_market_action_button_right"></span> ' +
						'<span class="item_market_action_button_preload"></span> ' +
					'</a> ' +
				'</div> ' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px; display: inline-block; float: left;" > ' +
					'<a href="http://steamcommunity.com/market" target="_blank" class="item_market_action_button item_market_action_button_green"> ' +
						'<span class="item_market_action_button_edge item_market_action_button_left"></span> ' +
						'<span class="item_market_action_button_contents" style="width: 80px;">Active Listings</span> ' +
						'<span class="item_market_action_button_edge item_market_action_button_right"></span> ' +
						'<span class="item_market_action_button_preload"></span> ' +
					'</a> ' +
				'</div> ' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px; display: inline-block; float: left;" > ' +
					'<a href="javascript:;" target="_blank" class="toggle-history item_market_action_button item_market_action_button_green"> ' +
						'<span class="item_market_action_button_edge item_market_action_button_left"></span> ' +
						'<span class="item_market_action_button_contents" style="width: 80px;">Show History</span> ' +
						'<span class="item_market_action_button_edge item_market_action_button_right"></span> ' +
						'<span class="item_market_action_button_preload"></span> ' +
					'</a> ' +
				'</div> ' +
				'<div class="market_listing_buy_button" style="margin-top: 0px; padding: 0px 5px 0px 5px; display: inline-block; float: left;" > ' +
					'<a href="javascript:;" target="_blank" class="toggle-logs item_market_action_button item_market_action_button_green"> ' +
						'<span class="item_market_action_button_edge item_market_action_button_left"></span> ' +
						'<span class="item_market_action_button_contents" style="width: 80px;">Show Logs</span> ' +
						'<span class="item_market_action_button_edge item_market_action_button_right"></span> ' +
						'<span class="item_market_action_button_preload"></span> ' +
					'</a> ' +
				'</div> '+
			'</div>' +
		'</div>'+

		'<div class="market_large_tab_well_sep"></div>'+
			'<div style="padding: 10px;height: 250px;overflow-y: scroll;overflow-x: hidden; display: none" class="steam-market-logs">Market Logs</div>'+
				'<div style="padding: 10px;height: 700px; display: none" class="steam-market-history">' +
					'<div id="tabContentsMyMarketHistory" class="my_listing_section market_content_block">	' +
					'<div id="tabContentsMyMarketHistoryTable" class="market_home_listing_table market_home_main_listing_table">' +
						'<div id="tabContentsMyMarketHistoryRows">' +
							'<div class="market_listing_table_header"> ' +
							'<div class="market_listing_left_cell market_listing_gainorloss"></div> ' +
							'<div class="market_listing_right_cell market_listing_their_price">PRICE</div> ' +
							'<div class="market_listing_right_cell market_listing_whoactedwith">WITH</div> ' +
							'<div class="market_listing_right_cell market_listing_listed_date">ACTED ON</div> ' +
							'<div class="market_listing_right_cell market_listing_listed_date">LISTED ON</div> ' +
							'<div>' +
								'<span class="market_listing_header_namespacer"></span>NAME' +
							'</div>' +
						'</div> ' +
					'</div> ' +
					'<div id="tabContentsMyMarketHistory_ctn" class="market_paging" style="">' +
						'<div class="market_paging_summary">Showing <span id="tabContentsMyMarketHistory_start">1</span>-<span id="tabContentsMyMarketHistory_end">10</span> of <span id="tabContentsMyMarketHistory_total">695</span> results</div> ' +
						'<div class="market_paging_controls" id="tabContentsMyMarketHistory_controls"> ' +
							'<span id="tabContentsMyMarketHistory_btn_prev" class="pagebtn disabled">&lt;</span> ' +
							'<span id="tabContentsMyMarketHistory_links">' +
							'<span class="market_paging_pagelink active">1 </span>' +
							'<span class="market_paging_pagelink">2 </span>' +
							'<span class="market_paging_pagelink">3 </span>' +
							'<span class="market_paging_pagelink">4 </span>' +
							'<span class="market_paging_pagelink">5 </span>' +
							'<span class="market_paging_pagelink">6 </span> ... ' +
							'<span class="market_paging_pagelink">70 </span>' +
							'</span>' +
							'<span id="tabContentsMyMarketHistory_btn_next" class="pagebtn">&gt;</span> ' +
						'</div> ' +
						'<div style="clear: both;">' +
					'</div>' +
				'</div> ' +
			'</div>' +
		'</div> '
	);
}

$J( document ).ready(function() {
	/** auto check steam agreement */
	$J('#market_buynow_dialog_accept_ssa').prop('checked', true);

	/** Stop popular AJAX Call */
	g_bMarketWindowHidden = true;

	/** clean up and modify page for added UI */
	cleanupDom();
	modifyPageUI();

	//LoadMarketHistory(0, 10);

	/** initiate market variables */
	var g_bBusyLoadingMarketHistory = false;
	var g_oMyHistory = null;

	/** load market history */
	function LoadMarketHistory(start, count)
	{
		if ( g_bBusyLoadingMarketHistory )
		{
			return;
		}

		g_bBusyLoadingMarketHistory = true;
		var elMyHistoryContents = $('tabContentsMyMarketHistory');
		new Ajax.Request( 'http://steamcommunity.com/market/myhistory', {
			method: 'get',
			parameters: {
				'query': '',
				'start' : start,
				'count' : count
			},
			onSuccess: function( transport ) {
				if ( transport.responseJSON )
				{
					var response = transport.responseJSON;

					$J.each($J(response.results_html).find('.market_listing_row'), function(key, value){
						$J('#tabContentsMyMarketHistory .market_listing_table_header').after(value);
					});


					MergeWithAssetArray( response.assets );
					eval( response.hovers );

					g_oMyHistory = new CAjaxPagingControls(
						{
							query: '',
							total_count: response.total_count,
							pagesize: response.pagesize,
							prefix: 'tabContentsMyMarketHistory',
							class_prefix: 'market'
						}, 'http://steamcommunity.com/market/myhistory/'
					);

					g_oMyHistory.SetResponseHandler( function( response ) {
						MergeWithAssetArray( response.assets );
						eval( response.hovers );
					});
				}
			},
			onComplete: function() { g_bBusyLoadingMarketHistory = false; }
		});
	}


	/** Toggle Autobuy */
	$J('.toggle-auto-buy').on('click', function(){
		autobuy = !autobuy;
		if(autobuy){
			$J('.toggle-auto-buy .item_market_action_button_contents').html('AutoBuy: TURN OFF');
			$J('.max-autobuy').prop('readonly', true);
			$J('.min-profit').prop('readonly', true);

			/** update the prices and profits when recent reloads */
			maxlistPrice = parseFloat($J('.max-autobuy').val());
			neededProfit = parseFloat($J('.min-profit').val());

			/** make sure profit is never under 0 */
			if(neededProfit < 0){
				neededProfit = .10;
				$J('.min-profit').val(neededProfit);
			}
		}else{
			$J('.toggle-auto-buy .item_market_action_button_contents').html('AutoBuy: TURN ON');
			$J('.max-autobuy').prop('readonly', false);
			$J('.min-profit').prop('readonly', false);

		}
	});

	/** Toggle Notification */
	$J('.toggle-notification').on('click', function(){
		notifications = !notifications;
		if(notifications){
			$J('.toggle-notification .item_market_action_button_contents').html('Notifications: TURN OFF');
		}else{
			$J('.toggle-notification .item_market_action_button_contents').html('Notifications: TURN ON');
		}
	});

	/** Toggle Logs */
	$J('.toggle-logs').on('click', function(){
		showLogs = !showLogs;
		if(showLogs){
			hideHistoryDiv();
			showLogsDiv();
			if(showHistory){
				showHistory = !showHistory;
			}
		}else{
			hideLogsDiv();
		}
	});

	function showLogsDiv(){
		$J('.steam-market-logs').show();
		$J('.toggle-logs .item_market_action_button_contents').html('Hide Logs');
	}

	function hideLogsDiv(){
		$J('.steam-market-logs').hide();
		$J('.toggle-logs .item_market_action_button_contents').html(' Show Logs');
	}


	/** Toggle history */
	$J('.toggle-history').on('click', function(){
		showHistory = !showHistory;
		if(showHistory){
			if($J('#tabContentsMyMarketHistory .market_listing_row').length > 0){
				$J('#tabContentsMyMarketHistory .market_listing_row').remove();
			}
			LoadMarketHistory(0, 10);
			hideLogsDiv();
			showHistoryDiv();
			if(showLogs){
				showLogs = !showLogs;
			}
		}else{
			hideHistoryDiv();
		}
	});

	function showHistoryDiv(){

		$J('.steam-market-history').show();
		$J('.toggle-history .item_market_action_button_contents').html('Hide History');
	}

	function hideHistoryDiv(){
		$J('.steam-market-history').hide();
		$J('.toggle-history .item_market_action_button_contents').html('Show History');
	}


	/** set default values */
	$J('.max-autobuy').val(maxlistPrice);
	$J('.min-profit').val(neededProfit);


	/** Load recent listings */
	var g_bBusyLoadingMore = false;

	/** Run the recent listing search */
	LoadRecentListings('sellListingsMore', 'sell_new', 'sellListingRows');
	function LoadRecentListings(id, type, rows) {
		if (g_bBusyLoadingMore) {
			return;
		}

		g_bBusyLoadingMore = true;

		/** AJAX to get new listings */
		new Ajax.Request('http://steamcommunity.com/market/recent', {
			method: 'get',
			parameters: {
				country: g_strCountryCode,
				language: g_strLanguage,
				currency: typeof( g_rgWalletInfo ) != 'undefined' ? g_rgWalletInfo['wallet_currency'] : 1			//time: g_rgRecents[type]['time'],
			},
			onSuccess: function (transport) {
				if (transport.responseJSON) {
					var response = transport.responseJSON;

					if (response.assets.length != 0) {
						g_rgRecents[type]['time'] = response.last_time;
						g_rgRecents[type]['listing'] = response.last_listing;

						/** Parse each response to see if it meets our criteria to buy */
						$J.each($J(response.results_html), function (key, htmlContent) {
							if (key % 2 == 0) {
								if ($J(htmlContent)[0].innerHTML.match(/Counter-Strike/g) && !$J(htmlContent)[0].innerHTML.match(/Souvenir|Sticker|Holo|Music/g) ) {

									/** object that store all the info for the listing */
									var listingData = {
										'appId': 730,
										'sessionId' : g_sessionID,
										'selling' : {}
									};

									/** get listing info */
									var listingIdSearch = $J(htmlContent)[0].outerHTML.match(/(?:\s)(listing_)(\d*)(?:")/);
									listingData['listingId'] = listingIdSearch[0].substring(9,listingIdSearch[0].length - 1);
									listingData['listingInfo'] = response['listinginfo'][listingData['listingId']];

									/** get price of current item */
									listingData['itemPrice'] = listingData['listingInfo']['converted_price']/100;
									listingData['itemFee'] = listingData['listingInfo']['converted_fee']/100;
									listingData['itemTotal'] = (listingData['listingInfo']['converted_price'] + listingData['listingInfo']['converted_fee'])/100;

									/** get the itemName */
									var itemNameSearch = $J(htmlContent).find('.market_listing_item_name_link').attr('href').split('/');
									listingData['itemName'] = itemNameSearch[itemNameSearch.length - 1];
									listingData['itemNameFormatted'] = decodeURIComponent(listingData['itemName']);


									/** check prices and buy if profitable */
									if (!listingData['itemName'].match(/730/g)) {
										$J.ajax({
											type: 'get',
											url: 'http://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=730&market_hash_name=' + listingData['itemName'],
											dataType: "json"
										}).done(function (res) {
											if (res['success'] == true) {

												listingData['lowPrice'] = parseFloat(res['lowest_price'].replace('$', ''));
												listingData['recieveLowPrice'] = parseFloat((listingData['lowPrice'] * .87).toFixed(2));

												if (listingData['itemTotal'] < listingData['lowPrice']) {
													listingData['profit'] = parseFloat((listingData['recieveLowPrice'] - listingData['itemTotal']).toFixed(2));

													if (listingData['profit'] >= neededProfit && listingData['itemTotal'] < maxlistPrice && autobuy == true) {
														buyListing(listingData);
													}
													if(listingData['profit'] >= neededProfit && listingData['itemNameFormatted'].match(/Knife/g)){
														writeToLog("Profitable Knife: <a href='http://steamcommunity.com/market/listings/730/" + listingData['itemNameFormatted'] + "'>" + listingData['itemNameFormatted'] + "</a> for " + (listingData['listingInfo']['converted_price'] + listingData['listingInfo']['converted_fee']) / 100 + ".");
													}
													printHtml(listingData, htmlContent);

													/** Write to log if knife is profitable */
												}
											}
										}).error(function (res) {
										}).complete(function () {
										});
									}
								}
							}
						});

						/** add the item to HTML so we can view them in browser */
						$J('#sellListingRows .market_listing_table_header').after("<br class='market-listing-breaks'/>");

						MergeWithAssetArray(response.assets);
						MergeWithListingInfoArray(response.listinginfo);
						MergeWithAppDataArray(response.app_data);
						eval(response.hovers);
					}
				}
			},
			onComplete: function () {
				g_bBusyLoadingMore = false;

				/** clean up the listing to show no more than 30 listings */
				if($J('.market_listing_row').length > 30){
					$J('.market_listing_row').remove();
					$J('.market-listing-breaks').remove();
				}

				setTimeout(function () {
					LoadRecentListings('sellListingsMore', 'sell_new', 'sellListingRows');
				}, recentRefreshTime);
			}
		});


	}
});

/** prints the item listing to the browser with a timestamp so the user knows when the item was listed */
function printHtml(listingData, htmlContent){
	var dateTime = getTime();
	$J($J(htmlContent)[0]).find('.market_listing_game_name').html(dateTime['date'] + ' ' + dateTime['time']);


	/** style the html */
	inner = $J(htmlContent)[0].outerHTML;


	inner = inner.replace('<div class="market_listing_item_name_block">',
		'<div class="market_listing_right_cell market_listing_their_price market_lowest_price">' +
			'<span class="market_table_value">' +
				'<span class="market_listing_price market_listing_price_with_fee">$' + listingData['lowPrice'] + '</span>' +
				'<span class="market_listing_price market_listing_price_without_fee">$' + listingData['lowPrice'] + '</span>' +
			'</span>' +
		'</div>' +
		'<div class="market_listing_right_cell market_listing_their_price market_profit">' +
			'<span class="market_table_value">' +
				'<span class="market_listing_price market_listing_price_profit">' +
					'<span profit-color>'+ listingData['profit'] +'</span>' +
				'</span>' +
			'</span>' +
		'</div>' +
		'<div class="market_listing_item_name_block">');

	if (listingData['profit'] > 0) {
		inner = inner.replace(/profit-color/g, "style='color: green'");
		inner = inner.replace('market_listing_row', 'market_listing_row market_listing_row_featured');
	} else {
		inner = inner.replace(/profit-color/g, "style='color: red'");
	}

	$J('#sellListingRows .market_listing_table_header').after(inner);
	$J('.market_listing_row_featured').css('border', '3px solid red');
	$J('.market_listing_seller').remove();


	if (listingData['profit']  > neededProfit && listingData['itemPrice'] > maxlistPrice && notifications == true) {
		alert("High Price!");
	}
}

/** buy the item */
function buyListing(listingData){
	var m_nTotal = listingData['listingInfo']['converted_price'] + listingData['listingInfo']['converted_fee'];

	/** AJAX to buy the item from the steam market */
	$J.ajax({
		url: 'https://steamcommunity.com/market/buylisting/' + listingData['listingId'],
		type: 'POST',
		data: {
			sessionid: g_sessionID,
			currency: g_rgWalletInfo['wallet_currency'],
			subtotal: listingData['listingInfo']['converted_price'],
			fee: listingData['listingInfo']['converted_fee'],
			total: m_nTotal,
			quantity:1
		},
		crossDomain: true,
		xhrFields: {withCredentials: true}
	}).done(function (data) {
		writeToLog("Bought a <a href='http://steamcommunity.com/market/listings/730/" + listingData['itemNameFormatted'] + "'>" + listingData['itemNameFormatted'] + "</a> for " + m_nTotal / 100 + ".");
		if (notifications == true) {
			alert("Bought One - " + listingData['itemNameFormatted']);
		}

		if(!listingData['itemNameFormatted'].match(/Knife/g)){
			getInventory(listingData);
		}

	}).fail(function (jqxhr) {
		// jquery doesn't parse json on fail
		var data = $J.parseJSON(jqxhr.responseText);
		writeToLog("Failed to buy <a href='http://steamcommunity.com/market/listings/730/"+listingData['itemNameFormatted']+"'>" +listingData['itemNameFormatted'] + "</a> for " + m_nTotal/100 + ". " + data['message']);
	});

}

/** get inventory items */
function getInventory(listingData){
	$J.ajax({
		type: "get",
		url: "http://steamcommunity.com/profiles/" + g_steamID + "/inventory/json/730/2/",
		context: document.body
	}).done(function (res) {

		/** get last item in inventory */
		var keys = Object.keys(res['rgInventory']);
		var last = keys[keys.length - 1];

		var assetId = res['rgInventory'][last]['id'];
		var descriptionId = res['rgInventory'][last]['classid'] + '_' + res['rgInventory'][last]['instanceid'];
		var marketHashName = res['rgDescriptions'][descriptionId]['market_hash_name'];

		/** Create the data for AJAX sell */
		listingData['selling']['assetId'] = res['rgInventory'][last]['id'];
		listingData['selling']['descriptionId'] = res['rgInventory'][last]['classid'] + '_' + res['rgInventory'][last]['instanceid'];
		listingData['selling']['marketHashName'] = res['rgDescriptions'][listingData['selling']['descriptionId']]['market_hash_name'];

		/** get price and sell item*/
		$J.ajax({
			type: 'get',
			url: 'http://steamcommunity.com/market/priceoverview/?country=US&currency=1&appid=730&market_hash_name=' + marketHashName,
			dataType: "json"
		}).done(function (res) {

			var lowPrice = parseFloat(res['lowest_price'].replace('$', '')).toFixed(2);
			var sellPrice = ((lowPrice - .01) * .87).toFixed(2);
			var completeSellPrice = parseInt(sellPrice * 100);
			listingData['selling']['completeSellPrice'] = parseInt(sellPrice * 100);
			sellItem(listingData);
		});
	});
}

/** sell item from inventory */
function sellItem(listingData){

	/** sell item */
	$J.ajax({
		url: 'https://steamcommunity.com/market/sellitem/',
		type: 'POST',
		data: {
			sessionid: listingData['sessionId'],
			appid: listingData['appId'],
			contextid: 2,
			assetid: listingData['selling']['assetId'],
			amount: 1,
			price: listingData['selling']['completeSellPrice']
		},
		crossDomain: true,
		xhrFields: {withCredentials: true}
	}).done(function (data) {
		writeToLog("Item <a href='http://steamcommunity.com/market/listings/730/"+listingData['itemNameFormatted']+"'>" +listingData['itemNameFormatted'] + "</a> put up for sale for " + listingData['selling']['completeSellPrice']/100 + ". ");
	}).fail(function (jqxhr) {
		// jquery doesn't parse json on fail
		var data = $J.parseJSON(jqxhr.responseText);
		writeToLog("Item <a href='http://steamcommunity.com/market/listings/730/"+listingData['itemNameFormatted']+"'>" +listingData['itemNameFormatted'] + "</a> could not be put up for sale for " + listingData['selling']['completeSellPrice']/100 + ". " + data['message']);
	});
}

/** write to the activity log when actions or errors occur */
function writeToLog(msg){

	var time = getTime();

	$J('.steam-market-logs').prepend(
		'<div style="border-top: 1px solid #303030;  padding-top: 5px;  padding-bottom: 5px;">' +
			'<div style="display: inline-block; width: 10%; vertical-align: top;"><b>'+ time['time'] + '</b></div>'+
			'<div style="display: inline-block;width: 90%;">'+ msg +'</div>'+
		'</div>'
	);
}

/** get the time for timestamps */
function getTime(){
	var dateTime = new Date();
	var date = dateTime.getFullYear() + '-' +dateTime.getDate() +'-'+ dateTime.getMonth();

	var hours = dateTime.getHours();
	var minutes = dateTime.getMinutes();
	var seconds = dateTime.getSeconds();

	/** get the correct time */
	var ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? '0'+minutes : minutes;
	seconds = seconds < 10 ? '0'+seconds : seconds;
	var strTime = hours + ':' + minutes + ':' + seconds + ' '+ ampm;

	return {
		'time': strTime,
		'date': date
	}
}