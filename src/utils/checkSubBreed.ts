export function subBreedDash(breed: string) {
    if (breed.includes("-")) {
        return breed.replace("-", "/");
    } else {
        return breed;
    }
}
