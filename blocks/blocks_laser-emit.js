Blockly.Blocks['ky_008_laser_emit_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-008 LASER EMIT");
    this.appendValueInput("KY_008_LASER_EMIT_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};