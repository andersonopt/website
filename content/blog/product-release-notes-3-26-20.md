+++
date = 2020-03-26T06:00:00Z
featured = false
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 3/26/20"
[author]
image = ""
name = "Megan Kostanick"

+++
##### _Check out what's new in Anderson Optimization's latest release (v1.1.17). Make sure you're running the latest version of Anderson Optimization to see these changes._

Your browser will automatically update to the latest version of our app, but it can sometimes take some time for that to happen. Want to make sure you're seeing the latest version of our site? Follow the instructions below!

1. Sign in to your [Anderson Optimization](https://energy-opt.auth0.com/login?state=g6Fo2SBzNTN6Sm1hM2tnUk11cXpmUG9NNERkMHd4N1lObmlyeKN0aWTZIFdaVjNDdHFSR2lGSTV6Uk9DY3BTcmlUODFJQTlaMlIyo2NpZNkgdDVqOElEcG9scERBOHY5Vm1DQUd4dWpiakwwN29OWUg&client=t5j8IDpolpDA8v9VmCAGxujbjL07oNYH&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fandersonopt.com%2Fauth%2Fcallback&audience=https%3A%2F%2Fenergy-opt.auth0.com%2Fuserinfo&nonce=mSRK_Q3Uw7s\~HbtnLshx8fxuUX1l7H73&scope=openid%20profile%20email&auth0Client=eyJuYW1lIjoiYW5ndWxhci1hdXRoMCIsInZlcnNpb24iOiIzLjAuNCIsImVudiI6eyJhdXRoMC1qcyI6IjkuMTAuNCIsImF1dGgwLmpzIjoiOS4xMC40In19 "login") account
2. On any page of the AO website, press CTRL+SHIFT+R to force a hard refresh of the browser _(Mac Users: Command+SHIFT+R)_
3. This will force the application to refresh and update to the latest version
4. Scroll down to the bottom of the AO window and check the version number in the bottom right corner of the footer

***

# **Geo Analysis Updates**

We released quite a few updates to Geo Analysis in this latest release. Check out the new features!

## New Geo Analysis Box

We temporarily have **two** Geo Analysis boxes/task sections currently visible on a project. One box (labeled 'New') is our new version and the other is our 'Old' version.

Since we've added quite a bit of new functionality and overhauled the backend engine, we published the new Geo Analysis tool while still maintaining access to the old one.

* We will eventually deprecate the old Geo Analysis task, but we want to confirm the new one is fully validated before we hide the old task (please to shoot us a note if you have any feedback/issues).

![](/images/NewGeoAnalysis.png)

## Tree Cover and Depth-to-Bedrock Added to Geo Analysis

You can now evaluate and automatically remove land with tree cover from your buildable area constraint maps and acreage calculations. _(Data source: National Land Cover Database (NLCD) 2016)_

We've also added a Depth-to-Bedrock setting where you can specify a minimum depth-to-bedrock distance analysis (setting) - NLCD 2016 (National Land Cover Database)

![](/images/TreesDepthtoBedrock.png)

## Constraint Map Legend

Once you run Geo Analysis,

![](/images/LegendConstraintMap.png)

## Southern Slope Aspect

In Geo Analysis, if any land is marked as a hazard because it exceeds the max slope (%) you set, we will continue to denote those high slope areas in yellow, but we will also shade Southern-facing slopes differently so that you can identify areas that still may be buildable.

![](/images/SouthernAspect.png)

## Geo Analysis Progress Notification Updated

When you run geo analysis on a parcel or set of parcels, you can now track the progress of the geo analysis task in a new notification that will appear in the top-right corner of the project page.

The notification will show how many parcels have been 'Queued', 'Running,' and 'Finished,' so you can track the status as the task runs.

![](/images/NewGeoAnalysisStatusNotification.png)

## Buildable acres data will show in parcel table after geo analysis run without refresh

Once you run Geo Analysis, you will now be able to immediately view/add in the 'Buildable Area (Acres)' column in the parcels table and see acreage values.

Previously, a browser refresh was required before the buildable area (acres) column would be available to add to the parcels table.

![](/images/BuildableAreaCalc.png)

# **Other New Features and Functionality**

## Quickly filter projects to see 'My Projects', 'Recently Viewed', and more

Under 'View Projects' click the new 'Filter By' dropdown menu above the project table to change which projects are listed. Filters include, "All Projects" (default), "My Projects", "Favorites", and "Recently Viewed"

![](/images/FilterByDropdown.png)

Did you know you can 'Favorite' a project by clicking the star icon next to the Project name?

![](/images/Favorite.png)

## NEW Layer! National Land Cover Database

Check out the new National Land Cover layer in the map layer menu (toggle on the layer from the layer dropdown). Once the layer is turned on, click the map to see land cover type for that area.

![](/images/NLCD.png)

## Project Map Zoom

When you add new assets to the project (e.g. adding parcels to a project via a buffer search), the map will now automatically zoom out to the new project area to show all the new assets that have been added to the map.

![](/images/ProjectZoom.png)

## Added Lat/Long to the main parcel pop up

We've also added a parcel's latitude and longitude coordinates to the parcel details pop-up.

* Click blue parcel marker
* Scroll down in pop-up box to find parcel details, including Latitude and Longitude

![](/images/LatLongPopUp.png)

***

# **Fixes**

* Fixed an issue where buffers were not showing correctly on some objects.
* Fixed an issue where adding a star rating in the parcel table would undo any filtering that was previously set on the table. Filter and rate away!
* Hid the old 'simplify distance' parameter field in advanced geo analysis which is no longer relevant.
* If you re-run geo analysis, only the new hazard drawings should be visible now. 
* Continued updates to backend infrastructure to support site stability.