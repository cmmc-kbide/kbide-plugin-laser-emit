Blockly.Blocks["ky_008_laser_emit_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-008 LASER EMIT");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_008_LASER_EMIT_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_008_LASER_EMIT_STATE"),
          "KY_008_LASER_EMIT_STATE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };