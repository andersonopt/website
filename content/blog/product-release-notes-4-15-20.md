+++
date = 2020-04-15T06:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 4/15/20"
[author]
image = ""
name = "Megan Kostanick"

+++
#### _Check out what's new in Anderson Optimization's latest release (v1.3.9)._

Want to make sure you're seeing the latest version of our site? [Follow the instructions here.](https://docs.andersonopt.com/Prospect/VersionReleaseNotes/latestversion/ "Get Latest Version")

***

# **Features and New Functionality**

## PDF Report Settings

Automatically create a PDF report for a project with one parcel per page and automated image labeling and image details.

* Image title will auto-populate with the parcel name (County-Owner-LotSize).
* Image description will auto-populate APN/PIN and site address (if available).

Steps to run new report type:

* From the map, select 'menu'.
* Click 'report' in the dropdown list.

![](/images/Report_Menu.png)

* Select the (new) 'Automated project report' option. (To access the original report settings/customization options, select 'Custom report').
* Click 'Run project report'.

  ![](/images/Automated_Project_Report.png)
* The reporting tool will automatically move the map around to grab screenshots of each parcel on the project and update the image name/details. Sit back, relax, and wait for the report to download (please don't click the map while this is running so we can grab the right images).

![](/images/Auto_report_window.png)

* The PDF report will automatically download to your browser once complete.

## Shapefile Exports Updated

Shapefile exports now include geo analysis constraint map layers as well as more attribute data for parcels and geo analysis hazards.

* To export a project as a shapefile, click 'menu' on the map toolbar.
* Select 'Export shapefile'.
* The shapefile will automatically download to your browser once it's completed.

![](/images/Export_shapefile.png)

Are there other objects or attributes you'd like to see in the shapefile export? Let us know what else would be helpful to add.

## Add Parcels by APN/PIN

You can now search and add parcels to a project by searching for a parcel's APN/PIN directly in the map search bar.

* Change the search input to 'APN' by toggling the button on the left of the map search bar.

![](/images/APN_Map_Search.png)

* Input the APN/PIN followed by a COMMA and then the STATE. Any matching parcel(s) will be added as assets to the project map and the parcel table.

![](/images/Parcel_Added_APN.png)

* You can also create a Greenfield-Land project and search for the primary asset parcel by APN.

![](/images/Land_Project_APN.png)

## Updated Project Organization: Folders

We've updated what we previously called 'Project Groups' to make it simpler to organize projects across your organization.

Easily create a workspace and an associated project folder structure to organize your projects within a workspace _(if you previously had Project Groups setup, they should be visible in the new Folders section)_.

You can either share one workspace across your whole team (and thus the same project folder structure) OR you can create your own workspaces if you would prefer to manage folders more individually.

* To access the new folders, click 'View folders' either in the left sidebar menu OR under the main projects section on the dashboard.

![](/images/Folders.png)

* Create a workspace to start your folder structure (other users in your organization will be able to access the workspace and you can create as many as you want).
* Name the workspace.
* Click 'Create Workspace'.

![](/images/Folder_Workspace.png)

* Click the 'Create Folder' button to add a new folder to the workspace.
* Click 'Add projects' to add projects to the workspace/folder structure.

![](/images/Create_Folder.png)

* Drag and drop folders from the projects pane on the left to the pane on the right to organize and group in folders (note: click the dots to the left of the project name to drag the project).

  ![](/images/Drag_Projects.png)

## New Column 'Closest Primary Asset'

If you search for parcels (or other assets) around multiple primary assets, you can now easily track which primary asset a sub/line/parcel is closest to in any data table.

* For example, if you searched for parcels around two primary substations, you can pull in the 'Closest Primary Asset' column in the parcels table to see the relationship.

![](/images/Closest_Primary_Asset.png)

## Map Search Automatically Zooms to Address or Lat/Long Marker

When you search for an address or latitude/longitude coordinates in the map search bar, the map will now automatically zoom to the search area.

![](/images/Search_Bar_Zoom.png)

## Parcel Search: Buffer and Min Acres Now in Same Section

We moved the 'Buffer' and 'Min Acres' fields into the same section in the parcel search. Fill out the fields and click, 'Get Count' and 'Run Task' to pull parcels into a project near your primary asset(s).

![](/images/Combined_Search.png)

## Geo Analysis - Southern Slope Checkbox

In our last Geo Analysis update, we added some functionality to shade slope hazards with a southern aspect differently from other slope hazards, but this has been impacting geo analysis speeds for some users.

For now, we've added this as a setting that can be turned on/off when running geo.

* To see southern slope hazards differentiated separately from other slope hazards, check the box (this may take a bit longer to load).

![](/images/Southern_Slope_Hazards.png)

## User Documentation Linked in App

Need a quick refresher on a workflow? Access our [user documentation](https://docs.andersonopt.com/workflow-overview/ "User Documentation") directly from the app.

* Click the 'User Documentation' link in the top header of any AO window.

![](/images/User_Documentation_2.png)

***

# **Fixes**

* Parcel search geometry will now update if a primary asset is added/removed on a project.
* Fixed an issue that was sometimes preventing Geo Analysis from completing after our last release due to the USFWS Wetlands server getting overloaded.
* Creating a super parcel on the asset map will now show the updated super parcel boundary without a refresh.
* Adjusted hazard drawings to appropriately handle areas with no bedrock layer data.