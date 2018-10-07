const createEnumerableProperty = () => {};

const createNotEnumerableProperty = () => {return Symbol("property");};

const createProtoMagicObject = () => {
	const magicObject = function() {};
	magicObject.__proto__ = magicObject.prototype;
	return magicObject;
};

let count = 0;
const incrementor = () => {
	count++; 
	return incrementor;
};
incrementor.toString = () => {
	return count;
};

let countAsync = 1;
const asyncIncrementor = async () => {
	return await countAsync++; 
};

const createIncrementer = () => {
  function* inc() {
		for (let n = 1; n < 10; n++) {
			yield n;
		}
	};
	return inc();
};

const returnBackInSecond = (param) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(param);
		}, 1000);
	});
};

const getDeepPropertiesCount = (obj) => {
	let count = 0;
	(function getDeep(obj) {
		for (let key in obj) {
			getDeep(obj[key]);
			count++;
		}
	})(obj);
	return count;
};

const createSerializedObject = () => {
	return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => {
	return arr.sort();
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;