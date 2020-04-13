+++
date = 2020-04-14T06:00:00Z
draft = true
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

## Shapefile Exports

## Add Parcels by APN/PIN 

You can now search and add parcels to a project by searching for APN on the project map.

* Change the search input by clicking the button on the left of the map search field to toggle it to 'APN search'

![](/images/APN_Map_Search.png)

* Input the APN/PIN, STATE to search for that parcel. Any matching parcel(s) will be added as assets to the project and will be visible on the map and in the parcel table.

![](/images/Parcel_Added_APN.png)

You can also create a Greenfield-Land project and search for the starting parcel by APN search. 

![](/images/Land_Project_APN.png)

## Updated Project Organization: Folders

## New Column in Parcels Table: 'Closest Primary Asset' 

Easily see which sub or line is the corresponding 'closest primary asset' is to a given parcel (particularly helpful on projects with multiple primary assets).

In the parcels table, add in the column 'Closest Primary Asset' to see the associated sub/line that a parcel is nearest to.  

## Search Bar on Map - Zoom

## 

## User Documentation Linked in App 

***

# **Fixes**

* Parcel search geometry will now update if a primary asset is added/removed on an already created project. 
* Fixed an issue that was sometimes preventing Geo Analysis from completing. 
* Creating a super parcel on the asset map will now show the updated boundary without a refresh.
* Adjusted hazard drawings to appropriately handle areas with no bedrock layer data.