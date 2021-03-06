+++
date = 2020-08-10T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 8/10/20"
[author]
image = ""
name = "Megan Kostanick"

+++
#### _Check out what's new in Anderson Optimization's latest release (v1.5.0)._

Want to make sure you're seeing the latest version of our site? [Follow the instructions here.](https://docs.andersonopt.com/Prospect/VersionReleaseNotes/latestversion/ "Get Latest Version")

***

# **Features and New Functionality**

This was our biggest release to date. Check out all the new features and updates below, and don't hesitate to reach out if you'd like to learn more about any of these changes!

## App Interface Updates

In order to get to our longer-term app redesign, we needed to update parts of our code structure to make that longer-term vision feasible.

As a result, you'll see some interim updates to the app interface -- these changes are just a stepping stone to get us toward our longer-term redesign, but we hope they'll already make the app simpler and easier to use.

**Selecting primary assets when creating a project**

![](/images/add_assets_updated.png)

**Tasks have a new (interim) look**

![](/images/parcel_search.png)

![](/images/asset_tasks_map_sidebar.png)

## (Updated) Buildable Area Analysis

The feature-formerly-known-as-'Geo Analysis' has a new name, new look, and more options to customize which constraints you analyze and how you analyze them.

* Choose exactly which hazards are analyzed (e.g. can completely turn off wetlands, flood, or slope analysis, if desired).
* Now there's also the option to analyze a hazard category on the map but to still keep that area included in buildable area calculations.

![](/images/buildablearea_form.png)

More easily automatically filter out sections of buildable area that are too small/isolated for actual development.

* In the new Buildable Area Analysis form, select the 'Buildable Area Settings' tab.
* Specify a minimum buildable acreage size.
* Specify how you want us to remove slivers (options: 'normal' and 'aggressive').

![](/images/buildable_area_settings.png)

## (New Feature) Prescan

Want to evaluate what areas are most buildable _before_ you start searching for specific parcels? Now, you can now run a buildable area analysis evaluation on much larger geographic areas to help inform where you search for parcels.

Trace out an area to evaluate, then run the Prescan analysis, and see what areas to target for further siting and parcel searches.

_(Note: The first iteration of this feature is only available at the project-level (not yet available on the View Assets map))._

* Create a new project near to the area you want to evaluate (can pick any project type).
* On the project map, draw a polygon (Drawing menu > User drawing tools > select one of the polygon icons in the design toolbar).

![](/images/draw_polygon.png)

![](/images/polygon_drawn_on_map.png)

* After drawing the polygon, select the hand icon on the map to turn off the drawing tool.
* Pull up the Prescan tool by left-clicking the polygon > click Run Task > click Project Tasks > select Prescan.

  ![](/images/prescan_task.png)
* Fill in your parameters for how you want to evaluate buildable area.
* Click Run to start the analysis.

![](/images/prescan_form.png)

It may take a few minutes for the analysis to start up, but it will begin to breakdown the polygon into separate sections and the constraint map will begin to load in.

For large Prescan areas, this process could take upwards of 30+ minutes to complete. You can close the project/window and the analysis will continue to run in the background. So, feel free to go take the dog for a walk and the analysis will be available when you return.

![](/images/prescan_constraint-map.png)

## (Updated) Import Assets from KML/KMZ

We've added additional functionality to make it easier to bulk import assets from a KML/KMZ file.

**Bulk Import**

* Drag and drop KML/KMZ file onto any AO map
* Pop-up window will show all assets in file.
* Click 'Create Assets' to import all assets. (To import only select assets, use the filter tab or CTRL+Click to select multiple specific rows).

![](/images/kml_import_window.png)

* Map what each type of geometry represents in the original KML file to the asset type in AO (land, transmission line, substation)

  ![](/images/asset_mapping_kml_import.png)
* _(Optional)_ Map attribute data fields from the original KML file to the respective AO fields, if desired. OR click 'Skip' and we'll include that data in the 'Notes' and/or 'Description' column for each asset).

![](/images/datafield_mapping.png)

![](/images/data_field_mapping_2.png)

* Save assets by clicking 'Save'.

![](/images/save_assets_kml.png)

## Large-Scale Project Tools

We introduced new tools to help efficiently site on very large-scale projects.

### Combo Buffer

Allows you to create a parcel search buffer around both transmission lines and substations in one project.

* In the Parcels list, scroll down to the Combo Buffer task
* Enter a buffer distance for each type of asset that you want to search around
* Click ‘Run Task’

![](/images/combo_buffer.png)

* This will add an orange buffer polygon around all applicable grid assets.

![](/images/combo_buffer_map.png)

### Large Parcel Search

The new 'large parcel search' task allows you to search for parcels even across large geographic areas with many lines and substations

* To pull up the large parcel search task, left-click the orange buffer polygon on the map (created in the previous step).
* Click Run Task > Project Tasks > Large Parcel Search

![](/images/large_parcel_search_task-1.png)

* In the modal, enter the minimum acreage (lot size) per parcel.
* Click 'Get Count' to see the max number of parcels that meet this criteria.

![](/images/largeparcelsearch_getcount.png)

* Click 'Run' to pull the parcels into the project

### Project-Level Buildable Area Analysis

For projects with a large number of parcels, use the new Project-Level Buildable Area Analysis task to create constraint maps for all parcels on a project.

This version of the tool can use a more efficient method to queue up parcels so it will run much faster than using the standard buildable area analysis tool for a large volume of parcels.

* On a project, go to the Parcels list.
* Scroll down below the listed parcels to access the 'Project Buildable Area Analysis' task.
* Enter the parameters just as you normally would in the geo analysis form.

![](/images/project_buildableareaanalysis.png)

## **New Map Layers**

### Substations and Transmission Line Layers (OpenStreetMap)

We've integrated in new grid infrastructure layers from OpenStreetMap -- an open-source data site.

* Check out the new layers in the Layers menu and save assets directly from those layers to a project

  ![](/images/osm_layers.png)
* On an existing project, conduct a buffer asset search and choose which dataset you want to pull from (EIA or OpenStreetMap).

![](/images/osm_buffer_asset_search.png)

### Federal/State/Native American Owned Lands

Turn on this layer to see federal, state, and native-owned land.

![](/images/fed_state_lands.png)

### Building Footprints

This layer shows building locations across the U.S.. Make sure to zoom in to see this layer.

![](/images/building_footprints.png)

### Soil Albedo

See variances in reflected solar radiation from the ground.

![](/images/soilalbedo.png)

### Wind Siting Layers

We added a number of layers helpful in the wind siting process. Check out the following layers:

* Wind Turbine Database - Turbine Locations [(USWTDB; LBNL, USGS, AWEA)](https://eerscmap.usgs.gov/arcgis/rest/services/uswtdb/uswtdbDyn/MapServer)
* Wind Turbine Location Data [(USFWS & FAA)](https://www.fws.gov/southwest/es/Energy_Wind_FAA.html)
* Wind: Land-Based Wind Speed 80m [(NREL Wind Prospector)](https://maps.nrel.gov/wind-prospector/?aL=xJldDB%255Bv%255D%3Dt%26xJldDB%255Bd%255D%3D1&bL=groad&cE=0&lR=0&mC=41.612763227321004%2C-106.16369962692261&zL=16)
* Wind: Land-Based Wind Speed 100m [(NREL Wind Prospector)](https://maps.nrel.gov/wind-prospector/?aL=xJldDB%255Bv%255D%3Dt%26xJldDB%255Bd%255D%3D1&bL=groad&cE=0&lR=0&mC=41.612763227321004%2C-106.16369962692261&zL=16)
* Wind Resources Onshore [(NREL; EIA)](https://www.eia.gov/maps/layer_info-m.php)

![](/images/windspeed.png)

## Right-click to Zoom To Asset on Map

In the asset list, right-click a row to access the new 'Zoom to' button and the project map will zoom to that asset.

![](/images/zoom_to.png)

# **Fixes**

* Fixed issue with heatmap menu popping up
* User-created parcels now have lot size and parcel markers again
* Adjusted buildable acreage rounding
* In parcel search, users must click 'Get Count' if search parameters updated
* Fixed an issue where saved excel templates were sometimes not exporting data
* Copy project function allows projects to be copied to other states again.