import React, { Component } from 'react'

import OfficeMap from 'office-map'

const INITIAL_STATE = { desk: undefined }
export default class Salle extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  render() {
    const data = [
      {
        id: 1,
        chairDirection: 'west', x: 0, y: 0,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ],
      },
      {
        id: 2,
        chairDirection: 'east', x: 1, y: 0,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ],
      },
      {
        id: 3, chairDirection: 'north', x: 0, y: 2,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ],
      },
      {
        id: 4, chairDirection: 'north', x: 1, y: 2,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ],
      },
      {
        id: 5, chairDirection: 'north', x: 2, y: 2,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
      {
        id: 6, chairDirection: 'north', x: 3, y: 2,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
      {
        id: 7, chairDirection: 'south', x: 0, y: 3,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
      {
        id: 8, chairDirection: 'south', x: 1, y: 3,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
      {
        id: 9, chairDirection: 'south', x: 2, y: 3,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
      {
        id: 10, chairDirection: 'south', x: 3, y: 3,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
       {
        id: 10, chairDirection: 'south', x: 3, y: 3,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },

        ]
      },
       {
        id: 11, chairDirection: 'north-west', x: 4, y: 0,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ]
      },
      {
        id: 12, chairDirection: 'north-east', x: 5, y: 0,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ]
      },
       {
        id: 13, chairDirection: 'south-west', x: 4, y: 1,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ]
      },
      {
        id: 14, chairDirection: 'south-east', x: 5, y: 1,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ]
      },
      {
        id: 15, chairDirection: 'west', x: 5, y: 4,
        equipments: [
          { type: 'desk', specification: 'Simple desk' },
          { type: 'chair', specification: '817L Kare Ergonomic Office Chair' },
        ]
      },
    ]

    const desk = this.state.desk
    return (
      <div style={{ width: 1200, margin: "10px auto" }}>
        <h1>Plan de salle</h1>

        <hr />
        <br />
        <OfficeMap
          data={data}
          onSelect={desk => this.setState({ desk })}
          onMove={desk => this.setState({ desk })}
          editMode={true} 
          showNavigator={true} 
          horizontalSize={5}
          verticalSize={3} />
      </div>
    )
  }
}