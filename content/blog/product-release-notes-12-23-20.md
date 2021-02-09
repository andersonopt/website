+++
date = 2021-02-10T07:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 2/10/21"
[author]
image = ""
name = "Megan Kostanick"

+++
#### **Check out what's new in Anderson Optimization's latest release (v2.0.9).**

Want to make sure you're seeing the latest version of our site? [Follow the instructions here.](https://docs.andersonopt.com/Prospect/VersionReleaseNotes/latestversion/ "Get Latest Version")

_As always, we do our best to test updates before we release them, but please let us know if anything seems off or isn't working as expected._

***

# **Features and New Functionality**

## Updated Parcel Search

We updated our parcel search tools 

### New parcel search fields/options

Updated Parcel Search 

Reverse owner search 

Polygon search

### New parcel attribute columns

* **Last Updated (ReportAll)** - shows the year and quarter that ReportAll last refreshed their parcel data (typically at the county-level)
* For counties
  * **Zoning** - for counties that track and store a 'zoning' attribute this will be displayed
  * Legal Description - 
  * Land Market Value
  * School District ID

### New Grouping Columns 

## Export Button

As part of the redesign, we've added a new ['Exports' button](https://docs.andersonopt.com/prospect/export-project-data "'Exports' button") with each of the export options listed in one place. Well almost...the PDF Report tool is still available under the map toolbar > menu > report. We'll be moving that to the new Export button as a later update.

![](/images/exportbutton.png)

## Improved Map Pop-Ups

Based on your feedback, we've made some changes so that pop-ups on the map are a bit more user-friendly. We added the additional functionality:

* Drag and drop pop-ups

![](/images/drag-drop-popups.png)

* Close out all layer tabs in a pop-up window with a single click

![](/images/one-click-close.png)

* Moved trashcan icon to main asset pop-up menu

![](/images/trach-icon-pop-up.png)

## New Map Layers 

* BLM Administrative Units 

## Fixes

* Added back map layer functionality for some impacted layers after a server upgrade broke some existing functionality: legend, clicks, pop-up window info should all function as expected in the main application.
* Added a fix for a Google Maps bug that sometimes caused the map to jump around when clicking on the map. 
* Users should now be able to 'copy' geometry from uploaded KMZ
* Fixed project so that rating filtered assets doesn't remove the filter
* Fixed APN search in 'create project' flow
* 