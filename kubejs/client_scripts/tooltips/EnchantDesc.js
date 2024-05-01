//为附魔书添加类似于Enchantment Descriptions的效果（但是有shift隐藏😋
let enchantedBook = Java.loadClass('net.minecraft.world.item.EnchantedBookItem')

ItemEvents.tooltip(event => {
    event.addAdvanced(Ingredient.all, (item, advanced, text) => {
        let enchant;
        if (item.id == "minecraft:enchanted_book") {
            enchant = enchantedBook.getEnchantments(item)
        }
        else if (item.isEnchanted()) {
            enchant = item.getEnchantmentTags()
        }
        else { return }
        if (event.shift) {
            enchant.forEach(tags => {
                let name = `enchantment.${tags.id.replace(':', '.')}`
                text.add(Text.translate(
                    "tooltip.enchdesc.embellish",
                    Text.translate(name),
                    Text.translate(`${name}.desc`)
                ).darkGray())
            })
        }
        else { text.add(Text.translate("tooltip.enchdesc.hold_shift")) }
    })
})