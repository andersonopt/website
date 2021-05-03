+++
date = 2021-04-30T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 5/3/21"
[author]
image = ""
name = "Megan Kostanick"

+++
#### **Check out what's new in Anderson Optimization's latest release (v2.3.0)**

_As always, we do our best to test updates before we release them, but please let us know if anything seems off or isn't working as expected._

***

# **New Features and Enhancements**

## New Project View - Larger Map

Larger project map makes it easier to view all key map details of a project in one view.

![](/images/new_project_map_view.png)

View asset lists on project by expanding/collapsing new asset drawer (drawer can be dragged/dropped to desired height as well).

![](/images/drawer_view.png)

## Filter, Columns, and Export buttons have moved

As we continue to work through the platform redesign, some buttons have moved around/changed look on the project asset tabs:

* Filter, Columns, and Export buttons are now above the asset table view

![](/images/new_columns_menu.png)

## New style editor and templates

More easily [create and save custom asset and drawing styles](https://docs.andersonopt.com/prospect/advanced-tools/custom-style-assets-and-drawings "create and save custom asset and drawing styles") with the new style editor and template tool.

![](/images/style_template_new.png)

## Add notes or edit asset name via asset pop up

Click the new pencil icon in the asset pop up to edit the asset name and to [save notes about a parcel](https://docs.andersonopt.com/prospect/reviewing-parcels/add-parcel-notes).

![](/images/edit_asset.png)

## Updated asset detail page

The new [asset detail page](https://docs.andersonopt.com/prospect/advanced-tools/asset-detail-page "asset detail page") automatically opens as a new tab (and can be accessed from the asset pop up on any map or via asset list).

![](/images/asset_detail_new_tab.png)

This will open the new asset detail page. On this page, users can edit details about an asset, save notes, etc.

![](/images/asset_new_tab.png)

## New US Nationwide Layers

### Updated Solar Resource/Irradiance Layers

We added more detailed versions of the previous Solar Resource Potential layers with more detailed versions of the layer from NREL's NSRDB Data Viewer:

\- Solar Resource - Multi Year PSM Direct Normal Irradiance  
\- Solar Resource - Multi Year PSM Global Horizontal Irradiance

![](/images/solarresourcepotential.png)

### Township, Range, Section - PLSS Viewer

Locate land by township, range, and section with this new layer. Try switching to the 'Terrain' basemap setting for easier viewing of this layer if the source font is hard to see over the normal satellite  imagery basemap.

![](/images/plssviewer.png)

# Fixes

* Adjusted a number of tools related to composite geometry to ensure that the buildable area polygon gets updated/behaves as expected. 
* Fixed full screen map mode on asset detail page so that map toolbar is still visible
* Added message in UI for failed APN parcel searches
* Buildable area (acres) column in parcels list should now update to the latest values Buildable Area Analysis values without refresh
* Re-added export KML option to View Assets map