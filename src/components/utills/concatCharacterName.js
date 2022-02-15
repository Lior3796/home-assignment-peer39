export const concatCharacterName = (name = "") => {
    name = name.trim().replace(" ", "+");
    console.log(name);
    return name;
}
