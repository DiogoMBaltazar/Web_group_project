import React from 'react'

function ListCars(props:any) {
  return <>
  <ul>
      {
          props.car.map((t: { car: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; driver: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
              return <li key={index}>Car with ID {t.car} driver {t.driver}</li>
          })
  }
  </ul>
</>
};

export default ListCars;