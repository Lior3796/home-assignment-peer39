export const concatCharacterName = (name = "") => {
    name = name.trim().replace(" ", "+");
    return name;
}
concatCharacterName(" lior solomon ");