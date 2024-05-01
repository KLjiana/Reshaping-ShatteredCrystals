// packmode: debug
// 只要我想，随时写😋
ItemEvents.rightClicked(event => {
    event.item.getEnchantments().forEach(enchant => {
        event.server.tell(enchant)
    })
})