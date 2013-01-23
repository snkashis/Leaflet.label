L.Map.include({
	showLabel: function (label) {
		if (label._source.options.opacity && label._source.options.opacity === 0) {return; }
		this._label = label;

		return this.addLayer(label);
	}
});