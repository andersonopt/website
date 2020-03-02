+++
date = 2020-03-03T07:00:00Z
draft = true
featured = true
image = ""
tags = ["Releases"]
title = "Product Release Notes: 3/2/20"
[author]
image = ""
name = "Megan Kostanick"

+++
Check out what's new in Anderson Optimization's latest release (v1.1.17). Make sure you're running the latest version of Anderson Optimization to see these changes.

***

# Features and New Functionality

### **View All Parcel Details in a Single Pop-Up**

No need to toggle the Parcels layer on and off to see all the detailed parcel info for any parcels you've already added to a project.

* Click on a parcel in your project
* In the parcel details pop-up expand the new details section to see all parcel attribute details.

SCREENSHOT

### **NEW Data Layer: USA Soil Map Units**

Curious about the soil type in a project area? Overlay the USA Soil Map layer in the layer manager to quickly check.

* From the **map**, click '**Layers**' button in the top-right toolbar.
* Toggle on the layer by selecting the **USA Soil Map** option in the drop-down menu.
* Once the layer loads, click on the map to see the soil details pop-up window.

![](/images/USASoilsMap.png)

### Recently Created Projects Now at Top of Project List

Trying to find that project you recently created? New projects will now appear at the top of the project list by default (_pro tip: double-click the header of any column in a data table to change the sort order data based on that data column_).

![New sort order by most recent](/images/Sortorder.png "SortOrder")

***

# Fixes

* **New York data layers:** Fixed issues that impacted NY data layers (NYSEG, all National Grid - NY layers).
* **Distance units:** Distance unites now default to the correct unit (based on user settings) and you can now filter data tables off of 'distance' with operators like: 'greater than', 'less than', etc.
  * _e.g. "filter parcel table to show all parcels < 1 mi. (from the primary asset)"_
* **Created date:** Made some changes to make it easier to filter data tables based on 'Created Date'.
* **Buffer polygons:** fixed an issue where buffers weren't creating a buffer polygon as expected.

***

_Questions? Feedback? Reach out to megan@andersonopt.com_