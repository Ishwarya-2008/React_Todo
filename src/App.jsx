import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [dogImage, setDogImage] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchDogImage = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      if (data.status === 'success') {
        setDogImage(data.message)
      }
    } catch (error) {
      console.error('Error fetching dog image:', error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchDogImage()
  }, [])

  return (
    <>
      <div>
        <h1>Random Dog Images</h1>
        <div className="card">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <img src={dogImage} alt="Random Dog" style={{ maxWidth: '500px', borderRadius: '10px' }} />
          )}
        </div>
        <button onClick={fetchDogImage} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Get New Dog Image
        </button>
      </div>
    </>
  )
}

export default App
