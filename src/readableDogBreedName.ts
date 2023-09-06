export function readableDogBreedName(breedName: string): string {
    const capitalisedBreedName =
        breedName.charAt(0).toUpperCase() + breedName.substring(1);
    if (capitalisedBreedName.includes("-")) {
        const indexOfDash = capitalisedBreedName.indexOf("-");
        const capitalisedFullBreedName =
            capitalisedBreedName.substring(0, indexOfDash + 1) +
            capitalisedBreedName.charAt(indexOfDash + 1).toUpperCase() +
            capitalisedBreedName.substring(indexOfDash + 2);
        const capitalisedFullBreedNameWithSpace =
            capitalisedFullBreedName.replace("-", " ");
        return capitalisedFullBreedNameWithSpace;
    } else {
        return capitalisedBreedName;
    }
}
