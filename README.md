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

## Example

```
{
    nodes: [
        {
            '@id': 1,
            name: 'node_1'
        },
        {
            '@id': 2,
            name: 'node_2'
        },
        {
            '@id': 3,
            name: 'node_3'
        },
        {
            '@id': 4,
            name: 'node_4'
        },
        {
            '@id': 5,
            name: 'node_5'
        },
        {
            '@id': 6,
            name: 'node_6'
        }
    ],
    edges: [
        {
            '@id': 7,
            s: 1,
            t: 4
        },
        {
            '@id': 8,
            s: 4,
            t: 3
        },
        {
            '@id': 9,
            s: 5,
            t: 1
        },
        {
            '@id': 10,
            s: 6,
            t: 1
        },
        {
            '@id': 11,
            s: 4,
            t: 2
        }
    ],
    networkAttributes: [
        {
            n: Patients,
            d: 'list_of_strings',
            v: [
                'Patient1',
                'Patient2',
                'Patient3',
                'Patient4',
                'Patient5',
                'Patient6'
            ]
        },
        {
            n: PatientSubtype,
            d: 'list_of_strings',
            v: [
                'Type_1',
                'Type_2',
                'Type_1',
                'Type_3',
                'Type_2',
                'Type_2'
            ]
        },
        {
            n: PatientGroups,
            d: 'list_of_strings',
            v: [
                'Group_B',
                'Group_A',
                'Group_A',
                'Group_B',
                'Group_A',
                'Group_A'
            ]
        },
        {
            n: 'PatientSurvivalYears',
            d: 'list_of_double',
            v: [
                '0.764',
                '7.3',
                '1.25',
                '0.87',
                '14.35',
                '3.142'
            ]
        }
    ],
    nodeAttributes: [
        {
            po: 1,
            n: 'Patient1_GE',
            v: '0.124',
            d: 'double'
        },
        {
            po: 1,
            n: 'Patient1_GE_Level',
            v: 'NORMAL'
        },
        {
            po: 1,
            n: 'Patient1_Score',
            v: '83.51e-14',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient1_GE',
            v: '0.524',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient1_GE_Level',
            v: 'HIGH'
        },
        {
            po: 2,
            n: 'Patient1_Score',
            v: '5.51',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient1_MTB',
            v: 'false',
            d: 'boolean'
        },
        {
            po: 3,
            n: 'Patient1_GE',
            v: '7.9924e-12',
            d: 'double'
        },
        {
            po: 3,
            n: 'Patient1_GE_Level',
            v: 'LOW'
        },
        {
            po: 3,
            n: 'Patient1_Score',
            v: '1.51',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient1_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient1_GE_Level',
            v: 'HIGH'
        },
        {
            po: 4,
            n: 'Patient1_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient1_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient1_GE_Level',
            v: 'HIGH'
        },
        {
            po: 5,
            n: 'Patient1_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient1_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient1_GE_Level',
            v: 'HIGH'
        },
        {
            po: 6,
            n: 'Patient1_Score',
            v: '9.51',
            d: 'double'
        }




        {
            po: 1,
            n: 'Patient2_GE',
            v: '0.124',
            d: 'double'
        },
        {
            po: 1,
            n: 'Patient2_GE_Level',
            v: 'NORMAL'
        },
        {
            po: 1,
            n: 'Patient2_Score',
            v: '83.51e-14',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient2_GE',
            v: '0.524',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient2_GE_Level',
            v: 'HIGH'
        },
        {
            po: 2,
            n: 'Patient2_Score',
            v: '5.51',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient2_MTB',
            v: 'false',
            d: 'boolean'
        },
        {
            po: 3,
            n: 'Patient2_GE',
            v: '7.9924e-12',
            d: 'double'
        },
        {
            po: 3,
            n: 'Patient2_GE_Level',
            v: 'LOW'
        },
        {
            po: 3,
            n: 'Patient2_Score',
            v: '1.51',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient2_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient2_GE_Level',
            v: 'HIGH'
        },
        {
            po: 4,
            n: 'Patient2_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient2_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient2_GE_Level',
            v: 'HIGH'
        },
        {
            po: 5,
            n: 'Patient2_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient2_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient2_GE_Level',
            v: 'HIGH'
        },
        {
            po: 6,
            n: 'Patient2_Score',
            v: '9.51',
            d: 'double'
        },



        {
            po: 1,
            n: 'Patient3_GE',
            v: '0.124',
            d: 'double'
        },
        {
            po: 1,
            n: 'Patient3_GE_Level',
            v: 'NORMAL'
        },
        {
            po: 1,
            n: 'Patient3_Score',
            v: '83.51e-14',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient3_GE',
            v: '0.524',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient3_GE_Level',
            v: 'HIGH'
        },
        {
            po: 2,
            n: 'Patient3_Score',
            v: '5.51',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient3_MTB',
            v: 'false',
            d: 'boolean'
        },
        {
            po: 3,
            n: 'Patient3_GE',
            v: '7.9924e-12',
            d: 'double'
        },
        {
            po: 3,
            n: 'Patient3_GE_Level',
            v: 'LOW'
        },
        {
            po: 3,
            n: 'Patient3_Score',
            v: '1.51',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient3_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient3_GE_Level',
            v: 'HIGH'
        },
        {
            po: 4,
            n: 'Patient3_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient3_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient3_GE_Level',
            v: 'HIGH'
        },
        {
            po: 5,
            n: 'Patient3_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient3_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient3_GE_Level',
            v: 'HIGH'
        },
        {
            po: 6,
            n: 'Patient3_Score',
            v: '9.51',
            d: 'double'
        },




        {
            po: 1,
            n: 'Patient4_GE',
            v: '0.124',
            d: 'double'
        },
        {
            po: 1,
            n: 'Patient4_GE_Level',
            v: 'NORMAL'
        },
        {
            po: 1,
            n: 'Patient4_Score',
            v: '83.51e-14',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient4_GE',
            v: '0.524',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient4_GE_Level',
            v: 'HIGH'
        },
        {
            po: 2,
            n: 'Patient4_Score',
            v: '5.51',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient4_MTB',
            v: 'false',
            d: 'boolean'
        },
        {
            po: 3,
            n: 'Patient4_GE',
            v: '7.9924e-12',
            d: 'double'
        },
        {
            po: 3,
            n: 'Patient4_GE_Level',
            v: 'LOW'
        },
        {
            po: 3,
            n: 'Patient4_Score',
            v: '1.51',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient4_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient4_GE_Level',
            v: 'HIGH'
        },
        {
            po: 4,
            n: 'Patient4_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient4_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient4_GE_Level',
            v: 'HIGH'
        },
        {
            po: 5,
            n: 'Patient4_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient4_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient4_GE_Level',
            v: 'HIGH'
        },
        {
            po: 6,
            n: 'Patient4_Score',
            v: '9.51',
            d: 'double'
        },



        {
            po: 1,
            n: 'Patient5_GE',
            v: '0.124',
            d: 'double'
        },
        {
            po: 1,
            n: 'Patient5_GE_Level',
            v: 'NORMAL'
        },
        {
            po: 1,
            n: 'Patient5_Score',
            v: '83.51e-14',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient5_GE',
            v: '0.524',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient5_GE_Level',
            v: 'HIGH'
        },
        {
            po: 2,
            n: 'Patient5_Score',
            v: '5.51',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient5_MTB',
            v: 'false',
            d: 'boolean'
        },
        {
            po: 3,
            n: 'Patient5_GE',
            v: '7.9924e-12',
            d: 'double'
        },
        {
            po: 3,
            n: 'Patient5_GE_Level',
            v: 'LOW'
        },
        {
            po: 3,
            n: 'Patient5_Score',
            v: '1.51',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient5_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient5_GE_Level',
            v: 'HIGH'
        },
        {
            po: 4,
            n: 'Patient5_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient5_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient5_GE_Level',
            v: 'HIGH'
        },
        {
            po: 5,
            n: 'Patient5_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient5_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient5_GE_Level',
            v: 'HIGH'
        },
        {
            po: 6,
            n: 'Patient5_Score',
            v: '9.51',
            d: 'double'
        },



        {
            po: 1,
            n: 'Patient6_GE',
            v: '0.124',
            d: 'double'
        },
        {
            po: 1,
            n: 'Patient6_GE_Level',
            v: 'NORMAL'
        },
        {
            po: 1,
            n: 'Patient6_Score',
            v: '83.51e-14',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient6_GE',
            v: '0.524',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient6_GE_Level',
            v: 'HIGH'
        },
        {
            po: 2,
            n: 'Patient6_Score',
            v: '5.51',
            d: 'double'
        },
        {
            po: 2,
            n: 'Patient6_MTB',
            v: 'false',
            d: 'boolean'
        },
        {
            po: 3,
            n: 'Patient6_GE',
            v: '7.9924e-12',
            d: 'double'
        },
        {
            po: 3,
            n: 'Patient6_GE_Level',
            v: 'LOW'
        },
        {
            po: 3,
            n: 'Patient6_Score',
            v: '1.51',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient6_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 4,
            n: 'Patient6_GE_Level',
            v: 'HIGH'
        },
        {
            po: 4,
            n: 'Patient6_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient6_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 5,
            n: 'Patient6_GE_Level',
            v: 'HIGH'
        },
        {
            po: 5,
            n: 'Patient6_Score',
            v: '9.51',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient6_GE',
            v: '9.12e-12',
            d: 'double'
        },
        {
            po: 6,
            n: 'Patient6_GE_Level',
            v: 'HIGH'
        },
        {
            po: 6,
            n: 'Patient6_Score',
            v: '9.51',
            d: 'double'
        }
    ]
}



```
