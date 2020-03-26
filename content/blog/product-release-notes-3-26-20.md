+++
date = 2020-03-26T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 3/26/20"
[author]
image = ""
name = "Megan Kostanick"

+++
#### _Check out what's new in Anderson Optimization's latest release (v1.2.9)._

Want to make sure you're seeing the latest version of our site? Follow the instructions below.

1. Sign in to your [Anderson Optimization](https://energy-opt.auth0.com/login?state=g6Fo2SBzNTN6Sm1hM2tnUk11cXpmUG9NNERkMHd4N1lObmlyeKN0aWTZIFdaVjNDdHFSR2lGSTV6Uk9DY3BTcmlUODFJQTlaMlIyo2NpZNkgdDVqOElEcG9scERBOHY5Vm1DQUd4dWpiakwwN29OWUg&client=t5j8IDpolpDA8v9VmCAGxujbjL07oNYH&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fandersonopt.com%2Fauth%2Fcallback&audience=https%3A%2F%2Fenergy-opt.auth0.com%2Fuserinfo&nonce=mSRK_Q3Uw7s\~HbtnLshx8fxuUX1l7H73&scope=openid%20profile%20email&auth0Client=eyJuYW1lIjoiYW5ndWxhci1hdXRoMCIsInZlcnNpb24iOiIzLjAuNCIsImVudiI6eyJhdXRoMC1qcyI6IjkuMTAuNCIsImF1dGgwLmpzIjoiOS4xMC40In19 "login") account.
2. On any page of the AO website, press CTRL+SHIFT+R to force a hard refresh of the browser _(Mac Users: Command+SHIFT+R)._
3. This will force the application to refresh and update to the latest version.
4. Scroll down to the bottom of the AO window and check the version number in the bottom right corner of the footer.

***

# **Geo Analysis Updates**

We released an updated version of Geo Analysis. Check out the new features!

## New Geo Analysis Task

Since we've added quite a bit of new functionality and overhauled the backend engine of Geo Analysis, we published the new tool while still maintaining access to the old version (directly below the new one).

We will remove the old Geo Analysis task once we've fully validated the new version. Try out the new one, and let us know what you think!

![](/images/NewGeoAnalysis.png)

## Tree Cover and Depth-to-Bedrock in New Geo Analysis

You can now evaluate and automatically remove land with tree cover from your buildable acreage calculations and constraint maps. (Data source: National Land Cover Database (NLCD) 2016; Multi-Resolution Land Characteristics (MRLC) consortium).

* Check the 'Remove trees from buildable area' box to remove tree cover from your buildable acreage and constraint map.
* Under 'show advanced,' you can choose to specify the max tree cover percentage. We'll then exclude any land with a higher percent tree cover from your buildable area calculations.

We've also added an optional Depth to Bedrock parameter in the new Geo Analysis task (Data Source: USA Soils Bedrock Depth; USDA NRCS, Esri).

* Set a minimum depth to bedrock value, if desired. (Double-click the units (e.g. ft) to choose a different unit for that field, if preferred).
* Under 'show advanced,' you can set a custom buffer around that hazard as well, if desired.

![](/images/TreesDepthtoBedrock.png)

## Constraint Map Legend

We've added a legend to the map for the new Geo Analysis constraint maps.

* Click on any of the constraint layers in the legend to toggle that layer on and off.

![](/images/LegendConstraintMap.png)

## Southern Slope Aspect

See which slope hazards are southern-facing in the new Geo Analysis constraint maps.

* We now style southern-facing slopes that exceed your max slope % (set in the new Geo Analysis parameters box) with slightly different styling than non-Southern slope hazards.

![](/images/SouthernAspect.png)

## Geo Analysis Progress Notification Updated

When you run geo analysis on a parcel or set of parcels, you can now track the progress of the geo analysis task in a new notification that will appear in the top-right corner of the project page.

The notification will show how many parcels have been 'Queued', 'Running,' and 'Finished,' so you can track the status as the task runs.

![](/images/NewGeoAnalysisStatusNotification.png)

## Buildable Area (Acres) Now Immediately Viewable in Parcels Table

You will now be able to immediately see the 'Buildable Area (Acres)' column and calculated values for each parcel in the parcel table after running Geo Analysis.

Previously, a refresh was required to stamp the acreage on the parcels.

* Not seeing that column in your table? Make sure you've added it via the 'Columns' button on the right.

![](/images/BuildableAreaCalc.png)

# **Other New Features and Functionality**

## Quickly Filter Projects to See 'My Projects', 'Recently Viewed', and More

Under 'View Projects,' click the new 'Filter By' dropdown menu above the project table to change which projects are visible in the projects list.

* Filters include, "All Projects" (default), "My Projects", "Favorites", and "Recently Viewed"

![](/images/FilterByDropdown.png)

* You can 'favorite' a project by going to that project's page and clicking the star icon to the right of the project name.

![](/images/Favorite.png)

## NEW Layer! National Land Cover Database

Check out the new National Land Cover layer in the map layer menu (toggle on the layer from the layer dropdown). Once the layer is turned on, click the map to see land cover type for that area.

![](/images/NLCD.png)

## Project Map Zoom

When you add new assets to the project (e.g. adding parcels to a project via a buffer search), the map will now automatically zoom out to the new project area to show all the new assets that have been added to the map.

![](/images/ProjectZoom.png)

## Added Lat/Long to Parcel details Pop-Up

* Click the blue parcel marker for a parcel to see the details.
* Scroll down in pop-up to see parcel details including Latitude and Longitude now.

![](/images/LatLongPopUp.png)

***

# **Fixes**

* Fixed an issue where buffers were not showing correctly on some objects.
* Fixed an issue where adding a star rating in the parcel table would undo any filtering that was previously set on the table. Filter and rate away!
* Hid the old 'simplify distance' parameter in advanced Geo Analysis as it's no longer relevant to how we render hazard drawings.
* If you re-run geo analysis, after a prior geo analysis run, the newest hazard drawings should immediately display without a refresh.
* Updated more backend infrastructure to support site stability and increase ease of new feature deployment.