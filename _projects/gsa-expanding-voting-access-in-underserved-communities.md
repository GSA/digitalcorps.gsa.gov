---
id: gsa-vote
agency: "General Services Administration"
agency_abbrev: "GSA"
agency_logo: "/assets/images/agencies/GSA.webp"
title: "Improving the delivery of multilingual voting information with a content management system"
project_name: "Improving the delivery of multilingual voting information with a content management system: Modernizing vote.gov"
summary: "Supporting the General Services Administration's Vote.gov program in expanding voting access in underserved communities."
project_url: https://www.gsa.gov/about-us/mission-and-background
youtube_url: https://youtu.be/CLFiHE7j5p4
impact_story_link: gsa-vote
the_impact: false
the_solution: true
skill_set: ['Software Engineering']
tags: ['Software_Engineering','Public_experience']
impact_area: ["Public experience"]
status: ["current"]
---

## *About GSA's vote.gov* {#the-about}
In 2016, a team of USAGov staff and Presidential Innovation Fellows developed [vote.gov](http://vote.gov) to serve as the primary resource of voting information for the public from the federal government. In addition to partnering with the U.S. Election Assistance Commission (EAC), vote.gov builds strategic partnerships with other federal agencies, as well as nonpartisan, third-party organizations and election offices, in order to foster trust in voter information and dismantle misinformation. The vote.gov team is committed to empowering the public with accurate, up-to-date, and actionable voting information.

To meet the goals outlined in President Biden’s 2021 Executive Order on [Promoting Access to Voting](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/03/07/executive-order-on-promoting-access-to-voting/)﻿, the vote.gov team made impactful changes to modernize and improve the user experience of the website. These goals included improving accessibility, translating voter tools into key languages for voters who don’t speak English proficiently, expanding content for underserved communities who experience barriers to voting, and enhancing search functionality on the website. Vote.gov aims to help people register to vote in their state and works to break down barriers for all voters regardless of background, socioeconomic status, race, ethnicity, national origin, or age.

## The challenge
The original vote.gov site was a website that got content from a fixed set of files generated from the codebase. This framework was chosen in order to spin up a light website quickly. With only two languages originally (English and Spanish) and content focused only on registration rules and deadlines, this solution was sufficient at the time and did not take a lot of effort to maintain. 

After the executive order was issued, the vote.gov team ran into a few challenges related to content management. With the existing framework, the team relied on developers to make changes directly to the code with each content change. This took autonomy away from the content writers and managers as they were unable to edit, submit, and deploy content without relying on technical team members. 

This meant developers had to spend most of their time responding to urgent content updates leading up to the 2022 midterm elections, which slowed down the development of other important features, such as web accessibility, API data integration for voter information, and improving the accessibility of the National Voter Registration form. In parallel, as the current site content continued to be translated into various languages, the amount of content to be maintained grew significantly. 

These issues led to the question:
*How can the vote.gov team streamline the process of delivering accurate voting information in multiple languages to the American public?*

## The approach
The vote.gov team decided to migrate the website to a content management system (CMS). In general, a CMS is software that helps website owners create and manage content. It typically includes an admin interface that content writers and managers can log into and write, edit, and publish content directly through the dashboard without requiring a developer. There are several CMS options available, both open source and commercial. 

Before selecting a CMS, the vote.gov team performed a requirements analysis to understand what features were needed for this case. The team then conducted technical research on the best three options, ultimately selecting Drupal due to the need for customization as well as its robust security policies and translation modules.

A USDC software engineering Fellow worked within a team of contractor developers to build out the Drupal site. As part of the migration process, she participated in discussions about converting from a static site software architecture to a CMS architecture with separate configuration code and database code. Using Twig templates (which are used to produce HTML code) and PHP (an open source general-purpose scripting language), the Fellow built out the necessary data structures, content types, and page types. On the administrative dashboard side, she configured user roles, permissions, and content workflows. For the styling, the site continued to use a custom theme based on the U.S. Web Design System (USWDS), which needed to be implemented within the Drupal system.

## The solution 
The vote.gov team did upfront work to create a user interface so content writers and admins could manage content, translations, and other site settings with minimal technical knowledge. This solution, in turn, ensured speedy delivery of crucial information for underserved voters. 

In April 2024, the team started using the CMS to enter content for a beta vote.gov site. This streamlined the process for content writers and managers, making it easier for non-developers to save and update new content directly in the CMS. At the same time, developers were able to focus on developing the new site theme and other features instead of making content updates.

The change to a CMS enabled the vote.gov team to work together more effectively without creating blockers for each other. This ultimately enabled the site to more quickly serve voters with the information they’re looking for in [multiple languages](https://blog.usa.gov/why-vote.gov-supports-multiple-languages) to help them exercise their right to vote. The new vote.gov site graduated from beta testing and has been accessible to the public since July 2024.
