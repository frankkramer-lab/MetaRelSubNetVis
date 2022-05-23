# Introduction

Comparing groups of patients with respect to biological specifics is one of the building blocks for
precision medicine. Such a data-driven analysis does not have to be abstract.
With [MetaRelSubNetVis](https://frankkramer-lab.github.io/MetaRelSubNetVis/) we provide a
visualization tool that allows users to inspect differences between two groups of patients.

Demo can be found here: https://frankkramer-lab.github.io/MetaRelSubNetVis/

# Technical concerns

## Angular version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version
13.3.3.

## Build

Build for GitHub pages according to [this guide](https://angular.io/guide/deployment).

# Data structure

To make sure, your network is compatible as input for this class comparison, check your network for
the following properties

## Network

The network needs to conform to the [CX data model](https://home.ndexbio.org/data-model/) and
contain the aspects **nodes**, **edges**, **nodeAttributes**, **networkAttributes** and **metaRelSubNetVis**.

## Nodes

Each node has to have an id (property **@id**) and a name (property **n**).

## Edges

Each edge has to have an id (property **@id**), a source (property **s**) and a target (property **
t**).

## NodeAttributes

Each node can have multiple attributes. A node attribute's relation to a node is indicated by the
node attribute's property **po**. The name of the node attribute (property **n**) always starts with
a patient identifier, followed by **\_**. After that the attribute is described. 

## NetworkAttributes

NetworkAttributes are used to describe the patient samples. Please note: The **order** for each of
these attributes is crucical.

- **Patients**: String list of patient identifiers
- **PatientSubtype**: String list of each patient's disease subtype
- **PatientGroups**: String list of each patient's group (in sum there can only be **two** different
  types of groups!)

Furthermore the property **name** contains the network's name that will be used as a headline for
this application.

## MetaRelSubNetVis

This aspect contains information about the network's visualization options.

- **highlight**: Color of the highlighted nodes' border
- **properties**: Network specific property definitions
- **individual_properties**: Properties present for every sample (i.e.g the properties are composed of ``sample-id_property`, e.g. `GSM150976_Score`)

The `properties` and `individual_properties` can contain the following information: 

- **property**: Name of the visualization property (e.g. Score)
- **label**: Label used in the app to display the property
- **type**: Mapping / data type (one of `continuous`, `discrete` and `boolean`) 
- **threshold**: Nodes can be selected by adjusting the threshold (only possible for `continuous` properties)
- **mapping**: Key-value-pairs defining the thresholds or values and corresponding colors.

The mapping types result in different mapping behaviors:

- **Continuous**: The color is mapped to a gradient with the colors corresponding to the thresholds; this property can also be used for mapping the node size
- **Discrete**: Only values defined in the mapping are mapped to the corresponding color
- **Boolean**: The matching nodes get a border in the defined color

## Example

The summary network is accessible on NDEx
via [https://www.ndexbio.org/viewer/networks/a420aaee-4be9-11ec-b3be-0ac135e8bacf](https://www.ndexbio.org/viewer/networks/a420aaee-4be9-11ec-b3be-0ac135e8bacf)

# R implementation

Supplementary information about implementing this data format as extension to the Bioconductor package [RCX](https://bioconductor.org/packages/release/bioc/html/RCX.html) can be found in [the R directory](R/).
