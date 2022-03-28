# Technical stuff

## Angular version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Build

Build for GitHub pages according to [this guide](https://angular.io/guide/deployment).

# Data structure

To make sure, your network is compatible as input for this class comparison, check your network for the following properties

## Network

The network needs to conform to the [CX data model](https://home.ndexbio.org/data-model/) and contain the aspects **nodes**, **edges**, **nodeAttributes**, **networkAttributes**.

## Nodes

Each node has to have an id (property **@id**) and a name (property **n**).

## Edges

Each edge has to have an id (property **@id**), a source (property **s**) and a target (property **t**).

## NodeAttributes

Each node can have multiple attributes. A node attribute's relation to a node is indicated by the node attribute's property **po**. The name of the node attribute (property **n**) always starts with a patient identifier, followed by **_**. After that the attribute is described. The following are required for **each** patient:

- **Score**: relevance score, a numeric value
- **GE**: gene expression, a numeric value
- **GE_Level**: gene expression level, one of the following values: (LOW, HIGH, NORMAL)

Optional attributes are: 

- **MTB**: a bool value

## NetworkAttributes

NetworkAttributes are used to describe the patient samples. Please note: The **order** for each of these attributes is crucical. 

- **Patients**: String list of patient identifiers
- **PatientSubtype**: String list of each patient's cancer subtype
- **PatientSurvivalYears**: Double list of each patient's metastasis free survival
- **PatientGroups**: String list of each patient's group (in sum there can only be **two** different types of groups!)

Furthermore the property **name** contains the network's name that will be used as a headline for this application.

## Example

The summary network is accessible on NDEx via [https://www.ndexbio.org/viewer/networks/140d01f0-acfe-11ec-b3be-0ac135e8bacf](https://www.ndexbio.org/viewer/networks/140d01f0-acfe-11ec-b3be-0ac135e8bacf)

<details>
  <summary>Click to see the example network</summary>


```
[
  {
    "numberVerification": [
      {
        "longNumber": 281474976710655
      }
    ]
  },
  {
    "metaData": [
      {
        "name": "nodeAttributes",
        "elementCount": 114,
        "version": "1.0",
        "properties": []
      },
      {
        "name": "cyHiddenAttributes",
        "elementCount": 1,
        "version": "1.0",
        "properties": []
      },
      {
        "name": "nodes",
        "elementCount": 6,
        "idCounter": 6,
        "version": "1.0",
        "properties": []
      },
      {
        "name": "networkAttributes",
        "elementCount": 6,
        "version": "1.0",
        "properties": []
      },
      {
        "name": "cartesianLayout",
        "elementCount": 6,
        "version": "1.0",
        "properties": []
      },
      {
        "name": "edges",
        "elementCount": 5,
        "idCounter": 11,
        "version": "1.0",
        "properties": []
      },
      {
        "name": "cyVisualProperties",
        "elementCount": 1,
        "version": "1.0",
        "properties": []
      }
    ]
  },
  {
    "nodeAttributes": [
      {
        "po": 1,
        "n": "Patient1_GE",
        "v": "0.124",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient1_GE_Level",
        "v": "NORMAL"
      },
      {
        "po": 1,
        "n": "Patient1_Score",
        "v": "83.51e-14",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient1_GE",
        "v": "0.524",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient1_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 2,
        "n": "Patient1_Score",
        "v": "5.51",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient1_MTB",
        "v": "false",
        "d": "boolean"
      },
      {
        "po": 3,
        "n": "Patient1_GE",
        "v": "7.9924e-12",
        "d": "double"
      },
      {
        "po": 3,
        "n": "Patient1_GE_Level",
        "v": "LOW"
      },
      {
        "po": 3,
        "n": "Patient1_Score",
        "v": "1.51",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient1_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient1_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 4,
        "n": "Patient1_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient1_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient1_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 5,
        "n": "Patient1_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient1_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient1_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 6,
        "n": "Patient1_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient2_GE",
        "v": "0.124",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient2_GE_Level",
        "v": "NORMAL"
      },
      {
        "po": 1,
        "n": "Patient2_Score",
        "v": "83.51e-14",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient2_GE",
        "v": "0.524",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient2_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 2,
        "n": "Patient2_Score",
        "v": "5.51",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient2_MTB",
        "v": "false",
        "d": "boolean"
      },
      {
        "po": 3,
        "n": "Patient2_GE",
        "v": "7.9924e-12",
        "d": "double"
      },
      {
        "po": 3,
        "n": "Patient2_GE_Level",
        "v": "LOW"
      },
      {
        "po": 3,
        "n": "Patient2_Score",
        "v": "1.51",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient2_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient2_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 4,
        "n": "Patient2_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient2_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient2_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 5,
        "n": "Patient2_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient2_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient2_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 6,
        "n": "Patient2_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient3_GE",
        "v": "0.124",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient3_GE_Level",
        "v": "NORMAL"
      },
      {
        "po": 1,
        "n": "Patient3_Score",
        "v": "83.51e-14",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient3_GE",
        "v": "0.524",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient3_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 2,
        "n": "Patient3_Score",
        "v": "5.51",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient3_MTB",
        "v": "false",
        "d": "boolean"
      },
      {
        "po": 3,
        "n": "Patient3_GE",
        "v": "7.9924e-12",
        "d": "double"
      },
      {
        "po": 3,
        "n": "Patient3_GE_Level",
        "v": "LOW"
      },
      {
        "po": 3,
        "n": "Patient3_Score",
        "v": "1.51",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient3_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient3_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 4,
        "n": "Patient3_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient3_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient3_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 5,
        "n": "Patient3_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient3_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient3_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 6,
        "n": "Patient3_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient4_GE",
        "v": "0.124",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient4_GE_Level",
        "v": "NORMAL"
      },
      {
        "po": 1,
        "n": "Patient4_Score",
        "v": "83.51e-14",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient4_GE",
        "v": "0.524",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient4_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 2,
        "n": "Patient4_Score",
        "v": "5.51",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient4_MTB",
        "v": "false",
        "d": "boolean"
      },
      {
        "po": 3,
        "n": "Patient4_GE",
        "v": "7.9924e-12",
        "d": "double"
      },
      {
        "po": 3,
        "n": "Patient4_GE_Level",
        "v": "LOW"
      },
      {
        "po": 3,
        "n": "Patient4_Score",
        "v": "1.51",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient4_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient4_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 4,
        "n": "Patient4_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient4_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient4_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 5,
        "n": "Patient4_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient4_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient4_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 6,
        "n": "Patient4_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient5_GE",
        "v": "0.124",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient5_GE_Level",
        "v": "NORMAL"
      },
      {
        "po": 1,
        "n": "Patient5_Score",
        "v": "83.51e-14",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient5_GE",
        "v": "0.524",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient5_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 2,
        "n": "Patient5_Score",
        "v": "5.51",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient5_MTB",
        "v": "false",
        "d": "boolean"
      },
      {
        "po": 3,
        "n": "Patient5_GE",
        "v": "7.9924e-12",
        "d": "double"
      },
      {
        "po": 3,
        "n": "Patient5_GE_Level",
        "v": "LOW"
      },
      {
        "po": 3,
        "n": "Patient5_Score",
        "v": "1.51",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient5_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient5_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 4,
        "n": "Patient5_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient5_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient5_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 5,
        "n": "Patient5_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient5_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient5_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 6,
        "n": "Patient5_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient6_GE",
        "v": "0.124",
        "d": "double"
      },
      {
        "po": 1,
        "n": "Patient6_GE_Level",
        "v": "NORMAL"
      },
      {
        "po": 1,
        "n": "Patient6_Score",
        "v": "83.51e-14",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient6_GE",
        "v": "0.524",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient6_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 2,
        "n": "Patient6_Score",
        "v": "5.51",
        "d": "double"
      },
      {
        "po": 2,
        "n": "Patient6_MTB",
        "v": "false",
        "d": "boolean"
      },
      {
        "po": 3,
        "n": "Patient6_GE",
        "v": "7.9924e-12",
        "d": "double"
      },
      {
        "po": 3,
        "n": "Patient6_GE_Level",
        "v": "LOW"
      },
      {
        "po": 3,
        "n": "Patient6_Score",
        "v": "1.51",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient6_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 4,
        "n": "Patient6_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 4,
        "n": "Patient6_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient6_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 5,
        "n": "Patient6_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 5,
        "n": "Patient6_Score",
        "v": "9.51",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient6_GE",
        "v": "9.12e-12",
        "d": "double"
      },
      {
        "po": 6,
        "n": "Patient6_GE_Level",
        "v": "HIGH"
      },
      {
        "po": 6,
        "n": "Patient6_Score",
        "v": "9.51",
        "d": "double"
      }
    ]
  },
  {
    "cyHiddenAttributes": [
      {
        "n": "layoutAlgorithm",
        "v": "Grid Layout"
      }
    ]
  },
  {
    "nodes": [
      {
        "@id": 1,
        "n": "node_1"
      },
      {
        "@id": 2,
        "n": "node_2"
      },
      {
        "@id": 3,
        "n": "node_3"
      },
      {
        "@id": 4,
        "n": "node_4"
      },
      {
        "@id": 5,
        "n": "node_5"
      },
      {
        "@id": 6,
        "n": "node_6"
      }
    ]
  },
  {
    "networkAttributes": [
      {
        "n": "name",
        "v": "Example data structure"
      },
      {
        "n": "description",
        "v": "This network serves as an examplary data structure for the MetaRelSubNetVis application."
      },
      {
        "n": "Patients",
        "d": "list_of_string",
        "v": [
          "Patient1",
          "Patient2",
          "Patient3",
          "Patient4",
          "Patient5",
          "Patient6"
        ]
      },
      {
        "n": "PatientSubtype",
        "d": "list_of_string",
        "v": [
          "Type_1",
          "Type_2",
          "Type_1",
          "Type_3",
          "Type_2",
          "Type_2"
        ]
      },
      {
        "n": "PatientGroups",
        "d": "list_of_string",
        "v": [
          "Group_B",
          "Group_A",
          "Group_A",
          "Group_B",
          "Group_A",
          "Group_A"
        ]
      },
      {
        "n": "PatientSurvivalYears",
        "d": "list_of_double",
        "v": [
          "0.764",
          "7.3",
          "1.25",
          "0.87",
          "14.35",
          "3.142"
        ]
      }
    ]
  },
  {
    "cartesianLayout": [
      {
        "node": 1,
        "x": 130.33370000843198,
        "y": -60.04213558995648
      },
      {
        "node": 2,
        "x": -63.82111478921641,
        "y": -56.93493869882671
      },
      {
        "node": 3,
        "x": -58.9931087374099,
        "y": -137.62813256405323
      },
      {
        "node": 4,
        "x": 71.70095480655868,
        "y": -160.38873252256974
      },
      {
        "node": 5,
        "x": -95.54801170108792,
        "y": 13.06419162243117
      },
      {
        "node": 6,
        "x": -95.89982670615379,
        "y": 73.0763671248206
      }
    ]
  },
  {
    "edges": [
      {
        "@id": 7,
        "s": 1,
        "t": 4
      },
      {
        "@id": 8,
        "s": 4,
        "t": 3
      },
      {
        "@id": 9,
        "s": 5,
        "t": 1
      },
      {
        "@id": 10,
        "s": 6,
        "t": 1
      },
      {
        "@id": 11,
        "s": 4,
        "t": 2
      }
    ]
  },
  {
    "cyVisualProperties": [
      {
        "properties_of": "nodes:default",
        "dependencies": {},
        "properties": {},
        "mappings": {
          "NODE_LABEL": {
            "type": "PASSTHROUGH",
            "definition": "COL=name,T=string"
          }
        }
      }
    ]
  },
  {
    "status": [
      {
        "error": "",
        "success": true
      }
    ]
  }
]


```
  
</details>
