//为附魔书添加类似于Enchantment Descriptions的效果（但是有shift隐藏😋

const time = Utils
let holdTime
let holdShift = false
let texT='这是一个可以测试按键长短的tooltips'
let isShortPressAdded = false // 新增变量
const enchantedBook = Ingredient.of("minecraft:enchanted_book")

ItemEvents.tooltip(event => {
    event.addAdvanced("diamond", (item, advanced, text) => {
      let shift = event.shift
      if(!holdShift&&shift){
        holdShift = true
        holdTime = time.getSystemTime()
        console.info(holdTime)
      }
      if(holdShift&&!shift){
        console.info(time.getSystemTime()-holdTime)
        if(time.getSystemTime()-holdTime<500){
          texT=Text.of('短按')
          console.info('短按')
        }else if(time.getSystemTime()-holdTime>=500){
          texT=Text.of('长按')
          console.info('长按')
        }
        holdShift = false
      }
      text.add('按键状态：'+texT)
    })
    /*
  event.addAdvanced(Ingredient.all, (item, advanced, text) => {
    if (!enchantedBook.test(item) && !item.enchanted) {return}
    const { enchantments } = item

    if (event.shift) {
      enchantments.forEach((enchantment) => {
        let descriptionId = `enchantment.${enchantment.replace(":", ".")}`
        text.add(Text.translate(
                "tooltip.enchdesc.embellish",
                Text.translate(descriptionId),
                Text.translate(`${descriptionId}.desc`)
            ).darkGray())
      })
    } else {
      text.add(Text.translate("tooltip.enchdesc.hold"))
    }
  })*/
})