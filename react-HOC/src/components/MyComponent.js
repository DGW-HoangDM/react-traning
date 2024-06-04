import React, { useEffect, useState } from 'react'
const MyComponent = (prop) => {
  const { address } = prop;

  // console.log('address', address);

  const [listJob, setListJob] = useState(
    [
      { id: 'job1', name: 'Web', salary: 500 },
      { id: 'job2', name: 'Java', salary: 1000 },
      { id: 'job3', name: 'Net', salary: 3000 }
    ]
  );
  // console.log('listJob', listJob);


  useEffect(
    () => {
      console.log('call me useEffect');
    },
    []
  )

  console.log('call me render')
  return (
    <>
      <h1>My Component</h1>
      <code>{address}</code>

      {listJob && listJob.length > 0 &&
        listJob.map((item, index) => {
          return (
            <li key={index}>{item.name} - {item.salary}</li>
          )
        })
      }
    </>
  )
}

export default MyComponent;