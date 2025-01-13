import { useRouter } from "next/router";
import animalsJson from "@/animals.json"
import { useEffect, useState } from "react";
import { Animal } from "@/types";
 
const Animasl = () => {
  const router = useRouter()
  const {name} = router.query
  const [animal, setAnimal] = useState<Animal>();
  const [loading, setLoading] = useState(true)
  // const animals =  animalsJson.animals;
  // const animal = animals.find(animal => animal.name === name)

  useEffect(() => {
    if (router.isReady) {
      fetch(`http://localhost:3001/animals`)
        .then(response => response.json())
        .then((animals:Animal[]) => {
          const animal = animals.find(animal => animal.name === name);
          setAnimal(animal)
          setLoading(false)
        })
    }
  }, [router.isReady, name])

  if (loading) return <p>Loading...</p>
  if (animal) {
    return <p>Animasl:  {animal.name} <img src={animal.img} alt="" /></p>
  } else {
    return <p>Animal was not found</p>
  }
}

export default Animasl;