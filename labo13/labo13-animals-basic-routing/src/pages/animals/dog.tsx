import React, { useEffect, useState } from "react";

// Define the type for the API response
interface Animal {
  name: string;
  taxonomy: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    species: string;
  };
  locations: string[];
  characteristics: {
    [key: string]: string | number | boolean;
  };
}

const AnimalInfo: React.FC = () => {
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimal = async (name: string) => {
      const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${name}`;
      const apiKey = "b1nYAW2ho6x34/2n/Q3SMg==KR6IpJzvGtlEUDFC"; // Replace with your actual API key

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data: Animal[] = await response.json();
        setAnimal(data.length > 0 ? data[0] : null);
      } catch (error: any) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal("dog");
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!animal) return <div>No data found.</div>;

  return (
    <div>
      <h1>{animal.name}</h1>
      <h2>Taxonomy</h2>
      <ul>
        <li>Kingdom: {animal.taxonomy.kingdom}</li>
        <li>Phylum: {animal.taxonomy.phylum}</li>
        <li>Class: {animal.taxonomy.class}</li>
        <li>Order: {animal.taxonomy.order}</li>
        <li>Family: {animal.taxonomy.family}</li>
        <li>Genus: {animal.taxonomy.genus}</li>
        <li>Species: {animal.taxonomy.species}</li>
      </ul>
      <h2>Locations</h2>
      <ul>
        {animal.locations.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
      <h2>Characteristics</h2>
      <ul>
        {Object.entries(animal.characteristics).map(([key, value], index) => (
          <li key={index}>
            {key}: {value.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalInfo;
