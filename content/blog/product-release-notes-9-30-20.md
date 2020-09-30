+++
date = 2020-09-30T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 9/30/20"
[author]
image = ""
name = "Megan Kostanick"

+++
#### _Check out what's new in Anderson Optimization's latest release (v1.5.0)._

Want to make sure you're seeing the latest version of our site? [Follow the instructions here.](https://docs.andersonopt.com/Prospect/VersionReleaseNotes/latestversion/ "Get Latest Version")

***

# **Features and New Functionality**

We made a number of backend changes with this release that will continue to help us work towards the redesigned look and feel of the platform. We overhauled the map backend and updated quite a bit of code architecture. Not all the updates will be directly visible to users, but all of them help us build towards are larger redesign.

You may notice some interface changes from these updates, including:

**Hidden sidebar/larger map:**

![](/images/side_bar_map.png)

**Updated map pop-up windows:**

![](/images/updated_popup.png)

**More streamlined project creation flow (AND 'County' added as a field):** In addition to these interface updates, we also worked on a few new features:

![](/images/createprojectflow.png)

## Modify Buildable Area Output 

Want to manually update the buildable area output to remove a hazard not identified in the automated buildable area analysis? Now, you can mark up a parcel and update the buildable area constraint map and associated acreage! 

Run the buildable area analysis on the parcel, and then go to the asset detail page (Click on the blue parcel marker, then click 'Select' in the pop up)

![](/images/select_link.png)

On the asset detail page map, turn on the drawing tools (Drawing menu > User Drawing Tools) 

![](/images/drawing_tools_composite.png)

## KML Export Settings

**Sub-folders for Hazards**

Exported KML files now group hazards into sub-folders based on the hazard type, so all slope polygons are in a sub-folder for slope, etc. This makes it simple to turn on and off entire hazard categories in Google Earth at once (e.g. you can hide all slope hazard shading or just view the buildable area shading).

![](/images/kmlexport_hazardfolders.png)

**Group hazards by owners and parcels**

In conjunction, we've added an additional setting in the KML export modal to group exported layers by parcel. Use this setting if you want to easily hide/show individual parcels (and all their associated layers).

![](/images/groupbyowners_parcels.png)

## **New Map Layers**

Check out some of the new nationwide layers that were added this month.

### School Districts

![](/images/schooldistrictslayer.png)

### Railroads

![](/images/railroads.png)

### Mines and Mineral Resources

![](/images/mines_mineral_resources_layer.png)

### Oil and Natural Gas Wells

![](/images/wells_layer.png)

### Cell Towers

![](/images/cell_towers_layer.png)

### RE-Powering Mapper

"[EPA’s RE-Powering Mapper](https://www.epa.gov/re-powering/re-powering-mapper "RE-Powering Mapper"), an online interactive web application, allows users to visualize EPA’s information about renewable energy potential on contaminated lands, landfills and mine sites."

![](/images/re-powering_mapper_layer.png)

# Fixes

* Added back parcel 'Owner' search to asset detail pop up (click on parcel, scroll down to asset tasks, and search by Owner).
* Fixed issue where map address search sporadically failed to complete the search.