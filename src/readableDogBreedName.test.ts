import { extractDogBreedName } from "./extractDogBreedName";
import { readableDogBreedName } from "./readableDogBreedName";

test("readableDogBreedName returns capitalised dog breed name and a space instead of a dash ", () => {
    expect(readableDogBreedName("spaniel-cocker")).toEqual("Spaniel Cocker");
    expect(readableDogBreedName("australian-shepherd")).toEqual(
        "Australian Shepherd"
    );
    expect(readableDogBreedName("boxer")).toEqual("Boxer");
});
test("readableDogBreedName returns capitalised dog breed name and a space instead of a dash from url", () => {
    expect(
        readableDogBreedName(
            extractDogBreedName(
                "https://images.dog.ceo/breeds/bulldog-boston/n02096585_11731.jpg"
            )
        )
    ).toEqual("Bulldog Boston");
});
