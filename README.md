# Nx Webcomponent Poc

A SpringBoot app which consists of several views with different Js libs as well as plain JS is to be converted into a modern frontend tech stack, while the individual views always remain available online.

The individual components of a view are successively replaced by web components. As soon as a view has been migrated completely and consists only of webcomponents, a pure Angular view is displayed.
The webcomponents that are used are to be generated with ngx-build-plus from an internal angular gui component collection that is used in pure Angular applications. 

## Problem
> nx run ui-webcomponents:build:production --extraWebpackConfig=libs/ui/webcomponents/webpack.externals.js --singleBundle 
'scripts' is not found in schema

## What should be done
![Goal](/goal.svg "Goal of poc")

## Solution idea
![Idea](/solution.svg "Solution of poc")
