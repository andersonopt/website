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

## App Interface Updates (screenshots, wait until UI tickets are fixed)

As we head towards our longer-term app redesign, we made some interim changes to the structure of some of our core code, which will help us more quickly work towards the longer-term look and feel of the app.

As a result, you'll see some changes to the app UI, but these are actually just a result of updating the code structure and not the longer-term app redesign, per se.

For example, tasks in the map sidebar now look like this: 

Create Project > Select Primary Asset: 

This is not the long-term redesigned look, but just a step to get us there more quickly. If you need any help finding something in the updated app interface, just reach out. In the long-run, tasks/the app interface will be much more intuitive, but

## NEW FEATURE: Geo Analysis Pre-scan

Want to run some constraint mapping analysis on an area before you start searching for parcels? 

Using the new geo analysis prescan task, you can now run geo analysis-like evaluations before pulling in actual parcels. 

## KMZ Import (Only include once complete)

## Import many assets from a KMZ 

## Import one asset from a KMZ

## **New Map Layers**

### Federal/State/Native American Owned Lands

Renamed this layer (was previously called 'Protected Areas'), so that it's more clear what type of data it shows. Turn on this layer to see land that is designated as federal-/state-/Native American- owned lands.

IMAGE

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