ItemEvents.modification(event => {
    event.modify('pointblank:ammocreative', item => {
        item.maxStackSize = 999
        item.fireResistant = true
    })
})