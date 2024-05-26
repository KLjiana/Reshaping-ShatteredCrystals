LootJS.modifiers(event => {
    const {ENTITY, CHEST, BLOCK} = LootType
    event
        .addLootTypeModifier(ENTITY)
        .removeLoot(Ingredient.all)
    event
        .addLootTypeModifier(CHEST)
        .removeLoot(Ingredient.all)
    event
        .addLootTypeModifier(BLOCK)
        .removeLoot(Ingredient.all)
})