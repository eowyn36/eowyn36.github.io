---
layout: project
title: "AI: Motion Models and Path Planning"
author: "Nilay Karaoglu"
tags: ue ai cpp
summary: Implementation of path planning algorithm Kinodynamic RRT* in Unreal Engine using C++ with 6 motion models.
logo: ai1.png
---

Path planning allows autonomous mobile vehicles or robots to find a feasible path between two points. In this project Kinodynamic RRT* is implemented as a path planner along with six motion models that are independent of the path planner. The project is implemented in Unreal Engine with C++.

{:.project-table}
| Date | March 2017 |
| Course | DH2438 Artificial Intelligence and Multi-Agent Systems |
| Team | 3 People |
| Tools | Unreal Engine |
| My Role | Reading the problem files provided as json, creating the 3d map, creating helper classes and setting the initial values before RRT* is ran. Visualising the results by mapping the outcome of the RRT* to ingame character movement. Implementations are done mostly in C++ and some in blueprints. |

Below is the maze and the feasiable path taken for each motion model:
{% include image.html name="ai/ai-motion.png" %}
