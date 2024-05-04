// packmode: debug
// 只要我想，随时写😋
ItemEvents.rightClicked(event => {
    const{enchantments}=event.item
    event.server.tell(enchantments.size())
    event.server.tell(enchantments.entrySet()[0].getKey())
})