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

_This was our biggest release to date. Read through to learn more about all the new features and updates available in our latest release._

## App Interface Updates

In order to get to our longer-term app redesign, we needed to update parts of our code structure to make the long-term changes feasible; as a result, you'll see some interim updates to the app interface -- these changes are just a stepping stone to get us toward our longer-term redesign, but we hope they'll already make the app simpler and easier to use.

Here are some of the main areas that changed.

##### **Selecting primary assets (create project flow)**

_Once you choose your method a pop up window will come up for you to select/create your asset(s)._

![](/images/primary_asset_selection.png)

##### **Tasks have a new (interim) look**

_Tasks have been broken out into more modular/disparate task sections. This interim change will make it easier for us to make tasks more intuitive in the long-term redesign._

![](/images/parcel_search.png)

![](/images/asset_tasks_map_sidebar.png)

## (New Feature) Prescan

\*Buildable Area = purple

Want to evaluate what areas are most buildable before you start searching for parcels? You can now run a geo analysis-like evaluation on much larger geographic areas -- before you pull in parcels.

Using the new Prescan tool, trace out an area to evaluate and create constraint mapping to hone in on the right areas to continue siting in.

* First iteration of this feature is only available the project-level (not View Asset map).
* Create new project near to the area you want to evaluate (can pick any project type, just pick a starting primary asset nearby the area you want to look at).
* On the project map, **draw a polygon** (Drawing menu > User drawing tools > select one of the polygon icons

![](/images/draw_polygon.png)

![](/images/polygon_drawn_on_map.png)

![](/images/prescan_task.png)**include how to toggle it on and off via the drawing menu

## (Updated) Buildable Area Analysis

The feature formerly known as "Geo Analysis" has a new name, new look, and more options to customize what constraints you analyze.

## (Updated) Import KML Data

We've added additional functionality to make it even easier to import a KML/KMZ file and save assets directly to your projects in AO.

* Bulk import many assets at once
* 

## Large Scale Project Tools

We introduced a few new tools to help users efficiently site for very large-scale projects.

### Combo Buffer

Description

SCREENSHOT

### Large Parcel Search

Description

SCREENSHOT

### Project-Level Buildable Area Analysis

Description

SCREENSHOT

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

## Right-click to Zoom To Asset on Map

![](/images/zoom_to.png)

# **Fixes**

* Heatmap menu should not pop up without hovering directly over it
* User-created parcels now have lot size and parcel markers again
* Adjusted buildable acreage rounding
* In parcel search, users must click 'Get Count' if search parameters updated
* Fixed an issue where saved excel templates were sometimes not exporting data
* Copy project function allows projects to be copied to other states again.