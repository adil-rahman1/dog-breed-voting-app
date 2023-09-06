export function readableDogBreedName(breedName: string): string {
    const capitaliseFirstLetter =
        breedName.charAt(0).toUpperCase() + breedName.substring(1);
    if (capitaliseFirstLetter.includes("-")) {
        const dashIndex = capitaliseFirstLetter.indexOf("-");
        const capitaliseSecondFirstLetter =
            capitaliseFirstLetter.substring(0, dashIndex + 1) +
            capitaliseFirstLetter.charAt(dashIndex + 1).toUpperCase() +
            capitaliseFirstLetter.substring(dashIndex + 2);
        const removeDash = capitaliseSecondFirstLetter.replace("-", " ");
        return removeDash;
    } else {
        return capitaliseFirstLetter;
    }
}
