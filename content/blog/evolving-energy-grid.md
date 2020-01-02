+++
title = "The Power Grid: An Overview and Its Evolution"
date = "2017-06-10T13:07:31+02:00"
tags = ["distributed generation", "renewable"]
image = "evolving-energy-grid-list.jpg"
author = "Jake Anderson"
+++

### Background 

As we move further into the 21st century, modern technology has disrupted countless industries and been ingrained into our daily lives. The goal of this article is to look at longstanding infrastructure that is imperative for humanity's survival yet taken for granted on a daily basis: the electricity grid.

Power grids as we know them came into existence roughly 100 years ago, and while they have grown and evolved, a lot of the core infrastructure, concepts, and technology are still commonplace today. As longstanding best practices become less practical, it will likely be necessary to advance the grid with new technology and infrastructure so that society’s need for electricity is met in the most efficient manner.

Like many industries, new technology is paving the way for significant disruption in how power grids operate. This article aims to provide an overview of grid fundamentals, components of the electricity grid, and how technology is ushering in a new era of grid development and operation.

### What is the Grid?

A power grid is a web of interconnected infrastructure that accomplishes the goal of bringing electricity from producers to consumers. Electricity grids are complex, but the physical components can generally be categorized within a handful of groups:

-	**Generation (Power plants, solar farms, etc)**: These are locations where electricity is created.
-	**Substations & Transformers**: Substations are locations where plants interconnect with the grid, and transformers at these locations are used to adjust electricity’s voltage up or down to allow for transmission. After transforming electricity, it is sent out to consumers.
-	**Transmission Network**: The transmission network is a web of power lines which are used to move electricity from its point of generation to a substation. Typically, the transmission network is used to send electricity over long distances using high voltage lines.
-	**Distribution Network**: The distribution network is a web of power lines which are used to move electricity from a substation out to customers. Distribution networks are generally located closer to the consumers.

In the United States, the overarching power grid is broken down into 3 smaller grids that are know as interconnections that are outlined in the image below from the Department of Energy.

[![US Interconnections](/img/blog/evolving-energy-grid-1.png "US Interconnections")](https://energy.gov/oe/services/electricity-policy-coordination-and-implementation/transmission-planning/recovery-act)

Each interconnection is its own self contained grid, but they are all linked with one another to create a massive continuous grid. Organizations known as operators are used to manage the scale and complexity of the grid.

### Distribution Versus Transmission

While the power grid is a singular web of interconnected architecture, there are two distinct components that are necessary to transport electricity from its origin to users: the transmission network and the distribution network. Although both networks are essentially a web of power lines, they each have a distinct purpose.

Power lines that make up the transmission network have high voltages - sometimes up to several hundred thousand volts - which are far too high for home use. Since such high voltage levels aren’t usable by consumers, the distribution network consists of power lines that have much lower voltage levels, which are used to move electricity from the power grid out to users.

Substations act as the intermediary between the transmission and distribution networks. Transformers are used at substations to take high voltage electricity from the transmission network and decrease the voltage so that it can be passed onto consumers through the distribution network. Since the goal of the distribution network is to bring electricity to end users, it is located much closer to customers than transmission infrastructure.

Transmission lines are used to transport large amounts of energy across the vast distances that can separate traditional power plants and users. Long distances in the transmission network are a key reason why high voltage power lines are typically used. With higher voltage lines, there is increased capacity, less loss, and improved reliability.

However, transmission infrastructure is also expensive, and long distances still lead to significant energy loss even with high voltage lines. Since transmission costs remain high, there is increasing demand for distributed generation located closer to consumers through the use of microgrids and/or renewable energy, which are becoming increasingly viable technologies.

In addition to economics, there are a variety of political & siting difficulties for transmission infrastructure. Large lines can span numerous cities, counties, and states, which makes siting an arduous process even with eminent domain. Unlike natural gas pipelines, there aren't strong federal rulings for zoning across states. 

The distribution network is also less actively managed than the transmission network, so there isn't well documented data. Since the transmission network is the backbone of how electricity moves across the grid, there has always been a need to understand its design and infrastructure. Therefore, the transmission network is actively monitored and maintained by operators, which allows for detailed mapping and tracking as seen in the image below.

![Transmission Network](/images/evolving-energy-grid-2.jpeg "United States Transmission Network")

However, this is not the case for the distribution network. The need for distribution network data hasn’t been as prevalent in the past. Power plants typically interconnect at transmission network voltage levels, so the distribution network has historically only been used as a one way channel to send energy out to customers from a substation. Due to a lack of interconnection and one-way power flows, there has been minimal benefit to understanding distribution once the physical architecture was in place.

Recently, however, distributed generation has gained traction and created a scenario where renewable facilities are being built closer to consumers. Since these facilities are closer to users and electricity doesn’t need to cover vast distances, developers are able to connect at lower voltage levels and bypass the costly transmission network. Oftentimes, these renewable locations are interconnecting directly with the distribution network and using it to send electricity back into the grid in a similar way that traditional power plants have used the transmission network. Since the distribution network is no longer just a one way channel, [there is an increasing need](../renewable-siting-difficulty) for better data about it.

### Renewables and the Grid

Renewables continue to gain traction and represent an ever-increasing portion of the power grid’s total capacity, but the generation profile is much more fragmented than traditional generation. In the past, the predominant strategy has been to build a small number of massive power plants that supply energy to the entire power grid. While the bulk of renewable output is currently coming from a few large sources, the overall landscape is based upon a larger number of smaller generation facilities.

This trend is evident in data for the roughly 1,300 renewable plants that have at least 1 megawatt (MW) of capacity and are linked into the broader power grid. Collectively, these plants represents over 17,000 MW of output. The data is provided by the U.S. Energy Information Administration: [EIA dataset](https://www.eia.gov/electricity/data/eia860/).

#### Capacity by Interconnection Voltage Level

|      Interconnection Level     	| Output   	| % of Output 	|
| ------------------------------	|----------	|-------------	|
| Distribution (<40 kV)          	| 4,430 MW 	| 25%         	|
| Low Transmission (40-140 kV)   	| 4,214 MW 	| 24%         	|
| Med. Transmission (141-350 kV) 	| 8,142 MW 	| 46%         	|
| High Transmission (>350 kV)    	| 937 MW   	| 5%          	|


#### Renewable Facilities by Interconnection Voltage Level

| Interconnection Level                	| # of Plants     	| % of Plants 	|
|--------------------------------------	|-----------------	|-------------	|
| Distribution (<40 kV)                	| 1,059 Plants    	| 82%         	|
| Low Transmission (40-140 kV)         	| 155 Plants      	| 12%         	|
| Med. Transmission (141-350 kV)       	| 53 Plants       	| 4%          	|
| High Transmission (>350 kV)          	| 31 Plants       	| 2%          	|

The EIA dataset illustrates the prevalence of smaller plants interconnecting at low, distribution voltage levels. Over 80% of these facilities are interconnecting with the distribution network as opposed the higher voltage transmission networks like traditional power plants. While this 80% is only generating 25% of the total output, there are a variety of reasons to believe that distribution level interconnection will persist and over time represent an increasing proportion of capacity.

### Traditional Power Plant Development Strategy

Currently, the relative output from small facilities interconnecting at distribution voltage levels is reasonably low, but the trend towards distributed generation is likely to continue due to a different economic profile than traditional facilities.

Since the capital investment to build a traditional power plant of any size is exorbitant, the most economically viable development strategy has historically been to build massive plants that leverage economies of scale to minimize cost per megawatt of output. The large output of these facilities made it so that fewer were needed in order to generate enough energy to supply the entire electricity grid.

With only a few points of generation, the most cost effective method to get electricity to far away consumers has been to make significant capital investments into high voltage lines that link directly into the transmission network. As discussed above, high voltage transmission has a variety of benefits and is optimal for sending electricity over long distances since it tends to reduce line loss, can carry more power, and maintains reliability.

It is understandable why the model of large plants linking into the transmission network has been the predominant form of power plant development to date. It has generally provided the best ratio of output to cost. However, as the demand for energy continues to soar and a confluence of technologies have emerged, society is reaching a point where a more distributed model of generation is not only feasible but also more advantageous.

### Catering to Future Demand

According to the EIA, global energy consumption is expected to grow by roughly 50% by 2040 as seen in the graphic below from the 2016 EIA International Energy Outlook.

[![Energy Consumption](/images/evolving-energy-grid-3.png "EIA Global Energy Consumption")](https://energy.gov/oe/services/electricity-policy-coordination-and-implementation/transmission-planning/recovery-act)

To cater to this demand, it will be necessary to develop generation facilities quickly and for a relatively low cost. Distributed renewable generation appears to be a logical solution to this problem.

Unlike traditional power plants, it is possible to make relatively small, utility scale renewable generation facilities. Facilities like these need less capital investment when compared to a large scale traditional plant. With smaller scale locations, developers can build closer to consumers, link directly into the distribution network, and cut out the need for costly transmission infrastructure. Eliminating the need for this architecture greatly decreases the cost and increases the value  of renewable projects.

Less complexity will also help the proliferation of distributed generation. Building a traditional power plant requires immense architectural design and development. Building a distributed renewable plant essentially consists of stringing together an array of solar panels or wind turbines. While turbines and panels are by no means cheap, the design of these facilities is reasonably straightforward. Design simplicity decreases the time it takes to implement these projects. As the cost of renewable generation continues to fall, it will ultimately be difficult to justify the massive investment and time commitment that comes along with traditional power plants.

### Challenges of Evolution

A fragmented model versus building a few massive renewable power plants will also likely continue because too much renewable generation in a single location can lead to transmission congestion. Renewable power is “non-dispatchable,” which means that an operator can’t turn generation on or off on demand. For example, solar generation can only happen when the sun is out, and when the sun is out, power is flowing into the grid regardless of an operator's actions.

Transmission congestion makes it so that the electricity in unable to haul to a demand center because the necessary lines are at capacity, which leaves too much power near the point of generation. Oversupply reduces the value of the electricity at the node of generation and can even cause negative pricing - effectively paying people to consume electricity. Congestion risks further indicate that renewables will likely continue being built in a smaller, distributed fashion.

Even when there are negative prices at a node on the grid, renewable generators may stay on due to renewable portfolio standards for the state or production tax credits.  Negative pricing can also be driven by slow ramp rates of large thermal generators such as coal and nuclear plants, which are unable to change outputs at a rapid pace.  This differs from natural gas combustion turbines that can rapidly change output.

### A Grid of the Future

While the electricity grid continues to be a relatively anonymous web of interconnected infrastructure and technology, it is one of the most necessary components of modern life. From plants, to lines, to substations, to consumers, everything has its role. 

Based upon strategies that are beginning to gain traction, it appears that grids across the world will be undergoing arguably their most dramatic changes since their inception. What has traditionally been a hub and spoke model of power distribution is shifting into a more democratized and interconnected web of generation and distribution.

We at Anderson Optimization are working to be a catalyst for this evolution by providing tools and services that help to overcome the challenges described above and reduce the inherent risk involved with adopting new technologies. From microgrids to renewables, our tools are built to utilize a system level/full grid perspective and incorporate uncertainty to ensure optimal results for our customers.

Without even considering environmental impacts, it seems evident that historical methodologies are no longer optimal, and while grid evolution will inevitably be difficult, fundamental changes will hopefully create a more efficient, cost effective, and sustainable future.

#### Additional Material

[https://www.eia.gov/outlooks/ieo/](https://www.eia.gov/outlooks/ieo/)


