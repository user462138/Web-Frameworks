import { useRouter } from "next/router";
// import { GetServerSideProps } from "next";
// import animalsJson from "@/animals.json"
import { useEffect, useState } from "react";
import { Animal, AnimalProps } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";


// export const getServerSideProps: GetServerSideProps<AnimalProps> = async () => {
//   const response = await fetch("http://localhost:3000/api/animals");
//   const animals = await response.json();

//   return {
//     props: {
//       animals: animals
//     },
//   };
// };

interface Paths extends ParsedUrlQuery {
  name: string
}

export const getStaticPaths : GetStaticPaths<Paths> = async () => {
    const response = await fetch("http://localhost:3000/animals");
    const animals = await response.json();

    const paths = animals.map((animal : Animal) => ({
        params: { name: animal.name.toString() },
    }));

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<AnimalProps> = async () => {
  const response = await fetch("http://localhost:3000/animals");
  const animals = await response.json();
  return {
    props: {
      animals: animals
    },
  };
};


const Animasl = ({ animals }: { animals: Animal[] }) => {
  const router = useRouter()
  const { name } = router.query
  const [animal, setAnimal] = useState<Animal>();
  const [loading, setLoading] = useState(true)
  // const animals =  animalsJson.animals;
  // const animal = animals.find(animal => animal.name === name)

  useEffect(() => {
    if (router.isReady) {
      // fetch(`http://localhost:3000/api/animals`)
      //   .then(response => response.json())
      //   .then((animals: Animal[]) => {
      //     const animal = animals.find(animal => animal.name === name);
      //     setAnimal(animal)
      //     setLoading(false)
      //   })
      const animal = animals.find(animal => animal.name === name);
      setAnimal(animal)
      setLoading(false)
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