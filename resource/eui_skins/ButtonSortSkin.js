var $exmlClass4=(function (_super) {
	__extends($exmlClass4, _super);
	function $exmlClass4() {
		_super.call(this);
		
		this.elementsContent = [this.labelDisplay_i()];
		this._Image1_i();
		this._Image2_i();
		this._Image3_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("over",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",2,"labelDisplay")
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("_Image3","",2,"labelDisplay")
				])
		];
	}
	var _proto = $exmlClass4.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "resource/style/rank.png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.source = "resource/style/rank_over.png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.percentHeight = 100;
		t.source = "resource/style/rank.png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.text = "按钮";
		t.top = 0;
		return t;
	};
	Object.defineProperty(_proto, "skinParts", {
		get: function () {
			return ["labelDisplay"];
		},
		enumerable: true,
		configurable: true
	});
	return $exmlClass4;
})(eui.Skin);