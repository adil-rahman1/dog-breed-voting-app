import { extractDogBreedName } from "./extractDogBreedName";

test("extractDogBreedName returns the dog breed name, from the imageURL sourced from dogAPI", () => {
    expect(
        extractDogBreedName(
            "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_2966.jpg"
        )
    ).toEqual("elkhound-norwegian");
    expect(
        extractDogBreedName(
            "https://images.dog.ceo/breeds/australian-shepherd/leroy.jpg"
        )
    ).toEqual("australian-shepherd");
});
