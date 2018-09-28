+++
title = "Energy Markets & Batteries: Part 1"
date = "2017-07-10T13:07:31+02:00"
tags = ["ISO", "energy-markets", "utility", "price-signals", "rate-based-pricing"]
categories = ["energy-storage", "energy-markets"]
image = "img/blog/energy-markets-one-1.jpg"
author = "Jake Anderson"
+++

### Background</strong>

[We previously outlined](../evolving-energy-grid) some of the ways in which new technology is disrupting electricity grids. Microgrid and renewable technologies are two key drivers of this transition.

While these two areas of technology are driving much of the change at a grid infrastructure level, energy storage (such as batteries) is another form of technology that is disrupting historical energy norms for both utilities and consumers. Coupling new battery technology with the modern energy industry, which relies heavily upon open energy markets, has created new challenges and opportunities that haven’t existed in the past.

At Anderson Optimization, we’re creating tools that allow utilities to better understand and predict the increasingly important energy markets and implement practices that help them to utilize the markets to reduce their cost structures and pass along savings to consumers.

We begin this article by providing an overview of the energy market landscape and how utilities are incorporating market impacts into their business models. From there, we examine  how energy storage technology is evolving and impacting both utilities and consumers.

### ISOs: An Overview

Before getting into the specifics of battery technology, it is necessary to have an understanding of the wholesale electricity markets and how they operate. In the United States and into Canada, the main transmission network is broken into 10 regions that are managed by Independent System Operators (ISOs).

ISOs are typically nonprofit entities managed by the Federal Energy Regulatory Commission (FERC); they manage the operations and market clearing activities related to the electricity grid for their respective regions. ISOs were initially created to allow for more competition in power generation and transmission activities. Historically, local service providers controlled virtually all generation and distribution activities, which left consumers with little provider choice and hindered the ability for new market entrants.

Now, with a more open energy industry, ISOs are responsible for deciding how much energy each power generation asset on the grid produces to ensure that the transmission system is within its operational limits and provides the lowest cost energy to consumers within its region.

### Energy Markets: The Tool of ISOs

ISOs use energy markets to help manage the now robust number of stakeholders involved in the creation, distribution, and use of electricity. For example, in 2011 the value of the energy that was cleared through the Midwest ISO (MISO) was $18 billion. This money is distributed to generation assets, transmission improvements, planning, and MISO operating costs.

To manage this exorbitant amount of energy and money, there are 3 distinct markets that ISOs use: long-term market (bi-lateral contracts), day-ahead market, and real-time market.

### Long-Term Market

The foundation of the modern energy market system is based upon long-term contracts between producers and suppliers. These contracts are structured to guarantee the exchange of a certain amount of energy for a certain price. Long-term contracts such as these help to provide a stable foundation for the energy industry that helps to reduce risk related to volatility in the real-time and day-ahead energy markets. 

### Day-Ahead Market

While long-term contracts create a strong, predictable foundation, it is impossible to gauge exactly how much energy will be needed on any specific day during the life of a long-term contract. This creates gaps between the amount of contracted energy and what is needed on any given day. To close these gaps, there is the day-ahead market.

The day-ahead market works by taking bids from power producers that state the amount of energy that they can generate for a certain cost. Power producers also provide an overview of constraints which they need to operate within, such as ramping rates, as well as start-up and shutdown time and costs. Additionally, the ISO estimates the demand for the following day so that it knows how much energy is needed from the bids provided by the power producers.

Once these processes are completed, the ISO “clears” the market using tools that optimize power flows given the power producers’ constraints. After clearing the market, the ISO is able to provide hourly prices and locational marginal prices (LMPs) at every network location for the upcoming day.

### Real-Time Market

After clearing the day-ahead market, the ISO prices for the upcoming day are locked and any changes from the ISO’s day-ahead forecast are made up for in the real-time market. Clearing the real-time market is similar to the process of clearing the day-ahead market but is simplified given the shortened time intervals.

While the clearing process is similar, the real-time market differs from the day-ahead market in terms of volatility. The real-time market operates in five minute intervals and can be quite volatile. 

It is possible for prices to spike to 10-20 times expectations in situations of high demand and a congested grid. It can also go the other direction where there may actually be negative prices for electricity because there is too much supply in a certain location that is unable to haul to areas of demand due to transmission congestion.

These dramatic price variances can be seen in the image below. The table on the right side of the image shows real-time prices and associated colors. Through the color variation on the map, it is easy to see just how much prices can swing, even across relatively short distances. 

![MISO Energy Markets](img/blog/energy-markets-one-1.jpg "MISO Energy Markets Map")

### Energy Markets Are Influencing Utility Operations

Since the current system of energy markets and ISOs is relatively new - it began in the late 1990’s, utility operations have just begun in recent years to alter some of their operations to better align with the new landscape. One of the most common tactics that utilities have begun to implement is based upon tiered pricing for residential consumers, which is a practice that has previously been implemented in the commercial sector.

According to the Energy Information Administration (EIA), [residential consumers only made up roughly 38% of electricity usage.](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_01). Since commercial and other non-residential consumers are a larger proportion of total energy usage and are able to work more directly with utilities, they received tiered pricing mechanisms first.


For residential consumers, utilities have historically done a monthly calculation of the electricity that a consumer has used and applied a flat rate to that energy. This made sense when the utility generally produced and distributed all of its own power because there was little fluctuation in the utilities’ cost structure throughout the course of the month. However, now that a larger portion of the electricity that a utility distributes comes from the open market where costs are volatile rather than their own generation assets, their cost structures are more heavily impacted by market price fluctuations. 

As described above, energy markets can experience significant volatility on a real-time basis. As such, utilities can have dramatically varying costs for the energy they distribute throughout the day. During times of peak demand, costs are high, and during times of low demand, costs are low.

### Utilities Are Implementing Market Based Pricing

Due to these ever-present cost fluctuations from market volatility, single rate pricing schemes are less effective than dynamic pricing methods as they do not always send accurate price signals to consumers. 

A price signal is a piece of information that is conveyed to a consumer via a change in price. In this example, the conveyed information is the cost of the electricity to the utility. In traditional single rate systems, the consumer doesn’t know whether the energy they used is cheap or expensive for the utility. However, with market based pricing, a high price for a consumer means that the electricity they are using is expensive for the utility, whereas a low price would indicate the opposite.

Since the new ecosystem of energy markets inherently creates cost volatility, single rate pricing mechanisms are becoming outdated, and subsequently, utilities have started to enact tiered or market based pricing such as two-tiered pricing, real-time pricing, cut-off rates, and demand response programs.

All of these approaches are rooted in conceptually sound logic as they all attempt to link consumer pricing in line with their own costs. However, with the advent of battery technology - which we discuss later in this article - consumers are beginning to have the ability to shift their electricity usage in personally beneficial ways so that they can realize the lowest cost for the energy that they use. 

In general, this is beneficial to the utility as consumers will be receiving a higher proportion of their energy during times that it is cheap for the utility, but it also can create a situation where utilities send inaccurate price signals to consumers and both the utility and end consumer pay more for electricity than in a single rate system.

### Battery Technology Is Becoming Increasingly Viable

We examine how inaccurate price signals can negatively impact both utilities and consumers in Part 2 of this article series, but first, it is important to understand how batteries will impact the grid and consumer habits as energy storage becomes an increasingly viable and broadly adopted technology. It is important to note, that batteries are still in their infancy. As such, there is a chance that their trajectory changes from its current course. Our analysis is based upon the best data that is available at this time.

Battery storage has seen dramatic improvements in recent years as electric vehicles have become more commonplace. According to McKinsey, [battery costs have dropped from roughly $1,000 per kilowatt-hour in 2010 to roughly $230 per kilowatt-hour in 2016.](http://www.mckinsey.com/industries/automotive-and-assembly/our-insights/electrifying-insights-how-automakers-can-drive-electrified-vehicle-sales-and-profitability)

With more funding pouring into battery and energy storage research, it is reasonable to expect that battery costs will continue to decrease. As costs fall, battery technology will become an increasingly practical technology for both personal and commercial use to help curb utility costs. In certain commercial cases, [battery technology is already viable as a cost cutting measure according to McKinsey.](http://www.mckinsey.com/business-functions/sustainability-and-resource-productivity/our-insights/the-new-economics-of-energy-storage)

### Continue Reading

In Part 2 of this series, we further examine battery technology and how it will likely impact future consumer & utility behavior. We also explore the concepts of arbitrage and energy price signals that will become increasingly important in the future.

[Click here to continue reading Part 2 of this article series](../energy-markets-two).

#### Additional Material

[http://www.mckinsey.com/industries/automotive-and-assembly/our-insights/electrifying-insights-how-automakers-can-drive-electrified-vehicle-sales-and-profitability](http://www.mckinsey.com/industries/automotive-and-assembly/our-insights/electrifying-insights-how-automakers-can-drive-electrified-vehicle-sales-and-profitability)

[http://www.mckinsey.com/business-functions/sustainability-and-resource-productivity/our-insights/the-new-economics-of-energy-storage](http://www.mckinsey.com/business-functions/sustainability-and-resource-productivity/our-insights/the-new-economics-of-energy-storage)

[https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_01](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_01)





