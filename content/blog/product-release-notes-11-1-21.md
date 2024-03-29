+++
date = 2021-11-01T23:00:00Z
featured = true
image = "/images/ReleaseNotesGears.png"
tags = ["Releases"]
title = "Product Release Notes: 11/1/21"
[author]
image = ""
name = "Megan Kostanick"

+++
#### **Check out what's new in Anderson Optimization's latest release (v2.3.10)**

_As always, we do our best to test updates before we release them, but please let us know if anything seems off or isn't working as expected._

***

# **New Features and Enhancements**

## New default columns

Display commonly used columns in your data tables by clicking the new '[Reset Columns](https://docs.andersonopt.com/prospect/reviewing-parcels/view-parcels-list#reset-columns-to-defaults)' button on any table. This will load the most commonly referenced columns into your view so you don't need to select them manually.

If you adjust columns in the various different data tables, the system will now save that view across your projects/sessions, so you don't need to customize the view each time.

![](/images/reset_columns.png)

## Updated column names

We've relabeled a number of column names for clarity and to make it simpler to differentiate between related columns (e.g. Mailing Address fields now have a 'Mailing Address' tag in each of the column headers to help differentiate them from the Site Address columns).

![](/images/column_headers.png)

## Constraint maps automatically display on old projects

When pulling up a previously created project, any constraint maps generated from the Buildable Area Analysis will automatically display on the map when the project first loads.*

Constraint map layers (buildable area and hazards) may be toggled on/off by clicking new constraint map icon as in the lower-right corner of the map.

\*_For projects with over 100 assets, the constraint maps won't automatically redisplay when the project is first loaded but can be redisplayed by clicking the new constraint map icon_

![](/images/constraint_map_icon.png)

## Additional hazard columns added to show acreage/relative percent of that hazard per parcel

View and export how many acres each hazard took up on a parcel and the relative ratio of that hazard's area (acres) vs the original parcel lot size (relative).

![](/images/hazard_acres.png)

# Bugs/Fixes

* Fixed issue with Prescan where infrastructure setting was preventing buildable area styling from displaying on the constraint map
* Added more handling for 3rd party geometry issues in the Buildable Area Analysis processing