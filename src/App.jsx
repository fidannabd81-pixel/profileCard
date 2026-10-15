import ProfileCard from "./ProfileCard"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <ProfileCard
        image="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=400&fit=crop"
        name="Fidan"
        surname="Abdullayeva"
        job="Computer Engineering Student"
        bio="I am a Computer Engineering student who enjoys learning about computer networks, React and building simple web pages."
      />

    </div>
  )
}

export default App