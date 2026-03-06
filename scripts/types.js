
class type {
    constructor(typeName, typeColor) {
        this.typeName = typeName;
        this.typeColor = typeColor;
    }
}

export const types = new Map([
    ["normal", new type("normal", "#A8A878")],
    ["fire", new type("fire", "#F08030")],
    ["water", new type("water", "#6890F0")],
    ["electric", new type("electric", "#F8D030")],
    ["grass", new type("grass", "#78C850")],
    ["ice", new type("ice", "#98D8D8")],
    ["fighting", new type("fighting", "#C03028")],
    ["poison", new type("poison", "#A040A0")],
    ["ground", new type("ground", "#E0C068")],
    ["flying", new type("flying", "#A890F0")],
    ["psychic", new type("psychic", "#F85888")],
    ["bug", new type("bug", "#A8B820")],
    ["rock", new type("rock", "#B8A038")],
    ["ghost", new type("ghost", "#705898")],
    ["dragon", new type("dragon", "#7038F8")],
    ["dark", new type("dark", "#705848")],
    ["steel", new type("steel", "#B8B8D0")],
    ["fairy", new type("fairy", "#EE99AC")]
]);

export function getTypeColor(typeName) {
    return types.get(typeName).typeColor;
}