/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Proprietary Software license
 * that can be found at https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html.
 */
var Live2DCubismCore;
(function (Live2DCubismCore) {
	/** C calls. */
	var _csm = /** @class */ (function () {
		function _csm() {}
		_csm.getVersion = function () {
			return _em.ccall("csmGetVersion", "number", [], []);
		};
		_csm.getLatestMocVersion = function () {
			return _em.ccall("csmGetLatestMocVersion", "number", [], []);
		};
		_csm.getMocVersion = function (moc) {
			return _em.ccall("csmGetMocVersion", "number", ["number"], [moc]);
		};
		_csm.getSizeofModel = function (moc) {
			return _em.ccall("csmGetSizeofModel", "number", ["number"], [moc]);
		};
		_csm.reviveMocInPlace = function (memory, mocSize) {
			return _em.ccall(
				"csmReviveMocInPlace",
				"number",
				["number", "number"],
				[memory, mocSize]
			);
		};
		_csm.initializeModelInPlace = function (moc, memory, modelSize) {
			return _em.ccall(
				"csmInitializeModelInPlace",
				"number",
				["number", "number", "number"],
				[moc, memory, modelSize]
			);
		};
		_csm.getParameterCount = function (model) {
			return _em.ccall("csmGetParameterCount", "number", ["number"], [model]);
		};
		_csm.getParameterIds = function (model) {
			return _em.ccall("csmGetParameterIds", "number", ["number"], [model]);
		};
		_csm.getParameterMinimumValues = function (model) {
			return _em.ccall(
				"csmGetParameterMinimumValues",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getParameterMaximumValues = function (model) {
			return _em.ccall(
				"csmGetParameterMaximumValues",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getParameterDefaultValues = function (model) {
			return _em.ccall(
				"csmGetParameterDefaultValues",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getParameterValues = function (model) {
			return _em.ccall("csmGetParameterValues", "number", ["number"], [model]);
		};
		_csm.getParameterKeyCounts = function (model) {
			return _em.ccall(
				"csmGetParameterKeyCounts",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getParameterKeyValues = function (model) {
			return _em.ccall(
				"csmGetParameterKeyValues",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getPartCount = function (model) {
			return _em.ccall("csmGetPartCount", "number", ["number"], [model]);
		};
		_csm.getPartIds = function (model) {
			return _em.ccall("csmGetPartIds", "number", ["number"], [model]);
		};
		_csm.getPartOpacities = function (model) {
			return _em.ccall("csmGetPartOpacities", "number", ["number"], [model]);
		};
		_csm.getPartParentPartIndices = function (model) {
			return _em.ccall(
				"csmGetPartParentPartIndices",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableCount = function (model) {
			return _em.ccall("csmGetDrawableCount", "number", ["number"], [model]);
		};
		_csm.getDrawableIds = function (model) {
			return _em.ccall("csmGetDrawableIds", "number", ["number"], [model]);
		};
		_csm.getDrawableConstantFlags = function (model) {
			return _em.ccall(
				"csmGetDrawableConstantFlags",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableDynamicFlags = function (model) {
			return _em.ccall(
				"csmGetDrawableDynamicFlags",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableTextureIndices = function (model) {
			return _em.ccall(
				"csmGetDrawableTextureIndices",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableDrawOrders = function (model) {
			return _em.ccall(
				"csmGetDrawableDrawOrders",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableRenderOrders = function (model) {
			return _em.ccall(
				"csmGetDrawableRenderOrders",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableOpacities = function (model) {
			return _em.ccall(
				"csmGetDrawableOpacities",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableMaskCounts = function (model) {
			return _em.ccall(
				"csmGetDrawableMaskCounts",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableMasks = function (model) {
			return _em.ccall("csmGetDrawableMasks", "number", ["number"], [model]);
		};
		_csm.getDrawableVertexCounts = function (model) {
			return _em.ccall(
				"csmGetDrawableVertexCounts",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableVertexPositions = function (model) {
			return _em.ccall(
				"csmGetDrawableVertexPositions",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableVertexUvs = function (model) {
			return _em.ccall(
				"csmGetDrawableVertexUvs",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableIndexCounts = function (model) {
			return _em.ccall(
				"csmGetDrawableIndexCounts",
				"number",
				["number"],
				[model]
			);
		};
		_csm.getDrawableIndices = function (model) {
			return _em.ccall("csmGetDrawableIndices", "number", ["number"], [model]);
		};
		_csm.mallocMoc = function (mocSize) {
			return _em.ccall("csmMallocMoc", "number", ["number"], [mocSize]);
		};
		_csm.mallocModelAndInitialize = function (moc) {
			return _em.ccall(
				"csmMallocModelAndInitialize",
				"number",
				["number"],
				[moc]
			);
		};
		_csm.malloc = function (size) {
			return _em.ccall("csmMalloc", "number", ["number"], [size]);
		};
		_csm.setLogFunction = function (handler) {
			_em.ccall("csmSetLogFunction", null, ["number"], [handler]);
		};
		_csm.updateModel = function (model) {
			_em.ccall("csmUpdateModel", null, ["number"], [model]);
		};
		_csm.readCanvasInfo = function (
			model,
			outSizeInPixels,
			outOriginInPixels,
			outPixelsPerUnit
		) {
			_em.ccall(
				"csmReadCanvasInfo",
				null,
				["number", "number", "number", "number"],
				[model, outSizeInPixels, outOriginInPixels, outPixelsPerUnit]
			);
		};
		_csm.resetDrawableDynamicFlags = function (model) {
			_em.ccall("csmResetDrawableDynamicFlags", null, ["number"], [model]);
		};
		_csm.free = function (memory) {
			_em.ccall("csmFree", null, ["number"], [memory]);
		};
		return _csm;
	})();
	/** Cubism version. */
	var Version = /** @class */ (function () {
		function Version() {}
		/**
		 * Queries Core version.
		 *
		 * @return Core version.
		 */
		Version.csmGetVersion = function () {
			return _csm.getVersion();
		};
		/**
		 * Gets Moc file supported latest version.
		 *
		 * @return Moc file latest format version.
		 */
		Version.csmGetLatestMocVersion = function () {
			return _csm.getLatestMocVersion();
		};
		/**
		 * Gets Moc file format version.
		 *
		 * @param moc Moc
		 *
		 * @return csmMocVersion
		 */
		Version.csmGetMocVersion = function (moc) {
			return _csm.getMocVersion(moc._ptr);
		};
		return Version;
	})();
	Live2DCubismCore.Version = Version;
	/** Cubism logging. */
	var Logging = /** @class */ (function () {
		function Logging() {}
		/**
		 * Sets log handler.
		 *
		 * @param handler  Handler to use.
		 */
		Logging.csmSetLogFunction = function (handler) {
			// Cache log handler.
			Logging.logFunction = handler;
			// Wrap function to pointer.
			var pointer = _em.addFunction(Logging.wrapLogFunction, "vi");
			// Sets log handler.
			_csm.setLogFunction(pointer);
		};
		/**
		 * Queries log handler.
		 *
		 * @return Log handler.
		 */
		Logging.csmGetLogFunction = function () {
			return Logging.logFunction;
		};
		/**
		 * Wrap log function.
		 *
		 * @param messagePtr number
		 *
		 * @return string
		 */
		Logging.wrapLogFunction = function (messagePtr) {
			// Pointer to string.
			var messageStr = _em.UTF8ToString(messagePtr);
			// Run log function.
			Logging.logFunction(messageStr);
		};
		return Logging;
	})();
	Live2DCubismCore.Logging = Logging;
	/** Cubism moc. */
	var Moc = /** @class */ (function () {
		/**
		 * Initializes instance.
		 *
		 * @param mocBytes Moc bytes.
		 */
		function Moc(mocBytes) {
			// Allocate memory.
			var memory = _csm.mallocMoc(mocBytes.byteLength);
			if (!memory) {
				return;
			}
			// Initialize memory.
			var destination = new Uint8Array(
				_em.HEAPU8.buffer,
				memory,
				mocBytes.byteLength
			);
			destination.set(new Uint8Array(mocBytes));
			// Revive moc.
			this._ptr = _csm.reviveMocInPlace(memory, mocBytes.byteLength);
			if (!this._ptr) {
				_csm.free(memory);
			}
		}
		/** Creates [[Moc]] from [[ArrayBuffer]].
		 *
		 * @param buffer Array buffer
		 *
		 * @return [[Moc]] on success; [[null]] otherwise.
		 */
		Moc.fromArrayBuffer = function (buffer) {
			if (!buffer) {
				return null;
			}
			var moc = new Moc(buffer);
			return moc._ptr ? moc : null;
		};
		/** Releases instance. */
		Moc.prototype._release = function () {
			_csm.free(this._ptr);
			this._ptr = 0;
		};
		return Moc;
	})();
	Live2DCubismCore.Moc = Moc;
	/** Cubism model. */
	var Model = /** @class */ (function () {
		/**
		 * Initializes instance.
		 *
		 * @param moc Moc
		 */
		function Model(moc) {
			this._ptr = _csm.mallocModelAndInitialize(moc._ptr);
			if (!this._ptr) {
				return;
			}
			this.parameters = new Parameters(this._ptr);
			this.parts = new Parts(this._ptr);
			this.drawables = new Drawables(this._ptr);
			this.canvasinfo = new CanvasInfo(this._ptr);
		}
		/**
		 * Creates [[Model]] from [[Moc]].
		 *
		 * @param moc Moc
		 *
		 * @return [[Model]] on success; [[null]] otherwise.
		 */
		Model.fromMoc = function (moc) {
			var model = new Model(moc);
			return model._ptr ? model : null;
		};
		/** Updates instance. */
		Model.prototype.update = function () {
			_csm.updateModel(this._ptr);
		};
		/** Releases instance. */
		Model.prototype.release = function () {
			_csm.free(this._ptr);
			this._ptr = 0;
		};
		return Model;
	})();
	Live2DCubismCore.Model = Model;
	/** Canvas information interface. */
	var CanvasInfo = /** @class */ (function () {
		/**
		 * Initializes instance.
		 *
		 * @param modelPtr Native model pointer.
		 */
		function CanvasInfo(modelPtr) {
			if (!modelPtr) {
				return;
			}
			// Preserve the pointer ant heap for get data throw args.
			var _canvasSize_data = new Float32Array(2);
			var _canvasSize_nDataBytes =
				_canvasSize_data.length * _canvasSize_data.BYTES_PER_ELEMENT;
			var _canvasSize_dataPtr = _csm.malloc(_canvasSize_nDataBytes);
			var _canvasSize_dataHeap = new Uint8Array(
				_em.HEAPU8.buffer,
				_canvasSize_dataPtr,
				_canvasSize_nDataBytes
			);
			_canvasSize_dataHeap.set(new Uint8Array(_canvasSize_data.buffer));
			var _canvasOrigin_data = new Float32Array(2);
			var _canvasOrigin_nDataBytes =
				_canvasOrigin_data.length * _canvasOrigin_data.BYTES_PER_ELEMENT;
			var _canvasOrigin_dataPtr = _csm.malloc(_canvasOrigin_nDataBytes);
			var _canvasOrigin_dataHeap = new Uint8Array(
				_em.HEAPU8.buffer,
				_canvasOrigin_dataPtr,
				_canvasOrigin_nDataBytes
			);
			_canvasOrigin_dataHeap.set(new Uint8Array(_canvasOrigin_data.buffer));
			var _canvasPPU_data = new Float32Array(1);
			var _canvasPPU_nDataBytes =
				_canvasPPU_data.length * _canvasPPU_data.BYTES_PER_ELEMENT;
			var _canvasPPU_dataPtr = _csm.malloc(_canvasPPU_nDataBytes);
			var _canvasPPU_dataHeap = new Uint8Array(
				_em.HEAPU8.buffer,
				_canvasPPU_dataPtr,
				_canvasPPU_nDataBytes
			);
			_canvasPPU_dataHeap.set(new Uint8Array(_canvasPPU_data.buffer));
			// Call function and get result
			_csm.readCanvasInfo(
				modelPtr,
				_canvasSize_dataHeap.byteOffset,
				_canvasOrigin_dataHeap.byteOffset,
				_canvasPPU_dataHeap.byteOffset
			);
			_canvasSize_data = new Float32Array(
				_canvasSize_dataHeap.buffer,
				_canvasSize_dataHeap.byteOffset,
				_canvasSize_dataHeap.length
			);
			_canvasOrigin_data = new Float32Array(
				_canvasOrigin_dataHeap.buffer,
				_canvasOrigin_dataHeap.byteOffset,
				_canvasOrigin_dataHeap.length
			);
			_canvasPPU_data = new Float32Array(
				_canvasPPU_dataHeap.buffer,
				_canvasPPU_dataHeap.byteOffset,
				_canvasPPU_dataHeap.length
			);
			this.CanvasWidth = _canvasSize_data[0];
			this.CanvasHeight = _canvasSize_data[1];
			this.CanvasOriginX = _canvasOrigin_data[0];
			this.CanvasOriginY = _canvasOrigin_data[1];
			this.PixelsPerUnit = _canvasPPU_data[0];
			// Free heap memory
			_csm.free(_canvasSize_dataHeap.byteOffset);
			_csm.free(_canvasOrigin_dataHeap.byteOffset);
			_csm.free(_canvasPPU_dataHeap.byteOffset);
		}
		return CanvasInfo;
	})();
	Live2DCubismCore.CanvasInfo = CanvasInfo;
	/** Cubism model parameters */
	var Parameters = /** @class */ (function () {
		/**
		 * Initializes instance.
		 *
		 * @param modelPtr Native model.
		 */
		function Parameters(modelPtr) {
			var length = 0;
			var length2 = null;
			this.count = _csm.getParameterCount(modelPtr);
			length = _csm.getParameterCount(modelPtr);
			this.ids = new Array(length);
			var _ids = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getParameterIds(modelPtr),
				length
			);
			for (var i = 0; i < _ids.length; i++) {
				this.ids[i] = _em.UTF8ToString(_ids[i]);
			}
			length = _csm.getParameterCount(modelPtr);
			this.minimumValues = new Float32Array(
				_em.HEAPF32.buffer,
				_csm.getParameterMinimumValues(modelPtr),
				length
			);
			length = _csm.getParameterCount(modelPtr);
			this.maximumValues = new Float32Array(
				_em.HEAPF32.buffer,
				_csm.getParameterMaximumValues(modelPtr),
				length
			);
			length = _csm.getParameterCount(modelPtr);
			this.defaultValues = new Float32Array(
				_em.HEAPF32.buffer,
				_csm.getParameterDefaultValues(modelPtr),
				length
			);
			length = _csm.getParameterCount(modelPtr);
			this.values = new Float32Array(
				_em.HEAPF32.buffer,
				_csm.getParameterValues(modelPtr),
				length
			);
			length = _csm.getParameterCount(modelPtr);
			this.keyCounts = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getParameterKeyCounts(modelPtr),
				length
			);
			length = _csm.getParameterCount(modelPtr);
			length2 = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getParameterKeyCounts(modelPtr),
				length
			);
			this.keyValues = new Array(length);
			var _keyValues = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getParameterKeyValues(modelPtr),
				length
			);
			for (var i = 0; i < _keyValues.length; i++) {
				this.keyValues[i] = new Float32Array(
					_em.HEAPF32.buffer,
					_keyValues[i],
					length2[i]
				);
			}
		}
		return Parameters;
	})();
	Live2DCubismCore.Parameters = Parameters;
	/** Cubism model parts */
	var Parts = /** @class */ (function () {
		/**
		 * Initializes instance.
		 *
		 * @param modelPtr Native model.
		 */
		function Parts(modelPtr) {
			var length = 0;
			this.count = _csm.getPartCount(modelPtr);
			length = _csm.getPartCount(modelPtr);
			this.ids = new Array(length);
			var _ids = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getPartIds(modelPtr),
				length
			);
			for (var i = 0; i < _ids.length; i++) {
				this.ids[i] = _em.UTF8ToString(_ids[i]);
			}
			length = _csm.getPartCount(modelPtr);
			this.opacities = new Float32Array(
				_em.HEAPF32.buffer,
				_csm.getPartOpacities(modelPtr),
				length
			);
			length = _csm.getPartCount(modelPtr);
			this.parentIndices = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getPartParentPartIndices(modelPtr),
				length
			);
		}
		return Parts;
	})();
	Live2DCubismCore.Parts = Parts;
	/** Cubism model drawables */
	var Drawables = /** @class */ (function () {
		/**
		 * Initializes instance.
		 *
		 * @param modelPtr Native model.
		 */
		function Drawables(modelPtr) {
			this._modelPtr = modelPtr;
			var length = 0;
			var length2 = null;
			this.count = _csm.getDrawableCount(modelPtr);
			length = _csm.getDrawableCount(modelPtr);
			this.ids = new Array(length);
			var _ids = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getDrawableIds(modelPtr),
				length
			);
			for (var i = 0; i < _ids.length; i++) {
				this.ids[i] = _em.UTF8ToString(_ids[i]);
			}
			length = _csm.getDrawableCount(modelPtr);
			this.constantFlags = new Uint8Array(
				_em.HEAPU8.buffer,
				_csm.getDrawableConstantFlags(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.dynamicFlags = new Uint8Array(
				_em.HEAPU8.buffer,
				_csm.getDrawableDynamicFlags(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.textureIndices = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableTextureIndices(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.drawOrders = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableDrawOrders(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.renderOrders = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableRenderOrders(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.opacities = new Float32Array(
				_em.HEAPF32.buffer,
				_csm.getDrawableOpacities(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.maskCounts = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableMaskCounts(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.vertexCounts = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableVertexCounts(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			this.indexCounts = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableIndexCounts(modelPtr),
				length
			);
			length = _csm.getDrawableCount(modelPtr);
			length2 = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableMaskCounts(modelPtr),
				length
			);
			this.masks = new Array(length);
			var _masks = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getDrawableMasks(modelPtr),
				length
			);
			for (var i = 0; i < _masks.length; i++) {
				this.masks[i] = new Int32Array(
					_em.HEAP32.buffer,
					_masks[i],
					length2[i]
				);
			}
			length = _csm.getDrawableCount(modelPtr);
			length2 = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableVertexCounts(modelPtr),
				length
			);
			this.vertexPositions = new Array(length);
			var _vertexPositions = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getDrawableVertexPositions(modelPtr),
				length
			);
			for (var i = 0; i < _vertexPositions.length; i++) {
				this.vertexPositions[i] = new Float32Array(
					_em.HEAPF32.buffer,
					_vertexPositions[i],
					length2[i] * 2
				);
			}
			length = _csm.getDrawableCount(modelPtr);
			length2 = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableVertexCounts(modelPtr),
				length
			);
			this.vertexUvs = new Array(length);
			var _vertexUvs = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getDrawableVertexUvs(modelPtr),
				length
			);
			for (var i = 0; i < _vertexUvs.length; i++) {
				this.vertexUvs[i] = new Float32Array(
					_em.HEAPF32.buffer,
					_vertexUvs[i],
					length2[i] * 2
				);
			}
			length = _csm.getDrawableCount(modelPtr);
			length2 = new Int32Array(
				_em.HEAP32.buffer,
				_csm.getDrawableIndexCounts(modelPtr),
				length
			);
			this.indices = new Array(length);
			var _indices = new Uint32Array(
				_em.HEAPU32.buffer,
				_csm.getDrawableIndices(modelPtr),
				length
			);
			for (var i = 0; i < _indices.length; i++) {
				this.indices[i] = new Uint16Array(
					_em.HEAPU16.buffer,
					_indices[i],
					length2[i]
				);
			}
		}
		/** Resets all dynamic drawable flags.. */
		Drawables.prototype.resetDynamicFlags = function () {
			_csm.resetDrawableDynamicFlags(this._modelPtr);
		};
		return Drawables;
	})();
	Live2DCubismCore.Drawables = Drawables;
	/** Utility functions. */
	var Utils = /** @class */ (function () {
		function Utils() {}
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasBlendAdditiveBit = function (bitfield) {
			return (bitfield & (1 << 0)) == 1 << 0;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasBlendMultiplicativeBit = function (bitfield) {
			return (bitfield & (1 << 1)) == 1 << 1;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasIsDoubleSidedBit = function (bitfield) {
			return (bitfield & (1 << 2)) == 1 << 2;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasIsInvertedMaskBit = function (bitfield) {
			return (bitfield & (1 << 3)) == 1 << 3;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasIsVisibleBit = function (bitfield) {
			return (bitfield & (1 << 0)) == 1 << 0;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasVisibilityDidChangeBit = function (bitfield) {
			return (bitfield & (1 << 1)) == 1 << 1;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasOpacityDidChangeBit = function (bitfield) {
			return (bitfield & (1 << 2)) == 1 << 2;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasDrawOrderDidChangeBit = function (bitfield) {
			return (bitfield & (1 << 3)) == 1 << 3;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasRenderOrderDidChangeBit = function (bitfield) {
			return (bitfield & (1 << 4)) == 1 << 4;
		};
		/**
		 * Checks whether flag is set in bitfield.
		 *
		 * @param bitfield Bitfield to query against.
		 *
		 * @return [[true]] if bit set; [[false]] otherwise
		 */
		Utils.hasVertexPositionsDidChangeBit = function (bitfield) {
			return (bitfield & (1 << 5)) == 1 << 5;
		};
		return Utils;
	})();
	Live2DCubismCore.Utils = Utils;
	/** Emscripten Cubism Core module. */
	var _em_module = (function () {
		var _scriptDir =
			"undefined" != typeof document && document.currentScript
				? document.currentScript.src
				: void 0;
		return function (_em_module) {
			var b;
			_em_module = _em_module || {};
			var m,
				e = {};
			for (m in (b = b || (void 0 !== _em_module ? _em_module : {})))
				b.hasOwnProperty(m) && (e[m] = b[m]);
			var w,
				z,
				A,
				v,
				x,
				Aa = !1,
				r = !1,
				n = "object" == typeof window,
				Aa = "function" == typeof importScripts,
				r =
					"object" == typeof process &&
					"object" == typeof process.versions &&
					"string" == typeof process.versions.node &&
					!n &&
					!Aa,
				t = !n && !r && !Aa,
				u = "";
			r
				? ((u = __dirname + "/"),
				  (v = function (a, c) {
						var d = B(a);
						return (
							d ||
								((z = z || require("fs")),
								(a = (A = A || require("path")).normalize(a)),
								(d = z.readFileSync(a))),
							c ? d : d.toString()
						);
				  }),
				  (x = function (a) {
						return (
							(a = v(a, !0)).buffer || (a = new Uint8Array(a)),
							assert(a.buffer),
							a
						);
				  }),
				  1 < process.argv.length && process.argv[1].replace(/\\/g, "/"),
				  process.argv.slice(2),
				  process.on("uncaughtException", function (a) {
						throw a;
				  }),
				  process.on("unhandledRejection", C),
				  (b.inspect = function () {
						return "[Emscripten Module object]";
				  }))
				: t
				? ("undefined" != typeof read &&
						(v = function (a) {
							var c = B(a);
							return c ? D(c) : read(a);
						}),
				  (x = function (a) {
						var c;
						return (c = B(a))
							? c
							: "function" == typeof readbuffer
							? new Uint8Array(readbuffer(a))
							: (assert("object" == typeof (c = read(a, "binary"))), c);
				  }),
				  "undefined" != typeof print &&
						("undefined" == typeof console && (console = {}),
						(console.log = print),
						(console.warn = console.error =
							"undefined" != typeof printErr ? printErr : print)))
				: (n || Aa) &&
				  (Aa
						? (u = self.location.href)
						: document.currentScript && (u = document.currentScript.src),
				  _scriptDir && (u = _scriptDir),
				  (u =
						0 !== u.indexOf("blob:")
							? u.substr(0, u.lastIndexOf("/") + 1)
							: ""),
				  (v = function (a) {
						try {
							var c = new XMLHttpRequest();
							return c.open("GET", a, !1), c.send(null), c.responseText;
						} catch (d) {
							if ((a = B(a))) return D(a);
							throw d;
						}
				  }),
				  Aa &&
						(x = function (a) {
							try {
								var c = new XMLHttpRequest();
								return (
									c.open("GET", a, !1),
									(c.responseType = "arraybuffer"),
									c.send(null),
									new Uint8Array(c.response)
								);
							} catch (d) {
								if ((a = B(a))) return a;
								throw d;
							}
						}),
				  (w = function (a) {
						var c = E,
							d = F,
							f = new XMLHttpRequest();
						f.open("GET", c, !0),
							(f.responseType = "arraybuffer"),
							(f.onload = function () {
								var g;
								200 == f.status || (0 == f.status && f.response)
									? d(f.response)
									: (g = B(c))
									? d(g.buffer)
									: a();
							}),
							(f.onerror = a),
							f.send(null);
				  }));
			var G = b.print || console.log.bind(console),
				H = b.printErr || console.warn.bind(console);
			for (m in e) e.hasOwnProperty(m) && (b[m] = e[m]);
			e = null;
			var I = Array(1),
				J = 0,
				K = !1;
			function assert(a, c) {
				a || C("Assertion failed: " + c);
			}
			var buffer,
				N,
				M,
				O,
				L =
					"undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
			function ca(a, c, d) {
				var f = c + d;
				for (d = c; a[d] && !(f <= d); ) ++d;
				if (16 < d - c && a.subarray && L) return L.decode(a.subarray(c, d));
				for (f = ""; c < d; ) {
					var h,
						p,
						g = a[c++];
					128 & g
						? ((h = 63 & a[c++]),
						  192 == (224 & g)
								? (f += String.fromCharCode(((31 & g) << 6) | h))
								: ((p = 63 & a[c++]),
								  (g =
										224 == (240 & g)
											? ((15 & g) << 12) | (h << 6) | p
											: ((7 & g) << 18) |
											  (h << 12) |
											  (p << 6) |
											  (63 & a[c++])) < 65536
										? (f += String.fromCharCode(g))
										: ((g -= 65536),
										  (f += String.fromCharCode(
												55296 | (g >> 10),
												56320 | (1023 & g)
										  )))))
						: (f += String.fromCharCode(g));
				}
				return f;
			}
			function da(a, c) {
				return a ? ca(M, a, c) : "";
			}
			function ea(a) {
				return 0 < a % 16777216 && (a += 16777216 - (a % 16777216)), a;
			}
			function fa(a) {
				(buffer = a),
					(b.HEAP8 = N = new Int8Array(a)),
					(b.HEAP16 = new Int16Array(a)),
					(b.HEAP32 = O = new Int32Array(a)),
					(b.HEAPU8 = M = new Uint8Array(a)),
					(b.HEAPU16 = new Uint16Array(a)),
					(b.HEAPU32 = new Uint32Array(a)),
					(b.HEAPF32 = new Float32Array(a)),
					(b.HEAPF64 = new Float64Array(a));
			}
			"undefined" != typeof TextDecoder && new TextDecoder("utf-16le");
			Aa = b.TOTAL_MEMORY || 16777216;
			function P(a) {
				for (; 0 < a.length; ) {
					var d,
						c = a.shift();
					"function" == typeof c
						? c()
						: "number" == typeof (d = c.C)
						? void 0 === c.w
							? b.dynCall_v(d)
							: b.dynCall_vi(d, c.w)
						: d(void 0 === c.w ? null : c.w);
				}
			}
			(Aa = (buffer = b.buffer ? b.buffer : new ArrayBuffer(Aa)).byteLength),
				fa(buffer),
				(O[1008] = 5247120);
			var ia = [],
				ja = [],
				ka = [],
				la = [];
			(Math.imul && -5 === Math.imul(4294967295, 5)) ||
				(Math.imul = function (a, c) {
					var d = 65535 & a,
						f = 65535 & c;
					return (d * f + (((a >>> 16) * f + d * (c >>> 16)) << 16)) | 0;
				}),
				Math.clz32 ||
					(Math.clz32 = function (a) {
						var c = 32,
							d = a >> 16;
						return (
							d && ((c -= 16), (a = d)),
							(d = a >> 8) && ((c -= 8), (a = d)),
							(d = a >> 4) && ((c -= 4), (a = d)),
							(d = a >> 2) && ((c -= 2), (a = d)),
							a >> 1 ? c - 2 : c - a
						);
					}),
				Math.trunc ||
					(Math.trunc = function (a) {
						return a < 0 ? Math.ceil(a) : Math.floor(a);
					});
			var Q = 0,
				S = null,
				T = null;
			function C(a) {
				throw (
					(b.onAbort && b.onAbort(a),
					G(a),
					H(a),
					(K = !0),
					"abort(" + a + "). Build with -s ASSERTIONS=1 for more info.")
				);
			}
			(b.preloadedImages = {}), (b.preloadedAudios = {});
			var E = null,
				U = "data:application/octet-stream;base64,";
			function na(a) {
				return a.replace(/\b__Z[\w\d_]+/g, function (a) {
					return a == a ? a : a + " [" + a + "]";
				});
			}
			function oa() {
				var a = Error();
				if (!a.stack) {
					try {
						throw Error(0);
					} catch (c) {
						a = c;
					}
					if (!a.stack) return "(no stack trace available)";
				}
				return a.stack.toString();
			}
			var V = [null, [], []];
			function W(a, c) {
				var d = V[a];
				0 === c || 10 === c
					? ((1 === a ? G : H)(ca(d, 0)), (d.length = 0))
					: d.push(c);
			}
			function pa(a, c, d, f) {
				try {
					for (var g = 0, h = 0; h < d; h++) {
						for (
							var p = O[(c + 8 * h) >> 2], k = O[(c + (8 * h + 4)) >> 2], y = 0;
							y < k;
							y++
						)
							W(a, M[p + y]);
						g += k;
					}
					return (O[f >> 2] = g), 0;
				} catch (R) {
					return ("undefined" != typeof FS && R instanceof FS.A) || C(R), R.B;
				}
			}
			function qa() {
				return N.length;
			}
			function ra(a) {
				try {
					var c = new ArrayBuffer(a);
					if (c.byteLength == a)
						return new Int8Array(c).set(N), sa(c), fa(c), 1;
				} catch (d) {}
			}
			var ta = !(E =
				"data:application/octet-stream;base64,AAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAARMJCwsAAAkGCwAACwAGEQAAABEREQAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAADAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAA0AAAAEDQAAAAAJDgAAAAAADgAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAPAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAABISEgAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAAoAAAAACgAAAAAJCwAAAAAACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAADAxMjM0NTY3ODlBQkNERUYFAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAgAAAGgJAAAABAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAK/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAExpdmUyRCBDdWJpc20gU0RLIENvcmUgVmVyc2lvbiAlZC4lZC4lZABNT0MzAFtDU01dIFtFXWNzbVJldml2ZU1vY0luUGxhY2UgaXMgZmFpbGVkLiBDb3JydXB0ZWQgIG1vYzMgZmlsZS4KAFtDU01dIFtFXWNzbVJldml2ZU1vY0luUGxhY2UgaXMgZmFpbGVkLiBUaGUgQ29yZSB1bnN1cHBvcnQgbGF0ZXIgdGhhbiBtb2MzIHZlcjpbJWRdLiBUaGlzIG1vYzMgdmVyIGlzIFslZF0uCgBbQ1NNXSBbRV1jc21HZXRNb2NWZXJzaW9uIGlzIGZhaWxlZC4gQ29ycnVwdGVkIG1vYzMgZmlsZS4KAFtDU01dIFtFXSVzOiAlcwoAY3NtR2V0TW9jVmVyc2lvbgAiYWRkcmVzcyIgaXMgbnVsbC4AY3NtUmV2aXZlTW9jSW5QbGFjZQAiYWRkcmVzcyIgYWxpZ25tZW50IGlzIGludmFsaWQuACJzaXplIiBpcyBpbnZhbGlkLgBjc21SZWFkQ2FudmFzSW5mbwAibW9kZWwiIGlzIGludmFsaWQuACJvdXRTaXplSW5QaXhlbHMiIGlzIG51bGwuACJvdXRPcmlnaW5JblBpeGVscyIgaXMgbnVsbC4AIm91dFBpeGVsc1BlclVuaXQiIGlzIG51bGwuAGNzbUdldFNpemVvZk1vZGVsACJtb2MiIGlzIGludmFsaWQuAGNzbUluaXRpYWxpemVNb2RlbEluUGxhY2UAInNpemUiIGlzIGludmFsaWQAY3NtVXBkYXRlTW9kZWwAY3NtR2V0UGFyYW1ldGVyQ291bnQAY3NtR2V0UGFyYW1ldGVySWRzAGNzbUdldFBhcmFtZXRlck1pbmltdW1WYWx1ZXMAY3NtR2V0UGFyYW1ldGVyTWF4aW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJEZWZhdWx0VmFsdWVzAGNzbUdldFBhcmFtZXRlclZhbHVlcwBjc21HZXRQYXJ0Q291bnQAY3NtR2V0UGFydElkcwBjc21HZXRQYXJ0T3BhY2l0aWVzAGNzbUdldFBhcnRQYXJlbnRQYXJ0SW5kaWNlcwBjc21HZXREcmF3YWJsZUNvdW50AGNzbUdldERyYXdhYmxlSWRzAGNzbUdldERyYXdhYmxlQ29uc3RhbnRGbGFncwBjc21HZXREcmF3YWJsZUR5bmFtaWNGbGFncwBjc21HZXREcmF3YWJsZVRleHR1cmVJbmRpY2VzAGNzbUdldERyYXdhYmxlRHJhd09yZGVycwBjc21HZXREcmF3YWJsZVJlbmRlck9yZGVycwBjc21HZXREcmF3YWJsZU9wYWNpdGllcwBjc21HZXREcmF3YWJsZU1hc2tDb3VudHMAY3NtR2V0RHJhd2FibGVNYXNrcwBjc21HZXREcmF3YWJsZVZlcnRleENvdW50cwBjc21HZXREcmF3YWJsZVZlcnRleFBvc2l0aW9ucwBjc21HZXREcmF3YWJsZVZlcnRleFV2cwBjc21HZXREcmF3YWJsZUluZGV4Q291bnRzAGNzbUdldERyYXdhYmxlSW5kaWNlcwBjc21SZXNldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldFBhcmFtZXRlcktleUNvdW50cwBjc21HZXRQYXJhbWV0ZXJLZXlWYWx1ZXMAW0NTTV0gW0VdV2FycERlZm9ybWVyOjpUcmFuc2Zvcm1UYXJnZXQoKSBlcnJvci4gWyVkXSBwMDE9KCUuNGYgLCAlLjRmKQoAW0NTTV0gW1ddUm90YXRpb25EZWZvcm1lcjogTm90IGZvdW5kIHRyYW5zZm9ybWVkIERpcmVjdGlvbi4KAFtDU01dIFtFXVVwZGF0ZURlZm9ybWVySGllcmFyY2h5KCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KACVzCgAtKyAgIDBYMHgAKG51bGwpAC0wWCswWCAwWC0weCsweCAweABpbmYASU5GAG5hbgBOQU4ALg==");
			function D(a) {
				for (var c = [], d = 0; d < a.length; d++) {
					var f = a[d];
					255 < f &&
						(ta &&
							assert(
								!1,
								"Character code " +
									f +
									" (" +
									String.fromCharCode(f) +
									")  at offset " +
									d +
									" not in 0x00-0xFF."
							),
						(f &= 255)),
						c.push(String.fromCharCode(f));
				}
				return c.join("");
			}
			var ua =
				"function" == typeof atob
					? atob
					: function (a) {
							var c = "",
								d = 0;
							a = a.replace(/[^A-Za-z0-9\+\/=]/g, "");
							do {
								var f =
										"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
											a.charAt(d++)
										),
									g =
										"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
											a.charAt(d++)
										),
									h =
										"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
											a.charAt(d++)
										),
									p =
										"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
											a.charAt(d++)
										),
									f = (f << 2) | (g >> 4),
									g = ((15 & g) << 4) | (h >> 2),
									k = ((3 & h) << 6) | p;
								(c += String.fromCharCode(f)),
									64 !== h && (c += String.fromCharCode(g)),
									64 !== p && (c += String.fromCharCode(k));
							} while (d < a.length);
							return c;
					  };
			function B(a) {
				if (
					String.prototype.startsWith ? a.startsWith(U) : 0 === a.indexOf(U)
				) {
					if (((a = a.slice(U.length)), "boolean" == typeof r && r)) {
						try {
							var c = Buffer.from(a, "base64");
						} catch (h) {
							c = new Buffer(a, "base64");
						}
						var d = new Uint8Array(c.buffer, c.byteOffset, c.byteLength);
					} else
						try {
							for (
								var f = ua(a), g = new Uint8Array(f.length), c = 0;
								c < f.length;
								++c
							)
								g[c] = f.charCodeAt(c);
							d = g;
						} catch (h) {
							throw Error("Converting base64 string to bytes failed.");
						}
					return d;
				}
			}
			Aa = (function (global, env, buffer) {
				var a = new global.Int8Array(buffer),
					b = new global.Int16Array(buffer),
					c = new global.Int32Array(buffer),
					d = new global.Uint8Array(buffer),
					e = new global.Uint16Array(buffer),
					f = new global.Float32Array(buffer),
					g = new global.Float64Array(buffer),
					h = 0 | env.v,
					q = global.Math.floor,
					r = global.Math.pow,
					s = global.Math.cos,
					t = global.Math.sin,
					u = global.Math.atan2,
					v = global.Math.imul,
					w = global.Math.clz32,
					x = env.a,
					y = env.b,
					z = env.c,
					A = env.d,
					B = env.e,
					C = env.f,
					D = env.g,
					E = env.h,
					F = env.i,
					G = env.j,
					H = env.k,
					I = env.l,
					J = env.m,
					S = 4240;
				function ea(a, b, d) {
					(a |= 0), (b |= 0), (d |= 0);
					var e,
						f,
						g = S;
					(S = (S + 272) | 0),
						(a = (g + 16) | 0),
						(f = g),
						(S =
							((e = 0 | c[860]) && ((c[f >> 2] = d), Sb(a, b, f), Z[1 & e](a)),
							g));
				}
				function ga(a, b, d) {
					(a |= 0), (d |= 0);
					var n,
						o,
						e = 0,
						f = 0,
						g = 0,
						h = 0,
						i = 0,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						p = 0,
						q = 0,
						r = 0;
					if (
						((c[(b |= 0) >> 2] = 392),
						(o = 0 | c[a >> 2]),
						0 < (0 | (i = 0 | c[o >> 2])))
					) {
						for (
							e = 0 | c[(a + 296) >> 2], f = 0 | c[(a + 16) >> 2], h = g = 0;
							(h =
								((1 << c[(e + (c[(f + (g << 2)) >> 2] << 2)) >> 2]) + h) | 0),
								(0 | (g = (g + 1) | 0)) != (0 | i);

						);
						e = h << 2;
					} else e = 0;
					if (
						((g = i << 3),
						(c[(b + 4) >> 2] = g),
						(c[(b + 8) >> 2] = c[o >> 2] << 2),
						(c[(b + 12) >> 2] = c[o >> 2] << 2),
						(c[(b + 16) >> 2] = c[o >> 2] << 2),
						(c[(b + 20) >> 2] = c[o >> 2] << 2),
						(c[(b + 24) >> 2] = c[o >> 2] << 2),
						(c[(b + 28) >> 2] = c[o >> 2] << 2),
						(c[(b + 32) >> 2] = e),
						(c[(b + 36) >> 2] = e),
						(c[(b + 40) >> 2] = e),
						0 < (0 | (f = 0 | c[(n = (8 + o) | 0) >> 2])))
					) {
						for (
							h = 0 | c[(a + 88) >> 2],
								i = 0 | c[(a + 296) >> 2],
								j = 0 | c[(a + 76) >> 2],
								e = m = l = k = 0;
							(l = (0 | l) < (0 | (r = 0 | c[(h + (k << 2)) >> 2])) ? r : l),
								(e = (((15 + (r << 3)) & -16) + e) | 0),
								(m =
									((1 << c[(i + (c[(j + (k << 2)) >> 2] << 2)) >> 2]) + m) | 0),
								(0 | (k = (k + 1) | 0)) != (0 | f);

						);
						(h = l << 3), (f = m << 2);
					} else e = f = h = 0;
					if (
						((j = (4 + o) | 0),
						(c[(b + 44) >> 2] = c[j >> 2] << 5),
						(c[(b + 48) >> 2] = 24 * (0 | c[n >> 2])),
						(k = (12 + o) | 0),
						(c[(b + 52) >> 2] = c[k >> 2] << 5),
						(c[(b + 56) >> 2] = c[j >> 2] << 2),
						(c[(b + 60) >> 2] = c[n >> 2] << 2),
						(c[(b + 64) >> 2] = c[k >> 2] << 2),
						(c[(b + 68) >> 2] = c[j >> 2] << 2),
						(c[(b + 72) >> 2] = c[j >> 2] << 2),
						(c[(b + 76) >> 2] = e),
						(c[(b + 80) >> 2] = c[n >> 2] << 2),
						(c[(b + 84) >> 2] = c[n >> 2] << 2),
						(c[(b + 88) >> 2] = f),
						(c[(b + 92) >> 2] = f),
						(c[(b + 96) >> 2] = f),
						(c[(b + 100) >> 2] = f),
						(c[(b + 104) >> 2] = h),
						0 < (0 | (j = 0 | c[k >> 2])))
					) {
						for (
							e = 0 | c[(a + 296) >> 2], f = 0 | c[(a + 100) >> 2], i = h = 0;
							(i =
								((1 << c[(e + (c[(f + (h << 2)) >> 2] << 2)) >> 2]) + i) | 0),
								(0 | (h = (h + 1) | 0)) != (0 | j);

						);
						e = i << 2;
					} else e = 0;
					if (
						((c[(b + 108) >> 2] = j << 2),
						(c[(b + 112) >> 2] = c[k >> 2] << 2),
						(c[(b + 116) >> 2] = e),
						(c[(b + 120) >> 2] = e),
						(c[(b + 124) >> 2] = e),
						(c[(b + 128) >> 2] = e),
						(c[(b + 132) >> 2] = e),
						(c[(b + 136) >> 2] = e),
						(c[(b + 140) >> 2] = e),
						(c[(b + 144) >> 2] = e),
						(c[(b + 148) >> 2] = e),
						(c[(b + 152) >> 2] = e),
						(c[(b + 156) >> 2] = e),
						0 < (0 | (m = 0 | c[(n = (16 + o) | 0) >> 2])))
					) {
						for (
							f = 0 | c[(a + 172) >> 2],
								h = 0 | c[(a + 296) >> 2],
								i = 0 | c[(a + 136) >> 2],
								e = l = k = j = 0;
							(k = (0 | k) < (0 | (r = 0 | c[(f + (j << 2)) >> 2])) ? r : k),
								(e = (((15 + (r << 3)) & -16) + e) | 0),
								(l =
									((1 << c[(h + (c[(i + (j << 2)) >> 2] << 2)) >> 2]) + l) | 0),
								(0 | (j = (j + 1) | 0)) != (0 | m);

						);
						(h = k << 3), (f = l << 2);
					} else e = f = h = 0;
					if (
						((c[(b + 160) >> 2] = m << 4),
						(c[(b + 164) >> 2] = c[n >> 2] << 2),
						(c[(b + 168) >> 2] = c[n >> 2]),
						(c[(b + 172) >> 2] = c[n >> 2] << 2),
						(c[(b + 176) >> 2] = c[n >> 2] << 2),
						(c[(b + 180) >> 2] = c[n >> 2] << 2),
						(c[(b + 184) >> 2] = e),
						(c[(b + 188) >> 2] = c[n >> 2] << 2),
						(c[(b + 192) >> 2] = c[n >> 2] << 2),
						(c[(b + 196) >> 2] = c[n >> 2] << 2),
						(c[(b + 200) >> 2] = c[n >> 2] << 2),
						(c[(b + 204) >> 2] = c[n >> 2] << 2),
						(c[(b + 208) >> 2] = c[n >> 2] << 2),
						(c[(b + 212) >> 2] = f),
						(c[(b + 216) >> 2] = f),
						(c[(b + 220) >> 2] = f),
						(c[(b + 224) >> 2] = f),
						(c[(b + 228) >> 2] = f),
						(c[(b + 232) >> 2] = f),
						(c[(b + 236) >> 2] = h),
						(m = (20 + o) | 0),
						(c[(b + 240) >> 2] = 40 * (0 | c[m >> 2])),
						(c[(b + 244) >> 2] = c[m >> 2] << 2),
						(c[(b + 248) >> 2] = 28 * (0 | c[(52 + o) >> 2])),
						0 < (0 | (i = 0 | c[(48 + o) >> 2])))
					) {
						for (
							e = 0 | c[(a + 296) >> 2], h = f = 0;
							(h = ((1 << c[(e + (f << 2)) >> 2]) + h) | 0),
								(0 | (f = (f + 1) | 0)) != (0 | i);

						);
						e = h << 2;
					} else e = 0;
					if (
						((c[(b + 252) >> 2] = 36 * i),
						(c[(b + 256) >> 2] = e),
						(c[(b + 260) >> 2] = e),
						(e = (72 + o) | 0),
						(c[(b + 264) >> 2] = 28 * (0 | c[e >> 2])),
						0 < (0 | (e = 0 | c[e >> 2])))
					) {
						for (
							f = 0 | c[(a + 328) >> 2],
								h = 0 | c[(a + 336) >> 2],
								i = 0 | c[(a + 340) >> 2],
								l = k = j = 0;
							(k = (0 | k) < (0 | (r = 0 | c[(f + (j << 2)) >> 2])) ? r : k),
								(l =
									(0 |
										(r =
											((0 | c[(h + (j << 2)) >> 2]) -
												(0 | c[(i + (j << 2)) >> 2])) |
											0)) <
									(0 | l)
										? l
										: (r + 1) | 0),
								(0 | (j = (j + 1) | 0)) != (0 | e);

						);
						(f = k << 2), (e = l << 2);
					} else e = f = 0;
					if (
						((c[(b + 268) >> 2] = c[(76 + o) >> 2] << 4),
						(c[(b + 272) >> 2] = e),
						(c[(b + 276) >> 2] = f),
						(c[(b + 280) >> 2] = e),
						0 < (0 | (j = 0 | c[(k = (80 + o) | 0) >> 2])))
					) {
						for (
							e = 0 | c[(a + 296) >> 2], f = 0 | c[(a + 364) >> 2], i = h = 0;
							(i =
								((1 << c[(e + (c[(f + (h << 2)) >> 2] << 2)) >> 2]) + i) | 0),
								(0 | (h = (h + 1) | 0)) != (0 | j);

						);
						e = i << 2;
					} else e = 0;
					if (
						((c[(b + 284) >> 2] = 24 * j),
						(c[(b + 288) >> 2] = c[k >> 2] << 2),
						(c[(b + 292) >> 2] = c[k >> 2] << 2),
						(c[(b + 296) >> 2] = e),
						(c[(b + 300) >> 2] = e),
						(c[(b + 304) >> 2] = e),
						0 < (0 | (l = 0 | c[m >> 2])))
					) {
						(j = 0 | c[(a + 224) >> 2]),
							(k = (a + 228) | 0),
							(h = (a + 304) | 0),
							(e = i = 0);
						do {
							if (
								-1 != (0 | (f = 0 | c[(j + (i << 2)) >> 2])) &&
								((r = 0 | c[((0 | c[k >> 2]) + (i << 2)) >> 2]),
								(q = ((p = ((0 | c[h >> 2]) + (f << 2)) | 0) + (r << 2)) | 0),
								0 != (0 | r))
							)
								for (
									f = p;
									(e = ((0 | c[f >> 2]) + e) | 0),
										(0 | (f = (f + 4) | 0)) != (0 | q);

								);
							i = (i + 1) | 0;
						} while ((0 | i) != (0 | l));
					} else e = 0;
					for (
						f = l << 2,
							c[(b + 308) >> 2] = f,
							c[(b + 312) >> 2] = f,
							c[(b + 316) >> 2] = e << 2,
							c[b >> 2] = 0,
							e = 400,
							f = 1;
						(e = (((g + 15) & -16) + (c[(b + (f << 2)) >> 2] = e)) | 0),
							80 != (0 | (f = (f + 1) | 0));

					)
						g = 0 | c[(b + (f << 2)) >> 2];
					c[d >> 2] = e;
				}
				function ha(b, e, g) {
					(e |= 0), (g |= 0);
					var A,
						B,
						C,
						F,
						G,
						J,
						K,
						M,
						O,
						h = 0,
						i = 0,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						q = 0,
						s = 0,
						t = 0,
						u = 0,
						v = 0,
						w = 0,
						x = 0,
						y = 0,
						z = 0,
						D = 0,
						E = 0,
						H = 0,
						I = 0,
						L = 0,
						N = 0,
						P = 0,
						R = 0,
						Q = S;
					if (
						((S = (S + 336) | 0),
						(A = (Q + 320) | 0),
						(h = ((n = Q) + 324) | 0),
						(v = ((b |= 0) + 704) | 0),
						rc(0 | n, 0, 320),
						ga(v, n, h),
						g >>> 0 < (h = 0 | c[h >> 2]) >>> 0)
					)
						return (S = Q), (P = 0) | P;
					if (
						(rc(0 | e, 0, 0 | h),
						(O = (e + (0 | c[n >> 2])) | 0),
						(c[(w = (8 + O) | 0) >> 2] = e + (0 | c[(n + 4) >> 2])),
						(c[(36 + O) >> 2] = e + (0 | c[(n + 8) >> 2])),
						(c[(44 + O) >> 2] = e + (0 | c[(n + 12) >> 2])),
						(c[(48 + O) >> 2] = e + (0 | c[(n + 16) >> 2])),
						(c[(x = (52 + O) | 0) >> 2] = e + (0 | c[(n + 20) >> 2])),
						(c[(y = (12 + O) | 0) >> 2] = e + (0 | c[(n + 24) >> 2])),
						(c[(16 + O) >> 2] = e + (0 | c[(n + 28) >> 2])),
						(c[(20 + O) >> 2] = e + (0 | c[(n + 32) >> 2])),
						(c[(28 + O) >> 2] = e + (0 | c[(n + 36) >> 2])),
						(c[(32 + O) >> 2] = e + (0 | c[(n + 40) >> 2])),
						(h = 0 | c[v >> 2]),
						(c[(z = (60 + O) | 0) >> 2] = e + (0 | c[(n + 44) >> 2])),
						(i = (e + (0 | c[(n + 48) >> 2])) | 0),
						(c[(B = (68 + O) | 0) >> 2] = i),
						(c[(D = (76 + O) | 0) >> 2] = e + (0 | c[(n + 52) >> 2])),
						(c[(168 + O) >> 2] = e + (0 | c[(n + 56) >> 2])),
						(c[(172 + O) >> 2] = e + (0 | c[(n + 60) >> 2])),
						(c[(176 + O) >> 2] = e + (0 | c[(n + 64) >> 2])),
						(c[(192 + O) >> 2] = e + (0 | c[(n + 68) >> 2])),
						(c[(196 + O) >> 2] = e + (0 | c[(n + 72) >> 2])),
						0 < (0 | (h = 0 | c[(h + 8) >> 2])))
					)
						for (
							g = 0 | c[(b + 792) >> 2],
								k = (e + ((j = 0) | c[(n + 76) >> 2])) | 0;
							(k =
								((c[(i + ((24 * j) | 0) + 20) >> 2] = k) +
									((15 + (c[(g + (j << 2)) >> 2] << 3)) & -16)) |
								0),
								(0 | (j = (j + 1) | 0)) != (0 | h);

						);
					if (
						((c[(C = (80 + O) | 0) >> 2] = e + (0 | c[(n + 80) >> 2])),
						(c[(84 + O) >> 2] = e + (0 | c[(n + 84) >> 2])),
						(c[(88 + O) >> 2] = e + (0 | c[(n + 88) >> 2])),
						(c[(96 + O) >> 2] = e + (0 | c[(n + 92) >> 2])),
						(c[(100 + O) >> 2] = e + (0 | c[(n + 96) >> 2])),
						(c[(104 + O) >> 2] = e + (0 | c[(n + 100) >> 2])),
						(c[(108 + O) >> 2] = e + (0 | c[(n + 104) >> 2])),
						(c[(E = (112 + O) | 0) >> 2] = e + (0 | c[(n + 108) >> 2])),
						(c[(116 + O) >> 2] = e + (0 | c[(n + 112) >> 2])),
						(c[(120 + O) >> 2] = e + (0 | c[(n + 116) >> 2])),
						(c[(128 + O) >> 2] = e + (0 | c[(n + 120) >> 2])),
						(c[(132 + O) >> 2] = e + (0 | c[(n + 124) >> 2])),
						(c[(136 + O) >> 2] = e + (0 | c[(n + 128) >> 2])),
						(c[(140 + O) >> 2] = e + (0 | c[(n + 132) >> 2])),
						(c[(144 + O) >> 2] = e + (0 | c[(n + 136) >> 2])),
						(c[(148 + O) >> 2] = e + (0 | c[(n + 140) >> 2])),
						(c[(152 + O) >> 2] = e + (0 | c[(n + 144) >> 2])),
						(c[(156 + O) >> 2] = e + (0 | c[(n + 148) >> 2])),
						(c[(160 + O) >> 2] = e + (0 | c[(n + 152) >> 2])),
						(c[(164 + O) >> 2] = e + (0 | c[(n + 156) >> 2])),
						(j = 0 | c[v >> 2]),
						(c[(H = (204 + O) | 0) >> 2] = e + (0 | c[(n + 160) >> 2])),
						(c[(248 + O) >> 2] = e + (0 | c[(n + 164) >> 2])),
						(c[(260 + O) >> 2] = e + (0 | c[(n + 168) >> 2])),
						(c[(264 + O) >> 2] = e + (0 | c[(n + 172) >> 2])),
						(c[(268 + O) >> 2] = e + (0 | c[(n + 176) >> 2])),
						(h = (e + (0 | c[(n + 180) >> 2])) | 0),
						(c[(k = (272 + O) | 0) >> 2] = h),
						0 < (0 | (j = 0 | c[(j + 16) >> 2])) &&
							((l = (e + (0 | c[(n + 184) >> 2])) | 0),
							(m = (b + 876) | 0),
							(c[h >> 2] = l),
							1 != (0 | j)))
					)
						for (
							h = 0, i = 1, g = l;
							(g =
								(g +
									((15 + (c[((0 | c[m >> 2]) + (h << 2)) >> 2] << 3)) & -16)) |
								0),
								(c[((0 | c[k >> 2]) + (i << 2)) >> 2] = g),
								!((0 | j) <= (0 | (h = (i + 1) | 0)));

						)
							(N = i), (i = h), (h = N);
					if (
						((c[(276 + O) >> 2] = e + (0 | c[(n + 188) >> 2])),
						(c[(280 + O) >> 2] = e + (0 | c[(n + 192) >> 2])),
						(c[(284 + O) >> 2] = e + (0 | c[(n + 196) >> 2])),
						(c[(288 + O) >> 2] = e + (0 | c[(n + 200) >> 2])),
						(c[(G = (208 + O) | 0) >> 2] = e + (0 | c[(n + 204) >> 2])),
						(c[(212 + O) >> 2] = e + (0 | c[(n + 208) >> 2])),
						(c[(216 + O) >> 2] = e + (0 | c[(n + 212) >> 2])),
						(c[(224 + O) >> 2] = e + (0 | c[(n + 216) >> 2])),
						(c[(228 + O) >> 2] = e + (0 | c[(n + 220) >> 2])),
						(c[(232 + O) >> 2] = e + (0 | c[(n + 224) >> 2])),
						(c[(236 + O) >> 2] = e + (0 | c[(n + 228) >> 2])),
						(c[(240 + O) >> 2] = e + (0 | c[(n + 232) >> 2])),
						(c[(244 + O) >> 2] = e + (0 | c[(n + 236) >> 2])),
						(u = 0 | c[(n + 244) >> 2]),
						(c[(s = (296 + O) | 0) >> 2] = e + (0 | c[(n + 240) >> 2])),
						(c[(t = (300 + O) | 0) >> 2] = e + u),
						(c[(u = (308 + O) | 0) >> 2] = e + (0 | c[(n + 248) >> 2])),
						(h = 0 | c[(n + 256) >> 2]),
						(g = 0 | c[(n + 260) >> 2]),
						(j = 0 | c[v >> 2]),
						(l = (e + (0 | c[(n + 252) >> 2])) | 0),
						(c[(L = (316 + O) | 0) >> 2] = l),
						0 < (0 | (j = 0 | c[(j + 48) >> 2])))
					)
						for (
							k = 0 | c[(b + 1e3) >> 2], i = (e + h) | (m = 0), g = (e + g) | 0;
							(c[(l + ((36 * m) | 0) + 16) >> 2] = i),
								(c[(l + ((36 * m) | 0) + 20) >> 2] = g),
								(h = 1 << c[(k + (m << 2)) >> 2]),
								(0 | (m = (m + 1) | 0)) != (0 | j);

						)
							(i = (i + (h << 2)) | 0), (g = (g + (h << 2)) | 0);
					if (
						((h = 0 | c[v >> 2]),
						(i = (e + (0 | c[(n + 264) >> 2])) | 0),
						(c[(F = (324 + O) | 0) >> 2] = i),
						0 < (0 | (h = 0 | c[(h + 72) >> 2])))
					)
						for (
							g = 0 | c[(b + 1032) >> 2],
								k = (e + ((j = 0) | c[(n + 268) >> 2])) | 0;
							(k =
								((c[(i + ((28 * j) | 0) + 12) >> 2] = k) +
									(c[(g + (j << 2)) >> 2] << 4)) |
								0),
								(0 | (j = (j + 1) | 0)) != (0 | h);

						);
					(c[(328 + O) >> 2] = e + (0 | c[(n + 272) >> 2])),
						(c[(332 + O) >> 2] = e + (0 | c[(n + 276) >> 2])),
						(c[(336 + O) >> 2] = e + (0 | c[(n + 280) >> 2])),
						(c[(I = (344 + O) | 0) >> 2] = e + (0 | c[(n + 284) >> 2])),
						(c[(J = (348 + O) | 0) >> 2] = e + (0 | c[(n + 288) >> 2])),
						(c[(352 + O) >> 2] = e + (0 | c[(n + 292) >> 2])),
						(c[(356 + O) >> 2] = e + (0 | c[(n + 296) >> 2])),
						(c[(364 + O) >> 2] = e + (0 | c[(n + 300) >> 2])),
						(c[(368 + O) >> 2] = e + (0 | c[(n + 304) >> 2])),
						(i = 0 | c[(n + 312) >> 2]),
						(k = 0 | c[(n + 316) >> 2]),
						(c[(N = (384 + O) | 0) >> 2] = e + (0 | c[(n + 308) >> 2])),
						(i = (e + i) | 0),
						(c[(M = (388 + O) | 0) >> 2] = i),
						(g = 0 | c[v >> 2]),
						(h = 0 | c[(g + 20) >> 2]);
					a: do {
						if (0 < (0 | h))
							for (
								m = (b + 928) | 0,
									n = (b + 932) | 0,
									o = (b + 1004) | 0,
									q = (b + 1008) | 0,
									k = (e + k) | (j = 0);
								;

							) {
								if (
									((g = 0 | c[((0 | c[m >> 2]) + (j << 2)) >> 2]),
									(l =
										((h = 0 | c[((0 | c[n >> 2]) + (j << 2)) >> 2]) + g) | 0),
									-1 != ((c[(i + (j << 2)) >> 2] = 0) | g))
								) {
									if (0 < (0 | h))
										for (
											i = 0 | c[o >> 2], h = k;
											-1 != (0 | c[(i + (g << 2)) >> 2]) &&
												(h =
													(h + (c[((0 | c[q >> 2]) + (g << 2)) >> 2] << 2)) |
													0),
												(0 | (g = (g + 1) | 0)) < (0 | l);

										);
									else h = k;
									(c[((0 | c[M >> 2]) + (j << 2)) >> 2] = k), (k = h);
								}
								if (
									((j = (j + 1) | 0),
									(g = 0 | c[v >> 2]),
									(0 | (h = 0 | c[(g + 20) >> 2])) <= (0 | j))
								) {
									e = g;
									break a;
								}
								i = 0 | c[M >> 2];
							}
						else e = g;
					} while (0);
					if (
						((c[(376 + O) >> 2] = 1),
						(c[(380 + O) >> 2] = 1 & a[(20 + (0 | c[(b + 708) >> 2])) >> 0]),
						(K = (b + 704) | 0),
						0 < (0 | (c[(292 + O) >> 2] = h)))
					) {
						for (
							g = 0 | c[s >> 2],
								i = 0 | c[(b + 912) >> 2],
								j = 0 | c[(b + 908) >> 2],
								k = 0 | c[(b + 920) >> 2],
								q = 0 | c[(b + 916) >> 2],
								l = 0 | c[(b + 924) >> 2],
								m = 0 | c[(b + 928) >> 2],
								n = 0 | c[(b + 932) >> 2],
								o = h;
							(s = (i + ((o = ((v = o) + -1) | 0) << 2)) | 0),
								(c[(g + ((40 * o) | 0)) >> 2] = c[s >> 2]),
								(R = (j + (o << 2)) | 0),
								(c[(g + ((40 * o) | 0) + 4) >> 2] = c[R >> 2]),
								(f[(g + ((40 * o) | 0) + 8) >> 2] = +f[R >> 2] - +f[s >> 2]),
								(c[(g + ((40 * o) | 0) + 12) >> 2] = c[(k + (o << 2)) >> 2]),
								(c[(g + ((40 * o) | 0) + 32) >> 2] = c[(q + (o << 2)) >> 2]),
								(p = +r(0.10000000149011612, +(+(0 | c[(l + (o << 2)) >> 2])))),
								(f[(g + ((40 * o) | 0) + 16) >> 2] = p),
								(f[(g + ((40 * o) | 0) + 20) >> 2] = 1.5 * p),
								(c[(g + ((40 * o) | 0) + 24) >> 2] = c[(m + (o << 2)) >> 2]),
								(c[(g + ((40 * o) | 0) + 28) >> 2] = c[(n + (o << 2)) >> 2]),
								(c[(g + ((40 * o) | 0) + 36) >> 2] = 1) < (0 | v);

						);
						for (
							g = 0 | c[t >> 2];
							(c[(g + ((h = ((R = h) + -1) | 0) << 2)) >> 2] =
								c[(q + (h << 2)) >> 2]),
								1 < (0 | R);

						);
					}
					if (((h = 0 | c[(e + 52) >> 2]), 0 < (0 | (c[(304 + O) >> 2] = h))))
						for (
							g = 0 | c[u >> 2],
								i = 0 | c[(b + 1008) >> 2],
								j = 0 | c[(b + 1012) >> 2],
								k = 0 | c[(b + 1004) >> 2];
							(c[(g + ((28 * (h = ((R = h) + -1) | 0)) | 0)) >> 2] =
								c[(i + (h << 2)) >> 2]),
								(c[(g + ((28 * h) | 0) + 4) >> 2] =
									j + (c[(k + (h << 2)) >> 2] << 2)),
								(f[(g + ((28 * h) | 0) + 12) >> 2] = 0),
								(c[(g + ((28 * h) | 0) + 20) >> 2] = 1),
								(c[(g + ((28 * h) | 0) + 24) >> 2] = 1) < (0 | R);

						);
					if (((h = 0 | c[(e + 48) >> 2]), 0 < (0 | (c[(312 + O) >> 2] = h))))
						for (
							g = 0 | c[L >> 2],
								i = 0 | c[(b + 1e3) >> 2],
								j = 0 | c[(b + 992) >> 2],
								k = 0 | c[(b + 996) >> 2];
							(v = 0 | c[(i + ((h = ((R = h) + -1) | 0) << 2)) >> 2]),
								(c[(g + ((36 * h) | 0)) >> 2] = v),
								(c[(g + ((36 * h) | 0) + 4) >> 2] = 1 << v),
								(c[(g + ((36 * h) | 0) + 12) >> 2] =
									j + (c[(k + (h << 2)) >> 2] << 2)),
								(c[(g + ((36 * h) | 0) + 24) >> 2] = 1),
								(c[(g + ((36 * h) | 0) + 28) >> 2] = 1) < (0 | R);

						);
					if (
						((g = 0 | c[e >> 2]),
						(c[(4 + O) >> 2] = g),
						(n = 0 | c[(b + 720) >> 2]),
						(c[(40 + O) >> 2] = n),
						0 < (0 | g))
					) {
						for (
							j = 0 | c[w >> 2],
								k = 0 | c[(b + 740) >> 2],
								l = 0 | c[(b + 736) >> 2],
								m = 0 | c[(b + 732) >> 2],
								h = 0 | c[x >> 2],
								i = g;
							(c[(j + ((i = ((R = i) + -1) | 0) << 3)) >> 2] =
								c[(k + (i << 2)) >> 2]),
								(c[(j + (i << 3) + 4) >> 2] = c[(l + (i << 2)) >> 2]),
								(f[(h + (i << 2)) >> 2] =
									0 == (0 | c[(m + (i << 2)) >> 2]) ? 0 : 1),
								1 < (0 | R);

						);
						for (
							j = 0 | c[L >> 2], i = 0 | c[y >> 2], h = 0;
							(y =
								0 |
								c[
									(j +
										((36 *
											(0 | c[(n + ((g = ((R = g) + -1) | 0) << 2)) >> 2])) |
											0) +
										4) >>
										2
								]),
								(h = ((c[(i + (g << 2)) >> 2] = y) + h) | 0),
								1 < (0 | R);

						);
					} else h = 0;
					if (
						((c[(24 + O) >> 2] = h),
						(h = 0 | c[(e + 4) >> 2]),
						(c[(56 + O) >> 2] = h),
						(c[(180 + O) >> 2] = c[(b + 752) >> 2]),
						(c[(q = (184 + O) | 0) >> 2] = c[(b + 780) >> 2]),
						(c[(s = (188 + O) | 0) >> 2] = c[(b + 804) >> 2]),
						0 < (0 | h))
					) {
						(o = (b + 764) | 0),
							(n = (b + 768) | 0),
							(l = (b + 772) | 0),
							(k = (b + 776) | 0),
							(m = (b + 760) | 0);
						do {
							switch (
								((h = ((j = h) + -1) | 0),
								(g = 0 | c[z >> 2]),
								(c[(g + (h << 5)) >> 2] = c[((0 | c[o >> 2]) + (h << 2)) >> 2]),
								(c[(g + (h << 5) + 4) >> 2] =
									c[((0 | c[n >> 2]) + (h << 2)) >> 2]),
								(R = 0 | c[((0 | c[l >> 2]) + (h << 2)) >> 2]),
								(c[(g + (h << 5) + 8) >> 2] = R),
								(i = 0 | c[((0 | c[k >> 2]) + (h << 2)) >> 2]),
								(c[(g + (h << 5) + 12) >> 2] = i),
								(c[(g + (h << 5) + 28) >> 2] =
									c[((0 | c[m >> 2]) + (h << 2)) >> 2]),
								0 | R)
							) {
								case 0:
									(c[(g + (h << 5) + 16) >> 2] = 2),
										(c[(g + (h << 5) + 20) >> 2] = 2),
										(c[(g + (h << 5) + 24) >> 2] =
											(0 | c[B >> 2]) + ((24 * i) | 0));
									break;
								case 1:
									(c[(g + (h << 5) + 16) >> 2] = 3),
										(c[(g + (h << 5) + 20) >> 2] = 3),
										(c[(g + (h << 5) + 24) >> 2] = (0 | c[D >> 2]) + (i << 5));
									break;
								default:
									ea(0, 784, A);
							}
						} while (1 < (0 | j));
						z = 0 | c[K >> 2];
					} else z = e;
					if (
						((n = 0 | c[(z + 8) >> 2]),
						(h = ((c[(64 + O) >> 2] = n) + -1) | 0),
						(m = 0 < (0 | n)))
					)
						if (
							((i = 0 | c[B >> 2]),
							(j = 0 | c[(b + 796) >> 2]),
							(k = 0 | c[(b + 800) >> 2]),
							(l = 0 | c[(b + 792) >> 2]),
							1 < (0 | d[(b + 4) >> 0]))
						)
							for (
								g = 0 | c[(b + 1108) >> 2];
								(c[(i + ((24 * h) | 0)) >> 2] = c[(j + (h << 2)) >> 2]),
									(c[(i + ((24 * h) | 0) + 4) >> 2] = c[(k + (h << 2)) >> 2]),
									(c[(i + ((24 * h) | 0) + 12) >> 2] = c[(l + (h << 2)) >> 2]),
									(c[(i + ((24 * h) | 0) + 8) >> 2] = c[(g + (h << 2)) >> 2]),
									0 < (0 | h);

							)
								h = (h + -1) | 0;
						else
							for (
								;
								(c[(i + ((24 * h) | 0)) >> 2] = c[(j + (h << 2)) >> 2]),
									(c[(i + ((24 * h) | 0) + 4) >> 2] = c[(k + (h << 2)) >> 2]),
									(c[(i + ((24 * h) | 0) + 12) >> 2] = c[(l + (h << 2)) >> 2]),
									(c[(i + ((24 * h) | 0) + 8) >> 2] = 0) < (0 | h);

							)
								h = (h + -1) | 0;
					if (
						((g = 0 | c[(z + 12) >> 2]),
						0 < (0 | (c[(l = (72 + O) | 0) >> 2] = g)))
					)
						for (
							h = 0 | c[D >> 2], i = 0 | c[(b + 816) >> 2], j = g;
							(c[(h + ((j = ((R = j) + -1) | 0) << 5)) >> 2] =
								c[(i + (j << 2)) >> 2]),
								1 < (0 | R);

						);
					if (m) {
						for (
							k = 0 | c[L >> 2],
								j = 0 | c[q >> 2],
								i = 0 | c[C >> 2],
								g = n,
								h = 0;
							(D =
								0 |
								c[
									(k +
										((36 *
											(0 | c[(j + ((g = ((R = g) + -1) | 0) << 2)) >> 2])) |
											0) +
										4) >>
										2
								]),
								(h = ((c[(i + (g << 2)) >> 2] = D) + h) | 0),
								1 < (0 | R);

						);
						g = 0 | c[l >> 2];
					} else h = 0;
					if (((c[(92 + O) >> 2] = h), 0 < (0 | g)))
						for (
							k = 0 | c[L >> 2], j = 0 | c[s >> 2], i = 0 | c[E >> 2], h = 0;
							(E =
								0 |
								c[
									(k +
										((36 *
											(0 | c[(j + ((g = ((R = g) + -1) | 0) << 2)) >> 2])) |
											0) +
										4) >>
										2
								]),
								(h = ((c[(i + (g << 2)) >> 2] = E) + h) | 0),
								1 < (0 | R);

						);
					else h = 0;
					if (
						((c[(124 + O) >> 2] = h),
						(g = 0 | c[(z + 16) >> 2]),
						(c[(200 + O) >> 2] = g),
						(n = 0 | c[(b + 840) >> 2]),
						(c[(252 + O) >> 2] = n),
						0 < (0 | g))
					) {
						for (
							h = 0 | c[H >> 2],
								i = 0 | c[(b + 860) >> 2],
								j = 0 | c[(b + 864) >> 2],
								k = 0 | c[(b + 876) >> 2],
								l = 0 | c[(b + 856) >> 2],
								m = g;
							(c[(h + ((m = ((R = m) + -1) | 0) << 4)) >> 2] =
								c[(i + (m << 2)) >> 2]),
								(c[(h + (m << 4) + 4) >> 2] = c[(j + (m << 2)) >> 2]),
								(c[(h + (m << 4) + 12) >> 2] = c[(k + (m << 2)) >> 2]),
								(c[(h + (m << 4) + 8) >> 2] = c[(l + (m << 2)) >> 2]),
								1 < (0 | R);

						);
						for (
							j = 0 | c[L >> 2], i = 0 | c[G >> 2], h = 0;
							(H =
								0 |
								c[
									(j +
										((36 *
											(0 | c[(n + ((g = ((R = g) + -1) | 0) << 2)) >> 2])) |
											0) +
										4) >>
										2
								]),
								(h = ((c[(i + (g << 2)) >> 2] = H) + h) | 0),
								1 < (0 | R);

						);
					} else h = 0;
					if (
						((c[(220 + O) >> 2] = h),
						(y = 0 | c[(z + 72) >> 2]),
						0 < (0 | (c[(320 + O) >> 2] = y)))
					) {
						(h = 0 | c[F >> 2]),
							(g = 0 | c[(b + 1032) >> 2]),
							(i = 0 | c[(b + 1036) >> 2]),
							(j = 0 | c[(b + 1040) >> 2]),
							(k = 0 | c[(b + 1044) >> 2]),
							(l = 0 | c[(b + 1028) >> 2]),
							(t = (b + 1052) | 0),
							(v = (b + 1048) | 0),
							(u = (b + 1056) | 0),
							(w = 0);
						do {
							if (
								((m = 0 | c[(g + (w << 2)) >> 2]),
								(c[(h + ((28 * w) | 0) + 4) >> 2] = m),
								(c[(h + ((28 * w) | 0)) >> 2] = c[(i + (w << 2)) >> 2]),
								(R = 0 | c[(j + (w << 2)) >> 2]),
								(c[(h + ((28 * w) | 0) + 16) >> 2] = R),
								(n = 0 | c[(k + (w << 2)) >> 2]),
								(c[(h + ((28 * w) | 0) + 20) >> 2] = n),
								(c[(h + ((28 * w) | 0) + 24) >> 2] = R + 1 - n),
								(n =
									(c[(h + ((28 * w) | 0) + 8) >> 2] = 0) |
									c[(l + (w << 2)) >> 2]),
								0 < (0 | m))
							)
								for (
									o = 0 | c[(h + ((28 * w) | 0) + 12) >> 2],
										q = 0 | c[t >> 2],
										s = 0 | c[v >> 2],
										e = 0 | c[u >> 2],
										x = 0;
									(R = (x + n) | 0),
										(c[(o + (x << 4) + 4) >> 2] = c[(q + (R << 2)) >> 2]),
										(c[(o + (x << 4)) >> 2] = c[(s + (R << 2)) >> 2]),
										(c[(o + (x << 4) + 8) >> 2] = c[(e + (R << 2)) >> 2]),
										(0 | (x = (x + 1) | (c[(o + (x << 4) + 12) >> 2] = 0))) !=
											(0 | m);

								);
							w = (w + 1) | 0;
						} while ((0 | w) != (0 | y));
					}
					if (
						((h = 0 | c[(z + 80) >> 2]),
						(c[(o = (340 + O) | 0) >> 2] = h),
						(q = 0 | c[(b + 1068) >> 2]),
						(c[(372 + O) >> 2] = q),
						0 < (0 | h))
					) {
						for (
							g = 0 | c[I >> 2],
								i = 0 | c[(b + 1080) >> 2],
								j = 0 | c[(b + 1084) >> 2],
								k = 0 | c[(b + 1092) >> 2],
								l = 0 | c[(b + 1096) >> 2],
								m = 0 | c[(b + 1088) >> 2],
								n = 0 | c[(b + 1100) >> 2];
							(c[(g + ((24 * (h = ((R = h) + -1) | 0)) | 0)) >> 2] =
								c[(i + (h << 2)) >> 2]),
								(c[(g + ((24 * h) | 0) + 4) >> 2] = c[(j + (h << 2)) >> 2]),
								(c[(g + ((24 * h) | 0) + 8) >> 2] = c[(k + (h << 2)) >> 2]),
								(I = 0 | c[(m + (h << 2)) >> 2]),
								(c[(g + ((24 * h) | 0) + 12) >> 2] = l + (I << 2)),
								(c[(g + ((24 * h) | 0) + 16) >> 2] = n + (I << 1)),
								1 < (0 | R);

						);
						if (0 < (0 | (h = 0 | c[o >> 2])))
							for (
								j = 0 | c[L >> 2], i = 0 | c[J >> 2], g = h, h = 0;
								(L =
									0 |
									c[
										(j +
											((36 *
												(0 | c[(q + ((g = ((R = g) + -1) | 0) << 2)) >> 2])) |
												0) +
											4) >>
											2
									]),
									(h = ((c[(i + (g << 2)) >> 2] = L) + h) | 0),
									1 < (0 | R);

							);
						else h = 0;
					} else h = 0;
					if (((c[(360 + O) >> 2] = h), 0 < (0 | c[(z + 20) >> 2]))) {
						(u = (b + 928) | 0),
							(v = (b + 932) | 0),
							(w = (b + 1004) | 0),
							(x = (b + 1008) | 0),
							(t = (b + 1012) | 0),
							(h = z),
							(e = 0);
						do {
							if (
								((i = 0 | c[((0 | c[u >> 2]) + (e << 2)) >> 2]),
								(q = ((g = 0 | c[((0 | c[v >> 2]) + (e << 2)) >> 2]) + i) | 0),
								(s = 0 | c[((0 | c[M >> 2]) + (e << 2)) >> 2]),
								-1 == (0 | i))
							)
								c[((0 | c[N >> 2]) + (e << 2)) >> 2] = 0;
							else {
								if (0 < (0 | g)) {
									(n = 0 | c[w >> 2]), (o = 0 | c[x >> 2]), (h = 0);
									do {
										if (
											((g = 0 | c[(n + (i << 2)) >> 2]),
											(m = ((R = 0 | c[(o + (i << 2)) >> 2]) + g) | 0),
											(-1 != (0 | g)) & (0 < (0 | R)))
										) {
											l = 0 | c[t >> 2];
											do {
												(p = +f[(l + (g << 2)) >> 2]), (j = (s + (h << 2)) | 0);
												b: do {
													if (h)
														for (k = s; ; ) {
															if (+f[k >> 2] == p) break b;
															if ((0 | (k = (k + 4) | 0)) == (0 | j)) {
																P = 96;
																break;
															}
														}
													else P = 96;
												} while (0);
												96 == (0 | P) &&
													((P = 0), (f[j >> 2] = p), (h = (h + 1) | 0)),
													(g = (g + 1) | 0);
											} while ((0 | g) < (0 | m));
										}
										i = (i + 1) | 0;
									} while ((0 | i) < (0 | q));
								} else h = 0;
								!(function (a, b) {
									a |= 0;
									var d = 0,
										e = 0,
										f = 0,
										g = 0,
										h = 0,
										i = 0,
										j = 0,
										k = 0,
										l = 0,
										m = 0;
									(S = ((m = S) + 208) | 0),
										(f = (b |= 0) << 2),
										(c[(i = k = ((j = m) + 192) | 0) >> 2] = 1),
										(c[(i + 4) >> 2] = 0);
									a: do {
										if (0 | f) {
											for (
												c[(j + 4) >> 2] = 4, c[j >> 2] = 4, d = b = 4, e = 2;
												(b = (b + 4 + d) | 0),
													(c[(j + (e << 2)) >> 2] = b) >>> 0 < f >>> 0;

											)
												(i = d), (d = b), (e = (e + 1) | 0), (b = i);
											if (a >>> 0 < (g = (a + f + -4) | 0) >>> 0) {
												(h = g), (i = (4 + k) | 0), (d = a), (e = b = 1);
												do {
													do {
														if (3 != ((3 & b) | 0)) {
															if (
																((0 |
																	c[(j + ((f = (e + -1) | 0) << 2)) >> 2]) >>>
																	0 <
																((h - d) | 0) >>> 0
																	? Vb(d, e, j)
																	: Xb(d, b, 0 | c[i >> 2], e, 0, j),
																1 == (0 | e))
															) {
																Yb(k, 1), (e = 0);
																break;
															}
															Yb(k, f), (e = 1);
															break;
														}
														Vb(d, e, j), Wb(k, 2), (e = (e + 2) | 0);
													} while (0);
													(b = 1 | c[k >> 2]),
														(c[k >> 2] = b),
														(d = (d + 4) | 0);
												} while (d >>> 0 < g >>> 0);
												f = 0 | c[(g = i) >> 2];
											} else (g = (4 + k) | 0), (f = 0), (d = a), (e = b = 1);
											for (Xb(d, b, f, e, 0, j), f = (4 + k) | 0; ; ) {
												if ((1 == (0 | e)) & (1 == (0 | b))) {
													if (!(0 | c[f >> 2])) break a;
													l = 21;
												} else
													(0 | e) < 2
														? (l = 21)
														: (Yb(k, 2),
														  (a = (e + -2) | 0),
														  (c[k >> 2] = 7 ^ c[k >> 2]),
														  Wb(k, 1),
														  Xb(
																(d + (0 - (0 | c[(j + (a << 2)) >> 2])) + -4) |
																	0,
																0 | c[k >> 2],
																0 | c[g >> 2],
																(e + -1) | 0,
																1,
																j
														  ),
														  Yb(k, 1),
														  (b = 1 | c[k >> 2]),
														  (c[k >> 2] = b),
														  Xb((d = (d + -4) | 0), b, 0 | c[g >> 2], a, 1, j),
														  (e = a));
												21 == (0 | l) &&
													((a = (l = 0) | Zb(k)),
													Wb(k, a),
													(b = 0 | c[k >> 2]),
													(d = (d + -4) | 0),
													(e = (a + e) | 0));
											}
										}
									} while (0);
									S = m;
								})(s, h),
									(c[((0 | c[N >> 2]) + (e << 2)) >> 2] = h),
									(h = 0 | c[K >> 2]);
							}
							e = (e + 1) | 0;
						} while ((0 | e) < (0 | c[(h + 20) >> 2]));
					}
					return (c[O >> 2] = b), kb(O), (S = Q), 0 | (R = O);
				}
				function ia(a, b) {
					b |= 0;
					var c = 0,
						d = 0;
					return (
						0 | ((d = +f[(a |= 0) >> 2]) < (c = +f[b >> 2]) ? -1 : (c < d) & 1)
					);
				}
				function ja(d) {
					d |= 0;
					var n,
						o,
						p,
						e = 0,
						g = 0,
						h = 0,
						i = 0,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						q = 0,
						r = 0,
						s = 0,
						t = S;
					if (
						((S = (S + 32) | 0),
						(g = (t + 24) | 0),
						(c[(s = t) >> 2] = 4),
						(c[(s + 4) >> 2] = 1),
						(function (a, b) {
							(a |= 0), (b |= 0);
							var d = 0,
								e = 0;
							(S = ((a = S) + 272) | 0),
								(d = (a + 16) | 0),
								(c[(e = a) >> 2] = b),
								Sb(d, 840, e),
								(function (a) {
									a |= 0;
									var b = 0,
										d = 0;
									(S = ((b = S) + 16) | 0),
										(c[(d = b) >> 2] = a),
										(function (a, b, d) {
											(a |= 0), (b |= 0), (d |= 0);
											var e = 0,
												f = 0;
											(S = ((e = S) + 16) | 0),
												(c[(f = e) >> 2] = d),
												wb(a, b, f),
												(S = e);
										})(496, 2328, d),
										(S = b);
								})(d),
								(S = a);
						})((c[(s + 8) >> 2] = 0), s),
						0 | Qb(d))
					)
						return ea(0, 885, (t + 16) | 0), (S = t), (s = 0) | s;
					if (3 < (255 & (e = 0 | a[(l = (d + 4) | 0) >> 0])))
						return (
							(c[g >> 2] = 3),
							(c[(g + 4) >> 2] = 255 & e),
							ea(0, 948, g),
							(S = t),
							(s = 0) | s
						);
					for (
						g = (d + 64) | 0,
							(k = 0 != (0 | a[(e = (d + 5) | 0) >> 0])) &&
								(Ya(l, 1), Za(g, 4, 160), (a[e >> 0] = 0)),
							i = 102,
							j = h = (d + 704) | 0,
							e = g;
						(i = (i + -1) | 0), (c[j >> 2] = d + (0 | c[e >> 2])), i;

					)
						(j = (j + 4) | 0), (e = (e + 4) | 0);
					if (
						((s =
							(k &&
								((s = 0 | a[l >> 0]),
								Za(0 | c[h >> 2], 4, 32),
								Ya(0 | c[(r = (d + 708) | 0) >> 2], 4),
								Ya((4 + (0 | c[r >> 2])) | 0, 4),
								Ya((8 + (0 | c[r >> 2])) | 0, 4),
								Ya((12 + (0 | c[r >> 2])) | 0, 4),
								Ya((16 + (0 | c[r >> 2])) | 0, 4),
								Ya((20 + (0 | c[r >> 2])) | 0, 1),
								Za(0 | c[(d + 720) >> 2], 4, 0 | c[c[h >> 2] >> 2]),
								Za(0 | c[(d + 724) >> 2], 4, 0 | c[c[h >> 2] >> 2]),
								Za(0 | c[(d + 728) >> 2], 4, 0 | c[c[h >> 2] >> 2]),
								Za(0 | c[(d + 732) >> 2], 4, 0 | c[c[h >> 2] >> 2]),
								Za(0 | c[(d + 736) >> 2], 4, 0 | c[c[h >> 2] >> 2]),
								Za(0 | c[(d + 740) >> 2], 4, 0 | c[c[h >> 2] >> 2]),
								Za(0 | c[(d + 752) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 756) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 760) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 764) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 768) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 772) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 776) >> 2], 4, 0 | c[(4 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 780) >> 2], 4, 0 | c[(8 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 784) >> 2], 4, 0 | c[(8 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 788) >> 2], 4, 0 | c[(8 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 792) >> 2], 4, 0 | c[(8 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 796) >> 2], 4, 0 | c[(8 + (0 | c[h >> 2])) >> 2]),
								Za(0 | c[(d + 800) >> 2], 4, 0 | c[(8 + (0 | c[h >> 2])) >> 2]),
								Za(
									0 | c[(d + 804) >> 2],
									4,
									0 | c[(12 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 808) >> 2],
									4,
									0 | c[(12 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 812) >> 2],
									4,
									0 | c[(12 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 816) >> 2],
									4,
									0 | c[(12 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 840) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 844) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 848) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 852) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 856) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 860) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 864) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 868) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 872) >> 2],
									1,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 876) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 880) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 884) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 888) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 892) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 896) >> 2],
									4,
									0 | c[(16 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 908) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 912) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 916) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 920) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 924) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 928) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 932) >> 2],
									4,
									0 | c[(20 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 936) >> 2],
									4,
									0 | c[(24 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 940) >> 2],
									4,
									0 | c[(28 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 944) >> 2],
									4,
									0 | c[(28 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 948) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 952) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 956) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 960) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 964) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 968) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 972) >> 2],
									4,
									0 | c[(32 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 976) >> 2],
									4,
									0 | c[(36 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 980) >> 2],
									4,
									0 | c[(36 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 984) >> 2],
									4,
									0 | c[(36 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 988) >> 2],
									4,
									0 | c[(40 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 992) >> 2],
									4,
									0 | c[(44 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 996) >> 2],
									4,
									0 | c[(48 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1e3) >> 2],
									4,
									0 | c[(48 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1004) >> 2],
									4,
									0 | c[(52 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1008) >> 2],
									4,
									0 | c[(52 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1012) >> 2],
									4,
									0 | c[(56 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1016) >> 2],
									4,
									0 | c[(60 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1020) >> 2],
									2,
									0 | c[(64 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1024) >> 2],
									4,
									0 | c[(68 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1028) >> 2],
									4,
									0 | c[(72 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1032) >> 2],
									4,
									0 | c[(72 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1036) >> 2],
									4,
									0 | c[(72 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1040) >> 2],
									4,
									0 | c[(72 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1044) >> 2],
									4,
									0 | c[(72 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1048) >> 2],
									4,
									0 | c[(76 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1052) >> 2],
									4,
									0 | c[(76 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1056) >> 2],
									4,
									0 | c[(76 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1068) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1072) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1076) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1080) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1084) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1088) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1092) >> 2],
									4,
									0 | c[(80 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1096) >> 2],
									4,
									0 | c[(84 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1100) >> 2],
									2,
									0 | c[(84 + (0 | c[h >> 2])) >> 2]
								),
								Za(
									0 | c[(d + 1104) >> 2],
									4,
									0 | c[(88 + (0 | c[h >> 2])) >> 2]
								),
								1 < (255 & s)) &&
								Za(
									0 | c[(d + 1108) >> 2],
									4,
									0 | c[(8 + (0 | c[h >> 2])) >> 2]
								),
							h)),
						(e = 0 | c[s >> 2]),
						0 < (0 | c[e >> 2]))
					)
						for (
							g = (d + 716) | 0, h = (d + 712) | 0, i = 0;
							(c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
								(0 | c[g >> 2]) + (i << 6)),
								(i = (i + 1) | 0),
								(e = 0 | c[s >> 2]),
								(0 | i) < (0 | c[e >> 2]);

						);
					if (0 < (0 | c[(e + 4) >> 2]))
						for (
							g = (d + 748) | 0, h = (d + 744) | 0, i = 0;
							(c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
								(0 | c[g >> 2]) + (i << 6)),
								(i = (i + 1) | 0),
								(e = 0 | c[s >> 2]),
								(0 | i) < (0 | c[(e + 4) >> 2]);

						);
					if (0 < (0 | c[(e + 16) >> 2]))
						for (
							j = (d + 836) | 0,
								k = (d + 820) | 0,
								q = (d + 1016) | 0,
								o = (d + 880) | 0,
								p = (d + 824) | 0,
								l = (d + 1020) | 0,
								m = (d + 884) | 0,
								n = (d + 828) | 0,
								g = (d + 1024) | 0,
								h = (d + 892) | 0,
								i = (d + 832) | 0,
								r = 0;
							(c[((0 | c[k >> 2]) + (r << 2)) >> 2] =
								(0 | c[j >> 2]) + (r << 6)),
								(c[((0 | c[p >> 2]) + (r << 2)) >> 2] =
									(0 | c[q >> 2]) +
									(c[((0 | c[o >> 2]) + (r << 2)) >> 2] << 2)),
								(c[((0 | c[n >> 2]) + (r << 2)) >> 2] =
									(0 | c[l >> 2]) +
									(c[((0 | c[m >> 2]) + (r << 2)) >> 2] << 1)),
								(c[((0 | c[i >> 2]) + (r << 2)) >> 2] =
									(0 | c[g >> 2]) +
									(c[((0 | c[h >> 2]) + (r << 2)) >> 2] << 2)),
								(r = (r + 1) | 0),
								(e = 0 | c[s >> 2]),
								(0 | r) < (0 | c[(e + 16) >> 2]);

						);
					if (0 < (0 | c[(e + 20) >> 2]))
						for (
							g = (d + 904) | 0, h = (d + 900) | 0, i = 0;
							(c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
								(0 | c[g >> 2]) + (i << 6)),
								(i = (i + 1) | 0),
								(e = 0 | c[s >> 2]),
								(0 | i) < (0 | c[(e + 20) >> 2]);

						);
					if (0 < (0 | c[(e + 80) >> 2]))
						for (
							g = (d + 1064) | 0, h = (d + 1060) | 0, i = 0;
							(c[((0 | c[h >> 2]) + (i << 2)) >> 2] =
								(0 | c[g >> 2]) + (i << 6)),
								(i = (i + 1) | 0),
								(e = 0 | c[s >> 2]),
								(0 | i) < (0 | c[(e + 80) >> 2]);

						);
					if (1 & a[(20 + (0 | c[(d + 708) >> 2])) >> 0])
						return (S = t), 0 | (s = d);
					if ((0 | (m = 0 | c[(e + 16) >> 2])) <= 0)
						return (S = t), 0 | (s = d);
					(e = 0 | c[(d + 1020) >> 2]),
						(g = 0 | c[(d + 884) >> 2]),
						(h = 0 | c[(d + 888) >> 2]),
						(j = 0);
					do {
						if (
							((i = (e + (c[(g + (j << 2)) >> 2] << 1)) | 0),
							(l = ((s = 0 | c[(h + (j << 2)) >> 2]) + -1) | 0),
							1 < (0 | s))
						)
							for (
								k = 0;
								(r = 0 | b[(q = (i + (k << 1)) | 0) >> 1]),
									(s = (i + ((k + 2) << 1)) | 0),
									(b[q >> 1] = 0 | b[s >> 1]),
									(b[s >> 1] = r),
									(0 | (k = (k + 3) | 0)) < (0 | l);

							);
						j = (j + 1) | 0;
					} while ((0 | j) != (0 | m));
					(g = 0 | c[(d + 1016) >> 2]),
						(h = 0 | c[(d + 880) >> 2]),
						(i = 0 | c[(d + 876) >> 2]),
						(k = 0);
					do {
						if (
							((j =
								((e = (g + (c[(h + (k << 2)) >> 2] << 2)) | 0) +
									(((s = 0 | c[(i + (k << 2)) >> 2]) << 1) << 2)) |
								0),
							0 < (0 | s))
						)
							for (
								e = (e + 4) | 0;
								(f[e >> 2] = 1 - +f[e >> 2]), (e = (e + 8) | 0) >>> 0 < j >>> 0;

							);
						k = (k + 1) | 0;
					} while ((0 | k) != (0 | m));
					return (S = t), 0 | d;
				}
				function ka(a) {
					var b = S;
					return (
						(S = (S + 16) | 0),
						0 | Qb((a |= 0))
							? (ea(0, 1057, b), (S = b), (a = 0) | a)
							: ((a = 0 | d[(a + 4) >> 0]), (S = b), 0 | a)
					);
				}
				function sa(a) {
					var b = 0,
						d = S;
					return (
						(S = (S + 16) | 0),
						(b = d),
						(a |= 0)
							? ((b =
									0 |
									(function (a) {
										a |= 0;
										var b,
											e,
											d = S;
										return (
											(S = (S + 336) | 0),
											(b = ((e = d) + 320) | 0),
											rc(0 | e, 0, 320),
											ga((a + 704) | 0, e, b),
											(S = d),
											0 | c[b >> 2]
										);
									})(a)),
							  (S = d),
							  0 | b)
							: ((c[b >> 2] = 1362),
							  (c[(b + 4) >> 2] = 1380),
							  ea(0, 1116, b),
							  (S = d),
							  (b = 0) | b)
					);
				}
				function ta(a, b, d) {
					(b |= 0), (d |= 0);
					var e,
						g,
						f = 0,
						h = 0,
						i = S;
					return (
						(S = (S + 32) | 0),
						(h = (i + 24) | 0),
						(g = (i + 16) | 0),
						(f = (i + 8) | 0),
						(e = i),
						(a |= 0)
							? b
								? ((((f = b) + 15) & -16) | 0) != (0 | f)
									? ((c[g >> 2] = 1398),
									  (c[(4 + g) >> 2] = 1189),
									  ea(0, 1116, g),
									  (S = i),
									  (h = 0) | h)
									: (b = 0 | ha(a, b, d))
									? ((S = i), 0 | (h = b))
									: ((c[h >> 2] = 1398),
									  (c[(h + 4) >> 2] = 1424),
									  ea(0, 1116, h),
									  (S = i),
									  (h = 0) | h)
								: ((c[f >> 2] = 1398),
								  (c[(f + 4) >> 2] = 1150),
								  ea(0, 1116, f),
								  (S = i),
								  (h = 0) | h)
							: ((c[e >> 2] = 1398),
							  (c[(e + 4) >> 2] = 1380),
							  ea(0, 1116, e),
							  (S = i),
							  (h = 0) | h)
					);
				}
				function Xa(a, b, c, d) {
					if (
						((c = +c),
						(d = +d),
						(b = +u(+(b = +b), +(a = +a)) - +u(+d, +c)) < -3.1415927410125732)
					)
						for (; (b += 6.2831854820251465) < -3.1415927410125732; );
					if (!(3.1415927410125732 < b)) return +(c = b);
					for (; 3.1415927410125732 < (b += -6.2831854820251465); );
					return +b;
				}
				function Ya(b, c) {
					var d;
					if (!((c = ((b |= 0) + (c |= 0) + -1) | 0) >>> 0 <= b >>> 0))
						for (
							;
							(d = 0 | a[b >> 0]),
								(a[b >> 0] = 0 | a[c >> 0]),
								(b = (b + 1) | 0),
								(a[c >> 0] = d),
								b >>> 0 < (c = (c + -1) | 0) >>> 0;

						);
				}
				function Za(b, c, d) {
					(b |= 0), (c |= 0);
					var g,
						e = 0,
						f = 0;
					if ((d |= 0))
						do {
							if (
								((d = (d + -1) | 0),
								(f = b) >>> 0 < (e = ((b = (b + c) | 0) + -1) | 0) >>> 0)
							)
								for (
									;
									(g = 0 | a[f >> 0]),
										(a[f >> 0] = 0 | a[e >> 0]),
										(f = (f + 1) | 0),
										(a[e >> 0] = g),
										f >>> 0 < (e = (e + -1) | 0) >>> 0;

								);
						} while (0 != (0 | d));
				}
				function ib(a) {
					var d,
						g,
						h,
						i,
						j,
						n,
						o,
						p,
						q,
						r,
						s,
						t,
						u,
						v,
						w,
						b = 0,
						k = 0,
						l = 0,
						m =
							((b = 0 | c[((a |= 0) + 344) >> 2]) +
								((24 * (l = 0 | c[(a + 340) >> 2])) | 0)) |
							0;
					if (!((0 | l) <= 0)) {
						l = 0 | c[(a + 272) >> 2];
						do {
							if (
								((a = 0 | c[(b + 8) >> 2]),
								(g = 0 | c[(l + (c[b >> 2] << 2)) >> 2]),
								(h = 0 | c[(l + (c[(b + 4) >> 2] << 2)) >> 2]),
								(i = 0 | c[(b + 12) >> 2]),
								(j = 0 | c[(b + 16) >> 2]),
								(d = +f[(b + 20) >> 2]),
								0 < (0 | a))
							)
								for (
									k = 0;
									(n = 1 | k),
										(v = +f[(i + (k << 2)) >> 2]),
										(q = +f[(i + (n << 2)) >> 2]),
										(u = ((0 | e[(j + (k << 1)) >> 1]) << 1) & 65534),
										(t = +f[(w = (g + (u << 2)) | 0) >> 2]),
										(p = +f[(u = (g + ((1 | u) << 2)) | 0) >> 2]),
										(n = ((0 | e[(j + (n << 1)) >> 1]) << 1) & 65534),
										(s = +f[(r = (h + (n << 2)) | 0) >> 2]),
										(o = +f[(n = (h + ((1 | n) << 2)) | 0) >> 2]),
										(f[w >> 2] = t + v * (s - t) * d),
										(f[u >> 2] = p + v * (o - p) * d),
										(f[r >> 2] = s + q * (t - s) * d),
										(f[n >> 2] = o + q * (p - o) * d),
										(0 | (k = (k + 2) | 0)) < (0 | a);

								);
							b = (b + 24) | 0;
						} while (b >>> 0 < m >>> 0);
					}
				}
				function kb(b) {
					var P,
						Q,
						T,
						Y,
						Z,
						d = 0,
						e = 0,
						g = 0,
						h = 0,
						i = 0,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						r = 0,
						s = 0,
						t = 0,
						u = 0,
						w = 0,
						x = 0,
						y = 0,
						z = 0,
						A = 0,
						B = 0,
						C = 0,
						D = 0,
						E = 0,
						F = 0,
						G = 0,
						H = 0,
						I = 0,
						J = 0,
						K = 0,
						L = 0,
						M = 0,
						N = 0,
						O = 0,
						R = 0,
						U = 0,
						V = 0,
						W = 0,
						X = 0,
						aa = 0,
						ba = 0,
						ca = 0,
						da = 0,
						fa = 0,
						ga = 0,
						ha = 0,
						ia = 0,
						ja = 0,
						ka = 0,
						la = 0,
						ma = 0,
						na = 0,
						oa = 0,
						pa = 0,
						qa = 0,
						ra = 0,
						ta = 0,
						sa = S;
					if (
						((S = (S + 16) | 0),
						(I = sa),
						0 | c[(ra = ((b |= 0) + 256) | 0) >> 2] &&
							((da = c[(b + 200) >> 2] << 2),
							qc(0 | c[(b + 280) >> 2], 0 | c[(b + 264) >> 2], 0 | da),
							qc(0 | c[(b + 284) >> 2], 0 | c[(b + 268) >> 2], 0 | da),
							qc(0 | c[(b + 288) >> 2], 0 | c[(b + 276) >> 2], 0 | da)),
						(da = 0 | c[(b + 292) >> 2]),
						(p = ((j = 0 | c[(b + 296) >> 2]) + ((40 * da) | 0)) | 0),
						0 < (0 | da))
					) {
						for (
							g = j, i = 0 | c[(b + 300) >> 2];
							(r = +f[i >> 2]),
								(r = (h = 0 == (0 | c[(g + 12) >> 2]))
									? ((U = +f[g >> 2]),
									  (V = +f[(g + 4) >> 2]),
									  r < U ? U : V < r ? V : r)
									: ((V = +f[(g + 8) >> 2]),
									  (U = +f[g >> 2]) +
											V * ((r = (r - U) / V) - (0 | ~~+q(+r))))),
								(d = (g + 36) | 0),
								+f[(e = (g + 32) | 0) >> 2] != r
									? ((c[d >> 2] = 1), (f[e >> 2] = r))
									: (c[d >> 2] = 0),
								h && (f[i >> 2] = r),
								!(p >>> 0 <= (g = (g + 40) | 0) >>> 0);

						)
							i = (i + 4) | 0;
						(n = 0 | c[(b + 308) >> 2]), (o = 0 == (0 | c[(b + 376) >> 2]));
						do {
							(T = +f[(j + 32) >> 2]),
								(U = +f[(j + 16) >> 2]),
								(V = +f[(j + 20) >> 2]),
								(m =
									((d = (n + ((28 * (0 | c[(j + 24) >> 2])) | 0)) | 0) +
										((28 * (da = 0 | c[(j + 28) >> 2])) | 0)) |
									0);
							a: do {
								if (0 < (0 | da)) {
									if (!o)
										for (;;) {
											h = 0 | c[d >> 2];
											do {
												if (1 <= (0 | h)) {
													if (
														((g = 0 | c[(d + 4) >> 2]),
														(r = (A = +f[g >> 2]) - U),
														1 == (0 | h))
													) {
														(h = !(T < U + A) | !(r < T)),
															(r = e = 0),
															(ia = 52);
														break;
													}
													if (T < r) {
														(g = (d + 16) | 0), (i = 1), (r = e = 0), (ia = 54);
														break;
													}
													if (T < U + A) (r = e = h = 0), (ia = 52);
													else {
														for (
															e = 1;
															!(T < U + (r = +f[(g + (e << 2)) >> 2]));

														) {
															if (!((0 | (e = (e + 1) | 0)) < (0 | h))) {
																ia = 51;
																break;
															}
															A = r;
														}
														if (51 == (0 | ia)) {
															(g = (d + 16) | 0),
																(e = (h + -(i = 1)) | 0),
																(r = 0),
																(ia = 54);
															break;
														}
														ia =
															((r =
																r - U < T
																	? (h = 0)
																	: ((e = (e + -1) | 0),
																	  (r -= A) < V
																			? (h = 0)
																			: ((h = 0), (T - A) / r))),
															52);
													}
												} else (r = e = h = 0), (ia = 52);
											} while (0);
											if (
												(52 == (0 | ia) &&
													(h | ((ia = 0) == (0 | c[(g = (d + 16) | 0) >> 2]))
														? ((i = 1 & h), (ia = 54))
														: ((c[(d + 24) >> 2] = 1),
														  (c[(d + 20) >> 2] = 1),
														  (l = (d + 8) | 0),
														  (k = (d + 12) | 0),
														  (h = 0))),
												54 == (0 | ia) &&
													((da = (A = +f[(k = (d + 12) | (ia = 0)) >> 2]) != r),
													(h =
														1 &
														(((0 | c[(l = (d + 8) | 0) >> 2]) != (0 | e)) |
															(da & ((0 == r) | (0 == A))))),
													(c[(d + 24) >> 2] = 1 & da),
													(c[(d + 20) >> 2] = h),
													(h = i)),
												(f[k >> 2] = r),
												(c[l >> 2] = e),
												(c[g >> 2] = h),
												m >>> 0 <= (d = (d + 28) | 0) >>> 0)
											)
												break a;
										}
									if (!(0 | c[(j + 36) >> 2]))
										for (;;)
											if (
												((c[(d + 24) >> 2] = 0),
												m >>> (c[(d + 20) >> 2] = 0) <=
													(d = (d + 28) | 0) >>> 0)
											)
												break a;
									do {
										h = 0 | c[d >> 2];
										do {
											if (1 <= (0 | h)) {
												if (
													((g = 0 | c[(d + 4) >> 2]),
													(r = (A = +f[g >> 2]) - U),
													1 == (0 | h))
												) {
													(h = !(T < U + A) | !(r < T)), (r = e = 0), (ia = 35);
													break;
												}
												if (T < r) {
													(g = (d + 16) | 0), (i = 1), (r = e = 0), (ia = 37);
													break;
												}
												if (T < U + A) (r = e = h = 0), (ia = 35);
												else {
													for (
														e = 1;
														!(T < U + (r = +f[(g + (e << 2)) >> 2]));

													) {
														if (!((0 | (e = (e + 1) | 0)) < (0 | h))) {
															ia = 32;
															break;
														}
														A = r;
													}
													if (32 == (0 | ia)) {
														(g = (d + 16) | 0),
															(e = (h + -(i = 1)) | 0),
															(r = 0),
															(ia = 37);
														break;
													}
													ia =
														((r =
															r - U < T
																? (h = 0)
																: ((e = (e + -1) | 0),
																  (r -= A) < V
																		? (h = 0)
																		: ((h = 0), (T - A) / r))),
														35);
												}
											} else (r = e = h = 0), (ia = 35);
										} while (0);
										35 == (0 | ia) &&
											(h | ((ia = 0) == (0 | c[(g = (d + 16) | 0) >> 2]))
												? ((i = 1 & h), (ia = 37))
												: ((c[(d + 24) >> 2] = 1),
												  (c[(d + 20) >> 2] = 1),
												  (l = (d + 8) | 0),
												  (k = (d + 12) | 0),
												  (h = 0))),
											37 == (0 | ia) &&
												((da = (A = +f[(k = (d + 12) | (ia = 0)) >> 2]) != r),
												(h =
													1 &
													(((0 | c[(l = (d + 8) | 0) >> 2]) != (0 | e)) |
														(da & ((0 == r) | (0 == A))))),
												(c[(d + 24) >> 2] = 1 & da),
												(c[(d + 20) >> 2] = h),
												(h = i)),
											(f[k >> 2] = r),
											(c[l >> 2] = e),
											(c[g >> 2] = h),
											(d = (d + 28) | 0);
									} while (d >>> 0 < m >>> 0);
								}
							} while (0);
							j = (j + 40) | 0;
						} while (j >>> 0 < p >>> 0);
					}
					if (
						((u =
							((d = 0 | c[(da = (b + 316) | 0) >> 2]) +
								((36 * (ca = 0 | c[(b + 312) >> 2])) | 0)) |
							0),
						0 < (0 | ca))
					) {
						(t = (b + 308) | 0), (w = 0 == (0 | c[(b + 376) >> 2]));
						do {
							(p = 0 | c[t >> 2]),
								(s =
									((j = 0 | c[(d + 12) >> 2]) + ((l = 0 | c[d >> 2]) << 2)) |
									0);
							b: do {
								if (0 < (0 | l))
									for (k = j, h = g = e = 0; ; ) {
										if (
											((i = 0 | c[k >> 2]),
											0 | c[(p + ((28 * i) | 0) + 16) >> 2])
										) {
											(h = 1), (e = g = 0);
											break b;
										}
										if (
											((h = h || 0 | c[(p + ((28 * i) | 0) + 24) >> 2]),
											(g = g || 0 | c[(p + ((28 * i) | 0) + 20) >> 2]),
											(e =
												(e + ((0 != +f[(p + ((28 * i) | 0) + 12) >> 2]) & 1)) |
												0),
											s >>> 0 <= (k = (k + 4) | 0) >>> 0)
										) {
											(k = e), (e = g), (ia = 67);
											break;
										}
									}
								else (h = e = k = 0), (ia = 67);
							} while (0);
							c: do {
								if (67 == (0 | ia))
									if (
										((g = w ? e : 1),
										(ia = 0) != ((e = w ? h : 1) | g | 0) &&
											((B = 1 << k),
											(c[(d + 8) >> 2] = B),
											(x = 0 | c[(d + 16) >> 2]),
											(y = 0 | c[(d + 20) >> 2]),
											(z = (x + (B << 2)) | 0),
											31 != (0 | k)))
									) {
										for (
											rc(
												0 | x,
												0,
												((((h = (x + 4) | 0) >>> 0 < z >>> 0 ? z : h) +
													~x +
													4) &
													-4) |
													0
											),
												h = (y + (B << 2)) | 0,
												i = y;
											(f[i >> 2] = 1), (i = (i + 4) | 0) >>> 0 < h >>> 0;

										);
										if (1 <= (0 | l)) {
											if (!k)
												for (l = 1; ; ) {
													if (
														((i = 0 | c[j >> 2]),
														(r = +f[(p + ((28 * i) | 0) + 12) >> 2]),
														(k =
															0 | v(0 | c[(p + ((28 * i) | 0) + 8) >> 2], l)),
														0 == r)
													)
														for (
															h = 0;
															(c[(ca = (x + (h << 2)) | 0) >> 2] =
																(0 | c[ca >> 2]) + k),
																(0 | (h = (h + 1) | 0)) != (0 | B);

														);
													else
														(c[x >> 2] = (0 | c[x >> 2]) + k),
															(f[y >> 2] = (1 - r) * +f[y >> 2]);
													if (
														((j = (j + 4) | 0),
														(l = 0 | v(0 | c[(p + ((28 * i) | 0)) >> 2], l)),
														s >>> 0 <= j >>> 0)
													) {
														h = 0;
														break c;
													}
												}
											o = h = 1;
											do {
												if (
													((n = 0 | c[j >> 2]),
													(r = +f[(l = (p + ((28 * n) | 0) + 12) | 0) >> 2]),
													(i = 0 | c[(p + ((28 * n) | 0) + 8) >> 2]),
													(m = 0 | v(i, o)),
													0 == r)
												)
													for (
														i = 0;
														(c[(ca = (x + (i << 2)) | 0) >> 2] =
															(0 | c[ca >> 2]) + m),
															(0 | (i = (i + 1) | 0)) != (0 | B);

													);
												else {
													for (
														k = 0 | v((i + 1) | 0, o),
															c[x >> 2] = (0 | c[x >> 2]) + m,
															f[y >> 2] = (1 - r) * +f[y >> 2],
															i = 1;
														(V = +f[l >> 2]),
															(ba = 0 != ((i & h) | 0)),
															(c[(ca = (x + (i << 2)) | 0) >> 2] =
																(ba ? k : m) + (0 | c[ca >> 2])),
															(f[(ca = (y + (i << 2)) | 0) >> 2] =
																(ba ? V : 1 - V) * +f[ca >> 2]),
															(0 | (i = (i + 1) | 0)) != (0 | B);

													);
													h <<= 1;
												}
												(j = (j + 4) | 0),
													(o = 0 | v(0 | c[(p + ((28 * n) | 0)) >> 2], o));
											} while (j >>> 0 < s >>> 0);
											h = 0;
										} else h = 0;
									} else h = 0;
							} while (0);
							(c[(d + 28) >> 2] = e),
								(c[(d + 24) >> 2] = g),
								(c[(d + 32) >> 2] = h),
								(d = (d + 36) | 0);
						} while (d >>> 0 < u >>> 0);
					}
					if (
						((g = 0 | c[(ba = (b + 4) | 0) >> 2]),
						(e = ((d = 0 | c[(ca = (b + 52) | 0) >> 2]) + (g << 2)) | 0),
						0 < (0 | g))
					) {
						for (
							;
							(V = +f[d >> 2]),
								(f[d >> 2] = V < 0 ? 0 : 1 < V ? 1 : V),
								(d = (d + 4) | 0) >>> 0 < e >>> 0;

						);
						for (
							g = ((j = 0 | c[(w = (b + 8) | 0) >> 2]) + (g << 3)) | 0,
								t = 0 | c[da >> 2],
								h = d = 0 | c[(u = (b + 36) | 0) >> 2],
								i = k = 0 | c[(b + 40) >> 2];
							;

						) {
							do {
								if (0 | c[(j + 4) >> 2]) {
									if (
										-1 != (0 | (aa = 0 | c[j >> 2])) &&
										0 == (0 | c[(d + (aa << 2)) >> 2])
									) {
										e = 0;
										break;
									}
									e =
										0 == (0 | c[(t + ((36 * (0 | c[i >> 2])) | 0) + 32) >> 2]);
								} else e = 0;
							} while (0);
							if (((c[h >> 2] = 1 & e), g >>> 0 <= (j = (j + 8) | 0) >>> 0))
								break;
							(h = (h + 4) | 0), (i = (i + 4) | 0);
						}
						if (
							((m = 0 | c[ba >> 2]),
							(d = 0 | c[b >> 2]),
							(n = 0 | c[(d + 724) >> 2]),
							0 < (0 | m))
						)
							for (
								o = (b + 16) | 0,
									p = (b + 28) | 0,
									s = (b + 20) | 0,
									l = (d + 936) | 0,
									j = i = 0;
								;

							) {
								if (
									((h = 0 | c[k >> 2]),
									(0 != (0 | c[(d = (t + ((36 * h) | 0) + 24) | 0) >> 2]) ||
										0 | c[(t + ((36 * h) | 0) + 28) >> 2]) &&
										(ia = 102),
									102 == (0 | ia) &&
										((F = (t + ((36 * h) | (ia = 0)) + 8) | 0),
										(c[((0 | c[o >> 2]) + (i << 2)) >> 2] = c[F >> 2]),
										0 | c[d >> 2]) &&
										((C = 0 | c[(n + (i << 2)) >> 2]),
										(G =
											((D = 0 | c[(t + ((36 * h) | 0) + 16) >> 2]) +
												((aa = 0 | c[F >> 2]) << 2)) |
											0),
										0 < (0 | aa)))
								)
									for (
										d = 0 | c[l >> 2],
											e = ((0 | c[p >> 2]) + (j << 2)) | 0,
											g = D;
										(c[e >> 2] = c[(d + (((0 | c[g >> 2]) + C) << 2)) >> 2]),
											!(G >>> 0 <= (g = (g + 4) | 0) >>> 0);

									)
										e = (e + 4) | 0;
								if (
									0 | c[(t + ((36 * h) | 0) + 28) >> 2] &&
									((H =
										((E = 0 | c[(t + ((36 * h) | 0) + 20) >> 2]) +
											((aa = 0 | c[(t + ((36 * h) | 0) + 8) >> 2]) << 2)) |
										0),
									0 < (0 | aa))
								)
									for (
										d = ((0 | c[s >> 2]) + (j << 2)) | 0, e = E;
										(c[d >> 2] = c[e >> 2]),
											!(H >>> 0 <= (e = (e + 4) | 0) >>> 0);

									)
										d = (d + 4) | 0;
								if ((0 | (i = (i + 1) | 0)) == (0 | m)) {
									(aa = u), (X = w), (W = b);
									break;
								}
								(k = (k + 4) | 0),
									(j = ((0 | c[(t + ((36 * h) | 0) + 4) >> 2]) + j) | 0);
							}
						else (aa = u), (X = w), (W = b);
					} else (aa = (b + 36) | 0), (X = (b + 8) | 0), (W = b);
					if (
						(!(function (a) {
							var k,
								l,
								m,
								b = 0,
								d = 0,
								e = 0,
								g = 0,
								h = 0,
								i = 0,
								j = 0,
								n = 0 | c[((a |= 0) + 4) >> 2],
								j = 0 | c[(a + 36) >> 2];
							if (0 < (0 | (b = 0 | c[(a + 24) >> 2])))
								for (
									d = 0 | c[(a + 28) >> 2],
										e = 0 | c[(a + 20) >> 2],
										g = 0 | c[(a + 32) >> 2],
										h = 0;
									(f[(g + (h << 2)) >> 2] =
										+f[(d + (h << 2)) >> 2] * +f[(e + (h << 2)) >> 2]),
										(0 | (h = (h + 1) | 0)) != (0 | b);

								);
							if (!((0 | n) <= 0))
								for (
									k = 0 | c[(a + 12) >> 2],
										m = (a + 16) | 0,
										l = (a + 44) | 0,
										a = (a + 32) | 0,
										h = g = 0;
									;

								) {
									if (0 | c[j >> 2]) {
										if (
											((d =
												((e = 0 | c[((0 | c[m >> 2]) + (h << 2)) >> 2]) + g) |
												0),
											0 < (0 | e))
										)
											for (
												b = 0 | c[a >> 2], i = 0, e = g;
												(i += +f[(b + (e << 2)) >> 2]),
													(0 | (e = (e + 1) | 0)) < (0 | d);

											);
										else i = 0;
										c[((0 | c[l >> 2]) + (h << 2)) >> 2] = ~~(
											i + 0.0010000000474974513
										);
									}
									if ((0 | (b = (h + 1) | 0)) == (0 | n)) break;
									(j = (j + 4) | 0),
										(g = ((0 | c[(k + (h << 2)) >> 2]) + g) | 0),
										(h = b);
								}
						})(b),
						(l =
							((d = 0 | c[(Z = (b + 60) | 0) >> 2]) +
								((R = 0 | c[(b + 56) >> 2]) << 5)) |
							0),
						(g = 0 | c[da >> 2]),
						(h = 0 | c[aa >> 2]),
						(i = 0 | c[(Y = (b + 168) | 0) >> 2]),
						(j = 0 | c[(b + 172) >> 2]),
						(k = 0 | c[(b + 176) >> 2]),
						0 < (0 | R))
					) {
						for (m = i, n = 0 | c[(b + 180) >> 2]; ; ) {
							do {
								if (0 | c[(d + 28) >> 2]) {
									if (
										-1 != (0 | (R = 0 | c[d >> 2])) &&
										0 == (0 | c[(h + (R << 2)) >> 2])
									) {
										e = 0;
										break;
									}
									if (
										-1 != (0 | (R = 0 | c[(d + 4) >> 2])) &&
										0 == (0 | c[(i + (R << 2)) >> 2])
									) {
										e = 0;
										break;
									}
									e =
										0 == (0 | c[(g + ((36 * (0 | c[n >> 2])) | 0) + 32) >> 2]);
								} else e = 0;
							} while (0);
							switch (((e &= 1), (c[m >> 2] = e), 0 | c[(d + 8) >> 2])) {
								case 0:
									c[(j + (c[(d + 12) >> 2] << 2)) >> 2] = e;
									break;
								case 1:
									c[(k + (c[(d + 12) >> 2] << 2)) >> 2] = e;
									break;
								default:
									ea(0, 2268, I);
							}
							if (l >>> 0 <= (d = (d + 32) | 0) >>> 0) break;
							(m = (m + 4) | 0), (n = (n + 4) | 0);
						}
						g = 0 | c[da >> 2];
					}
					if (
						((d = 0 | c[W >> 2]),
						(n = 0 | c[(d + 784) >> 2]),
						(o = 0 | c[(b + 64) >> 2]),
						(p = 0 | c[(d + 988) >> 2]),
						0 < (0 | o))
					) {
						for (
							s = (b + 84) | 0,
								w = (b + 100) | 0,
								u = (b + 96) | 0,
								x = (b + 88) | 0,
								t = (d + 944) | 0,
								j = (d + 940) | 0,
								k = 0 | c[(b + 184) >> 2],
								m = l = 0;
							;

						) {
							if (
								((i = 0 | c[k >> 2]),
								(0 != (0 | c[(d = (g + ((36 * i) | 0) + 24) | 0) >> 2]) ||
									0 | c[(g + ((36 * i) | 0) + 28) >> 2]) &&
									(ia = 129),
								129 == (0 | ia) &&
									((M = (g + ((36 * i) | (ia = 0)) + 8) | 0),
									(c[((0 | c[s >> 2]) + (l << 2)) >> 2] = c[M >> 2]),
									0 | c[d >> 2]) &&
									((J = 0 | c[(n + (l << 2)) >> 2]),
									(N =
										((K = 0 | c[(g + ((36 * i) | 0) + 16) >> 2]) +
											((R = 0 | c[M >> 2]) << 2)) |
										0),
									0 < (0 | R)))
							)
								for (
									d = K,
										e = ((0 | c[u >> 2]) + (m << 2)) | 0,
										h = ((0 | c[w >> 2]) + (m << 2)) | 0;
									(R = ((0 | c[d >> 2]) + J) | 0),
										(c[h >> 2] =
											p + (c[((0 | c[t >> 2]) + (R << 2)) >> 2] << 2)),
										(c[e >> 2] = c[((0 | c[j >> 2]) + (R << 2)) >> 2]),
										!(N >>> 0 <= (d = (d + 4) | 0) >>> 0);

								)
									(e = (e + 4) | 0), (h = (h + 4) | 0);
							if (
								0 | c[(g + ((36 * i) | 0) + 28) >> 2] &&
								((O =
									((L = 0 | c[(g + ((36 * i) | 0) + 20) >> 2]) +
										((R = 0 | c[(g + ((36 * i) | 0) + 8) >> 2]) << 2)) |
									0),
								0 < (0 | R))
							)
								for (
									d = ((0 | c[x >> 2]) + (m << 2)) | 0, e = L;
									(c[d >> 2] = c[e >> 2]),
										!(O >>> 0 <= (e = (e + 4) | 0) >>> 0);

								)
									d = (d + 4) | 0;
							if ((0 | (l = (l + 1) | 0)) == (0 | o)) break;
							(k = (k + 4) | 0),
								(m = ((0 | c[(g + ((36 * i) | 0) + 4) >> 2]) + m) | 0);
						}
						(d = 0 | c[W >> 2]), (g = 0 | c[da >> 2]);
					}
					if (
						((C = 0 | c[(d + 808) >> 2]),
						(D = 0 | c[(b + 72) >> 2]),
						(E = 0 | c[(b + 76) >> 2]),
						0 < (0 | D))
					)
						for (
							H = (b + 116) | 0,
								G = (b + 132) | 0,
								L = (b + 136) | 0,
								N = (b + 140) | 0,
								Q = (b + 144) | 0,
								I = (b + 128) | 0,
								R = (b + 120) | 0,
								F = (d + 952) | 0,
								K = (d + 956) | 0,
								M = (d + 960) | 0,
								P = (d + 964) | 0,
								J = (d + 948) | 0,
								O = (d + 968) | 0,
								x = (d + 972) | 0,
								y = 0 | c[(b + 188) >> 2],
								B = z = 0;
							;

						) {
							if (
								((w = 0 | c[y >> 2]),
								(0 != (0 | c[(d = (g + ((36 * w) | 0) + 24) | 0) >> 2]) ||
									0 | c[(g + ((36 * w) | 0) + 28) >> 2]) &&
									(ia = 143),
								143 == (0 | ia) &&
									((ga = (g + ((36 * w) | (ia = 0)) + 8) | 0),
									(c[((0 | c[H >> 2]) + (z << 2)) >> 2] = c[ga >> 2]),
									0 | c[d >> 2]))
							) {
								if (
									((d = 0 | c[(C + (z << 2)) >> 2]),
									(m =
										((e = 0 | c[(g + ((36 * w) | 0) + 16) >> 2]) +
											((u = 0 | c[ga >> 2]) << 2)) |
										0),
									0 < (0 | u))
								)
									for (
										h = 0 | c[F >> 2],
											i = 0 | c[K >> 2],
											j = 0 | c[M >> 2],
											k = 0 | c[P >> 2],
											l = 0 | c[J >> 2],
											n = ((0 | c[G >> 2]) + (B << 2)) | 0,
											o = e,
											p = ((0 | c[I >> 2]) + (B << 2)) | 0,
											s = ((0 | c[L >> 2]) + (B << 2)) | 0,
											t = ((0 | c[N >> 2]) + (B << 2)) | 0,
											u = ((0 | c[Q >> 2]) + (B << 2)) | 0;
										(ta = ((0 | c[o >> 2]) + d) | 0),
											(c[n >> 2] = c[(h + (ta << 2)) >> 2]),
											(c[s >> 2] = c[(i + (ta << 2)) >> 2]),
											(c[t >> 2] = c[(j + (ta << 2)) >> 2]),
											(c[u >> 2] = c[(k + (ta << 2)) >> 2]),
											(c[p >> 2] = c[(l + (ta << 2)) >> 2]),
											!(m >>> 0 <= (o = (o + 4) | 0) >>> 0);

									)
										(n = (n + 4) | 0),
											(p = (p + 4) | 0),
											(s = (s + 4) | 0),
											(t = (t + 4) | 0),
											(u = (u + 4) | 0);
								(ta = ((0 | c[e >> 2]) + d) | 0),
									(c[(E + (z << 5) + 24) >> 2] =
										c[((0 | c[O >> 2]) + (ta << 2)) >> 2]),
									(c[(E + (z << 5) + 28) >> 2] =
										c[((0 | c[x >> 2]) + (ta << 2)) >> 2]);
							}
							if (
								0 | c[(g + ((36 * w) | 0) + 28) >> 2] &&
								((ha =
									((fa = 0 | c[(g + ((36 * w) | 0) + 20) >> 2]) +
										((ta = 0 | c[(g + ((36 * w) | 0) + 8) >> 2]) << 2)) |
									0),
								0 < (0 | ta))
							)
								for (
									d = ((0 | c[R >> 2]) + (B << 2)) | 0, e = fa;
									(c[d >> 2] = c[e >> 2]),
										!(ha >>> 0 <= (e = (e + 4) | 0) >>> 0);

								)
									d = (d + 4) | 0;
							if ((0 | (z = (z + 1) | 0)) == (0 | D)) break;
							(y = (y + 4) | 0),
								(B = ((0 | c[(g + ((36 * w) | 0) + 4) >> 2]) + B) | 0);
						}
					if (
						(!(function (a) {
							var k,
								m,
								n,
								q,
								r,
								s,
								t,
								u,
								v,
								b = 0,
								d = 0,
								e = 0,
								g = 0,
								h = 0,
								i = 0,
								j = 0,
								l = 0,
								o = 0,
								p = 0,
								y = 0,
								w = 0 | c[((a |= 0) + 68) >> 2],
								x = 0 | c[(a + 64) >> 2],
								j = 0 | c[(a + 172) >> 2];
							if (0 < (0 | (b = 0 | c[(a + 92) >> 2])))
								for (
									d = 0 | c[(a + 96) >> 2],
										e = 0 | c[(a + 88) >> 2],
										g = 0 | c[(a + 104) >> 2],
										h = 0;
									(f[(g + (h << 2)) >> 2] =
										+f[(d + (h << 2)) >> 2] * +f[(e + (h << 2)) >> 2]),
										(0 | (h = (h + 1) | 0)) != (0 | b);

								);
							if (!((0 | x) <= 0))
								for (
									r = 0 | c[(a + 80) >> 2],
										s = (a + 84) | 0,
										t = (a + 104) | 0,
										u = (a + 100) | 0,
										v = (a + 88) | 0,
										q = (a + 108) | 0,
										p = o = 0;
									;

								) {
									if (0 | c[j >> 2]) {
										if (
											((n =
												((e = 0 | c[((0 | c[s >> 2]) + (o << 2)) >> 2]) + p) |
												0),
											(e = 0 < (0 | e)))
										)
											for (
												b = 0 | c[t >> 2], d = p, i = 0;
												(i += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | n);

											);
										else i = 0;
										if (
											((f[(w + ((24 * o) | 0) + 16) >> 2] = i),
											(m = (l = 0 | c[(w + ((24 * o) | 0) + 12) >> 2]) << 1),
											0 < (0 | l) &&
												(rc(
													0 | c[(y = (w + ((24 * o) | 0) + 20) | 0) >> 2],
													0,
													((1 < (0 | m) ? m : 1) << 2) | 0
												),
												e))
										) {
											(g = 0 | c[u >> 2]),
												(h = 0 | c[v >> 2]),
												(a = 0 | c[q >> 2]),
												(k = 0 | c[y >> 2]),
												(l = p);
											do {
												for (
													b = 0 | c[(g + (l << 2)) >> 2],
														d = (h + (l << 2)) | 0,
														e = 0;
													(f[(a + (e << 2)) >> 2] =
														+f[(b + (e << 2)) >> 2] * +f[d >> 2]),
														(0 | (e = (e + 1) | 0)) < (0 | m);

												);
												for (
													b = 0;
													(f[(e = (k + (b << 2)) | 0) >> 2] =
														+f[(a + (b << 2)) >> 2] + +f[e >> 2]),
														(0 | (b = (b + 1) | 0)) < (0 | m);

												);
												l = (l + 1) | 0;
											} while ((0 | l) < (0 | n));
										}
									}
									if (
										((p = ((0 | c[(r + (o << 2)) >> 2]) + p) | 0),
										(0 | (o = (o + 1) | 0)) == (0 | x))
									)
										break;
									j = (j + 4) | 0;
								}
						})(b),
						(function (a) {
							var k,
								l,
								m,
								n,
								o,
								p,
								b = 0,
								d = 0,
								e = 0,
								g = 0,
								h = 0,
								i = 0,
								j = 0,
								q = 0 | c[((a |= 0) + 76) >> 2],
								r = 0 | c[(a + 72) >> 2],
								j = 0 | c[(a + 176) >> 2];
							if (0 < (0 | (h = 0 | c[(a + 124) >> 2]))) {
								for (
									b = 0 | c[(a + 128) >> 2],
										i = 0 | c[(a + 120) >> 2],
										d = 0 | c[(a + 148) >> 2],
										e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(i + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | h);

								);
								for (
									b = 0 | c[(a + 132) >> 2], d = 0 | c[(a + 152) >> 2], e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(i + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | h);

								);
								for (
									b = 0 | c[(a + 136) >> 2], d = 0 | c[(a + 156) >> 2], e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(i + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | h);

								);
								for (
									b = 0 | c[(a + 140) >> 2], d = 0 | c[(a + 160) >> 2], e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(i + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | h);

								);
								for (
									b = 0 | c[(a + 144) >> 2], d = 0 | c[(a + 164) >> 2], e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(i + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | h);

								);
							}
							if (!((0 | r) <= 0))
								for (
									k = 0 | c[(a + 112) >> 2],
										m = (a + 116) | 0,
										n = (a + 148) | 0,
										l = (a + 152) | 0,
										o = (a + 156) | 0,
										p = (a + 160) | 0,
										a = (a + 164) | 0,
										i = h = 0;
									;

								) {
									if (0 | c[j >> 2]) {
										if (
											((e =
												((d = 0 | c[((0 | c[m >> 2]) + (h << 2)) >> 2]) + i) |
												0),
											0 < (0 | d))
										) {
											for (
												b = 0 | c[n >> 2], d = i, g = 0;
												(g += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | e);

											);
											for (
												f[(q + (h << 5) + 4) >> 2] = g,
													b = 0 | c[l >> 2],
													g = 0,
													d = i;
												(g += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | e);

											);
											for (
												f[(q + (h << 5) + 20) >> 2] = g,
													b = 0 | c[o >> 2],
													d = i,
													g = 0;
												(g += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | e);

											);
											for (
												f[(q + (h << 5) + 12) >> 2] = g,
													b = 0 | c[p >> 2],
													d = i,
													g = 0;
												(g += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | e);

											);
											for (
												f[(q + (h << 5) + 16) >> 2] = g,
													b = 0 | c[a >> 2],
													d = i,
													g = 0;
												(g += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | e);

											);
										} else
											(f[(q + (h << 5) + 4) >> 2] = 0),
												(f[(q + (h << 5) + 20) >> 2] = 0),
												(f[(q + (h << 5) + 12) >> 2] = 0),
												(g = f[(q + (h << 5) + 16) >> 2] = 0);
										f[(q + (h << 5) + 8) >> 2] = g;
									}
									if (
										((i = ((0 | c[(k + (h << 2)) >> 2]) + i) | 0),
										(0 | (h = (h + 1) | 0)) == (0 | r))
									)
										break;
									j = (j + 4) | 0;
								}
						})(b),
						(k =
							((d = 0 | c[(C = (b + 204) | 0) >> 2]) +
								((ta = 0 | c[(D = (b + 200) | 0) >> 2]) << 4)) |
							0),
						(B = 0 | c[da >> 2]),
						(g = 0 | c[aa >> 2]),
						(h = 0 | c[Y >> 2]),
						0 < (0 | ta))
					) {
						for (
							l = 0 | c[(b + 252) >> 2], i = 0 | c[(b + 248) >> 2], j = l;
							;

						) {
							do {
								if (0 | c[(d + 8) >> 2]) {
									if (
										-1 != (0 | (ta = 0 | c[d >> 2])) &&
										0 == (0 | c[(g + (ta << 2)) >> 2])
									) {
										e = 0;
										break;
									}
									if (
										-1 != (0 | (ta = 0 | c[(d + 4) >> 2])) &&
										0 == (0 | c[(h + (ta << 2)) >> 2])
									) {
										e = 0;
										break;
									}
									e =
										0 == (0 | c[(B + ((36 * (0 | c[j >> 2])) | 0) + 32) >> 2]);
								} else e = 0;
							} while (0);
							if (((c[i >> 2] = 1 & e), k >>> 0 <= (d = (d + 16) | 0) >>> 0))
								break;
							(i = (i + 4) | 0), (j = (j + 4) | 0);
						}
						if (
							((z = 0 | c[D >> 2]),
							(d = 0 | c[W >> 2]),
							(n = 0 | c[(d + 844) >> 2]),
							(o = 0 | c[(d + 988) >> 2]),
							0 < (0 | z))
						)
							for (
								p = (b + 212) | 0,
									x = (b + 232) | 0,
									u = (b + 224) | 0,
									s = (b + 228) | 0,
									y = (b + 216) | 0,
									t = (d + 984) | 0,
									w = (d + 976) | 0,
									m = (d + 980) | 0,
									k = j = 0;
								;

							) {
								if (
									((i = 0 | c[l >> 2]),
									(0 != (0 | c[(d = (B + ((36 * i) | 0) + 24) | 0) >> 2]) ||
										0 | c[(B + ((36 * i) | 0) + 28) >> 2]) &&
										(ia = 166),
									166 == (0 | ia) &&
										((ma = (B + ((36 * i) | (ia = 0)) + 8) | 0),
										(c[((0 | c[p >> 2]) + (j << 2)) >> 2] = c[ma >> 2]),
										0 | c[d >> 2]) &&
										((ja = 0 | c[(n + (j << 2)) >> 2]),
										(na =
											((ka = 0 | c[(B + ((36 * i) | 0) + 16) >> 2]) +
												((ta = 0 | c[ma >> 2]) << 2)) |
											0),
										0 < (0 | ta)))
								)
									for (
										d = ((0 | c[s >> 2]) + (k << 2)) | 0,
											e = ka,
											g = ((0 | c[u >> 2]) + (k << 2)) | 0,
											h = ((0 | c[x >> 2]) + (k << 2)) | 0;
										(ta = ((0 | c[e >> 2]) + ja) | 0),
											(c[h >> 2] =
												o + (c[((0 | c[t >> 2]) + (ta << 2)) >> 2] << 2)),
											(c[g >> 2] = c[((0 | c[w >> 2]) + (ta << 2)) >> 2]),
											(c[d >> 2] = c[((0 | c[m >> 2]) + (ta << 2)) >> 2]),
											!(na >>> 0 <= (e = (e + 4) | 0) >>> 0);

									)
										(d = (d + 4) | 0), (g = (g + 4) | 0), (h = (h + 4) | 0);
								if (
									0 | c[(B + ((36 * i) | 0) + 28) >> 2] &&
									((oa =
										((la = 0 | c[(B + ((36 * i) | 0) + 20) >> 2]) +
											((ta = 0 | c[(B + ((36 * i) | 0) + 8) >> 2]) << 2)) |
										0),
									0 < (0 | ta))
								)
									for (
										d = ((0 | c[y >> 2]) + (k << 2)) | 0, e = la;
										(c[d >> 2] = c[e >> 2]),
											!(oa >>> 0 <= (e = (e + 4) | 0) >>> 0);

									)
										d = (d + 4) | 0;
								if ((0 | (j = (j + 1) | 0)) == (0 | z)) break;
								(l = (l + 4) | 0),
									(k = ((0 | c[(B + ((36 * i) | 0) + 4) >> 2]) + k) | 0);
							}
					}
					if (
						(!(function (a) {
							var l,
								m,
								n,
								q,
								r,
								s,
								t,
								u,
								v,
								w,
								x,
								y,
								z,
								b = 0,
								d = 0,
								e = 0,
								g = 0,
								h = 0,
								i = 0,
								j = 0,
								k = 0,
								o = 0,
								p = 0,
								A = 0 | c[((a |= 0) + 204) >> 2],
								B = 0 | c[(a + 200) >> 2],
								j = 0 | c[(a + 248) >> 2];
							if (0 < (0 | (g = 0 | c[(a + 220) >> 2]))) {
								for (
									b = 0 | c[(a + 224) >> 2],
										h = 0 | c[(a + 216) >> 2],
										d = 0 | c[(a + 236) >> 2],
										e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(h + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | g);

								);
								for (
									b = 0 | c[(a + 228) >> 2], d = 0 | c[(a + 240) >> 2], e = 0;
									(f[(d + (e << 2)) >> 2] =
										+f[(b + (e << 2)) >> 2] * +f[(h + (e << 2)) >> 2]),
										(0 | (e = (e + 1) | 0)) != (0 | g);

								);
							}
							if (!((0 | B) <= 0))
								for (
									r = 0 | c[(a + 208) >> 2],
										v = (a + 212) | 0,
										t = (a + 276) | 0,
										x = (a + 236) | 0,
										s = (a + 268) | 0,
										u = (a + 272) | 0,
										w = (a + 240) | 0,
										y = (a + 232) | 0,
										z = (a + 216) | 0,
										q = (a + 244) | 0,
										p = o = 0;
									;

								) {
									if (0 | c[j >> 2]) {
										if (
											((n =
												((e = 0 | c[((0 | c[v >> 2]) + (o << 2)) >> 2]) + p) |
												0),
											(e = 0 < (0 | e)))
										) {
											for (
												b = 0 | c[x >> 2], d = p, i = 0;
												(i += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | n);

											);
											for (
												f[((0 | c[t >> 2]) + (o << 2)) >> 2] = i,
													b = 0 | c[w >> 2],
													i = 0,
													d = p;
												(i += +f[(b + (d << 2)) >> 2]),
													(0 | (d = (d + 1) | 0)) < (0 | n);

											);
										} else i = f[((0 | c[t >> 2]) + (o << 2)) >> 2] = 0;
										if (
											((c[((0 | c[s >> 2]) + (o << 2)) >> 2] = ~~(
												i + 0.0010000000474974513
											)),
											(m = (k = 0 | c[(A + (o << 4) + 12) >> 2]) << 1),
											(l = 0 | c[((0 | c[u >> 2]) + (o << 2)) >> 2]),
											0 < (0 | k) &&
												(rc(0 | l, 0, ((1 < (0 | m) ? m : 1) << 2) | 0), e))
										) {
											(g = 0 | c[y >> 2]),
												(h = 0 | c[z >> 2]),
												(a = 0 | c[q >> 2]),
												(k = p);
											do {
												for (
													b = 0 | c[(g + (k << 2)) >> 2],
														d = (h + (k << 2)) | 0,
														e = 0;
													(f[(a + (e << 2)) >> 2] =
														+f[(b + (e << 2)) >> 2] * +f[d >> 2]),
														(0 | (e = (e + 1) | 0)) < (0 | m);

												);
												for (
													b = 0;
													(f[(e = (l + (b << 2)) | 0) >> 2] =
														+f[(a + (b << 2)) >> 2] + +f[e >> 2]),
														(0 | (b = (b + 1) | 0)) < (0 | m);

												);
												k = (k + 1) | 0;
											} while ((0 | k) < (0 | n));
										}
									}
									if (
										((p = ((0 | c[(r + (o << 2)) >> 2]) + p) | 0),
										(0 | (o = (o + 1) | 0)) == (0 | B))
									)
										break;
									j = (j + 4) | 0;
								}
						})(b),
						(function (a) {
							var e,
								i,
								q,
								r,
								s,
								b = 0,
								d = 0,
								f = 0,
								g = 0,
								h = 0,
								k = 0,
								l = 0,
								m = 0,
								o = 0,
								p = 0,
								t = 0,
								u = 0,
								v = 0,
								b = 0 | c[(a |= 0) >> 2],
								j = 0 | c[(a + 316) >> 2],
								n = 0 | c[(b + 1072) >> 2];
							if (!((0 | (o = 0 | c[(a + 340) >> 2])) <= 0))
								for (
									q = (a + 352) | 0,
										r = (a + 364) | 0,
										s = (a + 356) | 0,
										i = (b + 1104) | 0,
										f = 0 | c[(a + 372) >> 2],
										h = g = 0;
									;

								) {
									if (
										((e = 0 | c[f >> 2]),
										(0 != (0 | c[(b = (j + ((36 * e) | 0) + 24) | 0) >> 2]) ||
											0 | c[(j + ((36 * e) | 0) + 28) >> 2]) &&
											(v = 6),
										6 == (0 | v) &&
											((p = (j + ((36 * e) | (v = 0)) + 8) | 0),
											(c[((0 | c[q >> 2]) + (g << 2)) >> 2] = c[p >> 2]),
											0 | c[b >> 2]) &&
											((k = 0 | c[(n + (g << 2)) >> 2]),
											(t =
												((l = 0 | c[(j + ((36 * e) | 0) + 16) >> 2]) +
													((d = 0 | c[p >> 2]) << 2)) |
												0),
											0 < (0 | d)))
									)
										for (
											b = 0 | c[i >> 2],
												a = ((0 | c[r >> 2]) + (h << 2)) | 0,
												d = l;
											(c[a >> 2] = c[(b + (((0 | c[d >> 2]) + k) << 2)) >> 2]),
												!(t >>> 0 <= (d = (d + 4) | 0) >>> 0);

										)
											a = (a + 4) | 0;
									if (
										0 | c[(j + ((36 * e) | 0) + 28) >> 2] &&
										((u =
											((m = 0 | c[(j + ((36 * e) | 0) + 20) >> 2]) +
												((d = 0 | c[(j + ((36 * e) | 0) + 8) >> 2]) << 2)) |
											0),
										0 < (0 | d))
									)
										for (
											b = ((0 | c[s >> 2]) + (h << 2)) | 0, a = m;
											(c[b >> 2] = c[a >> 2]),
												!(u >>> 0 <= (a = (a + 4) | 0) >>> 0);

										)
											b = (b + 4) | 0;
									if ((0 | (g = (g + 1) | 0)) == (0 | o)) break;
									(f = (f + 4) | 0),
										(h = ((0 | c[(j + ((36 * e) | 0) + 4) >> 2]) + h) | 0);
								}
						})(b),
						(function (a) {
							var j,
								k,
								l,
								b = 0,
								d = 0,
								e = 0,
								g = 0,
								h = 0,
								i = 0,
								m = 0 | c[((a |= 0) + 340) >> 2];
							if (0 < (0 | (b = 0 | c[(a + 360) >> 2])))
								for (
									d = 0 | c[(a + 364) >> 2],
										e = 0 | c[(a + 356) >> 2],
										g = 0 | c[(a + 368) >> 2],
										h = 0;
									(f[(g + (h << 2)) >> 2] =
										+f[(d + (h << 2)) >> 2] * +f[(e + (h << 2)) >> 2]),
										(0 | (h = (h + 1) | 0)) != (0 | b);

								);
							if (!((0 | m) <= 0)) {
								(j = 0 | c[(a + 352) >> 2]),
									(k = 0 | c[(a + 344) >> 2]),
									(l = 0 | c[(a + 348) >> 2]),
									(g = (a + 368) | 0),
									(a = h = 0);
								do {
									if (
										((d = ((e = 0 | c[(j + (h << 2)) >> 2]) + a) | 0),
										0 < (0 | e))
									)
										for (
											b = 0 | c[g >> 2], e = a, i = 0;
											(i += +f[(b + (e << 2)) >> 2]),
												(0 | (e = (e + 1) | 0)) < (0 | d);

										);
									else i = 0;
									(f[(k + ((24 * h) | 0) + 20) >> 2] = i),
										(a = ((0 | c[(l + (h << 2)) >> 2]) + a) | 0),
										(h = (h + 1) | 0);
								} while ((0 | h) != (0 | m));
							}
						})(b),
						(h = ((d = 0 | c[X >> 2]) + ((ta = 0 | c[ba >> 2]) << 3)) | 0),
						(n = 0 | c[(j = (b + 48) | 0) >> 2]),
						0 < (0 | ta))
					)
						for (
							i = 0 | c[aa >> 2], g = n, e = 0 | c[ca >> 2];
							0 | c[i >> 2] &&
								((pa = +f[e >> 2]),
								(f[g >> 2] = pa),
								-1 != (0 | (qa = 0 | c[d >> 2]))) &&
								(f[g >> 2] = pa * +f[(n + (qa << 2)) >> 2]),
								!(h >>> 0 <= (d = (d + 8) | 0) >>> 0);

						)
							(i = (i + 4) | 0), (g = (g + 4) | 0), (e = (e + 4) | 0);
					if (0 < (0 | (h = 0 | c[(i = (b + 56) | 0) >> 2]))) {
						for (
							d = 0 | c[Y >> 2], e = 0 | c[Z >> 2], g = 0;
							0 | c[d >> 2] && _[3 & c[(e + 16) >> 2]](e, g, i),
								(0 | (g = (g + 1) | 0)) != (0 | h);

						)
							(d = (d + 4) | 0), (e = (e + 32) | 0);
						n = 0 | c[j >> 2];
					}
					if (
						((m = ((d = 0 | c[C >> 2]) + ((ta = 0 | c[D >> 2]) << 4)) | 0),
						(l = 0 | c[(b + 192) >> 2]),
						(i = 0 | c[Z >> 2]),
						0 < (0 | ta))
					)
						for (
							k = 0 | c[(j = (b + 248) | 0) >> 2],
								g = 0 | c[(b + 276) >> 2],
								h = 0 | c[(b + 272) >> 2];
							0 | c[k >> 2] &&
								(-1 != (0 | (e = 0 | c[d >> 2])) &&
									(f[g >> 2] = +f[(n + (e << 2)) >> 2] * +f[g >> 2]),
								-1 != (0 | (e = 0 | c[(d + 4) >> 2])) &&
									((f[g >> 2] = +f[(l + (e << 2)) >> 2] * +f[g >> 2]),
									(ta = 0 | c[h >> 2]),
									$[3 & c[(i + (e << 5) + 20) >> 2]](
										0 | c[(i + (e << 5) + 24) >> 2],
										ta,
										ta,
										0 | c[(d + 12) >> 2]
									))),
								!(m >>> 0 <= (d = (d + 16) | 0) >>> 0);

						)
							(k = (k + 4) | 0), (g = (g + 4) | 0), (h = (h + 4) | 0);
					else j = (b + 248) | 0;
					if (
						(ib(b),
						(function (a) {
							var g,
								j,
								b = 0,
								d = 0,
								e = 0,
								h = 0,
								i = 0;
							if (
								!(
									0 | c[((a |= 0) + 380) >> 2] ||
									((g =
										((b = 0 | c[(a + 204) >> 2]) +
											((h = 0 | c[(a + 200) >> 2]) << 4)) |
										0),
									(0 | h) <= 0)
								)
							)
								for (h = 0 | c[(a + 248) >> 2], a = 0 | c[(a + 272) >> 2]; ; ) {
									if (
										0 | c[h >> 2] &&
										((e = 0 | c[a >> 2]),
										(i = (d = 0 | c[(b + 12) >> 2]) << 1),
										0 < (0 | d))
									)
										for (
											d = 1;
											(f[(j = (e + (d << 2)) | 0) >> 2] = -+f[j >> 2]),
												(0 | (d = (d + 2) | 0)) < (0 | i);

										);
									if (g >>> 0 <= (b = (b + 16) | 0) >>> 0) break;
									(h = (h + 4) | 0), (a = (a + 4) | 0);
								}
						})(b),
						(z = 0 | c[(b + 320) >> 2]),
						(o = ((B = 0 | c[(b + 324) >> 2]) + ((28 * z) | 0)) | 0),
						(g = 0 | c[(C = (b + 268) | 0) >> 2]),
						(n = 0 | c[(b + 44) >> 2]),
						(d = 0 | c[aa >> 2]),
						(e = 0 | c[j >> 2]),
						0 < (0 | z))
					) {
						l = B;
						do {
							if (0 < (0 | (h = 0 | c[(l + 4) >> 2])))
								for (
									i = 0 | c[(l + 12) >> 2], k = (l + 20) | 0, m = 0;
									(ta = 0 | c[(i + (m << 4) + 4) >> 2]),
										(qa = 1 == (0 | c[(i + (m << 4)) >> 2])),
										(c[(i + (m << 4) + 12) >> 2] =
											c[
												(0 == (0 | c[((qa ? d : e) + (ta << 2)) >> 2])
													? k
													: ((qa ? n : g) + (ta << 2)) | 0) >> 2
											]),
										(0 | (m = (m + 1) | 0)) != (0 | h);

								);
							l = (l + 28) | 0;
						} while (l >>> 0 < o >>> 0);
						(s = 0 | c[(b + 264) >> 2]),
							(t = (b + 328) | 0),
							(w = (b + 332) | 0),
							(u = (b + 336) | 0),
							(y = 0);
						do {
							if (0 < (0 | c[(x = (B + ((28 * y) | 0) + 24) | 0) >> 2])) {
								for (
									d = 0 | c[t >> 2], i = 0;
									(c[(d + (i << 2)) >> 2] = -1),
										(0 | (i = (i + 1) | 0)) < (0 | (h = 0 | c[x >> 2]));

								);
								if (0 < (0 | h))
									for (
										d = 0 | c[u >> 2], h = 0;
										(c[(d + (h << 2)) >> 2] = -1),
											(0 | (h = (h + 1) | 0)) < (0 | c[x >> 2]);

									);
							}
							if (0 < (0 | c[(p = (B + ((28 * y) | 0) + 4) | 0) >> 2])) {
								for (
									o = 0 | c[w >> 2], h = 0;
									(c[(o + (h << 2)) >> 2] = -1),
										(0 | (h = (h + 1) | 0)) < (0 | (d = 0 | c[p >> 2]));

								);
								if (0 < (0 | d))
									for (
										i = 0 | c[(B + ((28 * y) | 0) + 12) >> 2],
											l = (B + ((28 * y) | 0) + 20) | 0,
											k = 0 | c[u >> 2],
											n = 0;
										(h =
											((0 | c[(i + (n << 4) + 12) >> 2]) - (0 | c[l >> 2])) |
											0),
											(d =
												-1 == (0 | (d = 0 | c[(m = (k + (h << 2)) | 0) >> 2]))
													? ((0 | c[t >> 2]) + (h << 2)) | 0
													: (o + (d << 2)) | 0),
											(c[d >> 2] = n),
											(0 | (n = ((c[m >> 2] = n) + 1) | 0)) < (0 | c[p >> 2]);

									);
							}
							if (0 < (0 | (d = 0 | c[x >> 2]))) {
								(n = 0 | c[t >> 2]),
									(o = (B + ((28 * y) | 0) + 12) | 0),
									(h = (m = 0) | c[(B + ((28 * y) | 0) + 8) >> 2]);
								do {
									if (-1 != (0 | (i = 0 | c[(n + (m << 2)) >> 2]))) {
										for (
											k = 0 | c[o >> 2], l = 0 | c[w >> 2];
											(h =
												((d =
													1 == (0 | c[(k + (i << 4)) >> 2])
														? ((d = 0 | c[(k + (i << 4) + 8) >> 2]),
														  (c[(B + ((28 * d) | 0) + 8) >> 2] = h),
														  0 | c[(B + ((28 * d) | 0)) >> 2])
														: ((c[
																(s + (c[(k + (i << 4) + 4) >> 2] << 2)) >> 2
														  ] = h),
														  1)) +
													h) |
												0),
												!(
													((0 | (i = 0 | c[(l + ((ta = i) << 2)) >> 2])) <=
														(0 | ta)) |
													(-1 == (0 | i))
												);

										);
										d = 0 | c[x >> 2];
									}
									m = (m + 1) | 0;
								} while ((0 | m) < (0 | d));
							}
							y = (y + 1) | 0;
						} while ((0 | y) != (0 | z));
					}
					if (((o = 0 | c[D >> 2]), 0 | c[(p = (b + 376) | 0) >> 2])) {
						if (((c[ra >> 2] = 0) | o) <= 0)
							return (c[p >> 2] = 0), void (S = sa);
						for (
							i = (b + 260) | 0, h = (b + 276) | 0, g = 0;
							(d =
								0 != (0 | c[(e + (g << 2)) >> 2]) &&
								0 != +f[((0 | c[h >> 2]) + (g << 2)) >> 2]
									? 63
									: 62),
								(a[((0 | c[i >> 2]) + g) >> 0] = d),
								(0 | (d = (g + 1) | 0)) != (0 | o);

						)
							(e = 0 | c[j >> 2]), (g = d);
						return (c[p >> 2] = 0), void (S = sa);
					}
					if (0 | c[ra >> 2]) {
						if (((c[ra >> 2] = 0) | o) <= 0)
							return (c[p >> 2] = 0), void (S = sa);
						for (
							k = (b + 260) | 0,
								i = (b + 276) | 0,
								m = (b + 288) | 0,
								l = (b + 284) | 0,
								n = (b + 264) | 0,
								h = (b + 280) | 0,
								d = 0;
							(ra = 0 == (0 | c[(e + (d << 2)) >> 2])),
								(b =
									(0 != (pa = +f[((0 | c[i >> 2]) + (d << 2)) >> 2])) &
									(1 ^ ra) &
									1),
								(ta = ((0 | c[k >> 2]) + d) | 0),
								(b = (1 & a[ta >> 0]) == (b << 24) >> 24 ? b : 2 | b),
								(b = pa != +f[((0 | c[m >> 2]) + (d << 2)) >> 2] ? 4 | b : b),
								(b =
									(0 | c[(g + (d << 2)) >> 2]) ==
									(0 | c[((0 | c[l >> 2]) + (d << 2)) >> 2])
										? b
										: 8 | b),
								(b =
									(0 | c[((0 | c[n >> 2]) + (d << 2)) >> 2]) ==
									(0 | c[((0 | c[h >> 2]) + (d << 2)) >> 2])
										? b
										: 16 | b),
								(a[ta >> 0] = ra ? b : 32 | b),
								(0 | (d = (d + 1) | 0)) != (0 | o);

						)
							(e = 0 | c[j >> 2]), (g = 0 | c[C >> 2]);
						return (c[p >> 2] = 0), void (S = sa);
					}
					if ((0 | o) <= 0) return (c[p >> 2] = 0), void (S = sa);
					for (
						h = (b + 260) | 0, g = (b + 276) | 0, d = 0;
						0 != (0 | c[(e + (d << 2)) >> 2]) &&
						0 != +f[((0 | c[g >> 2]) + (d << 2)) >> 2]
							? ((ta = ((0 | c[h >> 2]) + d) | 0),
							  (a[ta >> 0] = 1 | a[ta >> 0]))
							: ((ta = ((0 | c[h >> 2]) + d) | 0),
							  (a[ta >> 0] = -2 & a[ta >> 0])),
							(0 | (d = (d + 1) | 0)) != (0 | o);

					)
						e = 0 | c[j >> 2];
					(c[p >> 2] = 0), (S = sa);
				}
				function wb(a, b, c) {
					zb((a |= 0), (b |= 0), (c |= 0));
				}
				function xb(b, e, f, g, h, i) {
					(b |= 0), (e = +e), (f |= 0), (g |= 0), (h |= 0), (i |= 0);
					var C,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						q = 0,
						r = 0,
						s = 0,
						t = 0,
						u = 0,
						w = 0,
						x = 0,
						y = 0,
						A = 0,
						B = 0,
						D = 0,
						E = 0,
						F = 0,
						G = 0,
						H = S;
					(S = (S + 560) | 0),
						(m = (H + 32) | 0),
						(E =
							((l = ((F = G = H) + 540) | 0) + 12) |
							(c[(t = (H + 536) | 0) >> 2] = 0)),
						Ob(e),
						(B =
							(0 | (j = 0 | z())) < 0
								? (Ob((e = -e)), (j = 0 | z()), (D = 1), 2349)
								: ((D = (0 != ((2049 & h) | 0)) & 1),
								  0 == ((2048 & h) | 0)
										? 0 == ((1 & h) | 0)
											? 2350
											: 2355
										: 2352));
					do {
						if (!0 & (2146435072 == ((2146435072 & j) | 0)))
							(G = 0 != ((32 & i) | 0)),
								Jb(b, 32, f, (j = (D + 3) | 0), -65537 & h),
								Bb(b, B, D),
								Bb(b, (e != e) | !1 ? (G ? 2376 : 2380) : G ? 2368 : 2372, 3),
								Jb(b, 32, f, j, 8192 ^ h);
						else {
							if (
								((j = 0 != (q = 2 * +Pb(e, t))) &&
									(c[t >> 2] = (0 | c[t >> 2]) - 1),
								97 == (0 | (w = 32 | i)))
							) {
								(r = 0 == (0 | (o = 32 & i)) ? B : (B + 9) | 0),
									(p = 2 | D),
									(j = (12 - g) | 0);
								do {
									if (!((11 < g >>> 0) | (0 == (0 | j)))) {
										for (e = 8; (e *= 16), 0 != (0 | (j = (j + -1) | 0)); );
										if (45 == (0 | a[r >> 0])) {
											e = -(e + (-q - e));
											break;
										}
										e = q + e - e;
										break;
									}
									e = q;
								} while (0);
								for (
									(0 |
										(j =
											0 |
											Hb(
												(j = (0 | (k = 0 | c[t >> 2])) < 0 ? (0 - k) | 0 : k),
												(((0 | j) < 0) << 31) >> 31,
												E
											))) ==
										(0 | E) && (a[(j = (l + 11) | 0) >> 0] = 48),
										a[(j + -1) >> 0] = 43 + ((k >> 31) & 2),
										a[(n = (j + -2) | 0) >> 0] = i + 15,
										k = (0 | g) < 1,
										l = 0 == ((8 & h) | 0),
										j = G;
									(D = ~~e),
										(m = (j + 1) | 0),
										(a[j >> 0] = o | d[(480 + D) >> 0]),
										(e = 16 * (e - (0 | D))),
										1 != ((m - F) | 0) ||
											l & k & (0 == e) ||
											((a[m >> 0] = 46), (m = (j + 2) | 0)),
										0 != e;

								)
									j = m;
								Jb(
									b,
									32,
									f,
									(E =
										((j =
											0 != (0 | g) && ((-2 - F + m) | 0) < (0 | g)
												? (g + 2 + (k = E) - (l = n)) | 0
												: ((k = E) - F - (l = n) + m) | 0) +
											p) |
										0),
									h
								),
									Bb(b, r, p),
									Jb(b, 48, f, E, 65536 ^ h),
									Bb(b, G, (F = (m - F) | 0)),
									Jb(b, 48, (j - (F + (G = (k - l) | 0))) | 0, 0, 0),
									Bb(b, n, G),
									Jb(b, 32, f, E, 8192 ^ h),
									(j = E);
								break;
							}
							for (
								k = (0 | g) < 0 ? 6 : g,
									e = j
										? ((l = ((0 | c[t >> 2]) - 28) | 0),
										  (c[t >> 2] = l),
										  268435456 * q)
										: ((l = 0 | c[t >> 2]), q),
									m = C = (0 | l) < 0 ? m : (m + 288) | 0;
								(y = ~~e >>> 0),
									(c[m >> 2] = y),
									(m = (m + 4) | 0),
									0 != (e = 1e9 * (e - (y >>> 0)));

							);
							if (((y = C), 0 < (0 | l))) {
								j = C;
								do {
									if (
										((o = (0 | l) < 29 ? l : 29),
										j >>> 0 <= (l = (m + -4) | 0) >>> 0)
									) {
										for (
											n = 0;
											(s =
												0 |
												ic(
													0 | (s = 0 | oc(0 | c[l >> 2], 0, 0 | o)),
													0 | z(),
													0 | n,
													0
												)),
												(x =
													0 |
													ic(
														0 | s,
														0 | (u = 0 | z()),
														0 |
															(x =
																0 |
																hc(
																	0 | (n = 0 | mc(0 | s, 0 | u, 1e9, 0)),
																	0 | z(),
																	-1e9,
																	-1
																)),
														0 | z()
													)),
												z(),
												(c[l >> 2] = x),
												j >>> 0 <= (l = (l + -4) | 0) >>> 0;

										);
										n && (c[(j = (j + -4) | 0) >> 2] = n);
									}
									a: do {
										if (j >>> 0 < m >>> 0)
											for (;;) {
												if (0 | c[(l = (m + -4) | 0) >> 2]) break a;
												if (!(j >>> 0 < l >>> 0)) {
													m = l;
													break;
												}
												m = l;
											}
									} while (0);
									(l = ((0 | c[t >> 2]) - o) | 0), (c[t >> 2] = l);
								} while (0 < (0 | l));
							} else j = C;
							if ((0 | l) < 0) {
								(g = (1 + ((((k + 25) | 0) / 9) | 0)) | 0),
									(s = 102 == (0 | w));
								do {
									if (
										((r = (0 | (r = (0 - l) | 0)) < 9 ? r : 9),
										j >>> 0 < m >>> 0)
									) {
										for (
											o = ((1 << r) - 1) | 0,
												n = r ? 1e9 >>> r : 1e9,
												p = 0,
												l = j;
											(x = 0 | c[l >> 2]),
												(c[l >> 2] = (r ? x >>> r : x) + p),
												(p = 0 | v(x & o, n)),
												(l = (l + 4) | 0) >>> 0 < m >>> 0;

										);
										(j = 0 == (0 | c[j >> 2]) ? (j + 4) | 0 : j),
											p && ((c[m >> 2] = p), (m = (m + 4) | 0));
									} else j = 0 == (0 | c[j >> 2]) ? (j + 4) | 0 : j;
									(m =
										(0 | g) < (((x = (m - (l = s ? C : j)) | 0) >> 2) | 0)
											? (l + (g << 2)) | 0
											: m),
										(l = ((0 | c[t >> 2]) + r) | 0),
										(c[t >> 2] = l);
								} while ((0 | l) < 0);
								s = m;
							} else s = m;
							if (j >>> 0 < s >>> 0) {
								if (
									((l = (9 * ((l = (y - j) | 0) >> 2)) | 0),
									10 <= (n = 0 | c[j >> 2]) >>> 0)
								)
									for (
										m = 10;
										(l = (l + 1) | 0), (m = (10 * m) | 0) >>> 0 <= n >>> 0;

									);
							} else l = 0;
							if (
								(0 |
									(m =
										(k -
											(102 == (0 | w) ? 0 : l) +
											((((u = 0 != (0 | k)) & (t = 103 == (0 | w))) << 31) >>
												31)) |
										0)) <
								((((9 * ((x = (s - y) | 0) >> 2)) | 0) - 9) | 0)
							) {
								if (
									((g =
										(C +
											4 +
											(((m = ((0 | (x = (m + 9216) | 0)) / 9) | 0) + -1024) <<
												2)) |
										0),
									(0 | (m = (x + (0 | v(m, -9))) | 0)) < 8)
								)
									for (n = 10; (n = (10 * n) | 0), (0 | m) < 7; )
										m = (m + 1) | 0;
								else n = 10;
								if (
									(p = ((g + 4) | 0) == (0 | s)) &
									(0 ==
										(0 |
											(o =
												((o = 0 | c[g >> 2]) -
													(r = 0 | v((m = ((o >>> 0) / (n >>> 0)) | 0), n))) |
												0)))
								)
									m = g;
								else if (
									((q =
										0 == ((1 & m) | 0) ? 9007199254740992 : 9007199254740994),
									(e =
										o >>> 0 < (x = n >>> 1) >>> 0
											? 0.5
											: p & ((0 | o) == (0 | x))
											? 1
											: 1.5),
									D &&
										((q = (x = 45 == (0 | a[B >> 0])) ? -q : q),
										(e = x ? -e : e)),
									(c[g >> 2] = r),
									q + e != q)
								) {
									if (((x = (r + n) | 0), 999999999 < (c[g >> 2] = x) >>> 0))
										for (
											l = g;
											(m = (l + -4) | 0) >>> (c[l >> 2] = 0) < j >>> 0 &&
												(c[(j = (j + -4) | 0) >> 2] = 0),
												(x = (1 + (0 | c[m >> 2])) | 0),
												999999999 < (c[m >> 2] = x) >>> 0;

										)
											l = m;
									else m = g;
									if (
										((l = (9 * ((l = (y - j) | 0) >> 2)) | 0),
										10 <= (o = 0 | c[j >> 2]) >>> 0)
									)
										for (
											n = 10;
											(l = (l + 1) | 0), (n = (10 * n) | 0) >>> 0 <= o >>> 0;

										);
								} else m = g;
								(x = j), (j = (w = (m + 4) | 0) >>> 0 < s >>> 0 ? w : s);
							} else (x = j), (j = s);
							r = (0 - l) | 0;
							b: do {
								if (x >>> 0 < j >>> 0)
									for (;;) {
										if (0 | c[(m = (j + -4) | 0) >> 2]) {
											(s = 1), (w = j);
											break b;
										}
										if (!(x >>> 0 < m >>> 0)) {
											(s = 0), (w = m);
											break;
										}
										j = m;
									}
								else (s = 0), (w = j);
							} while (0);
							do {
								if (t) {
									if (
										((n =
											((0 | l) < (0 | (j = (k + (1 & (1 ^ u))) | 0))) &
											(-5 < (0 | l))
												? ((k = (j + -1 - l) | 0), (i + -1) | 0)
												: ((k = (j + -1) | 0), (i + -2) | 0)),
										!(8 & h))
									) {
										if (s && 0 != (0 | (A = 0 | c[(w + -4) >> 2])))
											if ((A >>> 0) % 10 | 0) m = 0;
											else
												for (
													j = 10, m = 0;
													(m = (m + 1) | 0),
														!((A >>> 0) % ((j = (10 * j) | 0) >>> 0) | 0);

												);
										else m = 9;
										if (
											((j = (((9 * ((j = (w - y) | 0) >> 2)) | 0) - 9) | 0),
											102 == (32 | n))
										) {
											k =
												(0 | k) <
												(0 | (i = 0 < (0 | (i = (j - m) | 0)) ? i : 0))
													? k
													: i;
											break;
										}
										k =
											(0 | k) <
											(0 | (i = 0 < (0 | (i = (j + l - m) | 0)) ? i : 0))
												? k
												: i;
										break;
									}
								} else n = i;
							} while (0);
							if (
								((o = (g = 0 != (0 | k)) ? 1 : (h >>> 3) & 1),
								(p = 102 == (32 | n)))
							)
								j = (u = 0) < (0 | l) ? l : 0;
							else {
								if (
									(((m = E) -
										(j =
											0 |
											Hb(
												(j = (0 | l) < 0 ? r : l),
												(((0 | j) < 0) << 31) >> 31,
												E
											))) |
										0) <
									2
								)
									for (
										;
										(a[(j = (j + -1) | 0) >> 0] = 48), ((m - j) | 0) < 2;

									);
								(a[(j + -1) >> 0] = 43 + ((l >> 31) & 2)),
									(a[(j = (j + -2) | 0) >> 0] = n),
									(j = (m - (u = j)) | 0);
							}
							if (
								(Jb(b, 32, f, (j = (D + 1 + k + o + j) | 0), h),
								Bb(b, B, D),
								Jb(b, 48, f, j, 65536 ^ h),
								p)
							) {
								(p = r = (G + 9) | 0),
									(n = (G + 8) | 0),
									(m = o = C >>> 0 < x >>> 0 ? C : x);
								do {
									if (((l = 0 | Hb(0 | c[m >> 2], 0, r)), (0 | m) == (0 | o)))
										(0 | l) == (0 | r) && ((a[n >> 0] = 48), (l = n));
									else if (G >>> 0 < l >>> 0)
										for (
											rc(0 | G, 48, (l - F) | 0);
											G >>> 0 < (l = (l + -1) | 0) >>> 0;

										);
									Bb(b, l, (p - l) | 0), (m = (m + 4) | 0);
								} while (m >>> 0 <= C >>> 0);
								if (
									((0 == ((8 & h) | 0)) & (1 ^ g) || Bb(b, 2384, 1),
									(m >>> 0 < w >>> 0) & (0 < (0 | k)))
								)
									for (;;) {
										if (G >>> 0 < (l = 0 | Hb(0 | c[m >> 2], 0, r)) >>> 0)
											for (
												rc(0 | G, 48, (l - F) | 0);
												G >>> 0 < (l = (l + -1) | 0) >>> 0;

											);
										if (
											(Bb(b, l, (0 | k) < 9 ? k : 9),
											(l = (k + -9) | 0),
											!(((m = (m + 4) | 0) >>> 0 < w >>> 0) & (9 < (0 | k))))
										) {
											k = l;
											break;
										}
										k = l;
									}
								Jb(b, 48, (k + 9) | 0, 9, 0);
							} else {
								if (
									(x >>> 0 < (g = s ? w : (x + 4) | 0) >>> 0) &
									(-1 < (0 | k))
								) {
									(t = 0 == ((8 & h) | 0)),
										(s = r = (G + 9) | 0),
										(n = (0 - F) | 0),
										(p = (G + 8) | 0),
										(o = x);
									do {
										(0 | (l = 0 | Hb(0 | c[o >> 2], 0, r))) == (0 | r) &&
											((a[p >> 0] = 48), (l = p));
										do {
											if ((0 | o) == (0 | x)) {
												if (
													((m = (l + 1) | 0), Bb(b, l, 1), t & ((0 | k) < 1))
												) {
													l = m;
													break;
												}
												Bb(b, 2384, 1), (l = m);
											} else {
												if (l >>> 0 <= G >>> 0) break;
												for (
													rc(0 | G, 48, (l + n) | 0);
													G >>> 0 < (l = (l + -1) | 0) >>> 0;

												);
											}
										} while (0);
										Bb(b, l, (0 | (F = (s - l) | 0)) < (0 | k) ? F : k),
											(k = (k - F) | 0),
											(o = (o + 4) | 0);
									} while ((o >>> 0 < g >>> 0) & (-1 < (0 | k)));
								}
								Jb(b, 48, (k + 18) | 0, 18, 0), Bb(b, u, (E - u) | 0);
							}
							Jb(b, 32, f, j, 8192 ^ h);
						}
					} while (0);
					return (S = H), 0 | ((0 | j) < (0 | f) ? f : j);
				}
				function zb(b, d, e) {
					(b |= 0), (d |= 0), (e |= 0);
					var h,
						i,
						j,
						k,
						l,
						m,
						n,
						o,
						f = 0,
						g = 0,
						p = S;
					for (
						S = (S + 224) | 0,
							l = (p + 208) | 0,
							n = (p + 80) | 0,
							g = ((f = o = ((m = p) + 160) | 0) + 40) | 0;
						(0 | (f = (f + 4) | (c[f >> 2] = 0))) < (0 | g);

					);
					(c[l >> 2] = c[e >> 2]),
						0 <= (0 | Ab(0, d, l, n, o)) &&
							((k = 32 & (e = 0 | c[b >> 2])),
							(0 | a[(b + 74) >> 0]) < 1 && (c[b >> 2] = -33 & e),
							0 | c[(g = (b + 48) | 0) >> 2]
								? Ab(b, d, l, n, o)
								: ((e = 0 | c[(f = (b + 44) | 0) >> 2]),
								  (c[f >> 2] = m),
								  (c[(h = (b + 28) | 0) >> 2] = m),
								  (c[(j = (b + 20) | 0) >> 2] = m),
								  (c[g >> 2] = 80),
								  (c[(i = (b + 16) | 0) >> 2] = m + 80),
								  Ab(b, d, l, n, o),
								  0 | e &&
										(X[3 & c[(b + 36) >> 2]](b, 0, 0),
										(c[f >> 2] = e),
										(c[g >> 2] = 0),
										(c[i >> 2] = 0),
										(c[h >> 2] = 0),
										(c[j >> 2] = 0))),
							(c[b >> 2] = c[b >> 2] | k)),
						(S = p);
				}
				function Ab(d, e, f, h, i) {
					(d |= 0), (e |= 0), (f |= 0), (h |= 0), (i |= 0);
					var v,
						w,
						x,
						y,
						A,
						B,
						C,
						D,
						E,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						q = 0,
						r = 0,
						s = 0,
						t = 0,
						u = 0,
						G = 0,
						F = S;
					(S = (S + 64) | 0),
						(B = (F + 40) | 0),
						(E = ((w = F) + 48) | 0),
						(C = (F + 60) | 0),
						(c[(D = (F + 56) | 0) >> 2] = e),
						(A = 0 != (0 | d)),
						(y = v = (w + 40) | 0),
						(w = (w + 39) | 0),
						(x = (4 + E) | 0),
						(m = j = e = 0);
					a: for (;;) {
						do {
							do {
								if (-1 < (0 | e)) {
									if (((2147483647 - e) | 0) < (0 | j)) {
										(c[861] = 61), (e = -1);
										break;
									}
									e = (j + e) | 0;
									break;
								}
							} while (0);
							if (((p = 0 | c[D >> 2]), !(((j = 0 | a[p >> 0]) << 24) >> 24))) {
								u = 91;
								break a;
							}
							k = p;
							b: for (;;) {
								switch ((j << 24) >> 24) {
									case 37:
										u = 10;
										break b;
									case 0:
										j = k;
										break b;
								}
								(t = (k + 1) | 0),
									(c[D >> 2] = t),
									(j = 0 | a[t >> 0]),
									(k = t);
							}
							c: do {
								if (10 == (0 | u)) {
									(u = 0), (j = l = k);
									do {
										if (37 != (0 | a[(l + 1) >> 0])) break c;
										(j = (j + 1) | 0), (l = (l + 2) | 0), (c[D >> 2] = l);
									} while (37 == (0 | a[l >> 0]));
								}
							} while (0);
							(j = (j - p) | 0), A && Bb(d, p, j);
						} while (0 != (0 | j));
						if (
							((l = 0 | c[D >> 2]),
							(o =
								0 | Cb((j = 0 | a[(l + 1) >> 0]))
									? ((k = (o = 36 == (0 | a[(l + 2) >> 0])) ? 3 : 1),
									  (r = o ? (j + -48) | 0 : -1),
									  o ? 1 : m)
									: ((r = -(k = 1)), m)),
							(k = (l + k) | 0),
							(c[D >> 2] = k),
							(31 <
								(l = ((((j = 0 | a[k >> 0]) << 24) >> 24) - 32) | 0) >>> 0) |
								(0 == (((1 << l) & 75913) | 0)))
						)
							n = 0;
						else
							for (j = 0; ; ) {
								if (
									((m = (1 << l) | j),
									(k = (k + 1) | 0),
									(c[D >> 2] = k),
									(31 <
										(l = ((((j = 0 | a[k >> 0]) << 24) >> 24) - 32) | 0) >>>
											0) |
										(0 == (((1 << l) & 75913) | 0)))
								) {
									n = m;
									break;
								}
								j = m;
							}
						if ((j << 24) >> 24 == 42) {
							if (
								0 != (0 | Cb((j = 0 | a[(l = (k + 1) | 0) >> 0]))) &&
								36 == (0 | a[(k + 2) >> 0])
							)
								(c[(i + ((j + -48) << 2)) >> 2] = 10),
									(m = 1),
									(j = (k + 3) | 0),
									(k = 0 | c[(h + (((0 | a[l >> 0]) - 48) << 3)) >> 2]);
							else {
								if (0 | o) {
									e = -1;
									break;
								}
								A
									? ((m = (3 + (0 | c[f >> 2])) & -4),
									  (k = 0 | c[m >> 2]),
									  (c[f >> 2] = m + 4),
									  (m = 0),
									  (j = l))
									: ((j = l), (k = m = 0));
							}
							(l = c[D >> 2] = j),
								(q = (s = (0 | k) < 0) ? 8192 | n : n),
								(t = m),
								(s = s ? (0 - k) | 0 : k);
						} else {
							if ((0 | (j = 0 | Db(D))) < 0) {
								e = -1;
								break;
							}
							(l = 0 | c[D >> 2]), (q = n), (t = o), (s = j);
						}
						do {
							if (46 == (0 | a[l >> 0])) {
								if (42 != (0 | a[(j = (l + 1) | 0) >> 0])) {
									(c[D >> 2] = j), (n = 0 | Db(D)), (j = 0 | c[D >> 2]);
									break;
								}
								if (
									0 | Cb((k = 0 | a[(j = (l + 2) | 0) >> 0])) &&
									36 == (0 | a[(l + 3) >> 0])
								) {
									(c[(i + ((k + -48) << 2)) >> 2] = 10),
										(n = 0 | c[(h + (((0 | a[j >> 0]) - 48) << 3)) >> 2]),
										(j = (l + 4) | 0),
										(c[D >> 2] = j);
									break;
								}
								if (0 | t) {
									e = -1;
									break a;
								}
								A
									? ((o = (3 + (0 | c[f >> 2])) & -4),
									  (k = 0 | c[o >> 2]),
									  (c[f >> 2] = o + 4))
									: (k = 0),
									(c[D >> 2] = j),
									(n = k);
							} else (j = l), (n = -1);
						} while (0);
						for (o = 0; ; ) {
							if (57 < (((0 | a[j >> 0]) - 65) | 0) >>> 0) {
								e = -1;
								break a;
							}
							if (
								((k = (j + 1) | 0),
								(c[D >> 2] = k),
								!(
									(((m =
										255 &
										(l =
											0 |
											a[((0 | a[j >> 0]) - 65 + (16 + ((58 * o) | 0))) >> 0])) +
										-1) |
										0) >>>
										0 <
									8
								))
							)
								break;
							(j = k), (o = m);
						}
						if (!((l << 24) >> 24)) {
							e = -1;
							break;
						}
						k = -1 < (0 | r);
						do {
							if ((l << 24) >> 24 == 19) {
								if (k) {
									e = -1;
									break a;
								}
								u = 52;
							} else {
								if (k) {
									(c[(i + (r << 2)) >> 2] = m),
										(r = 0 | c[((m = (h + (r << 3)) | 0) + 4) >> 2]),
										(c[(u = B) >> 2] = c[m >> 2]),
										(c[(u + 4) >> 2] = r),
										(u = 52);
									break;
								}
								if (!A) {
									e = 0;
									break a;
								}
								Eb(B, m, f), (u = 53);
							}
						} while (0);
						52 == (0 | u) && ((u = 0), A ? (u = 53) : (j = 0));
						d: do {
							if (53 == (0 | u)) {
								(l =
									((u = 0) != (0 | o)) & (3 == ((15 & (l = 0 | a[j >> 0])) | 0))
										? -33 & l
										: l),
									(j = -65537 & q),
									(r = 0 == ((8192 & q) | 0) ? q : j);
								e: do {
									switch (0 | l) {
										case 110:
											switch (((255 & o) << 24) >> 24) {
												case 0:
												case 1:
													(c[c[B >> 2] >> 2] = e), (j = 0);
													break d;
												case 2:
													(j = 0 | c[B >> 2]),
														(c[j >> 2] = e),
														(c[(j + 4) >> 2] = (((0 | e) < 0) << 31) >> 31),
														(j = 0);
													break d;
												case 3:
													(b[c[B >> 2] >> 1] = e), (j = 0);
													break d;
												case 4:
													(a[c[B >> 2] >> 0] = e), (j = 0);
													break d;
												case 6:
													(c[c[B >> 2] >> 2] = e), (j = 0);
													break d;
												case 7:
													(j = 0 | c[B >> 2]),
														(c[j >> 2] = e),
														(c[(j + 4) >> 2] = (((0 | e) < 0) << 31) >> 31),
														(j = 0);
													break d;
												default:
													j = 0;
													break d;
											}
										case 112:
											(j = 8 | r),
												(k = 8 < n >>> 0 ? n : 8),
												(m = 120),
												(u = 65);
											break;
										case 88:
										case 120:
											(j = r), (k = n), (m = l), (u = 65);
											break;
										case 111:
											(n =
												(0 == ((8 & (j = r)) | 0)) |
												((0 |
													(l =
														(y -
															(o =
																0 |
																(function (b, c, d) {
																	if (
																		((d |= 0),
																		!(
																			(0 == (0 | (b |= 0))) &
																			(0 == (0 | (c |= 0)))
																		))
																	)
																		for (
																			;
																			(a[(d = (d + -1) | 0) >> 0] =
																				(7 & b) | 48),
																				(b = 0 | nc(0 | b, 0 | c, 3)),
																				(c = 0 | z()),
																				!((0 == (0 | b)) & (0 == (0 | c)));

																		);
																	return 0 | d;
																})(
																	(p = 0 | c[(q = B) >> 2]),
																	(q = 0 | c[(q + 4) >> 2]),
																	v
																))) |
														0)) <
													(0 | n))
													? n
													: (l + 1) | 0),
												(l = 0),
												(k = 2332),
												(u = 71);
											break;
										case 105:
										case 100:
											if (
												((j = 0 | c[(k = B) >> 2]),
												(0 | (k = 0 | c[(k + 4) >> 2])) < 0)
											) {
												(j = 0 | jc(0, 0, 0 | j, 0 | k)),
													(k = 0 | z()),
													(c[(l = B) >> 2] = j),
													(c[(l + 4) >> 2] = k),
													(l = 1),
													(m = 2332),
													(u = 70);
												break e;
											}
											(l = (0 != ((2049 & r) | 0)) & 1),
												(m =
													0 == ((2048 & r) | 0)
														? 0 == ((1 & r) | 0)
															? 2332
															: 2334
														: 2333),
												(u = 70);
											break e;
										case 117:
											(j = 0 | c[(k = B) >> 2]),
												(k = 0 | c[(k + 4) >> 2]),
												(l = 0),
												(m = 2332),
												(u = 70);
											break;
										case 99:
											(a[w >> 0] = c[B >> 2]),
												(p = w),
												(o = j),
												(m = 1),
												(l = 0),
												(k = 2332),
												(j = y);
											break;
										case 115:
											(p = q = 0 == (0 | (q = 0 | c[B >> 2])) ? 2342 : q),
												(o = j),
												(m = (G =
													0 ==
													(0 |
														(r =
															0 |
															(function (b, d) {
																b |= 0;
																var e = 0,
																	f = 0;
																e = 0 != (0 | (d |= 0));
																a: do {
																	if (e & (0 != ((3 & b) | 0)))
																		for (;;) {
																			if (!(0 | a[b >> 0])) break a;
																			if (
																				!(
																					(e = 0 != (0 | (d = (d + -1) | 0))) &
																					(0 != ((3 & (b = (b + 1) | 0)) | 0))
																				)
																			) {
																				f = 5;
																				break;
																			}
																		}
																	else f = 5;
																} while (0);
																b: do {
																	if (5 == (0 | f)) {
																		do {
																			if (e) {
																				if (!(0 | a[b >> 0])) {
																					if (d) break b;
																					break;
																				}
																				c: do {
																					if (3 < d >>> 0)
																						for (;;) {
																							if (
																								(((-2139062144 &
																									(e = 0 | c[b >> 2])) ^
																									-2139062144) &
																									(e + -16843009)) |
																								0
																							)
																								break c;
																							if (
																								((b = (b + 4) | 0),
																								(d = (d + -4) | 0) >>> 0 <= 3)
																							) {
																								f = 11;
																								break;
																							}
																						}
																					else f = 11;
																				} while (0);
																				if (11 == (0 | f) && !d) break;
																				for (;;) {
																					if (!(0 | a[b >> 0])) break b;
																					if (!(d = (d + -1) | 0)) break;
																					b = (b + 1) | 0;
																				}
																			}
																		} while (0);
																		b = 0;
																	}
																} while (0);
																return 0 | b;
															})(q, n))))
													? n
													: (r - q) | 0),
												(l = 0),
												(k = 2332),
												(j = G ? (q + n) | 0 : r);
											break;
										case 67:
											(c[E >> 2] = c[B >> 2]),
												(c[x >> 2] = 0),
												(l = c[B >> 2] = E),
												(n = -1),
												(u = 78);
											break;
										case 83:
											if (n) {
												(l = 0 | c[B >> 2]), (u = 78);
												break e;
											}
											Jb(d, 32, s, 0, r), (j = 0), (u = 88);
											break e;
										case 65:
										case 71:
										case 70:
										case 69:
										case 97:
										case 103:
										case 102:
										case 101:
											j = 0 | xb(d, +g[B >> 3], s, n, r, l);
											break d;
										default:
											(o = r), (m = n), (l = 0), (k = 2332), (j = y);
									}
								} while (0);
								f: do {
									if (65 == (0 | u))
										(o =
											0 |
											Fb(
												(p = 0 | c[(q = B) >> 2]),
												(q = 0 | c[(q + 4) >> 2]),
												v,
												32 & m
											)),
											(n = k),
											(l = (G =
												(0 == ((8 & j) | 0)) |
												((0 == (0 | p)) & (0 == (0 | q))))
												? 0
												: 2),
											(k = G ? 2332 : (2332 + (m >>> 4)) | 0),
											(u = 71);
									else if (70 == (0 | u))
										(o = 0 | Hb((p = j), (q = k), v)),
											(j = r),
											(k = m),
											(u = 71);
									else if (78 == (0 | u)) {
										for (j = u = 0, o = l; (k = 0 | c[o >> 2]); ) {
											if (
												(m = (0 | (k = 0 | Kb(C, k))) < 0) |
												(((n - j) | 0) >>> 0 < k >>> 0)
											) {
												u = 82;
												break;
											}
											if (!((j = (k + j) | 0) >>> 0 < n >>> 0)) break;
											o = (o + 4) | 0;
										}
										if (82 == (0 | u) && ((u = 0), m)) {
											e = -1;
											break a;
										}
										if ((Jb(d, 32, s, j, r), j))
											for (m = 0; ; ) {
												if (!(k = 0 | c[l >> 2])) {
													u = 88;
													break f;
												}
												if (
													(0 | j) <
													(0 | (m = ((k = 0 | Kb(C, k)) + m) | 0))
												) {
													u = 88;
													break f;
												}
												if ((Bb(d, C, k), j >>> 0 <= m >>> 0)) {
													u = 88;
													break;
												}
												l = (l + 4) | 0;
											}
										else (j = 0), (u = 88);
									}
								} while (0);
								if (71 == (0 | u))
									(G =
										((u = 0) != (0 | n)) |
										(m = (0 != (0 | p)) | (0 != (0 | q)))),
										(m = (y - o + (1 & (1 ^ m))) | 0),
										(p = G ? o : v),
										(o = -1 < (0 | n) ? -65537 & j : j),
										(m = G ? ((0 | m) < (0 | n) ? n : m) : 0),
										(j = y);
								else if (88 == (0 | u)) {
									(u = 0),
										Jb(d, 32, s, j, 8192 ^ r),
										(j = (0 | j) < (0 | s) ? s : j);
									break;
								}
								Jb(
									d,
									32,
									(j =
										(0 | s) <
										(0 |
											(G =
												((q = (0 | m) < (0 | (r = (j - p) | 0)) ? r : m) + l) |
												0))
											? G
											: s),
									G,
									o
								),
									Bb(d, k, l),
									Jb(d, 48, j, G, 65536 ^ o),
									Jb(d, 48, q, r, 0),
									Bb(d, p, r),
									Jb(d, 32, j, G, 8192 ^ o);
							}
						} while (0);
						m = t;
					}
					g: do {
						if (91 == (0 | u) && !d)
							if (m) {
								for (e = 1; (j = 0 | c[(i + (e << 2)) >> 2]); )
									if (
										(Eb((h + (e << 3)) | 0, j, f),
										10 <= (e = (e + 1) | 0) >>> 0)
									) {
										e = 1;
										break g;
									}
								for (j = 0; ; ) {
									if (((e = (e + 1) | 0), 0 | j)) {
										e = -1;
										break g;
									}
									if (10 <= e >>> 0) {
										e = 1;
										break g;
									}
									j = 0 | c[(i + (e << 2)) >> 2];
								}
							} else e = 0;
					} while (0);
					return (S = F), 0 | e;
				}
				function Bb(a, b, d) {
					(b |= 0), (d |= 0), 32 & c[(a |= 0) >> 2] || Mb(b, d, a);
				}
				function Cb(a) {
					return ((((a |= 0) + -48) | 0) >>> 0 < 10) | 0;
				}
				function Db(b) {
					var d = 0,
						e = 0,
						f = 0,
						e = 0 | c[(b |= 0) >> 2];
					if (0 | Cb(((d = 0 | a[e >> 0]) << 24) >> 24))
						for (
							f = d, d = 0;
							(d = (((10 * d) | 0) - 48 + ((f << 24) >> 24)) | 0),
								(e = (e + 1) | 0),
								(c[b >> 2] = e),
								0 != (0 | Cb(((f = 0 | a[e >> 0]) << 24) >> 24));

						);
					else d = 0;
					return 0 | d;
				}
				function Eb(a, b, d) {
					(a |= 0), (b |= 0), (d |= 0);
					var h,
						e = 0,
						f = 0;
					a: do {
						if (b >>> 0 <= 20) {
							switch (0 | b) {
								case 9:
									(e = (3 + (0 | c[d >> 2])) & -4),
										(b = 0 | c[e >> 2]),
										(c[d >> 2] = e + 4),
										(c[a >> 2] = b);
									break a;
								case 10:
									(e = (3 + (0 | c[d >> 2])) & -4),
										(b = 0 | c[e >> 2]),
										(c[d >> 2] = e + 4),
										(c[(e = a) >> 2] = b),
										(c[(e + 4) >> 2] = (((0 | b) < 0) << 31) >> 31);
									break a;
								case 11:
									(e = (3 + (0 | c[d >> 2])) & -4),
										(b = 0 | c[e >> 2]),
										(c[d >> 2] = e + 4),
										(c[(e = a) >> 2] = b),
										(c[(e + 4) >> 2] = 0);
									break a;
								case 12:
									(e = (7 + (0 | c[d >> 2])) & -8),
										(f = 0 | c[(b = e) >> 2]),
										(b = 0 | c[(b + 4) >> 2]),
										(c[d >> 2] = e + 8),
										(c[(e = a) >> 2] = f),
										(c[(e + 4) >> 2] = b);
									break a;
								case 13:
									(f = (3 + (0 | c[d >> 2])) & -4),
										(e = 0 | c[f >> 2]),
										(c[d >> 2] = f + 4),
										(e = ((65535 & e) << 16) >> 16),
										(c[(f = a) >> 2] = e),
										(c[(f + 4) >> 2] = (((0 | e) < 0) << 31) >> 31);
									break a;
								case 14:
									(f = (3 + (0 | c[d >> 2])) & -4),
										(e = 0 | c[f >> 2]),
										(c[d >> 2] = f + 4),
										(c[(f = a) >> 2] = 65535 & e),
										(c[(f + 4) >> 2] = 0);
									break a;
								case 15:
									(f = (3 + (0 | c[d >> 2])) & -4),
										(e = 0 | c[f >> 2]),
										(c[d >> 2] = f + 4),
										(e = ((255 & e) << 24) >> 24),
										(c[(f = a) >> 2] = e),
										(c[(f + 4) >> 2] = (((0 | e) < 0) << 31) >> 31);
									break a;
								case 16:
									(f = (3 + (0 | c[d >> 2])) & -4),
										(e = 0 | c[f >> 2]),
										(c[d >> 2] = f + 4),
										(c[(f = a) >> 2] = 255 & e),
										(c[(f + 4) >> 2] = 0);
									break a;
								case 17:
									(f = (7 + (0 | c[d >> 2])) & -8),
										(h = +g[f >> 3]),
										(c[d >> 2] = f + 8),
										(g[a >> 3] = h);
									break a;
								case 18:
									!(function (a, b) {
										a |= 0;
										var e = (7 + (0 | c[(b |= 0) >> 2])) & -8,
											d = +g[e >> 3];
										(c[b >> 2] = 8 + e), (g[a >> 3] = d);
									})(a, d);
									break a;
								default:
									break a;
							}
						}
					} while (0);
				}
				function Fb(b, c, e, f) {
					if (
						((e |= 0),
						(f |= 0),
						!((0 == (0 | (b |= 0))) & (0 == (0 | (c |= 0)))))
					)
						for (
							;
							(a[(e = (e + -1) | 0) >> 0] = 0 | d[(480 + (15 & b)) >> 0] | f),
								!(
									(0 == (0 | (b = 0 | nc(0 | b, 0 | c, 4)))) &
									(0 == (0 | (c = 0 | z())))
								);

						);
					return 0 | e;
				}
				function Hb(b, c, d) {
					d |= 0;
					var e,
						f = 0,
						g = 0;
					if (
						(0 < (c |= 0) >>> 0) |
						((0 == (0 | c)) & (4294967295 < (b |= 0) >>> 0))
					)
						for (
							;
							(g =
								0 |
								ic(
									0 | (e = b),
									0 | (f = c),
									0 |
										(g =
											0 |
											hc(
												0 | (b = 0 | mc(0 | b, 0 | c, 10, 0)),
												0 | (c = 0 | z()),
												-10,
												-1
											)),
									0 | z()
								)),
								z(),
								(a[(d = (d + -1) | 0) >> 0] = (255 & g) | 48),
								(9 < f >>> 0) | ((9 == (0 | f)) & (4294967295 < e >>> 0));

						);
					if (b)
						for (
							;
							(f =
								255 &
								(((g = b) + (0 | v((b = ((b >>> 0) / 10) | 0), -10))) | 48)),
								(a[(d = (d + -1) | 0) >> 0] = f),
								10 <= g >>> 0;

						);
					return 0 | d;
				}
				function Jb(a, b, c, d, e) {
					(a |= 0), (b |= 0);
					var f,
						g = S;
					if (
						((S = (S + 256) | 0),
						(f = g),
						((0 | (d |= 0)) < (0 | (c |= 0))) & (0 == ((73728 & (e |= 0)) | 0)))
					) {
						if (
							(rc(
								0 | f,
								((b << 24) >> 24) | 0,
								0 | ((e = (c - d) | 0) >>> 0 < 256 ? e : 256)
							),
							255 < e >>> 0)
						) {
							for (d = e; Bb(a, f, 256), 255 < (d = (d + -256) | 0) >>> 0; );
							e &= 255;
						}
						Bb(a, f, e);
					}
					S = g;
				}
				function Kb(a, b) {
					return (b |= 0), 0 | (a = (a |= 0) ? 0 | Lb(a, b) : 0);
				}
				function Lb(b, d) {
					(b |= 0), (d |= 0);
					do {
						if (b) {
							if (d >>> 0 < 128) {
								(a[b >> 0] = d), (b = 1);
								break;
							}
							if (!(0 | c[872])) {
								if (57216 == ((-128 & d) | 0)) {
									(a[b >> 0] = d), (b = 1);
									break;
								}
								(c[861] = 25), (b = -1);
								break;
							}
							if (d >>> 0 < 2048) {
								(a[b >> 0] = (d >>> 6) | 192),
									(a[(b + 1) >> 0] = (63 & d) | 128),
									(b = 2);
								break;
							}
							if ((d >>> 0 < 55296) | (57344 == ((-8192 & d) | 0))) {
								(a[b >> 0] = (d >>> 12) | 224),
									(a[(b + 1) >> 0] = ((d >>> 6) & 63) | 128),
									(a[(b + 2) >> 0] = (63 & d) | 128),
									(b = 3);
								break;
							}
							if (((d + -65536) | 0) >>> 0 < 1048576) {
								(a[b >> 0] = (d >>> 18) | 240),
									(a[(b + 1) >> 0] = ((d >>> 12) & 63) | 128),
									(a[(b + 2) >> 0] = ((d >>> 6) & 63) | 128),
									(a[(b + 3) >> 0] = (63 & d) | 128),
									(b = 4);
								break;
							}
							(c[861] = 25), (b = -1);
							break;
						}
						b = 1;
					} while (0);
					return 0 | b;
				}
				function Mb(b, d, e) {
					(b |= 0), (d |= 0);
					var j,
						f = 0,
						g = 0,
						h = 0,
						i = 0;
					(f = 0 | c[(g = ((e |= 0) + 16) | 0) >> 2])
						? (h = 5)
						: 0 |
						  (function (b) {
								var d = 0,
									e = 0;
								(e = 0 | a[(d = (74 + (b |= 0)) | 0) >> 0]),
									(a[d >> 0] = (255 + e) | e),
									(d =
										8 & (d = 0 | c[b >> 2])
											? ((c[b >> 2] = 32 | d), -1)
											: ((c[(b + 8) >> 2] = 0),
											  (c[(b + 4) >> 2] = 0),
											  (d = 0 | c[(b + 44) >> 2]),
											  (c[(b + 28) >> 2] = d),
											  (c[(b + 20) >> 2] = d),
											  (c[(b + 16) >> 2] = d + (0 | c[(b + 48) >> 2])),
											  0));
								return 0 | d;
						  })(e)
						? (f = 0)
						: ((f = 0 | c[g >> 2]), (h = 5));
					a: do {
						if (5 == (0 | h)) {
							if (
								((f - (g = i = 0 | c[(j = (e + 20) | 0) >> 2])) | 0) >>> 0 <
								d >>> 0
							) {
								f = 0 | X[3 & c[(e + 36) >> 2]](e, b, d);
								break;
							}
							b: do {
								if (((0 | a[(e + 75) >> 0]) < 0) | (0 == (0 | d)))
									(h = g), (e = 0), (g = d), (f = b);
								else {
									for (i = d; 10 != (0 | a[(b + (f = (i + -1) | 0)) >> 0]); ) {
										if (!f) {
											(h = g), (e = 0), (g = d), (f = b);
											break b;
										}
										i = f;
									}
									if (
										(f = 0 | X[3 & c[(e + 36) >> 2]](e, b, i)) >>> 0 <
										i >>> 0
									)
										break a;
									(h = 0 | c[j >> 2]),
										(g = (d - (e = i)) | 0),
										(f = (b + i) | 0);
								}
							} while (0);
							qc(0 | h, 0 | f, 0 | g),
								(c[j >> 2] = (0 | c[j >> 2]) + g),
								(f = (e + g) | 0);
						}
					} while (0);
					return 0 | f;
				}
				function Ob(a) {
					a = +a;
					var b;
					return (
						(g[h >> 3] = a), (b = 0 | c[h >> 2]), y(0 | c[(h + 4) >> 2]), 0 | b
					);
				}
				function Pb(a, b) {
					(a = +a), (b |= 0);
					var e,
						f,
						d = 0;
					switch (
						((g[h >> 3] = a),
						(f =
							0 |
							nc(0 | (d = 0 | c[h >> 2]), 0 | (e = 0 | c[(h + 4) >> 2]), 52)),
						z(),
						2047 & f)
					) {
						case 0:
							(d =
								0 != a
									? ((a = +Pb(0x10000000000000000 * a, b)),
									  ((0 | c[b >> 2]) - 64) | 0)
									: 0),
								(c[b >> 2] = d);
							break;
						case 2047:
							break;
						default:
							(c[b >> 2] = (2047 & f) - 1022),
								(c[h >> 2] = d),
								(c[(h + 4) >> 2] = (-2146435073 & e) | 1071644672),
								(a = +g[h >> 3]);
					}
					return +a;
				}
				function Qb(b) {
					var g,
						c = 0,
						e = 0,
						f = 0,
						c = 0 | a[(b |= 0) >> 0];
					a: do {
						if ((c << 24) >> 24)
							for (e = b, f = 4, b = 880; ; ) {
								if (
									((f = (f + -1) | 0),
									!(
										((c << 24) >> 24 == ((g = 0 | a[b >> 0]) << 24) >> 24) &
										(0 != (0 | f)) &
										((g << 24) >> 24 != 0)
									))
								)
									break a;
								if (
									((b = (b + 1) | 0),
									!(((c = 0 | a[(e = (e + 1) | 0) >> 0]) << 24) >> 24))
								) {
									c = 0;
									break;
								}
							}
						else (c = 0), (b = 880);
					} while (0);
					return ((255 & c) - (0 | d[b >> 0])) | 0;
				}
				function Sb(b, d, e) {
					(b |= 0), (d |= 0), (e |= 0);
					var f,
						i,
						j,
						h = 0,
						g = S;
					(S = (S + 144) | 0),
						qc(0 | (i = g), 640, 144),
						(h = (h = (-2 - b) | 0) >>> 0 < 256 ? h : 256),
						(c[(i + 48) >> 2] = h),
						(c[(f = (i + 20) | 0) >> 2] = b),
						(j = ((c[(i + 44) >> 2] = b) + h) | 0),
						(c[(b = (i + 16) | 0) >> 2] = j),
						(c[(i + 28) >> 2] = j),
						wb(i, d, e),
						0 | h &&
							((j = 0 | c[f >> 2]),
							(a[(j + ((((0 | j) == (0 | c[b >> 2])) << 31) >> 31)) >> 0] = 0)),
						(S = g);
				}
				function Vb(a, b, d) {
					(a |= 0), (b |= 0), (d |= 0);
					var g,
						h,
						i,
						e = 0,
						f = 0,
						j = S;
					(S = (S + 240) | 0), (c[(i = j) >> 2] = a);
					a: do {
						if (1 < (0 | b))
							for (f = e = a, a = 1; ; ) {
								if (
									-1 <
										(0 |
											ia(
												e,
												(g =
													((f = (f + -4) | 0) +
														(0 -
															(0 | c[(d + ((h = (b + -2) | 0) << 2)) >> 2]))) |
													0)
											)) &&
									-1 < (0 | ia(e, f))
								)
									break a;
								if (
									((e = (i + (a << 2)) | 0),
									(a = (a + 1) | 0),
									(0 |
										(b =
											-1 < (0 | ia(g, f))
												? ((f = c[e >> 2] = g), (b + -1) | 0)
												: ((c[e >> 2] = f), h))) <=
										1)
								)
									break a;
								e = 0 | c[i >> 2];
							}
						else a = 1;
					} while (0);
					$b(i, a), (S = j);
				}
				function Wb(a, b) {
					var d = 0,
						e = 0,
						f = ((a |= 0) + 4) | 0;
					31 < (b |= 0) >>> 0
						? ((d = 0 | c[f >> 2]),
						  (c[a >> 2] = d),
						  (b = (b + -32) | (e = c[f >> 2] = 0)))
						: ((d = 0 | c[a >> 2]), (e = 0 | c[f >> 2])),
						(c[a >> 2] = (e << (32 - b)) | (b ? d >>> b : d)),
						(c[f >> 2] = b ? e >>> b : e);
				}
				function Xb(a, b, d, e, f, g) {
					(a |= 0), (b |= 0), (d |= 0), (e |= 0), (f |= 0), (g |= 0);
					var j,
						k,
						l,
						h = 0,
						i = 0,
						m = S;
					(S = (S + 240) | 0),
						(c[(k = ((l = m) + 232) | 0) >> 2] = b),
						(c[(j = (4 + k) | 0) >> 2] = d),
						(c[l >> 2] = a);
					a: do {
						if (
							(1 != (0 | b)) | (0 != (0 | d)) &&
							((h = (a + (0 - (0 | c[(g + (e << 2)) >> 2]))) | 0),
							1 <= (0 | ia(h, a)))
						)
							for (b = h, i = 1, h = 0 == (0 | f); ; ) {
								if (h & (1 < (0 | e))) {
									if (-1 < (0 | ia((h = (a + -4) | 0), b))) {
										(b = a), (h = i), (d = 10);
										break a;
									}
									if (
										-1 <
										(0 |
											ia(
												(h + (0 - (0 | c[(g + ((e + -2) << 2)) >> 2]))) | 0,
												b
											))
									) {
										(b = a), (h = i), (d = 10);
										break a;
									}
								}
								if (
									((d = (i + 1) | 0),
									(c[(l + (i << 2)) >> 2] = b),
									Wb(k, (f = 0 | Zb(k))),
									(e = (f + e) | 0),
									!((1 != (0 | c[k >> 2])) | (0 != (0 | c[j >> 2]))))
								) {
									(h = d), (d = 10);
									break a;
								}
								if (
									(0 |
										ia(
											(h = (b + (0 - (0 | c[(g + (e << 2)) >> 2]))) | 0),
											0 | c[l >> 2]
										)) <
									1
								) {
									(h = d), (d = 10);
									break;
								}
								(a = b), (b = h), (i = d), (h = 1);
							}
						else d = 9;
					} while (0);
					9 == (0 | d) && 0 == (0 | f) && ((b = a), (h = 1), (d = 10)),
						10 == (0 | d) && ($b(l, h), Vb(b, e, g)),
						(S = m);
				}
				function Yb(a, b) {
					var g,
						d = 0,
						e = 0,
						f = ((a |= 0) + 4) | 0;
					31 < (b |= 0) >>> 0
						? ((d = 0 | c[a >> 2]),
						  (c[f >> 2] = d),
						  (b = (b + -32) | (e = c[a >> 2] = 0)))
						: ((d = 0 | c[f >> 2]), (e = 0 | c[a >> 2])),
						(g = (32 - b) | 0),
						(c[f >> 2] = (g ? e >>> g : e) | (d << b)),
						(c[a >> 2] = e << b);
				}
				function Zb(a) {
					var b = 0;
					return (b = 0 | _b(((0 | c[(a |= 0) >> 2]) - 1) | 0))
						? 0 | b
						: 0 |
								(0 == (0 | (a = 0 | _b(0 | c[(a + 4) >> 2])))
									? 0
									: (a + 32) | 0);
				}
				function _b(a) {
					var b = 0;
					if ((a |= 0))
						if (1 & a) b = 0;
						else for (b = 0; (b = (b + 1) | 0), !(2 & a); ) a >>>= 1;
					else b = 32;
					return 0 | b;
				}
				function $b(a, b) {
					a |= 0;
					var f,
						d = 0,
						e = S;
					if (((S = (S + 256) | 0), (d = e), 2 <= (0 | (b |= 0))))
						for (
							qc(0 | (c[(a + (b << 2)) >> 2] = d), 0 | c[a >> 2], 4), d = 0;
							(f = (a + (d << 2)) | 0),
								(d = (d + 1) | 0),
								qc(0 | c[f >> 2], 0 | c[(a + (d << 2)) >> 2], 4),
								(c[f >> 2] = 4 + (0 | c[f >> 2])),
								(0 | d) != (0 | b);

						);
					S = e;
				}
				function ac(a) {
					a |= 0;
					var b = 0,
						d = 0,
						e = 0,
						f = 0,
						g = 0,
						h = 0,
						i = 0,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						q = 0,
						r = 0,
						s = 0,
						t = 0,
						u = 0,
						v = 0,
						w = S;
					(S = (S + 16) | 0), (n = w);
					do {
						if (a >>> 0 < 245) {
							if (
								((a = (k = a >>> 0 < 11 ? 16 : (a + 11) & -8) >>> 3),
								(m = 0 | c[878]),
								(3 & (d = a ? m >>> a : m)) | 0)
							)
								return (
									(a =
										0 |
										c[
											(b =
												((f =
													(3552 + (((e = (((1 & d) ^ 1) + a) | 0) << 1) << 2)) |
													0) +
													8) |
												0) >> 2
										]),
									(0 | (d = 0 | c[(g = (a + 8) | 0) >> 2])) == (0 | f)
										? (c[878] = m & ~(1 << e))
										: ((c[(d + 12) >> 2] = f), (c[b >> 2] = d)),
									(v = e << 3),
									(c[(a + 4) >> 2] = 3 | v),
									(c[(v = (a + v + 4) | 0) >> 2] = 1 | c[v >> 2]),
									(S = w),
									0 | (v = g)
								);
							if ((l = 0 | c[880]) >>> 0 < k >>> 0) {
								if (0 | d)
									return (
										(g =
											0 |
											c[
												(b =
													((d =
														(3552 +
															(((e =
																(((a =
																	((e = (i =
																		((e =
																			(((e =
																				(d << a) & ((e = 2 << a) | (0 - e))) &
																				(0 - e)) -
																				1) |
																			0) >>>
																			12) &
																		16)
																		? e >>> i
																		: e) >>>
																		5) &
																	8) |
																	i |
																	(g = ((e = a ? e >>> a : e) >>> 2) & 4) |
																	(b = ((e = g ? e >>> g : e) >>> 1) & 2) |
																	(d = ((e = b ? e >>> b : e) >>> 1) & 1)) +
																	(d ? e >>> d : e)) |
																0) <<
																1) <<
																2)) |
														0) +
														8) |
													0) >> 2
											]),
										(0 | (a = 0 | c[(i = (g + 8) | 0) >> 2])) == (0 | d)
											? ((a = m & ~(1 << e)), (c[878] = a))
											: ((c[(a + 12) >> 2] = d), (c[b >> 2] = a), (a = m)),
										(h = ((v = e << 3) - k) | 0),
										(c[(g + 4) >> 2] = 3 | k),
										(c[((f = (g + k) | 0) + 4) >> 2] = 1 | h),
										(c[(g + v) >> 2] = h),
										0 | l &&
											((e = 0 | c[883]),
											(d = (3552 + (((b = l >>> 3) << 1) << 2)) | 0),
											(a =
												a & (b = 1 << b)
													? 0 | c[(b = a = (d + 8) | 0) >> 2]
													: ((c[878] = a | b), (b = (d + 8) | 0), d)),
											(c[b >> 2] = e),
											(c[(a + 12) >> 2] = e),
											(c[(e + 8) >> 2] = a),
											(c[(e + 12) >> 2] = d)),
										(c[880] = h),
										(c[883] = f),
										(S = w),
										0 | (v = i)
									);
								if ((g = 0 | c[879])) {
									for (
										j =
											0 |
											c[
												(3816 +
													((((e =
														((j = (f =
															((j = ((g & (0 - g)) - 1) | 0) >>> 12) & 16)
															? j >>> f
															: j) >>>
															5) &
														8) |
														f |
														(h = ((j = e ? j >>> e : j) >>> 2) & 4) |
														(d = ((j = h ? j >>> h : j) >>> 1) & 2) |
														(i = ((j = d ? j >>> d : j) >>> 1) & 1)) +
														(i ? j >>> i : j)) <<
														2)) >>
													2
											],
											i = ((-8 & c[(j + 4) >> 2]) - k) | 0,
											d = j;
										(a = 0 | c[(d + 16) >> 2]) || (a = 0 | c[(d + 20) >> 2]);

									)
										(i = (h =
											(d = ((-8 & c[(a + 4) >> 2]) - k) | 0) >>> 0 < i >>> 0)
											? d
											: i),
											(d = a),
											(j = h ? a : j);
									if (j >>> 0 < (h = (j + k) | 0) >>> 0) {
										(f = 0 | c[(j + 24) >> 2]), (b = 0 | c[(j + 12) >> 2]);
										do {
											if ((0 | b) == (0 | j)) {
												if (
													!(b = 0 | c[(a = (j + 20) | 0) >> 2]) &&
													!(b = 0 | c[(a = (j + 16) | 0) >> 2])
												) {
													d = 0;
													break;
												}
												for (;;)
													if ((d = 0 | c[(e = (b + 20) | 0) >> 2]))
														(b = d), (a = e);
													else {
														if (!(d = 0 | c[(e = (b + 16) | 0) >> 2])) break;
														(b = d), (a = e);
													}
												(c[a >> 2] = 0), (d = b);
											} else
												(d = 0 | c[(j + 8) >> 2]),
													(c[(d + 12) >> 2] = b),
													(c[(b + 8) >> 2] = d),
													(d = b);
										} while (0);
										do {
											if (0 | f) {
												if (
													((b = 0 | c[(j + 28) >> 2]),
													(0 | j) == (0 | c[(a = (3816 + (b << 2)) | 0) >> 2]))
												) {
													if (!(c[a >> 2] = d)) {
														c[879] = g & ~(1 << b);
														break;
													}
												} else if (
													!(c[
														((0 | c[(v = (f + 16) | 0) >> 2]) == (0 | j)
															? v
															: (f + 20) | 0) >> 2
													] = d)
												)
													break;
												(c[(d + 24) >> 2] = f),
													0 | (b = 0 | c[(j + 16) >> 2]) &&
														((c[(d + 16) >> 2] = b), (c[(b + 24) >> 2] = d)),
													0 | (b = 0 | c[(j + 20) >> 2]) &&
														((c[(d + 20) >> 2] = b), (c[(b + 24) >> 2] = d));
											}
										} while (0);
										return (
											i >>> 0 < 16
												? ((v = (i + k) | 0),
												  (c[(j + 4) >> 2] = 3 | v),
												  (c[(v = (j + v + 4) | 0) >> 2] = 1 | c[v >> 2]))
												: ((c[(j + 4) >> 2] = 3 | k),
												  (c[(h + 4) >> 2] = 1 | i),
												  (c[(h + i) >> 2] = i),
												  0 | l &&
														((e = 0 | c[883]),
														(d = (3552 + (((b = l >>> 3) << 1) << 2)) | 0),
														(a =
															(b = 1 << b) & m
																? 0 | c[(b = a = (d + 8) | 0) >> 2]
																: ((c[878] = b | m), (b = (d + 8) | 0), d)),
														(c[b >> 2] = e),
														(c[(a + 12) >> 2] = e),
														(c[(e + 8) >> 2] = a),
														(c[(e + 12) >> 2] = d)),
												  (c[880] = i),
												  (c[883] = h)),
											(S = w),
											0 | (v = (j + 8) | 0)
										);
									}
									m = k;
								} else m = k;
							} else m = k;
						} else if (a >>> 0 <= 4294967231)
							if (((k = -8 & (a = (a + 11) | 0)), (e = 0 | c[879]))) {
								(d = (0 - k) | 0),
									(j = (a >>>= 8)
										? 16777215 < k >>> 0
											? 31
											: (1 &
													((r =
														((j =
															(14 -
																((i =
																	((i =
																		((j =
																			a <<
																			(m =
																				((m = (a + 1048320) | 0) >>> 16) & 8)) +
																			520192) |
																		0) >>>
																		16) &
																	4) |
																	m |
																	(r =
																		((r = ((j <<= i) + 245760) | 0) >>> 16) &
																		2)) +
																((j <<= r) >>> 15)) |
															0) +
															7) |
														0)
														? k >>> r
														: k)) |
											  (j << 1)
										: 0),
									(a = 0 | c[(3816 + (j << 2)) >> 2]);
								a: do {
									if (a)
										for (
											h = k << (31 == ((f = 0) | j) ? 0 : (25 - (j >>> 1)) | 0),
												i = a,
												a = 0;
											;

										) {
											if (
												(g = ((-8 & c[(i + 4) >> 2]) - k) | 0) >>> 0 <
												d >>> 0
											) {
												if (!g) {
													(d = 0), (a = f = i), (r = 65);
													break a;
												}
												(d = g), (a = i);
											}
											if (
												((f =
													(0 == (0 | (r = 0 | c[(i + 20) >> 2]))) |
													((0 | r) ==
														(0 |
															(i = 0 | c[(i + 16 + ((h >>> 31) << 2)) >> 2])))
														? f
														: r),
												!i)
											) {
												r = 61;
												break;
											}
											h <<= 1;
										}
									else (a = f = 0), (r = 61);
								} while (0);
								if (61 == (0 | r)) {
									if ((0 == (0 | f)) & (0 == (0 | a))) {
										if (!(a = ((a = 2 << j) | (0 - a)) & e)) {
											m = k;
											break;
										}
										(f =
											0 |
											c[
												(3816 +
													((((h =
														((f = (i =
															((f = ((a & (0 - a)) - 1) | 0) >>> 12) & 16)
															? f >>> i
															: f) >>>
															5) &
														8) |
														i |
														(j = ((f = h ? f >>> h : f) >>> 2) & 4) |
														(m = ((f = j ? f >>> j : f) >>> 1) & 2) |
														(a = ((f = m ? f >>> m : f) >>> 1) & 1)) +
														(a ? f >>> a : f)) <<
														2)) >>
													2
											]),
											(a = 0);
									}
									f ? (r = 65) : ((i = d), (g = a));
								}
								if (65 == (0 | r))
									for (;;) {
										if (
											((d = (g =
												(m = ((-8 & c[(f + 4) >> 2]) - k) | 0) >>> 0 < d >>> 0)
												? m
												: d),
											(g = g ? f : a),
											!(a = (a = 0 | c[(f + 16) >> 2]) || 0 | c[(f + 20) >> 2]))
										) {
											i = d;
											break;
										}
										(f = a), (a = g);
									}
								if (
									0 != (0 | g) &&
									i >>> 0 < (((0 | c[880]) - k) | 0) >>> 0 &&
									g >>> 0 < (l = (g + k) | 0) >>> 0
								) {
									(h = 0 | c[(g + 24) >> 2]), (b = 0 | c[(g + 12) >> 2]);
									do {
										if ((0 | b) == (0 | g)) {
											if (
												!(b = 0 | c[(a = (g + 20) | 0) >> 2]) &&
												!(b = 0 | c[(a = (g + 16) | 0) >> 2])
											) {
												b = 0;
												break;
											}
											for (;;)
												if ((d = 0 | c[(f = (b + 20) | 0) >> 2]))
													(b = d), (a = f);
												else {
													if (!(d = 0 | c[(f = (b + 16) | 0) >> 2])) break;
													(b = d), (a = f);
												}
											c[a >> 2] = 0;
										} else
											(v = 0 | c[(g + 8) >> 2]),
												(c[(v + 12) >> 2] = b),
												(c[(b + 8) >> 2] = v);
									} while (0);
									do {
										if (h) {
											if (
												((a = 0 | c[(g + 28) >> 2]),
												(0 | g) == (0 | c[(d = (3816 + (a << 2)) | 0) >> 2]))
											) {
												if (!(c[d >> 2] = b)) {
													(e &= ~(1 << a)), (c[879] = e);
													break;
												}
											} else if (
												!(c[
													((0 | c[(v = (h + 16) | 0) >> 2]) == (0 | g)
														? v
														: (h + 20) | 0) >> 2
												] = b)
											)
												break;
											(c[(b + 24) >> 2] = h),
												0 | (a = 0 | c[(g + 16) >> 2]) &&
													((c[(b + 16) >> 2] = a), (c[(a + 24) >> 2] = b)),
												(a = 0 | c[(g + 20) >> 2]) &&
													((c[(b + 20) >> 2] = a), (c[(a + 24) >> 2] = b));
										}
									} while (0);
									b: do {
										if (i >>> 0 < 16)
											(v = (i + k) | 0),
												(c[(g + 4) >> 2] = 3 | v),
												(c[(v = (g + v + 4) | 0) >> 2] = 1 | c[v >> 2]);
										else {
											if (
												((c[(g + 4) >> 2] = 3 | k),
												(c[(l + 4) >> 2] = 1 | i),
												(b = (c[(l + i) >> 2] = i) >>> 3),
												i >>> 0 < 256)
											) {
												(d = (3552 + ((b << 1) << 2)) | 0),
													(a =
														(a = 0 | c[878]) & (b = 1 << b)
															? 0 | c[(b = a = (d + 8) | 0) >> 2]
															: ((c[878] = a | b), (b = (d + 8) | 0), d)),
													(c[b >> 2] = l),
													(c[(a + 12) >> 2] = l),
													(c[(l + 8) >> 2] = a),
													(c[(l + 12) >> 2] = d);
												break;
											}
											if (
												((b =
													(3816 +
														((d = (b = i >>> 8)
															? 16777215 < i >>> 0
																? 31
																: (1 &
																		((v =
																			((d =
																				(14 -
																					((t =
																						((t =
																							((d =
																								b <<
																								(u =
																									((u = (b + 1048320) | 0) >>>
																										16) &
																									8)) +
																								520192) |
																							0) >>>
																							16) &
																						4) |
																						u |
																						(v =
																							((v =
																								((d <<= t) + 245760) | 0) >>>
																								16) &
																							2)) +
																					((d <<= v) >>> 15)) |
																				0) +
																				7) |
																			0)
																			? i >>> v
																			: i)) |
																  (d << 1)
															: 0) <<
															2)) |
													0),
												(c[(l + 28) >> 2] = d),
												(c[((a = (l + 16) | 0) + 4) >> 2] = 0),
												(c[a >> 2] = 0),
												!(e & (a = 1 << d)))
											) {
												(c[879] = e | a),
													(c[b >> 2] = l),
													(c[(l + 24) >> 2] = b),
													(c[(l + 12) >> 2] = l),
													(c[(l + 8) >> 2] = l);
												break;
											}
											b = 0 | c[b >> 2];
											c: do {
												if (((-8 & c[(b + 4) >> 2]) | 0) != (0 | i)) {
													for (
														e = i << (31 == (0 | d) ? 0 : (25 - (d >>> 1)) | 0);
														(a =
															0 |
															c[(d = (b + 16 + ((e >>> 31) << 2)) | 0) >> 2]);

													) {
														if (((-8 & c[(a + 4) >> 2]) | 0) == (0 | i)) {
															b = a;
															break c;
														}
														(e <<= 1), (b = a);
													}
													(c[d >> 2] = l),
														(c[(l + 24) >> 2] = b),
														(c[(l + 12) >> 2] = l),
														(c[(l + 8) >> 2] = l);
													break b;
												}
											} while (0);
											(v = 0 | c[(u = (b + 8) | 0) >> 2]),
												(c[(v + 12) >> 2] = l),
												(c[u >> 2] = l),
												(c[(l + 8) >> 2] = v),
												(c[(l + 12) >> 2] = b),
												(c[(l + 24) >> 2] = 0);
										}
									} while (0);
									return (S = w), 0 | (v = (g + 8) | 0);
								}
								m = k;
							} else m = k;
						else m = -1;
					} while (0);
					if (m >>> 0 <= (d = 0 | c[880]) >>> 0)
						return (
							(a = (d - m) | 0),
							(b = 0 | c[883]),
							15 < a >>> 0
								? ((v = (b + m) | 0),
								  (c[883] = v),
								  (c[880] = a),
								  (c[(v + 4) >> 2] = 1 | a),
								  (c[(b + d) >> 2] = a),
								  (c[(b + 4) >> 2] = 3 | m))
								: ((c[880] = 0),
								  (c[883] = 0),
								  (c[(b + 4) >> 2] = 3 | d),
								  (c[(v = (b + d + 4) | 0) >> 2] = 1 | c[v >> 2])),
							(S = w),
							0 | (v = (b + 8) | 0)
						);
					if (m >>> 0 < (h = 0 | c[881]) >>> 0)
						return (
							(t = (h - m) | 0),
							(c[881] = t),
							(u = ((v = 0 | c[884]) + m) | 0),
							(c[884] = u),
							(c[(u + 4) >> 2] = 1 | t),
							(c[(v + 4) >> 2] = 3 | m),
							(S = w),
							0 | (v = (v + 8) | 0)
						);
					if (
						((i = (m + 48) | 0),
						(k =
							(g =
								((a =
									0 | c[996]
										? 0 | c[998]
										: ((c[998] = 4096),
										  (c[997] = 4096),
										  (c[999] = -1),
										  (c[1e3] = -1),
										  (c[1001] = 0),
										  (c[989] = 0),
										  (c[996] = (-16 & n) ^ 1431655768),
										  4096)) +
									(j = (m + 47) | 0)) |
								0) & (e = (0 - a) | 0)) >>>
							0 <=
							m >>> 0)
					)
						return (S = w), (v = 0) | v;
					if (
						0 | (a = 0 | c[988]) &&
						((n = ((l = 0 | c[986]) + k) | 0) >>> 0 <= l >>> 0) |
							(a >>> 0 < n >>> 0)
					)
						return (S = w), (v = 0) | v;
					d: do {
						if (4 & c[989]) (b = 0), (r = 143);
						else {
							d = 0 | c[884];
							e: do {
								if (d) {
									for (
										f = 3960;
										!(
											(a = 0 | c[f >> 2]) >>> 0 <= d >>> 0 &&
											((a + (0 | c[(q = (f + 4) | 0) >> 2])) | 0) >>> 0 >
												d >>> 0
										);

									) {
										if (!(a = 0 | c[(f + 8) >> 2])) {
											r = 128;
											break e;
										}
										f = a;
									}
									if ((b = (g - h) & e) >>> 0 < 2147483647)
										if (
											(0 | (a = 0 | fc(b))) ==
											(((0 | c[f >> 2]) + (0 | c[q >> 2])) | 0)
										) {
											if (-1 != (0 | a)) {
												(h = a), (g = b), (r = 145);
												break d;
											}
										} else (e = a), (r = 136);
									else b = 0;
								} else r = 128;
							} while (0);
							do {
								if (128 == (0 | r))
									if (
										-1 != (0 | (d = 0 | fc(0))) &&
										((b = d),
										(p =
											((b =
												((0 == (((p = ((o = 0 | c[997]) + -1) | 0) & b) | 0)
													? 0
													: (((p + b) & (0 - o)) - b) | 0) +
													k) |
												0) +
												(o = 0 | c[986])) |
											0),
										(m >>> 0 < b >>> 0) & (b >>> 0 < 2147483647))
									) {
										if (
											0 | (q = 0 | c[988]) &&
											(p >>> 0 <= o >>> 0) | (q >>> 0 < p >>> 0)
										) {
											b = 0;
											break;
										}
										if ((0 | (a = 0 | fc(b))) == (0 | d)) {
											(h = d), (g = b), (r = 145);
											break d;
										}
										(e = a), (r = 136);
									} else b = 0;
							} while (0);
							do {
								if (136 == (0 | r)) {
									if (
										((d = (0 - b) | 0),
										!(
											(b >>> 0 < i >>> 0) &
											(b >>> 0 < 2147483647) &
											(-1 != (0 | e))
										))
									) {
										if (-1 == (0 | e)) {
											b = 0;
											break;
										}
										(h = e), (g = b), (r = 145);
										break d;
									}
									if (
										2147483647 <=
										(a = (j - b + (a = 0 | c[998])) & (0 - a)) >>> 0
									) {
										(h = e), (g = b), (r = 145);
										break d;
									}
									if (-1 == (0 | fc(a))) {
										fc(d), (b = 0);
										break;
									}
									(h = e), (g = (a + b) | 0), (r = 145);
									break d;
								}
							} while (0);
							(c[989] = 4 | c[989]), (r = 143);
						}
					} while (0);
					if (
						(143 == (0 | r) &&
							k >>> 0 < 2147483647 &&
							!(
								(-1 == (0 | (s = 0 | fc(k)))) |
								(1 ^
									(t =
										((m + 40) | 0) >>> 0 <
										(u = ((q = 0 | fc(0)) - s) | 0) >>> 0)) |
								(((s >>> 0 < q >>> 0) & (-1 != (0 | s)) & (-1 != (0 | q))) ^ 1)
							) &&
							((h = s), (g = t ? u : b), (r = 145)),
						145 == (0 | r))
					) {
						(b = ((0 | c[986]) + g) | 0),
							(c[986] = b) >>> 0 > (0 | c[987]) >>> 0 && (c[987] = b),
							(j = 0 | c[884]);
						f: do {
							if (j) {
								for (f = 3960; ; ) {
									if (
										(0 | h) ==
										(((b = 0 | c[f >> 2]) +
											(a = 0 | c[(e = (f + 4) | 0) >> 2])) |
											0)
									) {
										r = 154;
										break;
									}
									if (!(d = 0 | c[(f + 8) >> 2])) break;
									f = d;
								}
								if (
									154 == (0 | r) &&
									0 == ((8 & c[(f + 12) >> 2]) | 0) &&
									(j >>> 0 < h >>> 0) & (b >>> 0 <= j >>> 0)
								) {
									(c[e >> 2] = a + g),
										(u =
											(j +
												(t =
													0 == ((7 & (t = (j + 8) | 0)) | 0)
														? 0
														: (0 - t) & 7)) |
											0),
										(t = ((v = ((0 | c[881]) + g) | 0) - t) | 0),
										(c[884] = u),
										(c[881] = t),
										(c[(u + 4) >> 2] = 1 | t),
										(c[(j + v + 4) >> 2] = 40),
										(c[885] = c[1e3]);
									break;
								}
								for (
									h >>> 0 < (0 | c[882]) >>> 0 && (c[882] = h),
										d = (h + g) | 0,
										a = 3960;
									;

								) {
									if ((0 | c[a >> 2]) == (0 | d)) {
										r = 162;
										break;
									}
									if (!(b = 0 | c[(a + 8) >> 2])) break;
									a = b;
								}
								if (162 == (0 | r) && 0 == ((8 & c[(a + 12) >> 2]) | 0)) {
									(c[a >> 2] = h),
										(c[(l = (a + 4) | 0) >> 2] = (0 | c[l >> 2]) + g),
										(k =
											((l =
												(h +
													(0 == ((7 & (l = (h + 8) | 0)) | 0)
														? 0
														: (0 - l) & 7)) |
												0) +
												m) |
											0),
										(i =
											((b =
												(d +
													(0 == ((7 & (b = (d + 8) | 0)) | 0)
														? 0
														: (0 - b) & 7)) |
												0) -
												l -
												m) |
											0),
										(c[(l + 4) >> 2] = 3 | m);
									g: do {
										if ((0 | j) == (0 | b))
											(v = ((0 | c[881]) + i) | 0),
												(c[881] = v),
												(c[884] = k),
												(c[(k + 4) >> 2] = 1 | v);
										else {
											if ((0 | c[883]) == (0 | b)) {
												(v = ((0 | c[880]) + i) | 0),
													(c[880] = v),
													(c[883] = k),
													(c[(k + 4) >> 2] = 1 | v),
													(c[(k + v) >> 2] = v);
												break;
											}
											if (1 == ((3 & (a = 0 | c[(b + 4) >> 2])) | 0)) {
												(h = -8 & a), (e = a >>> 3);
												h: do {
													if (a >>> 0 < 256) {
														if (
															((a = 0 | c[(b + 8) >> 2]),
															(0 | (d = 0 | c[(b + 12) >> 2])) == (0 | a))
														) {
															c[878] = c[878] & ~(1 << e);
															break;
														}
														(c[(a + 12) >> 2] = d), (c[(d + 8) >> 2] = a);
														break;
													}
													(g = 0 | c[(b + 24) >> 2]),
														(a = 0 | c[(b + 12) >> 2]);
													do {
														if ((0 | a) == (0 | b)) {
															if (
																!(a =
																	0 |
																	c[(d = ((e = (b + 16) | 0) + 4) | 0) >> 2])
															) {
																if (!(a = 0 | c[e >> 2])) {
																	a = 0;
																	break;
																}
																d = e;
															}
															for (;;)
																if ((e = 0 | c[(f = (a + 20) | 0) >> 2]))
																	(a = e), (d = f);
																else {
																	if (!(e = 0 | c[(f = (a + 16) | 0) >> 2]))
																		break;
																	(a = e), (d = f);
																}
															c[d >> 2] = 0;
														} else
															(v = 0 | c[(b + 8) >> 2]),
																(c[(v + 12) >> 2] = a),
																(c[(a + 8) >> 2] = v);
													} while (0);
													if (!g) break;
													e = (3816 + ((d = 0 | c[(b + 28) >> 2]) << 2)) | 0;
													do {
														if ((0 | c[e >> 2]) == (0 | b)) {
															if (0 | (c[e >> 2] = a)) break;
															c[879] = c[879] & ~(1 << d);
															break h;
														}
														if (
															!(c[
																((0 | c[(v = (g + 16) | 0) >> 2]) == (0 | b)
																	? v
																	: (g + 20) | 0) >> 2
															] = a)
														)
															break h;
													} while (0);
													if (
														((c[(a + 24) >> 2] = g),
														0 | (d = 0 | c[(e = (b + 16) | 0) >> 2]) &&
															((c[(a + 16) >> 2] = d), (c[(d + 24) >> 2] = a)),
														!(d = 0 | c[(e + 4) >> 2]))
													)
														break;
													(c[(a + 20) >> 2] = d), (c[(d + 24) >> 2] = a);
												} while (0);
												(b = (b + h) | 0), (f = (h + i) | 0);
											} else f = i;
											if (
												((c[(b = (b + 4) | 0) >> 2] = -2 & c[b >> 2]),
												(c[(k + 4) >> 2] = 1 | f),
												(b = (c[(k + f) >> 2] = f) >>> 3),
												f >>> 0 < 256)
											) {
												(d = (3552 + ((b << 1) << 2)) | 0),
													(a =
														(a = 0 | c[878]) & (b = 1 << b)
															? 0 | c[(b = a = (d + 8) | 0) >> 2]
															: ((c[878] = a | b), (b = (d + 8) | 0), d)),
													(c[b >> 2] = k),
													(c[(a + 12) >> 2] = k),
													(c[(k + 8) >> 2] = a),
													(c[(k + 12) >> 2] = d);
												break;
											}
											b = f >>> 8;
											do {
												if (b) {
													if (16777215 < f >>> 0) {
														e = 31;
														break;
													}
													e =
														(1 &
															((v =
																((e =
																	(14 -
																		((t =
																			((t =
																				((e =
																					b <<
																					(u =
																						((u = (b + 1048320) | 0) >>> 16) &
																						8)) +
																					520192) |
																				0) >>>
																				16) &
																			4) |
																			u |
																			(v =
																				((v = ((e <<= t) + 245760) | 0) >>>
																					16) &
																				2)) +
																		((e <<= v) >>> 15)) |
																	0) +
																	7) |
																0)
																? f >>> v
																: f)) |
														(e << 1);
												} else e = 0;
											} while (0);
											if (
												((a = (3816 + (e << 2)) | 0),
												(c[(k + 28) >> 2] = e),
												(c[((b = (k + 16) | 0) + 4) >> 2] = 0),
												!((b = (c[b >> 2] = 0) | c[879]) & (d = 1 << e)))
											) {
												(c[879] = b | d),
													(c[a >> 2] = k),
													(c[(k + 24) >> 2] = a),
													(c[(k + 12) >> 2] = k),
													(c[(k + 8) >> 2] = k);
												break;
											}
											b = 0 | c[a >> 2];
											i: do {
												if (((-8 & c[(b + 4) >> 2]) | 0) != (0 | f)) {
													for (
														e = f << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0);
														(a =
															0 |
															c[(d = (b + 16 + ((e >>> 31) << 2)) | 0) >> 2]);

													) {
														if (((-8 & c[(a + 4) >> 2]) | 0) == (0 | f)) {
															b = a;
															break i;
														}
														(e <<= 1), (b = a);
													}
													(c[d >> 2] = k),
														(c[(k + 24) >> 2] = b),
														(c[(k + 12) >> 2] = k),
														(c[(k + 8) >> 2] = k);
													break g;
												}
											} while (0);
											(v = 0 | c[(u = (b + 8) | 0) >> 2]),
												(c[(v + 12) >> 2] = k),
												(c[u >> 2] = k),
												(c[(k + 8) >> 2] = v),
												(c[(k + 12) >> 2] = b),
												(c[(k + 24) >> 2] = 0);
										}
									} while (0);
									return (S = w), 0 | (v = (l + 8) | 0);
								}
								for (
									a = 3960;
									!(
										(b = 0 | c[a >> 2]) >>> 0 <= j >>> 0 &&
										j >>> 0 < (v = (b + (0 | c[(a + 4) >> 2])) | 0) >>> 0
									);

								)
									a = 0 | c[(a + 8) >> 2];
								for (
									b =
										((a =
											(a =
												((f = (v + -47) | 0) +
													(0 == ((7 & (a = (f + 8) | 0)) | 0)
														? 0
														: (0 - a) & 7)) |
												0) >>>
												0 <
											(f = (j + 16) | 0) >>> 0
												? j
												: a) +
											8) |
										0,
										u =
											(h +
												(t =
													0 == ((7 & (t = (h + 8) | 0)) | 0)
														? 0
														: (0 - t) & 7)) |
											0,
										t = ((d = (g + -40) | 0) - t) | 0,
										c[884] = u,
										c[881] = t,
										c[(u + 4) >> 2] = 1 | t,
										c[(h + d + 4) >> 2] = 40,
										c[885] = c[1e3],
										c[(d = (a + 4) | 0) >> 2] = 27,
										c[b >> 2] = c[990],
										c[(b + 4) >> 2] = c[991],
										c[(b + 8) >> 2] = c[992],
										c[(b + 12) >> 2] = c[993],
										c[990] = h,
										c[991] = g,
										c[993] = 0,
										c[992] = b,
										b = (a + 24) | 0;
									(c[(b = ((u = b) + 4) | 0) >> 2] = 7),
										((u + 8) | 0) >>> 0 < v >>> 0;

								);
								if ((0 | a) != (0 | j)) {
									if (
										((g = (a - j) | 0),
										(c[d >> 2] = -2 & c[d >> 2]),
										(c[(j + 4) >> 2] = 1 | g),
										(b = (c[a >> 2] = g) >>> 3),
										g >>> 0 < 256)
									) {
										(d = (3552 + ((b << 1) << 2)) | 0),
											(a =
												(a = 0 | c[878]) & (b = 1 << b)
													? 0 | c[(b = a = (d + 8) | 0) >> 2]
													: ((c[878] = a | b), (b = (d + 8) | 0), d)),
											(c[b >> 2] = j),
											(c[(a + 12) >> 2] = j),
											(c[(j + 8) >> 2] = a),
											(c[(j + 12) >> 2] = d);
										break;
									}
									if (
										((d =
											(3816 +
												((e = (b = g >>> 8)
													? 16777215 < g >>> 0
														? 31
														: (1 &
																((v =
																	((e =
																		(14 -
																			((t =
																				((t =
																					((e =
																						b <<
																						(u =
																							((u = (b + 1048320) | 0) >>> 16) &
																							8)) +
																						520192) |
																					0) >>>
																					16) &
																				4) |
																				u |
																				(v =
																					((v = ((e <<= t) + 245760) | 0) >>>
																						16) &
																					2)) +
																			((e <<= v) >>> 15)) |
																		0) +
																		7) |
																	0)
																	? g >>> v
																	: g)) |
														  (e << 1)
													: 0) <<
													2)) |
											0),
										(c[(j + 28) >> 2] = e),
										(c[(j + 20) >> 2] = 0),
										!((b = (c[f >> 2] = 0) | c[879]) & (a = 1 << e)))
									) {
										(c[879] = b | a),
											(c[d >> 2] = j),
											(c[(j + 24) >> 2] = d),
											(c[(j + 12) >> 2] = j),
											(c[(j + 8) >> 2] = j);
										break;
									}
									b = 0 | c[d >> 2];
									j: do {
										if (((-8 & c[(b + 4) >> 2]) | 0) != (0 | g)) {
											for (
												e = g << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0);
												(a =
													0 | c[(d = (b + 16 + ((e >>> 31) << 2)) | 0) >> 2]);

											) {
												if (((-8 & c[(a + 4) >> 2]) | 0) == (0 | g)) {
													b = a;
													break j;
												}
												(e <<= 1), (b = a);
											}
											(c[d >> 2] = j),
												(c[(j + 24) >> 2] = b),
												(c[(j + 12) >> 2] = j),
												(c[(j + 8) >> 2] = j);
											break f;
										}
									} while (0);
									(v = 0 | c[(u = (b + 8) | 0) >> 2]),
										(c[(v + 12) >> 2] = j),
										(c[u >> 2] = j),
										(c[(j + 8) >> 2] = v),
										(c[(j + 12) >> 2] = b),
										(c[(j + 24) >> 2] = 0);
								}
							} else
								(0 == (0 | (v = 0 | c[882]))) | (h >>> 0 < v >>> 0) &&
									(c[882] = h),
									(c[990] = h),
									(c[991] = g),
									(c[993] = 0),
									(c[887] = c[996]),
									(c[886] = -1),
									(c[891] = 3552),
									(c[890] = 3552),
									(c[893] = 3560),
									(c[892] = 3560),
									(c[895] = 3568),
									(c[894] = 3568),
									(c[897] = 3576),
									(c[896] = 3576),
									(c[899] = 3584),
									(c[898] = 3584),
									(c[901] = 3592),
									(c[900] = 3592),
									(c[903] = 3600),
									(c[902] = 3600),
									(c[905] = 3608),
									(c[904] = 3608),
									(c[907] = 3616),
									(c[906] = 3616),
									(c[909] = 3624),
									(c[908] = 3624),
									(c[911] = 3632),
									(c[910] = 3632),
									(c[913] = 3640),
									(c[912] = 3640),
									(c[915] = 3648),
									(c[914] = 3648),
									(c[917] = 3656),
									(c[916] = 3656),
									(c[919] = 3664),
									(c[918] = 3664),
									(c[921] = 3672),
									(c[920] = 3672),
									(c[923] = 3680),
									(c[922] = 3680),
									(c[925] = 3688),
									(c[924] = 3688),
									(c[927] = 3696),
									(c[926] = 3696),
									(c[929] = 3704),
									(c[928] = 3704),
									(c[931] = 3712),
									(c[930] = 3712),
									(c[933] = 3720),
									(c[932] = 3720),
									(c[935] = 3728),
									(c[934] = 3728),
									(c[937] = 3736),
									(c[936] = 3736),
									(c[939] = 3744),
									(c[938] = 3744),
									(c[941] = 3752),
									(c[940] = 3752),
									(c[943] = 3760),
									(c[942] = 3760),
									(c[945] = 3768),
									(c[944] = 3768),
									(c[947] = 3776),
									(c[946] = 3776),
									(c[949] = 3784),
									(c[948] = 3784),
									(c[951] = 3792),
									(c[950] = 3792),
									(c[953] = 3800),
									(c[952] = 3800),
									(u =
										(h +
											(t =
												0 == ((7 & (t = (h + 8) | 0)) | 0) ? 0 : (0 - t) & 7)) |
										0),
									(t = ((v = (g + -40) | 0) - t) | 0),
									(c[884] = u),
									(c[881] = t),
									(c[(u + 4) >> 2] = 1 | t),
									(c[(h + v + 4) >> 2] = 40),
									(c[885] = c[1e3]);
						} while (0);
						if (m >>> 0 < (b = 0 | c[881]) >>> 0)
							return (
								(t = (b - m) | 0),
								(c[881] = t),
								(u = ((v = 0 | c[884]) + m) | 0),
								(c[884] = u),
								(c[(u + 4) >> 2] = 1 | t),
								(c[(v + 4) >> 2] = 3 | m),
								(S = w),
								0 | (v = (v + 8) | 0)
							);
					}
					return (c[861] = 48), (S = w), (v = 0) | v;
				}
				function bc(a) {
					var b = 0,
						d = 0,
						e = 0,
						f = 0,
						g = 0,
						h = 0,
						i = 0,
						j = 0,
						k = 0;
					if ((a |= 0)) {
						(d = (a + -8) | 0),
							(e = 0 | c[882]),
							(k = (d + (b = -8 & (a = 0 | c[(a + -4) >> 2]))) | 0);
						do {
							if (1 & a) j = i = d;
							else {
								if (((f = 0 | c[d >> 2]), !(3 & a))) return;
								if (
									((h = (f + b) | 0), (g = (d + (0 - f)) | 0) >>> 0 < e >>> 0)
								)
									return;
								if ((0 | c[883]) == (0 | g)) {
									if (3 == ((3 & (a = 0 | c[(b = (k + 4) | 0) >> 2])) | 0))
										return (
											(c[880] = h),
											(c[b >> 2] = -2 & a),
											(c[(g + 4) >> 2] = 1 | h),
											void (c[(g + h) >> 2] = h)
										);
									(j = i = g), (b = h);
									break;
								}
								if (((d = f >>> 3), f >>> 0 < 256)) {
									if (
										((a = 0 | c[(g + 8) >> 2]),
										(0 | (b = 0 | c[(g + 12) >> 2])) == (0 | a))
									) {
										(c[878] = c[878] & ~(1 << d)), (j = i = g), (b = h);
										break;
									}
									(c[(a + 12) >> 2] = b),
										(c[(b + 8) >> 2] = a),
										(j = i = g),
										(b = h);
									break;
								}
								(f = 0 | c[(g + 24) >> 2]), (a = 0 | c[(g + 12) >> 2]);
								do {
									if ((0 | a) == (0 | g)) {
										if (!(a = 0 | c[(b = ((d = (g + 16) | 0) + 4) | 0) >> 2])) {
											if (!(a = 0 | c[d >> 2])) {
												d = 0;
												break;
											}
											b = d;
										}
										for (;;)
											if ((d = 0 | c[(e = (a + 20) | 0) >> 2]))
												(a = d), (b = e);
											else {
												if (!(d = 0 | c[(e = (a + 16) | 0) >> 2])) break;
												(a = d), (b = e);
											}
										(c[b >> 2] = 0), (d = a);
									} else
										(d = 0 | c[(g + 8) >> 2]),
											(c[(d + 12) >> 2] = a),
											(c[(a + 8) >> 2] = d),
											(d = a);
								} while (0);
								if (f) {
									if (
										((a = 0 | c[(g + 28) >> 2]),
										(0 | c[(b = (3816 + (a << 2)) | 0) >> 2]) == (0 | g))
									) {
										if (!(c[b >> 2] = d)) {
											(c[879] = c[879] & ~(1 << a)), (j = i = g), (b = h);
											break;
										}
									} else if (
										!(c[
											((0 | c[(j = (f + 16) | 0) >> 2]) == (0 | g)
												? j
												: (f + 20) | 0) >> 2
										] = d)
									) {
										(j = i = g), (b = h);
										break;
									}
									(c[(d + 24) >> 2] = f),
										0 | (a = 0 | c[(b = (g + 16) | 0) >> 2]) &&
											((c[(d + 16) >> 2] = a), (c[(a + 24) >> 2] = d)),
										(b =
											((j = i =
												((a = 0 | c[(b + 4) >> 2]) &&
													((c[(d + 20) >> 2] = a), (c[(a + 24) >> 2] = d)),
												g)),
											h));
								} else (j = i = g), (b = h);
							}
						} while (0);
						if (
							!(k >>> 0 <= i >>> 0) &&
							1 & (d = 0 | c[(a = (k + 4) | 0) >> 2])
						) {
							if (2 & d)
								(c[a >> 2] = -2 & d),
									(c[(j + 4) >> 2] = 1 | b),
									(f = c[(i + b) >> 2] = b);
							else {
								if ((0 | c[884]) == (0 | k)) {
									if (
										((k = ((0 | c[881]) + b) | 0),
										(c[881] = k),
										(c[884] = j),
										(c[(j + 4) >> 2] = 1 | k),
										(0 | j) != (0 | c[883]))
									)
										return;
									return (c[883] = 0), void (c[880] = 0);
								}
								if ((0 | c[883]) == (0 | k))
									return (
										(k = ((0 | c[880]) + b) | 0),
										(c[880] = k),
										(c[883] = i),
										(c[(j + 4) >> 2] = 1 | k),
										void (c[(i + k) >> 2] = k)
									);
								(f = ((-8 & d) + b) | 0), (e = d >>> 3);
								do {
									if (d >>> 0 < 256) {
										if (
											((b = 0 | c[(k + 8) >> 2]),
											(0 | (a = 0 | c[(k + 12) >> 2])) == (0 | b))
										) {
											c[878] = c[878] & ~(1 << e);
											break;
										}
										(c[(b + 12) >> 2] = a), (c[(a + 8) >> 2] = b);
										break;
									}
									(g = 0 | c[(k + 24) >> 2]), (a = 0 | c[(k + 12) >> 2]);
									do {
										if ((0 | a) == (0 | k)) {
											if (
												!(a = 0 | c[(b = ((d = (k + 16) | 0) + 4) | 0) >> 2])
											) {
												if (!(a = 0 | c[d >> 2])) {
													d = 0;
													break;
												}
												b = d;
											}
											for (;;)
												if ((d = 0 | c[(e = (a + 20) | 0) >> 2]))
													(a = d), (b = e);
												else {
													if (!(d = 0 | c[(e = (a + 16) | 0) >> 2])) break;
													(a = d), (b = e);
												}
											(c[b >> 2] = 0), (d = a);
										} else
											(d = 0 | c[(k + 8) >> 2]),
												(c[(d + 12) >> 2] = a),
												(c[(a + 8) >> 2] = d),
												(d = a);
									} while (0);
									if (0 | g) {
										if (
											((a = 0 | c[(k + 28) >> 2]),
											(0 | c[(b = (3816 + (a << 2)) | 0) >> 2]) == (0 | k))
										) {
											if (!(c[b >> 2] = d)) {
												c[879] = c[879] & ~(1 << a);
												break;
											}
										} else if (
											!(c[
												((0 | c[(h = (g + 16) | 0) >> 2]) == (0 | k)
													? h
													: (g + 20) | 0) >> 2
											] = d)
										)
											break;
										(c[(d + 24) >> 2] = g),
											0 | (a = 0 | c[(b = (k + 16) | 0) >> 2]) &&
												((c[(d + 16) >> 2] = a), (c[(a + 24) >> 2] = d)),
											0 | (a = 0 | c[(b + 4) >> 2]) &&
												((c[(d + 20) >> 2] = a), (c[(a + 24) >> 2] = d));
									}
								} while (0);
								if (
									((c[(j + 4) >> 2] = 1 | f),
									(c[(i + f) >> 2] = f),
									(0 | j) == (0 | c[883]))
								)
									return void (c[880] = f);
							}
							if (((a = f >>> 3), f >>> 0 < 256))
								return (
									(d = (3552 + ((a << 1) << 2)) | 0),
									(b =
										(b = 0 | c[878]) & (a = 1 << a)
											? 0 | c[(a = b = (d + 8) | 0) >> 2]
											: ((c[878] = b | a), (a = (d + 8) | 0), d)),
									(c[a >> 2] = j),
									(c[(b + 12) >> 2] = j),
									(c[(j + 8) >> 2] = b),
									void (c[(j + 12) >> 2] = d)
								);
							(b =
								(3816 +
									((e = (a = f >>> 8)
										? 16777215 < f >>> 0
											? 31
											: (1 &
													((k =
														((e =
															(14 -
																((h =
																	((h =
																		((e =
																			a <<
																			(i =
																				((i = (a + 1048320) | 0) >>> 16) & 8)) +
																			520192) |
																		0) >>>
																		16) &
																	4) |
																	i |
																	(k =
																		((k = ((e <<= h) + 245760) | 0) >>> 16) &
																		2)) +
																((e <<= k) >>> 15)) |
															0) +
															7) |
														0)
														? f >>> k
														: f)) |
											  (e << 1)
										: 0) <<
										2)) |
								0),
								(c[(j + 28) >> 2] = e),
								(c[(j + 20) >> 2] = 0),
								(a = (c[(j + 16) >> 2] = 0) | c[879]),
								(d = 1 << e);
							a: do {
								if (a & d) {
									a = 0 | c[b >> 2];
									b: do {
										if (((-8 & c[(a + 4) >> 2]) | 0) != (0 | f)) {
											for (
												e = f << (31 == (0 | e) ? 0 : (25 - (e >>> 1)) | 0);
												(b =
													0 | c[(d = (a + 16 + ((e >>> 31) << 2)) | 0) >> 2]);

											) {
												if (((-8 & c[(b + 4) >> 2]) | 0) == (0 | f)) {
													a = b;
													break b;
												}
												(e <<= 1), (a = b);
											}
											(c[d >> 2] = j),
												(c[(j + 24) >> 2] = a),
												(c[(j + 12) >> 2] = j),
												(c[(j + 8) >> 2] = j);
											break a;
										}
									} while (0);
									(k = 0 | c[(i = (a + 8) | 0) >> 2]),
										(c[(k + 12) >> 2] = j),
										(c[i >> 2] = j),
										(c[(j + 8) >> 2] = k),
										(c[(j + 12) >> 2] = a),
										(c[(j + 24) >> 2] = 0);
								} else
									(c[879] = a | d),
										(c[b >> 2] = j),
										(c[(j + 24) >> 2] = b),
										(c[(j + 12) >> 2] = j),
										(c[(j + 8) >> 2] = j);
							} while (0);
							if (((k = ((0 | c[886]) - 1) | 0), !(0 | (c[886] = k)))) {
								for (a = 3968; (a = 0 | c[a >> 2]); ) a = (a + 8) | 0;
								c[886] = -1;
							}
						}
					}
				}
				function cc(a, b) {
					var d = 0,
						e = 0,
						f = 0,
						g = 0,
						h = 0,
						i = 0,
						j = 0,
						j = ((a |= 0) + (b |= 0)) | 0,
						d = 0 | c[(a + 4) >> 2];
					do {
						if (1 & d) (i = a), (a = b);
						else {
							if (((e = 0 | c[a >> 2]), !(3 & d))) return;
							if (
								((g = (a + (0 - e)) | 0),
								(h = (e + b) | 0),
								(0 | c[883]) == (0 | g))
							) {
								if (3 == ((3 & (d = 0 | c[(a = (j + 4) | 0) >> 2])) | 0))
									return (
										(c[880] = h),
										(c[a >> 2] = -2 & d),
										(c[(g + 4) >> 2] = 1 | h),
										void (c[j >> 2] = h)
									);
								(i = g), (a = h);
								break;
							}
							if (((b = e >>> 3), e >>> 0 < 256)) {
								if (
									((d = 0 | c[(g + 8) >> 2]),
									(0 | (a = 0 | c[(g + 12) >> 2])) == (0 | d))
								) {
									(c[878] = c[878] & ~(1 << b)), (i = g), (a = h);
									break;
								}
								(c[(d + 12) >> 2] = a), (c[(a + 8) >> 2] = d), (i = g), (a = h);
								break;
							}
							(f = 0 | c[(g + 24) >> 2]), (d = 0 | c[(g + 12) >> 2]);
							do {
								if ((0 | d) == (0 | g)) {
									if (!(d = 0 | c[(a = ((b = (g + 16) | 0) + 4) | 0) >> 2])) {
										if (!(d = 0 | c[b >> 2])) {
											b = 0;
											break;
										}
										a = b;
									}
									for (;;)
										if ((b = 0 | c[(e = (d + 20) | 0) >> 2])) (d = b), (a = e);
										else {
											if (!(b = 0 | c[(e = (d + 16) | 0) >> 2])) break;
											(d = b), (a = e);
										}
									(c[a >> 2] = 0), (b = d);
								} else
									(b = 0 | c[(g + 8) >> 2]),
										(c[(b + 12) >> 2] = d),
										(c[(d + 8) >> 2] = b),
										(b = d);
							} while (0);
							if (f) {
								if (
									((d = 0 | c[(g + 28) >> 2]),
									(0 | c[(a = (3816 + (d << 2)) | 0) >> 2]) == (0 | g))
								) {
									if (!(c[a >> 2] = b)) {
										(c[879] = c[879] & ~(1 << d)), (i = g), (a = h);
										break;
									}
								} else if (
									!(c[
										((0 | c[(i = (f + 16) | 0) >> 2]) == (0 | g)
											? i
											: (f + 20) | 0) >> 2
									] = b)
								) {
									(i = g), (a = h);
									break;
								}
								(c[(b + 24) >> 2] = f),
									0 | (d = 0 | c[(a = (g + 16) | 0) >> 2]) &&
										((c[(b + 16) >> 2] = d), (c[(d + 24) >> 2] = b)),
									(a =
										((i =
											((d = 0 | c[(a + 4) >> 2]) &&
												((c[(b + 20) >> 2] = d), (c[(d + 24) >> 2] = b)),
											g)),
										h));
							} else (i = g), (a = h);
						}
					} while (0);
					if (2 & (b = 0 | c[(d = (j + 4) | 0) >> 2]))
						(c[d >> 2] = -2 & b),
							(c[(i + 4) >> 2] = 1 | a),
							(c[(i + a) >> 2] = a);
					else {
						if ((0 | c[884]) == (0 | j))
							return (
								(j = ((0 | c[881]) + a) | 0),
								(c[881] = j),
								(c[884] = i),
								(c[(i + 4) >> 2] = 1 | j),
								(0 | i) == (0 | c[883]) && ((c[883] = 0), void (c[880] = 0))
							);
						if ((0 | c[883]) == (0 | j))
							return (
								(j = ((0 | c[880]) + a) | 0),
								(c[880] = j),
								(c[883] = i),
								(c[(i + 4) >> 2] = 1 | j),
								void (c[(i + j) >> 2] = j)
							);
						(g = ((-8 & b) + a) | 0), (e = b >>> 3);
						do {
							if (b >>> 0 < 256) {
								if (
									((a = 0 | c[(j + 8) >> 2]),
									(0 | (d = 0 | c[(j + 12) >> 2])) == (0 | a))
								) {
									c[878] = c[878] & ~(1 << e);
									break;
								}
								(c[(a + 12) >> 2] = d), (c[(d + 8) >> 2] = a);
								break;
							}
							(f = 0 | c[(j + 24) >> 2]), (d = 0 | c[(j + 12) >> 2]);
							do {
								if ((0 | d) == (0 | j)) {
									if (!(d = 0 | c[(a = ((b = (j + 16) | 0) + 4) | 0) >> 2])) {
										if (!(d = 0 | c[b >> 2])) {
											b = 0;
											break;
										}
										a = b;
									}
									for (;;)
										if ((b = 0 | c[(e = (d + 20) | 0) >> 2])) (d = b), (a = e);
										else {
											if (!(b = 0 | c[(e = (d + 16) | 0) >> 2])) break;
											(d = b), (a = e);
										}
									(c[a >> 2] = 0), (b = d);
								} else
									(b = 0 | c[(j + 8) >> 2]),
										(c[(b + 12) >> 2] = d),
										(c[(d + 8) >> 2] = b),
										(b = d);
							} while (0);
							if (0 | f) {
								if (
									((d = 0 | c[(j + 28) >> 2]),
									(0 | c[(a = (3816 + (d << 2)) | 0) >> 2]) == (0 | j))
								) {
									if (!(c[a >> 2] = b)) {
										c[879] = c[879] & ~(1 << d);
										break;
									}
								} else if (
									!(c[
										((0 | c[(h = (f + 16) | 0) >> 2]) == (0 | j)
											? h
											: (f + 20) | 0) >> 2
									] = b)
								)
									break;
								(c[(b + 24) >> 2] = f),
									0 | (d = 0 | c[(a = (j + 16) | 0) >> 2]) &&
										((c[(b + 16) >> 2] = d), (c[(d + 24) >> 2] = b)),
									0 | (d = 0 | c[(a + 4) >> 2]) &&
										((c[(b + 20) >> 2] = d), (c[(d + 24) >> 2] = b));
							}
						} while (0);
						if (
							((c[(i + 4) >> 2] = 1 | g),
							(c[(i + g) >> 2] = g),
							(0 | i) == (0 | c[883]))
						)
							return void (c[880] = g);
						a = g;
					}
					if (((d = a >>> 3), a >>> 0 < 256))
						return (
							(b = (3552 + ((d << 1) << 2)) | 0),
							(a =
								(a = 0 | c[878]) & (d = 1 << d)
									? 0 | c[(d = a = (b + 8) | 0) >> 2]
									: ((c[878] = a | d), (d = (b + 8) | 0), b)),
							(c[d >> 2] = i),
							(c[(a + 12) >> 2] = i),
							(c[(i + 8) >> 2] = a),
							void (c[(i + 12) >> 2] = b)
						);
					if (
						((b =
							(3816 +
								((f = (d = a >>> 8)
									? 16777215 < a >>> 0
										? 31
										: (1 &
												((j =
													((f =
														(14 -
															((g =
																((g =
																	((f =
																		d <<
																		(h =
																			((h = (d + 1048320) | 0) >>> 16) & 8)) +
																		520192) |
																	0) >>>
																	16) &
																4) |
																h |
																(j =
																	((j = ((f <<= g) + 245760) | 0) >>> 16) &
																	2)) +
															((f <<= j) >>> 15)) |
														0) +
														7) |
													0)
													? a >>> j
													: a)) |
										  (f << 1)
									: 0) <<
									2)) |
							0),
						(c[(i + 28) >> 2] = f),
						(c[(i + 20) >> 2] = 0),
						!((d = (c[(i + 16) >> 2] = 0) | c[879]) & (e = 1 << f)))
					)
						return (
							(c[879] = d | e),
							(c[b >> 2] = i),
							(c[(i + 24) >> 2] = b),
							(c[(i + 12) >> 2] = i),
							void (c[(i + 8) >> 2] = i)
						);
					d = 0 | c[b >> 2];
					a: do {
						if (((-8 & c[(d + 4) >> 2]) | 0) != (0 | a)) {
							for (
								f = a << (31 == (0 | f) ? 0 : (25 - (f >>> 1)) | 0);
								(b = 0 | c[(e = (d + 16 + ((f >>> 31) << 2)) | 0) >> 2]);

							) {
								if (((-8 & c[(b + 4) >> 2]) | 0) == (0 | a)) {
									d = b;
									break a;
								}
								(f <<= 1), (d = b);
							}
							return (
								(c[e >> 2] = i),
								(c[(i + 24) >> 2] = d),
								(c[(i + 12) >> 2] = i),
								void (c[(i + 8) >> 2] = i)
							);
						}
					} while (0);
					(j = 0 | c[(h = (d + 8) | 0) >> 2]),
						(c[(j + 12) >> 2] = i),
						(c[h >> 2] = i),
						(c[(i + 8) >> 2] = j),
						(c[(i + 12) >> 2] = d),
						(c[(i + 24) >> 2] = 0);
				}
				function ec(a, b, d) {
					a |= 0;
					var e = 0;
					return (0 != ((3 & (b |= 0)) | 0)) | (0 == (0 | (e = b >>> 2))) ||
						((1073741823 + e) & e) | 0
						? 0 | (a = 28)
						: !(((-64 - b) | 0) >>> 0 < (d |= 0) >>> 0) &&
						  (b =
								0 |
								(function (a, b) {
									b |= 0;
									var g,
										d = 0,
										e = 0,
										f = 0,
										h = 0,
										i = 0;
									if (((d = 16 < (a |= 0) >>> 0 ? a : 16) + -1) & d)
										for (a = 16; a >>> 0 < d >>> 0; ) a <<= 1;
									else a = d;
									if (((-64 - a) | 0) >>> 0 <= b >>> 0)
										return (c[861] = 48), (h = 0) | h;
									if (
										!(d =
											0 |
											ac(
												(12 + (g = b >>> 0 < 11 ? 16 : (b + 11) & -8) + a) | 0
											))
									)
										return (h = 0) | h;
									f = (d + -8) | 0;
									do {
										if ((a + -1) & d) {
											if (
												((b =
													((e =
														15 <
														(((e = (((d + a + -1) & (0 - a)) - 8) | 0) -
															(b = f)) |
															0) >>>
															0
															? e
															: (e + a) | 0) -
														b) |
													0),
												(d =
													((-8 & (i = 0 | c[(a = (d + -4) | 0) >> 2])) - b) |
													0),
												3 & i)
											) {
												(c[(i = (e + 4) | 0) >> 2] = d | (1 & c[i >> 2]) | 2),
													(c[(d = (e + d + 4) | 0) >> 2] = 1 | c[d >> 2]),
													(c[a >> 2] = b | (1 & c[a >> 2]) | 2),
													(c[i >> 2] = 1 | c[i >> 2]),
													cc(f, b),
													(a = b = e);
												break;
											}
											(c[e >> 2] = (0 | c[f >> 2]) + b),
												(c[(e + 4) >> 2] = d),
												(a = b = e);
											break;
										}
										a = b = f;
									} while (0);
									return (
										(3 & (a = 0 | c[(d = (a + 4) | 0) >> 2])) | 0 &&
											((16 + g) | 0) >>> 0 < (h = -8 & a) >>> 0 &&
											((i = (h - g) | 0),
											(f = (b + g) | 0),
											(c[d >> 2] = g | (1 & a) | 2),
											(c[(f + 4) >> 2] = 3 | i),
											(c[(h = (b + h + 4) | 0) >> 2] = 1 | c[h >> 2]),
											cc(f, i)),
										0 | (i = (b + 8) | 0)
									);
								})(16 < b >>> 0 ? b : 16, d))
						? ((c[a >> 2] = b), (a = 0) | a)
						: 0 | (a = 48);
				}
				function fc(a) {
					a |= 0;
					var b = 0,
						d = 0;
					return (a = ((b = 0 | c[(d = 4032) >> 2]) + a) | 0) >>> 0 >
						(0 | H()) >>> 0 && 0 == (0 | J(0 | a))
						? ((c[861] = 48), 0 | (d = -1))
						: ((c[d >> 2] = a), 0 | (d = b));
				}
				function hc(a, b, c, d) {
					(b |= 0), (d |= 0);
					var e = 0,
						f = 0;
					return (
						(c =
							0 |
							(function (a, b) {
								var c = 0,
									d = 0,
									e = 0,
									f = 0;
								return (
									(a =
										(((c =
											0 | v((e = 65535 & (b |= 0)), (f = 65535 & (a |= 0)))) >>>
											16) +
											(0 | v(e, (d = a >>> 16)))) |
										0),
									(b = 0 | v((e = b >>> 16), f)),
									0 |
										(y(
											((a >>> 16) +
												(0 | v(e, d)) +
												((((65535 & a) + b) | 0) >>> 16)) |
												0
										),
										((a + b) << 16) | (65535 & c) | 0)
								);
							})((e = a |= 0), (f = c |= 0))),
						(a = 0 | z()),
						0 | (y(((0 | v(b, f)) + (0 | v(d, e)) + a) | (0 & a) | 0), 0 | c)
					);
				}
				function ic(a, b, c, d) {
					return (
						0 |
						(y(
							(((b |= 0) +
								(d |= 0) +
								(((c = ((a |= 0) + (c |= 0)) >>> 0) >>> 0 < a >>> 0) | 0)) >>>
								0) |
								0
						),
						0 | c)
					);
				}
				function jc(a, b, c, d) {
					return (
						0 |
						(y(
							0 |
								(d =
									((b |= 0) -
										(d |= 0) -
										(((a |= 0) >>> 0 < (c |= 0) >>> 0) | 0)) >>>
									0)
						),
						((a - c) >>> 0) | 0)
					);
				}
				function kc(a) {
					return 0 | ((a |= 0) ? (31 - (0 | w(a ^ (a - 1)))) | 0 : 32);
				}
				function lc(a, b, d, e, f) {
					f |= 0;
					var g = 0,
						h = 0,
						i = 0,
						j = 0,
						k = 0,
						l = 0,
						m = 0,
						n = 0,
						o = 0,
						p = 0,
						l = (a |= 0),
						h = (d |= 0),
						i = (n = e |= 0);
					if (!(k = j = b |= 0))
						return (
							(g = 0 != (0 | f)),
							i
								? (g && ((c[f >> 2] = 0 | a), (c[(f + 4) >> 2] = 0 & b)),
								  (f = n = 0) | (y(0 | n), f))
								: (g &&
										((c[f >> 2] = (l >>> 0) % (h >>> 0)),
										(c[(f + 4) >> 2] = 0)),
								  (f = ((l >>> (n = 0)) / (h >>> 0)) >>> 0),
								  0 | (y(0 | n), f))
						);
					g = 0 == (0 | i);
					do {
						if (h) {
							if (!g) {
								if ((g = ((0 | w(0 | i)) - (0 | w(0 | k))) | 0) >>> 0 <= 31) {
									(a =
										((l >>> ((h = m = (g + 1) | 0) >>> 0)) &
											(b = (g - 31) >> 31)) |
										(k << (i = (31 - g) | 0))),
										(b &= k >>> (m >>> 0)),
										(g = 0),
										(i = l << i);
									break;
								}
								return f
									? ((c[f >> 2] = 0 | a),
									  (c[(f + 4) >> 2] = j | (0 & b)),
									  (f = n = 0) | (y(0 | n), f))
									: (f = n = 0) | (y(0 | n), f);
							}
							if (((g = (h - 1) | 0) & h) | 0) {
								(a =
									((((m =
										(32 - (i = (33 + (0 | w(0 | h)) - (0 | w(0 | k))) | 0)) |
										0) -
										1) >>
										31) &
										(k >>> ((o = (i - 32) | 0) >>> 0))) |
									(((k << m) | (l >>> ((h = i) >>> 0))) & (b = o >> 31))),
									(b &= k >>> (i >>> 0)),
									(g = (l << (p = (64 - i) | 0)) & (j = m >> 31)),
									(i =
										(((k << p) | (l >>> (o >>> 0))) & j) |
										((l << m) & ((i - 33) >> 31)));
								break;
							}
							return (
								0 | f && ((c[f >> 2] = g & l), (c[(f + 4) >> 2] = 0)),
								1 == (0 | h)
									? ((p = 0 | a), 0 | (y(0 | (o = j | (0 & b))), p))
									: ((o = (k >>> ((p = 0 | kc(0 | h)) >>> 0)) | 0),
									  (p = (k << (32 - p)) | (l >>> (p >>> 0)) | 0),
									  0 | (y(0 | o), p))
							);
						}
						if (g)
							return (
								0 | f &&
									((c[f >> 2] = (k >>> 0) % (h >>> 0)), (c[(f + 4) >> 2] = 0)),
								(p = ((k >>> (o = 0)) / (h >>> 0)) >>> 0),
								0 | (y(0 | o), p)
							);
						if (!l)
							return (
								0 | f &&
									((c[f >> 2] = 0), (c[(f + 4) >> 2] = (k >>> 0) % (i >>> 0))),
								(p = ((k >>> (o = 0)) / (i >>> 0)) >>> 0),
								0 | (y(0 | o), p)
							);
						if (!((g = (i - 1) | 0) & i))
							return (
								0 | f &&
									((c[f >> 2] = 0 | a), (c[(f + 4) >> 2] = (g & k) | (0 & b))),
								(p = k >>> (((o = 0) | kc(0 | i)) >>> 0)),
								0 | (y(0 | o), p)
							);
						if ((g = ((0 | w(0 | i)) - (0 | w(0 | k))) | 0) >>> 0 <= 30) {
							(a =
								(k << (i = (31 - g) | 0)) |
								(l >>> ((h = b = (g + 1) | 0) >>> 0))),
								(b = k >>> (b >>> 0)),
								(g = 0),
								(i = l << i);
							break;
						}
						return (
							f && ((c[f >> 2] = 0 | a), (c[(f + 4) >> 2] = j | (0 & b))),
							(p = o = 0) | (y(0 | o), p)
						);
					} while (0);
					if (h) {
						for (
							k = 0 | ic(0 | (m = 0 | d), 0 | (l = n | (0 & e)), -1, -1),
								d = 0 | z(),
								j = i,
								i = 0;
							(j = (g >>> 31) | ((e = j) << 1)),
								(g = i | (g << 1)),
								jc(
									0 | k,
									0 | d,
									0 | (e = (a << 1) | (e >>> 31) | 0),
									0 | (n = (a >>> 31) | (b << 1) | 0)
								),
								(i =
									1 &
									(o = ((p = 0 | z()) >> 31) | (((0 | p) < 0 ? -1 : 0) << 1))),
								(a =
									0 |
									jc(
										0 | e,
										0 | n,
										(o & m) | 0,
										(((((0 | p) < 0 ? -1 : 0) >> 31) |
											(((0 | p) < 0 ? -1 : 0) << 1)) &
											l) |
											0
									)),
								(b = 0 | z()),
								0 != (0 | (h = (h - 1) | 0));

						);
						(k = j), (j = 0);
					} else (k = i), (i = j = 0);
					return (
						(h = 0) | f && ((c[f >> 2] = a), (c[(f + 4) >> 2] = b)),
						(p = (-2 & ((g << 1) | 0)) | i),
						0 |
							(y(
								0 |
									(o =
										((0 | g) >>> 31) |
										((k | h) << 1) |
										(0 & ((h << 1) | (g >>> 31))) |
										j)
							),
							p)
					);
				}
				function mc(a, b, c, d) {
					return 0 | lc((a |= 0), (b |= 0), (c |= 0), (d |= 0), 0);
				}
				function nc(a, b, c) {
					return (
						(a |= 0),
						(b |= 0),
						(0 | (c |= 0)) < 32
							? (y((b >>> c) | 0),
							  (a >>> c) | ((b & ((1 << c) - 1)) << (32 - c)))
							: (y(0), (b >>> (c - 32)) | 0)
					);
				}
				function oc(a, b, c) {
					return (
						(a |= 0),
						(b |= 0),
						(0 | (c |= 0)) < 32
							? (y(
									(b << c) |
										((a & (((1 << c) - 1) << (32 - c))) >>> (32 - c)) |
										0
							  ),
							  a << c)
							: (y((a << (c - 32)) | 0), 0)
					);
				}
				function pc() {
					return 4032;
				}
				function qc(b, d, e) {
					(b |= 0), (d |= 0);
					var f, g, h;
					if (8192 <= (0 | (e |= 0))) return I(0 | b, 0 | d, 0 | e), 0 | b;
					if (((h = 0 | b), (g = (b + e) | 0), (3 & b) == (3 & d))) {
						for (; 3 & b; ) {
							if (!e) return 0 | h;
							(a[b >> 0] = 0 | a[d >> 0]),
								(b = (b + 1) | 0),
								(d = (d + 1) | 0),
								(e = (e - 1) | 0);
						}
						for (f = ((e = (-4 & g) | 0) - 64) | 0; (0 | b) <= (0 | f); )
							(c[b >> 2] = c[d >> 2]),
								(c[(b + 4) >> 2] = c[(d + 4) >> 2]),
								(c[(b + 8) >> 2] = c[(d + 8) >> 2]),
								(c[(b + 12) >> 2] = c[(d + 12) >> 2]),
								(c[(b + 16) >> 2] = c[(d + 16) >> 2]),
								(c[(b + 20) >> 2] = c[(d + 20) >> 2]),
								(c[(b + 24) >> 2] = c[(d + 24) >> 2]),
								(c[(b + 28) >> 2] = c[(d + 28) >> 2]),
								(c[(b + 32) >> 2] = c[(d + 32) >> 2]),
								(c[(b + 36) >> 2] = c[(d + 36) >> 2]),
								(c[(b + 40) >> 2] = c[(d + 40) >> 2]),
								(c[(b + 44) >> 2] = c[(d + 44) >> 2]),
								(c[(b + 48) >> 2] = c[(d + 48) >> 2]),
								(c[(b + 52) >> 2] = c[(d + 52) >> 2]),
								(c[(b + 56) >> 2] = c[(d + 56) >> 2]),
								(c[(b + 60) >> 2] = c[(d + 60) >> 2]),
								(b = (b + 64) | 0),
								(d = (d + 64) | 0);
						for (; (0 | b) < (0 | e); )
							(c[b >> 2] = c[d >> 2]), (b = (b + 4) | 0), (d = (d + 4) | 0);
					} else
						for (e = (g - 4) | 0; (0 | b) < (0 | e); )
							(a[b >> 0] = 0 | a[d >> 0]),
								(a[(b + 1) >> 0] = 0 | a[(d + 1) >> 0]),
								(a[(b + 2) >> 0] = 0 | a[(d + 2) >> 0]),
								(a[(b + 3) >> 0] = 0 | a[(d + 3) >> 0]),
								(b = (b + 4) | 0),
								(d = (d + 4) | 0);
					for (; (0 | b) < (0 | g); )
						(a[b >> 0] = 0 | a[d >> 0]), (b = (b + 1) | 0), (d = (d + 1) | 0);
					return 0 | h;
				}
				function rc(b, d, e) {
					d |= 0;
					var f,
						g,
						i,
						h = ((b |= 0) + (e |= 0)) | 0;
					if (((d &= 255), 67 <= (0 | e))) {
						for (; 3 & b; ) (a[b >> 0] = d), (b = (b + 1) | 0);
						for (
							i = d | (d << 8) | (d << 16) | (d << 24),
								g = ((f = (-4 & h) | 0) - 64) | 0;
							(0 | b) <= (0 | g);

						)
							(c[b >> 2] = i),
								(c[(b + 4) >> 2] = i),
								(c[(b + 8) >> 2] = i),
								(c[(b + 12) >> 2] = i),
								(c[(b + 16) >> 2] = i),
								(c[(b + 20) >> 2] = i),
								(c[(b + 24) >> 2] = i),
								(c[(b + 28) >> 2] = i),
								(c[(b + 32) >> 2] = i),
								(c[(b + 36) >> 2] = i),
								(c[(b + 40) >> 2] = i),
								(c[(b + 44) >> 2] = i),
								(c[(b + 48) >> 2] = i),
								(c[(b + 52) >> 2] = i),
								(c[(b + 56) >> 2] = i),
								(c[(b + 60) >> 2] = i),
								(b = (b + 64) | 0);
						for (; (0 | b) < (0 | f); ) (c[b >> 2] = i), (b = (b + 4) | 0);
					}
					for (; (0 | b) < (0 | h); ) (a[b >> 0] = d), (b = (b + 1) | 0);
					return (h - e) | 0;
				}
				function Ec(a) {
					return x(0), 0;
				}
				function Gc(a, b, c, d) {
					return x(2), 0;
				}
				var W = [
						Ec,
						function (a) {
							return 0 | A(0, 0 | (a |= 0));
						},
						function (a) {
							return 0;
						},
						Ec
					],
					X = [
						function (a, b, c) {
							return x(1), 0;
						},
						function (a, b, c) {
							return 0 | B(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0));
						},
						function (a, b, d) {
							(b |= 0), (d |= 0);
							var e,
								i,
								j,
								k,
								m,
								n,
								o,
								f = 0,
								g = 0,
								h = 0,
								p = 0,
								l = S;
							for (
								S = (S + 32) | 0,
									i = ((g = l) + 16) | 0,
									f = 0 | c[(j = ((a |= 0) + 28) | 0) >> 2],
									c[g >> 2] = f,
									f = ((0 | c[(k = (a + 20) | 0) >> 2]) - f) | 0,
									c[(g + 4) >> 2] = f,
									c[(g + 8) >> 2] = b,
									e = (a + 60) | 0,
									f = (f + (c[(g + 12) >> (h = 2)] = d)) | 0;
								;

							) {
								if (
									(0 | f) ==
									(0 |
										(b =
											0 |
											(function (a) {
												a =
													((a |= 0) << 16) >> 16
														? ((c[861] = 65535 & a), -1)
														: 0;
												return 0 | a;
											})(0 | G(0 | c[e >> 2], 0 | g, 0 | h, 0 | i))
												? (c[i >> 2] = -1)
												: 0 | c[i >> 2]))
								) {
									b = 6;
									break;
								}
								if ((0 | b) < 0) {
									b = 8;
									break;
								}
								(p =
									(b -
										((m = (p = 0 | c[(g + 4) >> 2]) >>> 0 < b >>> 0) ? p : 0)) |
									0),
									(c[(n = m ? (g + 8) | 0 : g) >> 2] = (0 | c[n >> 2]) + p),
									(c[(o = (n + 4) | 0) >> 2] = (0 | c[o >> 2]) - p),
									(g = n),
									(h = (h + ((m << 31) >> 31)) | 0),
									(f = (f - b) | 0);
							}
							return (
								6 == (0 | b)
									? ((p = 0 | c[(a + 44) >> 2]),
									  (c[(a + 16) >> 2] = p + (0 | c[(a + 48) >> 2])),
									  (c[j >> 2] = p),
									  (c[k >> 2] = p))
									: 8 == (0 | b) &&
									  ((c[(a + 16) >> 2] = 0),
									  (c[j >> 2] = 0),
									  (c[k >> 2] = 0),
									  (c[a >> 2] = 32 | c[a >> 2]),
									  (d = 2 == (0 | h) ? 0 : (d - (0 | c[(g + 4) >> 2])) | 0)),
								(S = l),
								0 | d
							);
						},
						function (a, b, d) {
							(b |= 0), (d |= 0);
							var e = 0,
								f = 0;
							return (
								qc(
									0 | (f = 0 | c[(e = ((a |= 0) + 20) | 0) >> 2]),
									0 | b,
									0 |
										(a =
											d >>> 0 < (a = ((0 | c[(a + 16) >> 2]) - f) | 0) >>> 0
												? d
												: a)
								),
								(c[e >> 2] = (0 | c[e >> 2]) + a),
								0 | d
							);
						}
					],
					Y = [
						Gc,
						function (a, b, c, d) {
							return (
								0 | C(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0), 0 | (d |= 0))
							);
						},
						function (a, b, c, d) {
							return y(0), 0;
						},
						Gc
					],
					Z = [
						function (a) {
							x(3);
						},
						function (a) {
							D(0, 0 | (a |= 0));
						}
					],
					_ = [
						function (a, b, c) {
							x(4);
						},
						function (a, b, c) {
							E(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0));
						},
						function (a, b, d) {
							(b |= 0), (d |= 0);
							var j,
								e = 0,
								g = 0 | c[((a |= 0) + 24) >> 2],
								h = 0 | c[(d + 136) >> 2],
								i = 0 | c[(d + 140) >> 2];
							return -1 == (0 | (a = 0 | c[(e = (a + 4) | 0) >> 2]))
								? ((c[(h + (b << 2)) >> 2] = c[(16 + g) >> 2]),
								  void (f[(i + (b << 2)) >> 2] = 1))
								: ((j = 0 | c[(d + 4) >> 2]),
								  (d = 0 | c[(20 + g) >> 2]),
								  $[3 & c[(j + (a << 5) + 20) >> 2]](
										0 | c[(j + (a << 5) + 24) >> 2],
										d,
										d,
										0 | c[(12 + g) >> 2]
								  ),
								  (d = 0 | c[e >> 2]),
								  (f[(h + (b << 2)) >> 2] =
										+f[(16 + g) >> 2] * +f[(h + (d << 2)) >> 2]),
								  void (c[(i + (b << 2)) >> 2] = c[(i + (d << 2)) >> 2]));
						},
						function (a, b, d) {
							(b |= 0), (d |= 0);
							var i,
								j,
								m,
								n,
								o,
								p,
								q,
								r,
								t,
								u,
								v,
								w,
								x,
								y,
								z,
								A,
								B,
								C,
								e = 0,
								g = 0,
								h = 0,
								k = 0,
								l = 0,
								s = 0,
								D = 0,
								E = S;
							if (
								((S = (S + 48) | 0),
								(x = (E + 8) | 0),
								(v = (E + 40) | 0),
								(u = (E + 32) | 0),
								(t = ((w = E) + 24) | 0),
								(C = (E + 16) | 0),
								(z = 0 | c[((a |= 0) + 24) >> 2]),
								(A = 0 | c[(d + 136) >> 2]),
								(B = 0 | c[(d + 140) >> 2]),
								-1 == (0 | (a = 0 | c[(y = (a + 4) | 0) >> 2])))
							)
								return (
									(c[(A + (b << 2)) >> 2] = c[(4 + z) >> 2]),
									(c[(B + (b << 2)) >> 2] = c[(8 + z) >> 2]),
									void (S = E)
								);
							for (
								n = 0 | c[(d + 4) >> 2],
									m = 0 | c[(o = (12 + z) | 0) >> 2],
									c[C >> 2] = m,
									r = (4 + C) | 0,
									q = 0 | c[(p = (16 + z) | 0) >> 2],
									c[r >> 2] = q,
									s =
										1 == (0 | c[(n + (a << 5) + 8) >> 2])
											? -10
											: -0.10000000149011612,
									c[v >> 2] = m,
									c[(m = (4 + v) | 0) >> 2] = q,
									q = (n + (a << 5) + 20) | 0,
									n = (n + (a << 5) + 24) | 0,
									$[3 & c[q >> 2]](0 | c[n >> 2], v, u, 1),
									j = (4 + t) | 0,
									a = (4 + u) | 0,
									d = (w + 4) | 0,
									k = 9,
									l = 1;
								(h = 0 * l),
									(f[t >> 2] = h + +f[v >> 2]),
									(i = s * l),
									(f[j >> 2] = i + +f[m >> 2]),
									$[3 & c[q >> 2]](0 | c[n >> 2], t, w, 1),
									(g = +f[w >> 2] - +f[u >> 2]),
									(f[w >> 2] = g),
									(e = +f[d >> 2] - +f[a >> 2]),
									!((0 != g) | (0 != (f[d >> 2] = e)));

							) {
								if (
									((f[t >> 2] = +f[v >> 2] - h),
									(f[j >> 2] = +f[m >> 2] - i),
									$[3 & c[q >> 2]](0 | c[n >> 2], t, w, 1),
									(e = +f[w >> 2] - +f[u >> 2]),
									(f[w >> 2] = e),
									(h = +f[d >> 2] - +f[a >> 2]),
									(0 != e) | (0 != (f[d >> 2] = h)))
								) {
									D = 6;
									break;
								}
								if (!k) {
									D = 8;
									break;
								}
								(k = (k + -1) | 0), (l *= 0.10000000149011612);
							}
							6 == (0 | D)
								? ((g = -e), (e = -h))
								: 8 == (0 | D) && (ea(0, 2207, x), (e = g = 0)),
								(s = (180 * +Xa(0, s, g, e)) / 3.1415927410125732),
								$[3 & c[q >> 2]](0 | c[n >> 2], C, C, 1),
								(c[o >> 2] = c[C >> 2]),
								(c[p >> 2] = c[r >> 2]),
								(f[(C = (20 + z) | 0) >> 2] = +f[C >> 2] - s),
								(C = 0 | c[y >> 2]),
								(f[(A + (b << 2)) >> 2] =
									+f[(4 + z) >> 2] * +f[(A + (C << 2)) >> 2]),
								(s = +f[(D = (8 + z) | 0) >> 2] * +f[(B + (C << 2)) >> 2]),
								(f[(B + (b << 2)) >> 2] = s),
								(f[D >> 2] = s),
								(S = E);
						}
					],
					$ = [
						function (a, b, c, d) {
							x(5);
						},
						function (a, b, c, d) {
							F(0, 0 | (a |= 0), 0 | (b |= 0), 0 | (c |= 0), 0 | (d |= 0));
						},
						function (a, b, d, e) {
							(b |= 0), (d |= 0), (e |= 0);
							var B,
								F,
								G,
								H,
								I,
								J,
								K,
								L,
								N,
								O,
								P,
								Q,
								R,
								T,
								U,
								V,
								W,
								X,
								Y,
								$,
								ca,
								da,
								aa,
								h = 0,
								i = 0,
								j = 0,
								k = 0,
								l = 0,
								m = 0,
								n = 0,
								o = 0,
								p = 0,
								q = 0,
								r = 0,
								s = 0,
								t = 0,
								u = 0,
								w = 0,
								x = 0,
								y = 0,
								z = 0,
								A = 0,
								C = 0,
								D = 0,
								E = 0,
								M = 0,
								_ = 0,
								Z = S;
							if (
								((S = (S + 32) | 0),
								(Y = Z),
								(R = 0 | c[((a |= 0) + 20) >> 2]),
								(T = 0 | c[(a + 4) >> 2]),
								(U = 0 | c[a >> 2]),
								(V = (1 + T) | 0),
								(0 | e) <= 0)
							)
								S = Z;
							else {
								(W = +(0 | T)),
									(X = +(0 | U)),
									(Q = 0 == (0 | c[(a + 8) >> 2])),
									(F = (R + (T << 3)) | 0),
									(G = (R + ((N = 0 | v(U, V)) << 3)) | 0),
									(H = (R + ((L = (N + T) | 0) << 3)) | 0),
									(I = (4 + R) | 0),
									(J = (R + (T << 3) + 4) | 0),
									(K = (R + (N << 3) + 4) | 0),
									(L = (R + (L << 3) + 4) | 0),
									(P = (T - 1) | 0),
									(O = (U - 1) | 0),
									(t =
										u =
										w =
										x =
										j =
										k =
										s =
										r =
										q =
										p =
										E =
										D =
										o =
										n =
										m =
										l =
										M =
										A =
											0);
								do {
									(y = (B = +f[(b + (M << 3)) >> 2]) * W),
										(C = (z = +f[(b + (M << 3) + 4) >> 2]) * X),
										(h = !(1 <= B)),
										(i = !(1 <= z));
									do {
										if (i & h & !(B < 0) & !(z < 0)) {
											if (
												((h = ~~y),
												(a = ((0 | v(V, (i = ~~C))) + h) | 0),
												(k = y - (0 | h)),
												(j = C - (0 | i)),
												!Q)
											) {
												(z = 1 - k),
													(y = 1 - j),
													(_ = (a + 1) | 0),
													(i = ((h = (a + V) | 0) + 1) | 0),
													(f[(d + (M << 3)) >> 2] =
														y * (z * +f[(R + (a << 3)) >> 2]) +
														y * (k * +f[(R + (_ << 3)) >> 2]) +
														j * (z * +f[(R + (h << 3)) >> 2]) +
														j * (k * +f[(R + (i << 3)) >> 2])),
													(z =
														y * (z * +f[(R + (a << 3) + 4) >> 2]) +
														y * (k * +f[(R + (_ << 3) + 4) >> 2]) +
														j * (z * +f[(R + (h << 3) + 4) >> 2])),
													(y = j * (k * +f[(R + (i << 3) + 4) >> 2]));
												break;
											}
											if (k + j <= 1) {
												(z = 1 - k - j),
													(i = (a + 1) | 0),
													(_ = (a + V) | 0),
													(f[(d + (M << 3)) >> 2] =
														z * +f[(R + (a << 3)) >> 2] +
														k * +f[(R + (i << 3)) >> 2] +
														j * +f[(R + (_ << 3)) >> 2]),
													(z =
														z * +f[(R + (a << 3) + 4) >> 2] +
														k * +f[(R + (i << 3) + 4) >> 2]),
													(y = j * +f[(R + (_ << 3) + 4) >> 2]);
												break;
											}
											(h = ((i = (a + V) | 0) + 1) | 0),
												(C = k + -1 + j),
												(z = 1 - k),
												(_ = (a + 1) | 0),
												(y = 1 - j),
												(f[(d + (M << 3)) >> 2] =
													C * +f[(R + (h << 3)) >> 2] +
													z * +f[(R + (i << 3)) >> 2] +
													y * +f[(R + (_ << 3)) >> 2]),
												(z =
													C * +f[(R + (h << 3) + 4) >> 2] +
													z * +f[(R + (i << 3) + 4) >> 2]),
												(y *= +f[(R + (_ << 3) + 4) >> 2]);
											break;
										}
										if (
											(A ||
												((aa = +f[R >> 2]),
												(da = +f[F >> 2]),
												(ca = +f[G >> 2]),
												(D = +f[H >> 2]),
												($ = +f[I >> 2]),
												(t = (w = +f[J >> 2]) - (x = +f[K >> 2])),
												(A = 1),
												(D = 0.25 * (aa + da + ca + D) - 0.5 * (aa = D - aa)),
												(E =
													0.25 * ($ + w + x + (E = +f[L >> 2])) -
													0.5 * ($ = E - $)),
												(x = 0.5 * ((u = da - ca) + aa)),
												(w = 0.5 * (t + $)),
												(u = 0.5 * (aa - u)),
												(t = 0.5 * ($ - t))),
											!((z < 3) & (-2 < B) & (B < 3) & (-2 < z)))
										) {
											(f[(d + (M << 3)) >> 2] = z * u + (B * x + D)),
												(z *= t),
												(y = B * w + E);
											break;
										}
										do {
											if (B <= 0) {
												if (z <= 0) {
													(l = D - (n = 2 * u)),
														(m = E - (o = 2 * t)),
														(n = (r = D - 2 * x) - n),
														(o = (s = E - 2 * w) - o),
														(p = +f[R >> 2]),
														(q = +f[I >> 2]),
														(k = 0.5 * (2 + B)),
														(j = 0.5 * (z + 2));
													break;
												}
												if (i) {
													(o =
														(j = +(
															0 | (i = (0 | U) == (0 | (i = ~~C)) ? O : i)
														)) / X),
														(k = (0 | (_ = (i + 1) | 0)) / X),
														(i = 0 | v(i, V)),
														(_ = 0 | v(_, V)),
														(r = D - 2 * x),
														(s = E - 2 * w),
														(l = +f[(R + (i << 3)) >> 2]),
														(m = +f[(R + (i << 3) + 4) >> 2]),
														(n = o * u + r),
														(o = o * t + s),
														(p = +f[(R + (_ << 3)) >> 2]),
														(q = +f[(R + (_ << 3) + 4) >> 2]),
														(r = k * u + r),
														(s = k * t + s),
														(k = 0.5 * (2 + B)),
														(j = C - j);
													break;
												}
												(r = D - 2 * x),
													(s = E - 2 * w),
													(j = 3 * u),
													(k = 3 * t),
													(l = +f[G >> 2]),
													(m = +f[K >> 2]),
													(n = u + r),
													(o = t + s),
													(p = j + D),
													(q = k + E),
													(r = j + r),
													(s = k + s),
													(k = 0.5 * (2 + B)),
													(j = 0.5 * (z + -1));
												break;
											}
											if (((a = z <= 0), h)) {
												if (a) {
													(l =
														(m =
															(0 |
																(i =
																	((_ = (0 | T) == (0 | (_ = ~~y)) ? P : _) +
																		1) |
																	0)) /
															W) *
															x +
														D -
														(n = 2 * u)),
														(m = m * w + E - (o = 2 * t)),
														(n = (p = (k = +(0 | _)) / W) * x + D - n),
														(o = p * w + E - o),
														(p = +f[(R + (i << 3)) >> 2]),
														(q = +f[(R + (i << 3) + 4) >> 2]),
														(r = +f[(R + (_ << 3)) >> 2]),
														(s = +f[(R + (_ << 3) + 4) >> 2]),
														(k = y - k),
														(j = 0.5 * (z + 2));
													break;
												}
												if (i) {
													(c[Y >> 2] = M),
														(g[(Y + 8) >> 3] = B),
														(g[(Y + 16) >> 3] = z),
														ea(0, 2135, Y);
													break;
												}
												(s =
													(k = +(
														0 | (_ = (0 | T) == (0 | (_ = ~~y)) ? P : _)
													)) / W),
													(q = (0 | (i = (_ + 1) | 0)) / W),
													(_ = (_ + N) | 0),
													(r = 3 * u),
													(j = 3 * t),
													(l = +f[(R + ((i = (i + N) | 0) << 3)) >> 2]),
													(m = +f[(R + (i << 3) + 4) >> 2]),
													(n = +f[(R + (_ << 3)) >> 2]),
													(o = +f[(R + (_ << 3) + 4) >> 2]),
													(p = r + (q * x + D)),
													(q = j + (q * w + E)),
													(r += s * x + D),
													(s = j + (s * w + E)),
													(k = y - k),
													(j = 0.5 * (z + -1));
												break;
											}
											if (a) {
												(l = (p = 3 * x + D) - (n = 2 * u)),
													(m = (q = 3 * w + E) - (o = 2 * t)),
													(n = x + D - n),
													(o = w + E - o),
													(r = +f[F >> 2]),
													(s = +f[J >> 2]),
													(k = 0.5 * (B - 1)),
													(j = 0.5 * (z + 2));
												break;
											}
											if (i) {
												(m =
													(j = +(
														0 | (i = (0 | U) == (0 | (i = ~~C)) ? O : i)
													)) / X),
													(r = (0 | (_ = (i + 1) | 0)) / X),
													(i = ((0 | v(i, V)) + T) | 0),
													(_ = ((0 | v(_, V)) + T) | 0),
													(l = m * u + (p = 3 * x + D)),
													(m = m * t + (q = 3 * w + E)),
													(n = +f[(R + (i << 3)) >> 2]),
													(o = +f[(R + (i << 3) + 4) >> 2]),
													(p = r * u + p),
													(q = r * t + q),
													(r = +f[(R + (_ << 3)) >> 2]),
													(s = +f[(R + (_ << 3) + 4) >> 2]),
													(k = 0.5 * (B - 1)),
													(j = C - j);
												break;
											}
											(r = 3 * u),
												(s = 3 * t),
												(l = u + (p = 3 * x + D)),
												(m = t + (q = 3 * w + E)),
												(n = +f[H >> 2]),
												(o = +f[L >> 2]),
												(p = r + p),
												(q = s + q),
												(r += x + D),
												(s += w + E),
												(k = 0.5 * (B - 1)),
												(j = 0.5 * (z + -1));
											break;
										} while (0);
										if (k + j <= 1) {
											(f[(d + (M << 3)) >> 2] = n + (l - n) * k + (r - n) * j),
												(z = o + (m - o) * k),
												(y = (s - o) * j);
											break;
										}
										(z = 1 - k),
											(y = 1 - j),
											(f[(d + (M << 3)) >> 2] = p + (r - p) * z + (l - p) * y),
											(z = q + (s - q) * z),
											(y *= m - q);
										break;
									} while (0);
									(f[(d + (M << 3) + 4) >> 2] = z + y), (M = (M + 1) | 0);
								} while ((0 | M) != (0 | e));
								S = Z;
							}
						},
						function (a, b, d, e) {
							(b |= 0), (d |= 0), (e |= 0);
							var g,
								h,
								l,
								m,
								n,
								i = 0,
								j = 0,
								k = 0,
								i =
									(3.1415927410125732 *
										(+f[(a |= 0) >> 2] + +f[(a + 20) >> 2])) /
									180,
								j = +t(+i);
							if (
								((i = +s(+i)),
								(h = +f[(a + 8) >> 2]),
								(l = (g = 0 == (0 | c[(a + 24) >> 2]) ? 1 : -1) * (i *= h)),
								(h = (j *= h) * (k = 0 == (0 | c[(a + 28) >> 2]) ? 1 : -1)),
								(j *= g),
								(k *= i),
								(i = +f[(a + 12) >> 2]),
								(g = +f[(a + 16) >> 2]),
								!((0 | e) <= 0))
							)
								for (
									a = 0;
									(n = +f[(b + (a << 3)) >> 2]),
										(m = +f[(b + (a << 3) + 4) >> 2]),
										(f[(d + (a << 3)) >> 2] = l * n - h * m + i),
										(f[(d + (a << 3) + 4) >> 2] = j * n + k * m + g),
										(0 | (a = (a + 1) | 0)) != (0 | e);

								);
						}
					];
				return {
					___errno_location: function () {
						return 3444;
					},
					___muldi3: hc,
					___udivdi3: mc,
					_bitshift64Lshr: nc,
					_bitshift64Shl: oc,
					_csmFree: function (a) {
						bc((a |= 0));
					},
					_csmGetDrawableConstantFlags: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(872 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1722),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableCount: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 200) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1684),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  0 | (b = -1))
						);
					},
					_csmGetDrawableDrawOrders: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 268) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1806),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableDynamicFlags: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 260) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1750),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableIds: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(820 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1704),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableIndexCounts: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(888 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 2008),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableIndices: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(828 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 2034),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableMaskCounts: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(896 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1882),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableMasks: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(832 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1907),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableOpacities: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 276) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1858),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableRenderOrders: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 264) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1831),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableTextureIndices: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(868 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1777),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableVertexCounts: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(876 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1927),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableVertexPositions: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 272) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1954),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetDrawableVertexUvs: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(824 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1984),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetLatestMocVersion: function () {
						return 3;
					},
					_csmGetMocVersion: function (a, b) {
						b |= 0;
						var d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((a = 0 | ka(a)), (S = d), 0 | a)
								: ((c[b >> 2] = 1133),
								  (c[(b + 4) >> 2] = 1150),
								  ea(0, 1116, b),
								  (S = d),
								  (a = 0) | a)
						);
					},
					_csmGetParameterCount: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 292) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1457),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  0 | (b = -1))
						);
					},
					_csmGetParameterDefaultValues: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(916 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1555),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetParameterIds: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(900 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1478),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetParameterKeyCounts: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 384) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 2085),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetParameterKeyValues: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 388) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 2110),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetParameterMaximumValues: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(908 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1526),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetParameterMinimumValues: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(912 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1497),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetParameterValues: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 300) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1584),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetPartCount: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 4) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1606),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  0 | (b = -1))
						);
					},
					_csmGetPartIds: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(712 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1622),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetPartOpacities: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(a + 52) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1636),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetPartParentPartIndices: function (a) {
						var b = 0,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? ((b = 0 | c[(740 + (0 | c[a >> 2])) >> 2]), (S = d), 0 | b)
								: ((c[b >> 2] = 1656),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b),
								  (S = d),
								  (b = 0) | b)
						);
					},
					_csmGetSizeofModel: sa,
					_csmGetVersion: function () {
						return 67174400;
					},
					_csmInitializeModelInPlace: ta,
					_csmMalloc: function (a) {
						return 0 | ac((a |= 0));
					},
					_csmMallocMoc: function (a) {
						var b,
							d = S;
						return (
							(S = (S + 16) | 0),
							ec((b = d), 64, (a |= 0)),
							(S = d),
							0 | c[b >> 2]
						);
					},
					_csmMallocModelAndInitialize: function (d) {
						var b = 0,
							e = 0,
							f = S;
						return (
							(S = (S + 16) | 0),
							(b = f),
							0 != (0 | (d |= 0)) && 0 == (0 | ec(b, 16, (e = 0 | sa(d))))
								? (b = 0 | ta(d, (d = 0 | c[b >> 2]), e)) || (bc(d), (b = 0))
								: (b = 0),
							(S = f),
							0 | b
						);
					},
					_csmReadCanvasInfo: function (a, b, d, e) {
						(b |= 0), (d |= 0), (e |= 0);
						var f,
							g,
							h,
							i = 0,
							j = S;
						return (
							(S = (S + 32) | 0),
							(g = (j + 24) | 0),
							(i = (j + 16) | 0),
							(h = (j + 8) | 0),
							(f = j),
							(a |= 0)
								? b
									? d
										? e
											? ((i = 0 | c[(708 + (0 | c[a >> 2])) >> 2]),
											  (c[b >> 2] = c[(i + 12) >> 2]),
											  (c[(b + 4) >> 2] = c[(i + 16) >> 2]),
											  (c[d >> 2] = c[(i + 4) >> 2]),
											  (c[(d + 4) >> 2] = c[(i + 8) >> 2]),
											  (c[e >> 2] = c[i >> 2]))
											: ((c[g >> 2] = 1240),
											  (c[(4 + g) >> 2] = 1334),
											  ea(0, 1116, g))
										: ((c[i >> 2] = 1240),
										  (c[(i + 4) >> 2] = 1305),
										  ea(0, 1116, i))
									: ((c[h >> 2] = 1240),
									  (c[(4 + h) >> 2] = 1278),
									  ea(0, 1116, h))
								: ((c[f >> 2] = 1240),
								  (c[(f + 4) >> 2] = 1258),
								  ea(0, 1116, f)),
							void (S = j)
						);
					},
					_csmResetDrawableDynamicFlags: function (a) {
						var b,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? (c[(a + 256) >> 2] = 1)
								: ((c[b >> 2] = 2056),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b)),
							void (S = d)
						);
					},
					_csmReviveMocInPlace: function (a, b) {
						b |= 0;
						var e,
							d = 0,
							f = 0,
							g = S;
						return (
							(S = (S + 32) | 0),
							(f = (g + 16) | 0),
							(e = (g + 8) | 0),
							(d = g),
							(a |= 0)
								? ((((d = a) + 63) & -64) | 0) != (0 | d)
									? ((c[e >> 2] = 1169),
									  (c[(4 + e) >> 2] = 1189),
									  ea(0, 1116, e),
									  (S = g),
									  (f = 0) | f)
									: 0 | b && (((b + 63) & -64) | 0) == (0 | b)
									? ((f = 0 | ja(a)), (S = g), 0 | f)
									: ((c[f >> 2] = 1169),
									  (c[(f + 4) >> 2] = 1221),
									  ea(0, 1116, f),
									  (S = g),
									  (f = 0) | f)
								: ((c[d >> 2] = 1169),
								  (c[(d + 4) >> 2] = 1150),
								  ea(0, 1116, d),
								  (S = g),
								  (f = 0) | f)
						);
					},
					_csmSetLogFunction: function (a) {
						(a |= 0), (c[860] = a);
					},
					_csmUpdateModel: function (a) {
						var b,
							d = S;
						return (
							(S = (S + 16) | 0),
							(b = d),
							(a |= 0)
								? kb(a)
								: ((c[b >> 2] = 1442),
								  (c[(b + 4) >> 2] = 1258),
								  ea(0, 1116, b)),
							void (S = d)
						);
					},
					_emscripten_get_sbrk_ptr: pc,
					_emscripten_replace_memory: function (newBuffer) {
						return (
							(a = new Int8Array(newBuffer)),
							(d = new Uint8Array(newBuffer)),
							(b = new Int16Array(newBuffer)),
							(e = new Uint16Array(newBuffer)),
							(c = new Int32Array(newBuffer)),
							(f = new Float32Array(newBuffer)),
							(g = new Float64Array(newBuffer)),
							!0
						);
					},
					_free: bc,
					_i64Add: ic,
					_i64Subtract: jc,
					_malloc: ac,
					_memcpy: qc,
					_memset: rc,
					dynCall_ii: function (a, b) {
						return (b |= 0), 0 | W[3 & (a |= 0)](0 | b);
					},
					dynCall_iiii: function (a, b, c, d) {
						return (
							(b |= 0),
							(c |= 0),
							(d |= 0),
							0 | X[3 & (a |= 0)](0 | b, 0 | c, 0 | d)
						);
					},
					dynCall_iiiii: function (a, b, c, d, e) {
						return (
							(b |= 0),
							(c |= 0),
							(d |= 0),
							(e |= 0),
							0 | Y[3 & (a |= 0)](0 | b, 0 | c, 0 | d, 0 | e)
						);
					},
					dynCall_vi: function (a, b) {
						(b |= 0), Z[1 & (a |= 0)](0 | b);
					},
					dynCall_viii: function (a, b, c, d) {
						(b |= 0), (c |= 0), (d |= 0), _[3 & (a |= 0)](0 | b, 0 | c, 0 | d);
					},
					dynCall_viiii: function (a, b, c, d, e) {
						(b |= 0),
							(c |= 0),
							(d |= 0),
							(e |= 0),
							$[3 & (a |= 0)](0 | b, 0 | c, 0 | d, 0 | e);
					},
					establishStackSpace: function (a, b) {
						(S = a |= 0), (b |= 0);
					},
					stackAlloc: function (a) {
						var b = S;
						return (S = ((S = (S + (a |= 0)) | 0) + 15) & -16), 0 | b;
					},
					stackRestore: function (a) {
						S = a |= 0;
					},
					stackSave: function () {
						return 0 | S;
					}
				};
			})(
				{
					Math: Math,
					Int8Array: Int8Array,
					Int16Array: Int16Array,
					Int32Array: Int32Array,
					Uint8Array: Uint8Array,
					Uint16Array: Uint16Array,
					Float32Array: Float32Array,
					Float64Array: Float64Array
				},
				{
					a: C,
					b: function (a) {
						J = a;
					},
					c: function () {
						return J;
					},
					d: function (a, c) {
						return I[a](c);
					},
					e: function (a, c, d, f) {
						return I[a](c, d, f);
					},
					f: function (a, c, d, f, g) {
						return I[a](c, d, f, g);
					},
					g: function (a, c) {
						I[a](c);
					},
					h: function (a, c, d, f) {
						I[a](c, d, f);
					},
					i: function (a, c, d, f, g) {
						I[a](c, d, f, g);
					},
					j: function () {
						return pa.apply(null, arguments);
					},
					k: qa,
					l: function (a, c, d) {
						M.set(M.subarray(c, c + d), a);
					},
					m: function (a) {
						if (2130706432 < a) return !1;
						for (var c = Math.max(qa(), 16777216); c < a; )
							c =
								c <= 536870912
									? ea(2 * c)
									: Math.min(ea((3 * c + 2147483648) / 4), 2130706432);
						return !!ra(c);
					},
					n: pa,
					o: function () {
						C("OOM");
					},
					p: function (a) {
						return a;
					},
					q: na,
					r: ra,
					s: function () {
						var a = b._fflush;
						a && a(0), V[1].length && W(1, 10), V[2].length && W(2, 10);
					},
					t: oa,
					u: function () {
						var a = oa();
						return (
							b.extraStackTrace && (a += "\n" + b.extraStackTrace()), na(a)
						);
					},
					v: 4224
				},
				buffer
			);
			(b.___errno_location = Aa.___errno_location),
				(b.___muldi3 = Aa.___muldi3),
				(b.___udivdi3 = Aa.___udivdi3),
				(b._bitshift64Lshr = Aa._bitshift64Lshr),
				(b._bitshift64Shl = Aa._bitshift64Shl),
				(b._csmFree = Aa._csmFree),
				(b._csmGetDrawableConstantFlags = Aa._csmGetDrawableConstantFlags),
				(b._csmGetDrawableCount = Aa._csmGetDrawableCount),
				(b._csmGetDrawableDrawOrders = Aa._csmGetDrawableDrawOrders),
				(b._csmGetDrawableDynamicFlags = Aa._csmGetDrawableDynamicFlags),
				(b._csmGetDrawableIds = Aa._csmGetDrawableIds),
				(b._csmGetDrawableIndexCounts = Aa._csmGetDrawableIndexCounts),
				(b._csmGetDrawableIndices = Aa._csmGetDrawableIndices),
				(b._csmGetDrawableMaskCounts = Aa._csmGetDrawableMaskCounts),
				(b._csmGetDrawableMasks = Aa._csmGetDrawableMasks),
				(b._csmGetDrawableOpacities = Aa._csmGetDrawableOpacities),
				(b._csmGetDrawableRenderOrders = Aa._csmGetDrawableRenderOrders),
				(b._csmGetDrawableTextureIndices = Aa._csmGetDrawableTextureIndices),
				(b._csmGetDrawableVertexCounts = Aa._csmGetDrawableVertexCounts),
				(b._csmGetDrawableVertexPositions = Aa._csmGetDrawableVertexPositions),
				(b._csmGetDrawableVertexUvs = Aa._csmGetDrawableVertexUvs),
				(b._csmGetLatestMocVersion = Aa._csmGetLatestMocVersion),
				(b._csmGetMocVersion = Aa._csmGetMocVersion),
				(b._csmGetParameterCount = Aa._csmGetParameterCount),
				(b._csmGetParameterDefaultValues = Aa._csmGetParameterDefaultValues),
				(b._csmGetParameterIds = Aa._csmGetParameterIds),
				(b._csmGetParameterKeyCounts = Aa._csmGetParameterKeyCounts),
				(b._csmGetParameterKeyValues = Aa._csmGetParameterKeyValues),
				(b._csmGetParameterMaximumValues = Aa._csmGetParameterMaximumValues),
				(b._csmGetParameterMinimumValues = Aa._csmGetParameterMinimumValues),
				(b._csmGetParameterValues = Aa._csmGetParameterValues),
				(b._csmGetPartCount = Aa._csmGetPartCount),
				(b._csmGetPartIds = Aa._csmGetPartIds),
				(b._csmGetPartOpacities = Aa._csmGetPartOpacities),
				(b._csmGetPartParentPartIndices = Aa._csmGetPartParentPartIndices),
				(b._csmGetSizeofModel = Aa._csmGetSizeofModel),
				(b._csmGetVersion = Aa._csmGetVersion),
				(b._csmInitializeModelInPlace = Aa._csmInitializeModelInPlace),
				(b._csmMalloc = Aa._csmMalloc),
				(b._csmMallocMoc = Aa._csmMallocMoc),
				(b._csmMallocModelAndInitialize = Aa._csmMallocModelAndInitialize),
				(b._csmReadCanvasInfo = Aa._csmReadCanvasInfo),
				(b._csmResetDrawableDynamicFlags = Aa._csmResetDrawableDynamicFlags),
				(b._csmReviveMocInPlace = Aa._csmReviveMocInPlace),
				(b._csmSetLogFunction = Aa._csmSetLogFunction),
				(b._csmUpdateModel = Aa._csmUpdateModel),
				(b._emscripten_get_sbrk_ptr = Aa._emscripten_get_sbrk_ptr);
			var sa = (b._emscripten_replace_memory = Aa._emscripten_replace_memory);
			(b._free = Aa._free),
				(b._i64Add = Aa._i64Add),
				(b._i64Subtract = Aa._i64Subtract),
				(b._malloc = Aa._malloc),
				(b._memcpy = Aa._memcpy),
				(b._memset = Aa._memset),
				(b.establishStackSpace = Aa.establishStackSpace);
			var F,
				Ca,
				Ea,
				Y,
				xa = (b.stackAlloc = Aa.stackAlloc),
				ya = (b.stackRestore = Aa.stackRestore),
				za = (b.stackSave = Aa.stackSave);
			function Z() {
				function a() {
					if (!Y && ((Y = !0), !K)) {
						if (
							(P(ja),
							P(ka),
							b.onRuntimeInitialized && b.onRuntimeInitialized(),
							b.postRun)
						)
							for (
								"function" == typeof b.postRun && (b.postRun = [b.postRun]);
								b.postRun.length;

							) {
								var a = b.postRun.shift();
								la.unshift(a);
							}
						P(la);
					}
				}
				if (!(0 < Q)) {
					if (b.preRun)
						for (
							"function" == typeof b.preRun && (b.preRun = [b.preRun]);
							b.preRun.length;

						)
							!(function () {
								var a = b.preRun.shift();
								ia.unshift(a);
							})();
					P(ia),
						0 < Q ||
							(b.setStatus
								? (b.setStatus("Running..."),
								  setTimeout(function () {
										setTimeout(function () {
											b.setStatus("");
										}, 1),
											a();
								  }, 1))
								: a());
				}
			}
			if (
				((b.dynCall_ii = Aa.dynCall_ii),
				(b.dynCall_iiii = Aa.dynCall_iiii),
				(b.dynCall_iiiii = Aa.dynCall_iiiii),
				(b.dynCall_vi = Aa.dynCall_vi),
				(b.dynCall_viii = Aa.dynCall_viii),
				(b.dynCall_viiii = Aa.dynCall_viiii),
				(b.asm = Aa),
				(b.ccall = function (a, c, d, f) {
					var g = {
							string: function (a) {
								var c = 0;
								if (null != a && 0 !== a) {
									var d = 1 + (a.length << 2),
										f = (c = xa(d)),
										g = M;
									if (0 < d) {
										d = f + d - 1;
										for (var h = 0; h < a.length; ++h) {
											var l = a.charCodeAt(h);
											if (
												(55296 <= l &&
													l <= 57343 &&
													(l =
														(65536 + ((1023 & l) << 10)) |
														(1023 & a.charCodeAt(++h))),
												l <= 127)
											) {
												if (d <= f) break;
												g[f++] = l;
											} else {
												if (l <= 2047) {
													if (d <= f + 1) break;
													g[f++] = 192 | (l >> 6);
												} else {
													if (l <= 65535) {
														if (d <= f + 2) break;
														g[f++] = 224 | (l >> 12);
													} else {
														if (d <= f + 3) break;
														(g[f++] = 240 | (l >> 18)),
															(g[f++] = 128 | ((l >> 12) & 63));
													}
													g[f++] = 128 | ((l >> 6) & 63);
												}
												g[f++] = 128 | (63 & l);
											}
										}
										g[f] = 0;
									}
								}
								return c;
							},
							array: function (a) {
								var c = xa(a.length);
								return N.set(a, c), c;
							}
						},
						h = (function (a) {
							var c = b["_" + a];
							return (
								assert(
									c,
									"Cannot call unknown function " +
										a +
										", make sure it is exported"
								),
								c
							);
						})(a),
						p = [];
					if (((a = 0), f))
						for (var k = 0; k < f.length; k++) {
							var y = g[d[k]];
							y ? (0 === a && (a = za()), (p[k] = y(f[k]))) : (p[k] = f[k]);
						}
					return (
						(d = (function (a) {
							return "string" === c ? da(a) : "boolean" === c ? !!a : a;
						})((d = h.apply(null, p)))),
						0 !== a && ya(a),
						d
					);
				}),
				(b.UTF8ToString = da),
				(b.addFunction = function (a) {
					for (var c = 0; c < 1; c++) if (!I[c]) return (I[c] = a), 1 + c;
					throw "Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
				}),
				E &&
					((String.prototype.startsWith
						? E.startsWith(U)
						: 0 === E.indexOf(U)) ||
						((Aa = E), (E = b.locateFile ? b.locateFile(Aa, u) : u + Aa)),
					r || t
						? ((Ea = x(E)), M.set(Ea, 8))
						: (Q++,
						  b.monitorRunDependencies && b.monitorRunDependencies(Q),
						  (F = function (a) {
								a.byteLength && (a = new Uint8Array(a)),
									M.set(a, 8),
									b.memoryInitializerRequest &&
										delete b.memoryInitializerRequest.response,
									Q--,
									b.monitorRunDependencies && b.monitorRunDependencies(Q),
									0 == Q &&
										(null !== S && (clearInterval(S), (S = null)),
										T && ((a = T), (T = null), a()));
						  }),
						  (Ca = function () {
								w(function () {
									throw "could not load memory initializer " + E;
								});
						  }),
						  (Ea = B(E))
								? F(Ea.buffer)
								: b.memoryInitializerRequest
								? ((Ea = function () {
										var a = b.memoryInitializerRequest,
											c = a.response;
										if (200 !== a.status && 0 !== a.status) {
											if (!(c = B(b.memoryInitializerRequestURL)))
												return (
													console.warn(
														"a problem seems to have happened with Module.memoryInitializerRequest, status: " +
															a.status +
															", retrying " +
															E
													),
													void Ca()
												);
											c = c.buffer;
										}
										F(c);
								  }),
								  b.memoryInitializerRequest.response
										? setTimeout(Ea, 0)
										: b.memoryInitializerRequest.addEventListener("load", Ea))
								: Ca())),
				(b.then = function (a) {
					var c;
					return (
						Y
							? a(b)
							: ((c = b.onRuntimeInitialized),
							  (b.onRuntimeInitialized = function () {
									c && c(), a(b);
							  })),
						b
					);
				}),
				(T = function Fa() {
					Y || Z(), Y || (T = Fa);
				}),
				(b.run = Z),
				b.preInit)
			)
				for (
					"function" == typeof b.preInit && (b.preInit = [b.preInit]);
					0 < b.preInit.length;

				)
					b.preInit.pop()();
			return Z(), _em_module;
		};
	})();
	"object" == typeof exports && "object" == typeof module
		? (module.exports = _em_module)
		: "function" == typeof define && define.amd
		? define([], function () {
				return _em_module;
		  })
		: "object" == typeof exports && (exports._em_module = _em_module);
	var _em = _em_module();
})(Live2DCubismCore || (Live2DCubismCore = {}));
//# sourceMappingURL=live2dcubismcore.js.map
