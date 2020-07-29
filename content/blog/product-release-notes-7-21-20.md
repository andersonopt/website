+++
date = 2020-07-21T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 7/21/20"
[author]
image = ""
name = "Megan Kostanick"

+++
#### _Check out what's new in Anderson Optimization's latest release (v1.3.16)._

Want to make sure you're seeing the latest version of our site? [Follow the instructions here.](https://docs.andersonopt.com/Prospect/VersionReleaseNotes/latestversion/ "Get Latest Version")

***

# **Features and New Functionality**

This was a biggest release to date. Check out all the new features and functionality to make sure you're siting as effectively as possible.

## App Interface Updates (screenshots, wait until UI tickets are fixed)

As we head towards our longer-term app redesign, we made some interim changes to the structure of some of our core code, which will help us more quickly work towards the longer-term look and feel of the app.

As a result, you'll see some changes to the app UI, but these are actually just a result of updating the code structure and not the longer-term app redesign, per se.

For example, tasks in the map sidebar now look like this:

Create Project > Select Primary Asset:

SCREENSHOT of TASKS (sidebar/below grid?)

This is not the long-term redesigned look, but just a step to get us there more quickly. If you need any help finding something in the updated app interface, just reach out. In the long-run, tasks/the app interface will be much more intuitive, but

## NEW FEATURE: Geo Analysis Pre-scan

Want to run some constraint mapping analysis on an area before you start searching for parcels?

Using the new geo analysis prescan task, you can now run geo analysis-like evaluations before pulling in actual parcels.

Recommended process:

* Create new project near to the area you want to evaluate using the prescan tool.
* Draw a polygon Drawing menu > User drawing tools > polygon icon to mark out the area of the map that you want to analyze.
* 

## Updated Buildable Area Analysis

Renamed this feature from geo analysis to buildable area analysis and made some updates to the tool.

* Updated Form
* Project geo analysis

## (Updated) Import KML Data

We've added additional functionality to make it even easier to import a KML/KMZ file and save assets directly to your projects in AO.

* Bulk import many assets at once
* 

## **New Map Layers**

### Federal/State/Native American Owned Lands

Renamed this layer (was previously called 'Protected Areas'), so that it's more clear what type of data it shows. Turn on this layer to see land that is designated as federal-/state-/Native American- owned lands.

![](/images/fed_state_lands.png)

### Building Footprints 

This layer shows building locations across the U.S.. Make sure to zoom in close to the map to view the building polygons. 

![](/images/building_footprints.png)

### Soil Albedo

See how much solar radiation is reflected from the ground (particularly helpful for sites leveraging bifacial panels).

![](/images/soilalbedo.png)

### Substations and Lines (OpenStreetMap)

### Wind Siting Layers

We added a number of layers helpful in the wind siting process. Check out the following layers:

* Wind Turbine Database - Turbine Locations [(USWTDB; LBNL, USGS, AWEA)](https://eerscmap.usgs.gov/arcgis/rest/services/uswtdb/uswtdbDyn/MapServer)
* Wind Turbine Location Data [(USFWS & FAA)](https://www.fws.gov/southwest/es/Energy_Wind_FAA.html)
* Wind: Land-Based Wind Speed 80m [(NREL Wind Prospector)](https://maps.nrel.gov/wind-prospector/?aL=xJldDB%255Bv%255D%3Dt%26xJldDB%255Bd%255D%3D1&bL=groad&cE=0&lR=0&mC=41.612763227321004%2C-106.16369962692261&zL=16)
* Wind: Land-Based Wind Speed 100m [(NREL Wind Prospector)](https://maps.nrel.gov/wind-prospector/?aL=xJldDB%255Bv%255D%3Dt%26xJldDB%255Bd%255D%3D1&bL=groad&cE=0&lR=0&mC=41.612763227321004%2C-106.16369962692261&zL=16)
* Wind Resources Onshore [(NREL; EIA)](https://www.eia.gov/maps/layer_info-m.php)

![](/images/windspeed.png)

# **Fixes**

* Heatmap menu should not pop up without hovering directly over it
* User-created parcels now have lot size and parcel markers again
* Adjusted buildable acreage rounding
* In parcel search, users must click 'Get Count' if search parameters updated
* Fixed an issue where saved excel templates were sometimes not exporting data
* Copy project function allows projects to be copied to other states again.