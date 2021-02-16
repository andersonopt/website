+++
date = 2021-02-15T18:45:57Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 2/15/21"
[author]
image = ""
name = "Megan Kostanick"

+++
#### **Check out what's new in Anderson Optimization's latest release (v2.1.0).**

_As always, we do our best to test updates before we release them, but please let us know if anything seems off or isn't working as expected._

***

# **Features and New Functionality**

## Updated parcel search and parcel attribute columns

This release included a number of updates to the parcel search tools across the platform. Check out some of the updates below.

### New parcel search fields/options

We updated a number of parcel search fields in the [advanced search section](https://docs.andersonopt.com/prospect/search-for-land/add-parcels-based-on-proximity-min.-lot-size/search-for-parcels-by-owner-name), including:

* [School District ID](https://docs.andersonopt.com/prospect/search-for-land/add-parcels-based-on-proximity-min.-lot-size/search-for-parcels-by-owner-name)
* [Search for other parcels from same owner (on the map)](https://docs.andersonopt.com/prospect/search-for-land/add-parcels-based-on-proximity-min.-lot-size/search-for-parcels-by-owner-name)

### New parcel attribute columns

**Parcel Name**

Updated the parcel name field to show the owner name(s) (if known) and the lot size - removed 'county' to shorten name length (you can still view the parcel's county by turning on the county column in the parcels list - parcels list > Columns > check box for 'County')

**Parsed/Normalized Land Owner Columns**

In addition to the standard 'Owner' column, we've also created some additional columns that will break out ownership information into more parsed and normalized columns so that it's easier to upload into a CRM or mailing system.

* **Owner Group** - indicates what entity type the owner is: company, gov, person, etc.
* **Primary Owner / Company Name** - parsed, includes proper capitalization, consistent formatting
* **Secondary Owner** (if app.)
* **Primary Owner First Name**
* **Primary Owner Last Name**
* **Secondary Owner First Name**
* **Secondary Owner Last Name**

![](/images/owner_fields_new.png)

ReportAll (our parcel data provider) made some additional fields available  that we can pull in for new parcel searches if there is data for those attributes in the county dataset. Columns will not show up retroactively, but will apply for any newly added parcels moving forward. _Note: columns will show up as selectable if there is data for that column for at least 1 parcel on the project._

Here are just a few of the new columns that may be available for parcel data:

* **Last Updated (ReportAll)** - year and quarter that ReportAll last received updated data from county
* **Zoning**
* **Legal Description**
* **Land Market Value**
* **School District ID**
* **Muni Name**

![](/images/new_columns.png)

### Parcel Grouping Columns

These columns replace the old 'Desired Project Acres' parcel search to give users more visibility into all parcels searched:

* **Total Acres - Same Land Owner:** Sum of lot size for parcels with same owner name (on project)
* **Total Acres - Contiguous Parcels:** Sum of lot size for contiguous parcel group
* **Contiguous Parcels - Group Number:** Group ID for a set of contiguous parcels

![](/images/new_fields_2.png)

## (Almost) all exports in one place

As part of the redesign, we've added a new ['Exports' button](https://docs.andersonopt.com/prospect/export-project-data "'Exports' button") to the project so that each of the export options is listed in one place. Well almost...the PDF Report tool is still available under the map toolbar (map toolbar > menu > report). We'll be moving that to the new export button as a future update.

![](/images/exportbutton.png)

## Improved map/layer pop-ups

Based on your feedback, we've made some changes so that pop-ups on the map are easier to use:

* Drag and drop pop-ups on the map

![](/images/drag-drop-popups.png)

* Close out all layer tabs in a pop-up window with a single click

![](/images/one-click-close.png)

* Moved trashcan icon to main asset pop-up menu

![](/images/trach-icon-pop-up.png)

## Fixes

* Adjusted some layer functionality functionality that broke when we upgraded to a new layer server
* Added a fix for Google Maps library bug that occasionally caused the map to jump around on click
* Users should now be able to 'copy' geometry from uploaded KMZ file layer
* Fixed project so that rating filtered assets doesn't remove the filter
* Fixed APN search in 'create project' flow