+++
date = 2020-06-03T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Version Release Notes: 6/3/2020"
[author]
image = ""
name = "Megan Kostanick"

+++
#### _Check out what's new in Anderson Optimization's latest release (v1.4.0)._

Want to make sure you're seeing the latest version of our site? [Follow the instructions here.](https://docs.andersonopt.com/Prospect/VersionReleaseNotes/latestversion/ "Get Latest Version")

***

# **New Features & Functionality**

## Improved Backend Code for Projects

We made some important behind-the-scenes updates that will allow us to develop new features and troubleshoot issues more seamlessly.

You shouldn't notice any changes in the app directly, but do let us know if anything isn't working as expected.

## New Look: Asset Lists on Projects

You'll now find each of the Asset lists (parcels, transmission lines, subs, etc.) available in horizontal tabs below the project map (rather than stacked vertically).

This is a step towards our longer term interface redesign efforts.

![](/images/asset_tabs.png)

## View and Save Nearby Grid Infrastructure to a Project with the New Sub and Line Map Layers

Now you can save grid assets to your project directly from the new substation and transmission line map layers.

* From the project map, on the map toolbar > Select 'Layers'
* Click either the Transmission Line layer or Substations layer to toggle on the layer
* Click a line or sub on the map layer to see info about it
* If you want to save the grid infrastructure to your project, click the new 'Save asset to project' button. 
* Once you've added any assets you wanted to save from the layer, toggle the layer off (via the Layers menu) to hide the layer. 
* Any lines/subs you saved from the layer will now be saved to the project.

![](/images/save_asset_to_project.png)

# Fixes 

*  Under the Asset lists, additional primary assets can now be added after the project is created. 
  * If you need to add additional primary assets to the project, go to the Primary Asset list, click 'Edit step' > 'Advanced Tools' > choose method to add additional asset (create asset or pick from existing assets).
* Made some adjustments to the CDFI Opportunity Zones layer so it only shows polygons for tracts designated as opportunity zones. 
* Added functionality to search for parcels by parcel IDs that include underscore symbols in the ID number.