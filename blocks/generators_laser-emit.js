Blockly.JavaScript["ky_008_laser_emit_block"] = function(block) {
    var text_ky_008_laser_emit_pin = block.getFieldValue(
      "KY_008_LASER_EMIT_PIN"
    );
    var variable_ky_008_laser_emit_state = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_008_LASER_EMIT_STATE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #VARIABLE
	int KY_008_LASER_EMIT_PIN = ${text_ky_008_laser_emit_pin};
	#END

	#SETUP
		pinMode(KY_008_LASER_EMIT_PIN, OUTPUT);
	#END
	
	${variable_ky_008_laser_emit_state} = KY_008_LASER_EMIT_PIN;
    `;
    return code;
  };