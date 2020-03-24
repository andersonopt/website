+++
date = 2020-03-20T06:00:00Z
draft = true
featured = false
image = ""
tags = ["Releases"]
title = "Product Release Notes: 3/20/20"
[author]
image = ""
name = ""

+++
_Check out what's new in Anderson Optimization's latest release (v1.1.17). Make sure you're running the latest version of Anderson Optimization to see these changes._

Your browser will automatically update to the latest version of our app, but it can sometimes take some time for that to happen. Want to make sure you're seeing the latest version of our site? Follow the instructions below!

1. Sign in to your [Anderson Optimization](https://energy-opt.auth0.com/login?state=g6Fo2SBzNTN6Sm1hM2tnUk11cXpmUG9NNERkMHd4N1lObmlyeKN0aWTZIFdaVjNDdHFSR2lGSTV6Uk9DY3BTcmlUODFJQTlaMlIyo2NpZNkgdDVqOElEcG9scERBOHY5Vm1DQUd4dWpiakwwN29OWUg&client=t5j8IDpolpDA8v9VmCAGxujbjL07oNYH&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fandersonopt.com%2Fauth%2Fcallback&audience=https%3A%2F%2Fenergy-opt.auth0.com%2Fuserinfo&nonce=mSRK_Q3Uw7s\~HbtnLshx8fxuUX1l7H73&scope=openid%20profile%20email&auth0Client=eyJuYW1lIjoiYW5ndWxhci1hdXRoMCIsInZlcnNpb24iOiIzLjAuNCIsImVudiI6eyJhdXRoMC1qcyI6IjkuMTAuNCIsImF1dGgwLmpzIjoiOS4xMC40In19 "login") account
2. On any page of the AO website, press CTRL+SHIFT+R to force a hard refresh of the browser _(Mac Users: Command+SHIFT+R)_
3. This will force the application to refresh and update to the latest version
4. Scroll down to the bottom of the AO window and check the version number in the bottom right corner of the footer

***

# **Updated Geo Analysis**

## New geo analysis progress notification

When you run geo analysis on a parcel or set of parcels, you can now track the progress of the geo analysis task in a new notification that will appear in the top-right corner of the project page.

The notification will show how many parcels have been 'Queued', 'Running,' and 'Finished,' so you can track the status as the task runs.

![](/images/NewGeoAnalysisStatusNotification.png)

## Buildable acres data will show in parcel table after geo analysis run without refresh

Once you run Geo Analysis, you will now be able to immediately view/add in the 'Buildable Area (Acres)' column in the parcels table and see acreage values.

Previously, a browser refresh was required before the buildable area (acres) column would be available to add to the parcels table.

GET SCREENSHOT

# **Other New Features and Functionality** 

## Quickly filter projects to see 'My Projects', 'Recently Viewed', and more

Under 'View Projects' click the new 'Filter By' dropdown menu above the project table to change which projects are listed. Filters include, "All Projects" (default), "My Projects", "Favorites", and "Recently Viewed"

![](/images/Filter By Dropdown.png)

> Did you know you can 'Favorite' a project by clicking the star icon next to the Project name?

![](/images/Favorite.png)

## NEW Layer!: National Land Cover Database

Check out the new National Land Cover layer in the map layer menu (toggle on the layer from the layer dropdown). Once the layer is turned on, click the map to see land cover type for that area.

![](/images/NLCD.png)

## **Project map zoom**

When you add new assets to the project (e.g. add parcels via a parcel search), the map will now automatically zoom out to the full area to show all the new assets that have been added.

![](/images/Project Map Zoom.png)

### **Added Lat/Long to the main parcel pop up**

We've also added a parcel's latitude and longitude to the parcel pop-up. Just click a blue parcel marker on the map to see all those details and more.

![](/images/Lat:Long Parcel PopUp.png)

***

## **Fixes**

* **Fixed an issue with buffers not showing correctly on some objects**