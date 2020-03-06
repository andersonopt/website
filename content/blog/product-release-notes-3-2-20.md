+++
date = 2020-03-06T07:00:00Z
draft = true
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 3/6/20"
[author]
image = ""
name = "Megan Kostanick"

+++
_Check out what's new in Anderson Optimization's latest release (v1.1.17). Make sure you're running the latest version of Anderson Optimization to see these changes._

Your browser will automatically update to the latest version of our app, but it can sometimes take some time for that to happen. Want to make sure you're seeing the latest version of our site? Follow the instructions below!

1. Sign into your [Anderson Optimization](https://energy-opt.auth0.com/login?state=g6Fo2SBzNTN6Sm1hM2tnUk11cXpmUG9NNERkMHd4N1lObmlyeKN0aWTZIFdaVjNDdHFSR2lGSTV6Uk9DY3BTcmlUODFJQTlaMlIyo2NpZNkgdDVqOElEcG9scERBOHY5Vm1DQUd4dWpiakwwN29OWUg&client=t5j8IDpolpDA8v9VmCAGxujbjL07oNYH&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fandersonopt.com%2Fauth%2Fcallback&audience=https%3A%2F%2Fenergy-opt.auth0.com%2Fuserinfo&nonce=mSRK_Q3Uw7s\~HbtnLshx8fxuUX1l7H73&scope=openid%20profile%20email&auth0Client=eyJuYW1lIjoiYW5ndWxhci1hdXRoMCIsInZlcnNpb24iOiIzLjAuNCIsImVudiI6eyJhdXRoMC1qcyI6IjkuMTAuNCIsImF1dGgwLmpzIjoiOS4xMC40In19 "login") account
2. On any page of the AO website, press CTRL+SHIFT+R to force a hard refresh of the browser _(Mac Users: Command+SHIFT+R)_
3. This will force the application to refresh and update to the latest version
4. Scroll down to the bottom of the AO window and check the version number in the bottom right corner of the footer

***

## **Features and New Functionality**

# **View All Parcel Details in a Single Pop-Up**

No need to toggle the Parcels layer on and off to see all the detailed parcel info for any parcels you've already added to a project.

* Click the blue 'x' parcel icon for any parcel you've added to a project.
* On the parcel details pop-up, use the scroll bar to see all key parcel details in one place (e.g. lot size, pin, etc.)

![See all key parcel data on the map](/images/ParcelDetails.png "Parcel Details")

# **NEW Data Layer: USA Soil Map Units**

Curious about the soil type in a project area? Overlay the USA Soil Map layer in the layer manager to quickly check.

* From the **map**, click '**Layers**' button in the top-right toolbar.
* Toggle on the layer by selecting the **USA Soil Map** option in the drop-down menu.
* Once the layer loads, click on the map to see the soil details pop-up window.

![](/images/USASoilsMap.png)

# **Recently Created Projects Now at Top of Project List**

Trying to find that project you recently created? New projects will now appear at the top of the project list by default (_pro tip: double-click the header of any column in a data table to change the sort order data based on that data column_).

![New sort order by most recent](/images/Sortorder.png "SortOrder")

***

## **Fixes**

* **New York data layers:** Fixed issues that impacted NY data layers (NYSEG, all National Grid - NY layers).
* **Distance units:** Distance unites now default to the correct unit (based on user settings) and you can now filter data tables off of 'distance' with operators like: 'greater than', 'less than', etc.
  * _e.g. "filter parcel table to show all parcels < 1 mi. (from the primary asset)"_
* **Created date:** Made some changes to make it easier to filter data tables based on 'Created Date'.
* **Buffer polygons:** fixed an issue where buffers weren't creating a buffer polygon as expected.

***

_Questions? Feedback? Reach out to megan@andersonopt.com_