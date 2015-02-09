#Steam Market Arbitrage
Google Chrome Extension that buys and sells from the Steam Community Market

The current steam policies for buying and selling have change so this code may not work anymore.


#Introduction
Arbitrage is a finance term that is used for purchasing and sale of an asset to profit from the difference in price. The Steam Community Market is full of sellers and buyers with virtual merchandise swapping hands regularly. The price of these items can fluctuate when there are sellers looking for a quick sell or sellers incorrectly listing their item and selling it for cheaper than market price. Buyers also tend to fluctuate, they will mostly likely buy items under the market price, but there are the occasional buyer that will buy at or even over market price.

Taking this information I've constructed a Google Chrome Extension that allows the user to set a set margin of profit for an item that they plan to arbitrage. For example if I've set the profit margin to be $.50. It will go though the Steam Community Market examine each item's market and selling price. If it finds a match then it'll buy the item and relist the item a couple cents under the market price enticing other buyers to buy.


#How It Works
When the plug-in is active it will modify the HTML of the Steam Community Market page to remove unnecessary information other than most recently listed items. The plug-in also adds a new tool bar for profit margin, start button, max amount to spend, and an activity log.

These are the steps of the plug-in

1. Wait for user to initiate the search.
2. Get the profit margin and max price from user.
3. AJAX to a refreshed list of market items.
4. Go though the list of items and AJAX to find the market price.
5. Calculate the profit that the user will receive if he arbitraged the item.
6. If the profit is above the profit margin then buy the item.
7. If the item is bought then search the users inventory for this item and relist the item one cent cheaper than the market price.
8. Repeat.

#Todo
- Find how the Steam Community Market works now and see if code is still usable
