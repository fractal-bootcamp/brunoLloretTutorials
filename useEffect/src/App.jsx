import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [windowWidth, setwindowWidth] = useState(window.innerWidth)

//   const handleResize = () => {
//     setwindowWidth(window.innerWidth)
//   }
//   useEffect(() => {
//     window.addEventListener('resize', handleResize)
//   }, [])

//   return (
//     <>
//       <div>{windowWidth}</div>
//     </>
//   )
// }

// export default App



// function App() {
//   const [resourceType, setResourceType] = useState('')
//   const [items, setItems] = useState('')

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, [resourceType])


//   // useEffect(() => {
//   //   console.log('resource changed')

//   //   //return always is called first
//   //   //this return code is considered your clean up
//   //   //it is ran first to clean up whatever we did last time
//   //   return () => {
//   //     console.log('return from resource change')
//   //   }
//   // }, [resourceType])


//   return (
//     <>
//       <button onClick={() => setResourceType('users')}>users</button>
//       <button onClick={() => setResourceType('posts')}>posts</button>
//       <button onClick={() => setResourceType('comments')}>comments</button>

//       <h1>{resourceType}</h1>
//       <div>
//         {items.map(item => {
//           return <pre>{JSON.stringify(item)}</pre>
//         }

//         )}
//       </div>
//     </>
//   )
// }

// export default App


export default function App() {
  const [resourceTypes, setresourceTypes] = useState('')
  const [items, setitems] = useState([])

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/${resourceTypes}`)
      .then(response => response.json())
      .then(json => setitems(json))
  }, [resourceTypes])

  return (

    <>
      <div>
        <button onClick={() => setresourceTypes('users')}>users</button>
        <button onClick={() => setresourceTypes('comments')}>comments</button>
        <button onClick={() => setresourceTypes('posts')}>posts</button>
      </div>

      <h2>{resourceTypes}</h2>
      <div>
        {items.map(item => {
          return <p>{JSON.stringify(item)}</p>
        }

        )}
      </div>

    </>
  )
}