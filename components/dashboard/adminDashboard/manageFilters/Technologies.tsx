import useTechnology from "@/hooks/useTechnology";

export default function Technologies() {
  const {
    technologies,
    isTechnoLoading,
    isTechnoError,
    refetchTechnos,
    categories,
    isCategoryLoading,
    isCategoryError,
  } = useTechnology();
  if (isTechnoLoading || isCategoryLoading) return <p>Loading...</p>;

  if (isTechnoError)
    return <button onClick={() => refetchTechnos()}>Ressayer</button>;
  if (isCategoryError) return <button>Ressayer</button>;

  return (
    <>
      <ul className="flex flex-col w-1/2 gap-3">
        {categories.map((category) => (
          <li key={category.id} className="p-5">
            {category.name}
            <ul className="flex flex-wrap gap-3">
              {technologies
                .filter((technology) => technology.categoryId === category.id)
                .map((technology) => (
                  <li key={technology.id}>{technology.name}</li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
