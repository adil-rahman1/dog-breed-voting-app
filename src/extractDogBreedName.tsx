export function extractDogBreedName(imageUrl: string) {
    const splittedUrlArray = imageUrl.split("/");
    const dogBreedName = splittedUrlArray[splittedUrlArray.length - 2];

    return dogBreedName;
}
