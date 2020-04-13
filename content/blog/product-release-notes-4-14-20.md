+++
date = 2020-04-14T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = []
title = "Product Release Notes: 4/14/20"
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

# **Features and New Functionality**

## PDF Report Settings

Automatically create a PDF report for a project with one parcel per page and automated image labeling and image details.

* From the map, select 'menu'
* Click 'Report'

![](/images/Report_Menu.png)

* Select the new 'Automated project report' option. (To access the original report settings/customization options, select 'Custom report').
* Click 'Run project report'

  ![](/images/Automated_Project_Report.png)
* The reporting tool will automatically move the map around to grab screenshots of each parcel on the project and update the image name/details. Sit back, relax, and wait for the report to download (and please don't click the map while this is running so we can grab the right images).
* Image title will auto-populate with the parcel name (County-Owner-LotSize)
* Image description will auto-populate APN/PIN and site address

![](/images/Auto_report_window.png)

* The PDF report will automatically download to your browser once complete.

## Shapefile Exports

Shapefile exports now also include geo analysis constraint map layers as well as more attribute data for parcels and hazards. 

* To export a project as a shapefile, click 'menu' on the map toolbar. 
* Select 'Export shapefile' 

![](/images/Export_shapefile.png)

## Add Parcels by APN/PIN

You can now search and add parcels to a project by searching for a parcel's APN/PIN directly in the map search bar.

* Change the search input to 'APN' by toggling the button on the left of the map search bar.

![](/images/APN_Map_Search.png)

* Input the APN/PIN followed by a COMMA and then the STATE (full name or state abbreviation both ok). Any matching parcel(s) will be added as assets to the project map and the parcel table.

![](/images/Parcel_Added_APN.png)

You can also create a Greenfield-Land project and search for the primary asset parcel by APN.

![](/images/Land_Project_APN.png)

## Updated Project Organization: Folders

We've updated what we previously called 'Project Groups' to make it simpler to organize projects across your team.

* Easily create a workspace and associated project folders to manage and organize projects. You can either share one workspace across your whole team (and thus the same project folder structure) OR you can create your own workspaces if you would prefer to manage folders separately.

  ![](/images/Folders.png)

## New Column in Parcels Table: 'Closest Primary Asset'

Easily see which sub or line is the corresponding 'closest primary asset' to a given parcel (particularly helpful on projects with multiple primary assets).

In the parcels table, add in the column 'Closest Primary Asset' to see the associated primary asset that a parcel is nearest.

![](/images/Closest_Primary_Asset.png)

## Map Search Automatically Zooms to Address or Lat/Long Search

When you search for an address or latitude/longitude coordinates on the map, the map will now automatically zoom to the search area. 

![](/images/Search_Bar_Zoom.png)

## Buffer and Min Acres Now in Same Parameters Section

## Geo Analysis Search - Southern Aspect Checkbox

## 

## User Documentation Linked in App

Access our [user documentation](https://docs.andersonopt.com/workflow-overview/ "User Documentation") directly from the app. Click the 'User Documentation' link in the top header of any AO window. 

![](/images/User_Documentation_2.png)

***

# **Fixes**

* Parcel search geometry will now update if a primary asset is added/removed on an already created project.
* Fixed an issue that was sometimes preventing Geo Analysis from completing.
* Creating a super parcel on the asset map will now show the updated boundary without a refresh.
* Adjusted hazard drawings to appropriately handle areas with no bedrock layer data.