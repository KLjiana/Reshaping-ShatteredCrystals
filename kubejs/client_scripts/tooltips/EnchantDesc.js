//为附魔书添加类似于Enchantment Descriptions的效果（但是有shift隐藏😋

ItemEvents.tooltip((event) => {
  const ENCHANTED_BOOK = Ingredient.of("minecraft:enchanted_book");
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (!ENCHANTED_BOOK.test(item) && !item.enchanted) return;
    const { enchantments } = item;

    if (event.shift) {
      enchantments.forEach((enchantment) => {
        let descriptionId = `enchantment.${enchantment.replace(":", ".")}`;
        text.add(Text.translate(
                "tooltip.enchdesc.embellish",
                Text.translate(descriptionId),
                Text.translate(`${descriptionId}.desc`)
            ).darkGray());
      });
    } else {
      text.add(Text.translate("tooltip.enchdesc.hold"));
    }
  });
});